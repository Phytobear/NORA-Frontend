"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const patients = [
  {
    id: "P001",
    name: "Elizabeth Connor",
    age: 65,
    lastVisit: "2024-02-25",
    condition: "Stable",
    fallRisk: "High",
  },
  {
    id: "P002",
    name: "John Smith",
    age: 72,
    lastVisit: "2024-02-23",
    condition: "Improving",
    fallRisk: "Medium",
  },
  {
    id: "P003",
    name: "Mary Johnson",
    age: 68,
    lastVisit: "2024-02-20",
    condition: "Stable",
    fallRisk: "Low",
  },
  {
    id: "P004",
    name: "Robert Davis",
    age: 75,
    lastVisit: "2024-02-18",
    condition: "Needs Review",
    fallRisk: "High",
  },
  {
    id: "P005",
    name: "Patricia Brown",
    age: 70,
    lastVisit: "2024-02-15",
    condition: "Stable",
    fallRisk: "Medium",
  },
]

export function PatientRecords() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPatients = patients.filter((patient) => patient.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-4" role="region" aria-label="Patient Records Section">
      <div className="flex items-center gap-2 w-full md:w-auto">
        <Search className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
        <Input
          placeholder="Search patients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:max-w-sm"
          type="search"
          aria-label="Search patients"
          role="searchbox"
        />
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table aria-label="Patient Records">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Age</TableHead>
              <TableHead className="hidden md:table-cell">Last Visit</TableHead>
              <TableHead className="hidden lg:table-cell">Condition</TableHead>
              <TableHead>Risk</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow
                key={patient.id}
                className="cursor-pointer hover:bg-muted"
                role="row"
                aria-label={`Patient ${patient.name}`}
              >
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell className="hidden md:table-cell">{patient.age}</TableCell>
                <TableCell className="hidden md:table-cell">{patient.lastVisit}</TableCell>
                <TableCell className="hidden lg:table-cell">{patient.condition}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap
                      ${
                        patient.fallRisk === "High"
                          ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                          : patient.fallRisk === "Medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                            : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      }
                    `}
                    role="status"
                    aria-label={`Fall risk: ${patient.fallRisk}`}
                  >
                    {patient.fallRisk}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

