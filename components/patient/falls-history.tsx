"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

// eample data
const falls = [
  {
    id: 1,
    date: "2024-02-24",
    time: "14:30",
    location: "Living Room",
    severity: "Severe",
  },
  {
    id: 2,
    date: "2024-02-23",
    time: "09:15",
    location: "Bathroom",
    severity: "Moderate",
  },
  {
    id: 3,
    date: "2024-02-20",
    time: "18:45",
    location: "Kitchen",
    severity: "Mild",
  },
]

export function FallsHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Severity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {falls.map((fall) => (
            <TableRow key={fall.id}>
              <TableCell>{fall.date}</TableCell>
              <TableCell>{fall.time}</TableCell>
              <TableCell>{fall.location}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                    fall.severity === "Severe" && "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
                    fall.severity === "Moderate" &&
                      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
                    fall.severity === "Mild" && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
                  )}
                >
                  {fall.severity}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

