import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Calendar } from "lucide-react";
import { appointmentsTableColumns } from "../../appointments/_components/table-columns";
import { appointmentsTable } from "@/db/schema";

type AppointmentWithRelations = typeof appointmentsTable.$inferSelect & {
  patient: {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    sex: "male" | "female";
  };
  doctor: {
    id: string;
    name: string;
    specialty: string;
  };
};

interface TodayAppointmentsTableProps {
  todayAppointments: AppointmentWithRelations[];
}

const TodayAppointmentsTable = ({
  todayAppointments,
}: TodayAppointmentsTableProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Calendar className="text-muted-foreground" />
          <CardTitle>Agendamentos de hoje</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={appointmentsTableColumns}
          data={todayAppointments}
        />
      </CardContent>
    </Card>
  );
};

export default TodayAppointmentsTable;
