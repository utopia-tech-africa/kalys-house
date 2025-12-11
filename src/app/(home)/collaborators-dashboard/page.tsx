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

type Collaborator = {
  id: number;
  name: string;
  email: string;
  phone: string;
  purpose: string;
  more: string;
};

const CollaboratorsDashboard = () => {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [filtered, setFiltered] = useState<Collaborator[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchField, setSearchField] = useState<keyof Collaborator>("name");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchCollaborators = async () => {
      const res = await fetch("/api/get-collaborators");
      const data = await res.json();
      console.log("COLLABORATORS", data);
      setCollaborators(data.collaborators);
      setFiltered(data.collaborators);
      setLoading(false);
    };
    fetchCollaborators();
  }, []);

  const handleSearch = () => {
    if (!searchValue.trim()) {
      setFiltered(collaborators);
      return;
    }

    const lowerValue = searchValue.toLowerCase();

    const filteredData = collaborators.filter((c) => {
      const fieldValue = c[searchField];
      return fieldValue
        ? String(fieldValue).toLowerCase().includes(lowerValue)
        : false;
    });

    setFiltered(filteredData);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchField("name");
    setFiltered(collaborators);
  };

  if (loading)
    return (
      <div className="flex flex-col text-primary-light justify-center items-center p-40 text-lg font-medium">
        Loading collaborators...
      </div>
    );

  return (
    <div className="px-4 md:px-6 py-24 font-poppins overflow-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
        <h1 className="text-2xl md:text-3xl text-primary-light font-semibold wrap-break-word">
          KALY&apos;S HOUSE COLLABORATORS DASHBOARD
        </h1>
        <p className="text-gray-400 mt-1 md:mt-0">
          Total Requests: {filtered && filtered.length}
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
            onValueChange={(val) => setSearchField(val as keyof Collaborator)}
          >
            <SelectTrigger className="bg-transparent p-6 text-neutral-700    border-gray-700 w-full">
              <SelectValue placeholder="Filter by..." />
            </SelectTrigger>
            <SelectContent className="backdrop-blur-3xl text-white cursor-pointer bg-black/30 p-4">
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="purpose">Purpose</SelectItem>
              <SelectItem value="more">Details</SelectItem>
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
                Phone
              </TableHead>
              <TableHead className="text-white text-base md:text-lg">
                Purpose
              </TableHead>
              <TableHead className="text-white text-base md:text-lg">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filtered &&
              filtered.map((c, idx) => (
                <TableRow key={c.id}>
                  <TableCell className="p-3">{idx + 1}</TableCell>
                  <TableCell className="p-3 ">{c.name}</TableCell>
                  <TableCell className="p-3 ">{c.email}</TableCell>
                  <TableCell className="p-3 ">{c.phone}</TableCell>
                  <TableCell className="ml-0 p-3">{c.purpose}</TableCell>
                  <TableCell className="ml-0 p-3">{c.more}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CollaboratorsDashboard;
