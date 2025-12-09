"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Attendee = {
  id: number;
  name: string;
  email: string;
  date: string;
  time: string;
  phone: string;
  socialHandle: string | null;
  reason: string;
  createdAt: string;
};

const AttendeesDashboard = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendees = async () => {
      const res = await fetch("/api/get-attendees");
      const data = await res.json();
      setAttendees(data.attendees);
      setLoading(false);
    };

    fetchAttendees();
  }, []);

  const totalAttendees = attendees.length;
  console.log("TOTAAAAAAAAAAAAAAL", totalAttendees);

  if (loading) return <div className="p-6 text-lg font-medium">Loading...</div>;

  return (
    <div className="px-6 py-20 font-poppins">
      <h1 className="flex flex-col items-center justify-center text-xl rounded-lg py-2 px-5 md:py-2 md:px-8 lg:py-3 lg:px-14">
        KALY&apos;S HOUSE ATTENDEES DASHBOARD
      </h1>

      <Table className="font-poppins">
        <TableHeader className="bg-neutral-800">
          <TableRow className="text-white">
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Date</TableHead>
            <TableHead className="text-white">Time</TableHead>
            <TableHead className="text-white">Phone</TableHead>
            <TableHead className="text-white">Social Handle</TableHead>
            <TableHead className="text-white">Reason</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {attendees.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.name}</TableCell>
              <TableCell>{a.email}</TableCell>
              <TableCell>{a.date}</TableCell>
              <TableCell>{a.time}</TableCell>
              <TableCell>{a.phone}</TableCell>
              <TableCell>{a.socialHandle || "—"}</TableCell>
              <TableCell>{a.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AttendeesDashboard;
