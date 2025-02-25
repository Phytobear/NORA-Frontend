"use client"
import { AlertCircle, Bell, CheckCircle2, XCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type AlertLevel = "critical" | "high" | "general"

interface HealthAlert {
  id: string
  level: AlertLevel
  title: string
  message: string
}

interface AlertSystemProps {
  alerts: HealthAlert[]
  onDismiss: (id: string) => void
}

export function AlertSystem({ alerts, onDismiss }: AlertSystemProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-md">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          className={cn(
            "transition-all duration-500 animate-in fade-in slide-in-from-right",
            alert.level === "critical" && "border-red-500 bg-red-50 dark:bg-red-900/10",
            alert.level === "high" && "border-orange-500 bg-orange-50 dark:bg-orange-900/10",
            alert.level === "general" && "border-blue-500 bg-blue-50 dark:bg-blue-900/10",
          )}
          role="alert"
        >
          <div className="flex items-start gap-4">
            {alert.level === "critical" && <AlertCircle className="h-5 w-5 text-red-600" />}
            {alert.level === "high" && <Bell className="h-5 w-5 text-orange-600" />}
            {alert.level === "general" && <CheckCircle2 className="h-5 w-5 text-blue-600" />}
            <div className="flex-1">
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.message}</AlertDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => onDismiss(alert.id)}
              aria-label="Dismiss alert"
            >
              <XCircle className="h-4 w-4" />
            </Button>
          </div>
        </Alert>
      ))}
    </div>
  )
}

