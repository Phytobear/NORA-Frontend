"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PatientRecords } from "@/components/doctor/patient-records"
import { FallsHistory } from "@/components/patient/falls-history"
import { PatientDetails } from "@/components/doctor/patient-details"

// DoctorPage component
export default function DoctorPage() {
  return (
    <div className="space-y-6 p-4 md:space-y-8 md:p-6" role="main" aria-label="Doctor Dashboard">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <h1 className="text-xl font-bold md:text-2xl">Doctor Dashboard</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
        </CardHeader>
        <CardContent>
          <PatientRecords />
        </CardContent>
      </Card>

      <div className="grid gap-6 md:gap-8 lg:grid-cols-2" role="region" aria-label="Patient Information">
        <Card>
          <CardHeader>
            <CardTitle>Patient Details</CardTitle>
          </CardHeader>
          <CardContent>
            <PatientDetails />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Falls History</CardTitle>
          </CardHeader>
          <CardContent>
            <FallsHistory />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

