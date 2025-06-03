import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

export const POST = async (req: NextRequest) => {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error("Stripe secret key not found");
  }

  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    throw new Error("Stripe signature not found");
  }

  const text = await req.text();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-05-28.basil",
  });

  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET,
  );

  switch (event.type) {
    case "invoice.paid": {
      if (!event.data.object.id) {
        throw new Error("Subscription ID not found");
      }

      const { subscription_details, customer } = event.data.object
        .parent as unknown as {
        customer: string;
        subscription_details: {
          metadata: {
            userId: string;
          };
          subscription: string;
        };
      };

      if (!subscription_details.subscription) {
        throw new Error("Subscription not found");
      }

      const userId = subscription_details.metadata.userId;

      if (!userId) {
        throw new Error("User ID not found");
      }

      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId: subscription_details.subscription,
          stripeCustomerId: customer,
          plan: "base",
        })
        .where(eq(usersTable.id, userId));

      break;
    }
    case "customer.subscription.deleted": {
      if (!event.data.object.id) {
        throw new Error("Subscription ID not found");
      }

      const subscription = await stripe.subscriptions.retrieve(
        event.data.object.id,
      );

      if (!subscription) {
        throw new Error("Subscription not found");
      }

      const userId = subscription.metadata.userId;

      if (!userId) {
        throw new Error("User ID not found");
      }

      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId: null,
          stripeCustomerId: null,
          plan: null,
        })
        .where(eq(usersTable.id, userId));
    }
  }

  return NextResponse.json({
    received: true,
  });
};
