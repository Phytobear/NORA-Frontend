"use client"

import * as React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { AlertSystem } from "@/components/alert-system"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [alerts, setAlerts] = React.useState([
    {
      id: "1",
      level: "critical" as const,
      title: "Urgent Update",
      message: "A fall has been detected",
    },
  ])

  // Dismiss an alert
  const dismissAlert = (id: string) => {
    setAlerts((current) => current.filter((alert) => alert.id !== id))
  }

  return (
    <div className="flex h-screen">
      <DashboardSidebar role="patient" />
      <div className="flex-1 flex flex-col h-screen overflow-auto">
        <header
          className={cn(
            "h-14 flex items-center justify-between px-6 border-b",
            "bg-[#0078d4] text-white",
            "dark:bg-[#0078d4] dark:text-[#FFB800] dark:border-[#FFB800]",
          )}
        >
          <div className="flex items-center h-14">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle
              variant="ghost"
              className={cn("hover:bg-white/10 text-white", "dark:hover:bg-[#1E0B4B]/40 dark:text-[#FFB800]")}
            />
          </div>
        </header>
        <AlertSystem alerts={alerts} onDismiss={dismissAlert} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

