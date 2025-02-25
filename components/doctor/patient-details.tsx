"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

export function PatientDetails() {
  const patientDetails = {
    name: "Elizabeth Connor",
    dateOfBirth: "1921-05-15",
    gender: "Female",
    bloodType: "A+",
    height: "190 cm",
    weight: "102 kg",
    allergies: ["Penicilin", "Latex"],
    medications: ["Madeuparoll 10mg - Daily", "Lupinium 500mg - Twice daily", "Vitamin D - Daily"],
    conditions: ["Type 2 Diabetes", "Hypertension", "Fear of Falling"],
  }

  return (
    <ScrollArea className="h-[300px] md:h-[400px] pr-4" role="region" aria-label="Patient Details Section">
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground" id="basic-info">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4" role="region" aria-labelledby="basic-info">
            <div role="group" aria-label="Name">
              <p className="text-sm font-medium">Name</p>
              <p className="text-sm">{patientDetails.name}</p>
            </div>
            <div role="group" aria-label="Date of Birth">
              <p className="text-sm font-medium">Date of Birth</p>
              <p className="text-sm">{patientDetails.dateOfBirth}</p>
            </div>
            <div role="group" aria-label="Gender">
              <p className="text-sm font-medium">Gender</p>
              <p className="text-sm">{patientDetails.gender}</p>
            </div>
            <div role="group" aria-label="Blood Type">
              <p className="text-sm font-medium">Blood Type</p>
              <p className="text-sm">{patientDetails.bloodType}</p>
            </div>
            <div role="group" aria-label="Height">
              <p className="text-sm font-medium">Height</p>
              <p className="text-sm">{patientDetails.height}</p>
            </div>
            <div role="group" aria-label="Weight">
              <p className="text-sm font-medium">Weight</p>
              <p className="text-sm">{patientDetails.weight}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground" id="allergies">
            Allergies
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1" role="list" aria-labelledby="allergies">
            {patientDetails.allergies.map((allergy) => (
              <li key={allergy} role="listitem">
                {allergy}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground" id="medications">
            Current Medications
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1" role="list" aria-labelledby="medications">
            {patientDetails.medications.map((medication) => (
              <li key={medication} role="listitem">
                {medication}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground" id="conditions">
            Medical Conditions
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1" role="list" aria-labelledby="conditions">
            {patientDetails.conditions.map((condition) => (
              <li key={condition} role="listitem">
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollArea>
  )
}

