"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PatientForm } from "@/components/patient/patient-form"
import { FallsHistory } from "@/components/patient/falls-history"
import { DocumentUpload } from "@/components/document-upload"

export default function PatientPage() {
  return (
    <div className="space-y-8 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent>
          <PatientForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Medical Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <DocumentUpload />
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
  )
}

