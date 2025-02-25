import { DocumentUploadForm } from "@/components/onboarding/document-upload-form"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <div className="w-full max-w-2xl">
        <DocumentUploadForm />
      </div>
    </div>
  )
}

