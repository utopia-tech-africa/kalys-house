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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Attendee = {
  id: number;
  name: string;
  email: string;
  date: string;
  time: string;
  phone: string;
  socialHandle: string | null;
  reason: string;
};

const AttendeesDashboard = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [filtered, setFiltered] = useState<Attendee[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchField, setSearchField] = useState<keyof Attendee>("name");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchAttendees = async () => {
      const res = await fetch("/api/get-attendees");
      const data = await res.json();
      setAttendees(data.attendees);
      setFiltered(data.attendees);
      setLoading(false);
    };
    fetchAttendees();
  }, []);

  const handleSearch = () => {
    if (!searchValue.trim()) {
      setFiltered(attendees);
      return;
    }

    const lowerValue = searchValue.toLowerCase();

    const filteredData = attendees.filter((a) => {
      const fieldValue = a[searchField];
      return fieldValue
        ? String(fieldValue).toLowerCase().includes(lowerValue)
        : false;
    });

    setFiltered(filteredData);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchField("name");
    setFiltered(attendees);
  };

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center p-10 text-lg font-medium">
        Loading attendees...
      </div>
    );

  return (
    <div className="px-4 md:px-6 py-24 font-poppins overflow-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
        <h1 className="text-2xl md:text-3xl text-primary-light font-semibold wrap-break-word">
          KALY&apos;S HOUSE ATTENDEES DASHBOARD
        </h1>
        <p className="text-gray-400 mt-1 md:mt-0">
          Total Attendees: {filtered.length}
        </p>
      </div>

      {/* Filter */}
      <div className="flex w-full md:w-[800px] lg:w-[1100px] flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder={`Search by ${searchField}`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 bg-transparent placeholder:text-neutral-700 border-gray-700 text-white"
        />

        <div className="w-full md:w-48">
          <Select
            value={searchField}
            onValueChange={(val) => setSearchField(val as keyof Attendee)}
          >
            <SelectTrigger className="bg-transparent p-6 text-neutral-700    border-gray-700 w-full">
              <SelectValue placeholder="Filter by..." />
            </SelectTrigger>
            <SelectContent className="backdrop-blur-3xl text-white cursor-pointer bg-black/30 p-4">
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="time">Time</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="socialHandle">Social Handle</SelectItem>
              <SelectItem value="reason">Reason</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <Button
            onClick={handleSearch}
            className="bg-primary-light hover:bg-red-600 text-white cursor-pointer flex-1 md:flex-none"
          >
            Search
          </Button>
          <Button
            onClick={handleClear}
            variant="outline"
            className="border-gray-700 cursor-pointer text-black uppercase text-base font-semibold flex-1 md:flex-none"
          >
            Clear
          </Button>
        </div>
      </div>

      {/* Table wrapper for responsiveness */}
      <div className="w-full overflow-auto">
        <Table className="font-poppins min-w-[900px]">
          <TableHeader className="backdrop-blur-3xl bg-neutral-500/35 text-white">
            <TableRow>
              <TableHead className="text-white text-base md:text-lg">
                #
              </TableHead>
              <TableHead className="text-white text-base md:text-lg">
                Name
              </TableHead>
              <TableHead className="text-white text-base md:text-lg">
                Email
              </TableHead>
              <TableHead className="text-white text-base md:text-lg">
                Date
              </TableHead>
              <TableHead className="text-white text-base md:text-lg">
                Time
              </TableHead>
              <TableHead className="text-white text-base md:text-lg">
                Phone
              </TableHead>
              <TableHead className="text-white text-base md:text-lg">
                Social Handle
              </TableHead>
              <TableHead className="text-white text-base md:text-lg">
                Reason
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filtered.map((a, idx) => (
              <TableRow key={a.id}>
                <TableCell className="p-3">{idx + 1}</TableCell>
                <TableCell className="p-3 ">{a.name}</TableCell>
                <TableCell className="p-3 ">{a.email}</TableCell>
                <TableCell className="p-3 ">{a.date}</TableCell>
                <TableCell className="p-3 ">{a.time}</TableCell>
                <TableCell className="p-3 ">{a.phone}</TableCell>
                <TableCell className="p-3 ">{a.socialHandle || "—"}</TableCell>
                <TableCell className="ml-0 p-3">{a.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AttendeesDashboard;
