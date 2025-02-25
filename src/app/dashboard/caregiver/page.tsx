"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CaregiverForm } from "@/components/caregiver/caregiver-form"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { User2 } from "lucide-react"

export default function CaregiverPage() {
  const router = useRouter()

  return (
    <div className="space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Caregiver Information</h1>
        <Button onClick={() => router.push("/dashboard/patient")} className="flex items-center gap-2">
          <User2 className="h-4 w-4" />
          View Patient Information
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Caregiver Details</CardTitle>
        </CardHeader>
        <CardContent>
          <CaregiverForm />
        </CardContent>
      </Card>
    </div>
  )
}

