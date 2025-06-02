import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, User } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  avatarImageUrl: string | null;
  speciality: string;
  appointments: number;
}

interface TopDoctorsProps {
  topDoctors: Doctor[];
}

export default function TopDoctors({ topDoctors }: TopDoctorsProps) {
  return (
    <Card className="mx-auto w-full">
      <CardHeader className="flex flex-row items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Stethoscope className="text-muted-foreground" />
          <CardTitle className="text-base">Médicos</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-0">
        {topDoctors.map((doctor) => (
          <div key={doctor.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                {doctor.avatarImageUrl ? (
                  <AvatarImage
                    src={doctor.avatarImageUrl || "/placeholder.svg"}
                    alt={doctor.name}
                  />
                ) : null}
                <AvatarFallback className="bg-gray-100 text-gray-400">
                  {doctor.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{doctor.name}</p>
                <p className="text-muted-foreground text-sm">
                  {doctor.speciality}
                </p>
              </div>
            </div>
            <div className="text-muted-foreground text-sm">
              {doctor.appointments} agend.
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
