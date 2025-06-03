import {
  BanknoteIcon,
  CalendarIcon,
  StethoscopeIcon,
  UsersIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  totalRevenue: number | null;
  totalAppointments: number;
  totalPatients: number;
  totalDoctors: number;
}

const StatsCard = ({
  totalRevenue,
  totalAppointments,
  totalPatients,
  totalDoctors,
}: StatsCardProps) => {
  const stats = [
    {
      title: "Faturamento",
      value: totalRevenue
        ? new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalRevenue / 100)
        : "R$ 0,00",
      icon: BanknoteIcon,
      description: "Total faturado no período",
    },
    {
      title: "Agendamentos",
      value: totalAppointments,
      icon: CalendarIcon,
      description: "Total de agendamentos no período",
    },
    {
      title: "Pacientes",
      value: totalPatients,
      icon: UsersIcon,
      description: "Total de pacientes cadastrados",
    },
    {
      title: "Médicos",
      value: totalDoctors,
      icon: StethoscopeIcon,
      description: "Total de médicos cadastrados",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="bg-primary/10 rounded-full p-2">
                <stat.icon className="text-primary size-4" />
              </div>
            </div>
            <p className="text-muted-foreground mt-2 text-xs">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCard;
