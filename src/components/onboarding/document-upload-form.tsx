"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DocumentUpload } from "@/components/document-upload"
import { Button } from "@/components/ui/button"

export function DocumentUploadForm() {
  const router = useRouter()
  const [isUploading, setIsUploading] = React.useState(false)

  const handleComplete = () => {
    // TODO: Verify documents are uploaded
    router.push("/dashboard")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Required Documents</CardTitle>
        <CardDescription>Please upload the necessary medical documents to complete your registration</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <DocumentUpload />
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => router.push("/dashboard")}>
            Skip for now
          </Button>
          <Button onClick={handleComplete} disabled={isUploading}>
            Complete Setup
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

