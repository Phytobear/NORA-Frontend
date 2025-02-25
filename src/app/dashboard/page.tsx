"use client"

import * as React from "react"
import Image from "next/image"
import { Phone, Send, Star, User2, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = React.useState<string>("")

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-[calc(100vh-4rem)] p-6 flex items-center justify-center bg-background">
      {/* Status Indicators */}
      <div className="absolute top-6 left-6 flex gap-4">
        <StatusCircle label="Time" value={currentTime} />
        <StatusCircle label="Temperature" value="17°C" subtext="Warm" />
        <StatusCircle label="Heart Rate" value="78 BPM" />
      </div>

      {/* User Profile */}
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm text-muted-foreground dark:text-[#FFB800]">Name:</p>
          <p className="font-medium dark:text-[#FFB800]">Elizabeth Connor</p>
        </div>
        <div className="relative w-12 h-12 rounded-full overflow-hidden border dark:border-[#FFB800]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rGnHG7LFDzEex1bXp3kPtGJkk7Zlys.png"
            alt="Profile photo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Alert Circle */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full animate-pulse-ring-1 absolute" />
          <div className="w-[450px] h-[450px] rounded-full animate-pulse-ring-2 absolute" />
          <div className="w-[400px] h-[400px] rounded-full animate-pulse-ring-3 absolute" />
        </div>

        <Card className="relative w-[300px] h-[300px] rounded-full flex items-center justify-center bg-red-500/10 border-4 border-red-500 z-10">
          <div className="text-center p-8">
            <Star className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">NORA has detected a fall!</h2>
            <p className="text-sm text-muted-foreground">(Severe Fall)</p>
          </div>
        </Card>

        {/* Action Buttons */}
        <ActionButton
          icon={Phone}
          label="Emergency"
          className="absolute top-0 left-0 -translate-x-full -translate-y-1/2 bg-orange-500 hover:bg-orange-600"
        />
        <ActionButton
          icon={X}
          label="Cancel"
          className="absolute bottom-0 left-0 -translate-x-full translate-y-1/2 bg-red-500 hover:bg-red-600"
        />
        <ActionButton
          icon={Send}
          label="On my way"
          className="absolute bottom-0 right-0 translate-x-full translate-y-1/2 bg-green-500 hover:bg-green-600"
        />
        <ActionButton
          icon={User2}
          label="Contact"
          className="absolute top-0 right-0 translate-x-full -translate-y-1/2 bg-purple-500 hover:bg-purple-600"
        />
      </div>
    </div>
  )
}

function StatusCircle({ label, value, subtext }: { label: string; value: string; subtext?: string }) {
  return (
    <div
      className={cn(
        "w-[100px] h-[100px] rounded-full flex flex-col items-center justify-center p-2 text-center",
        "bg-primary/10 border-2 border-primary",
        "dark:bg-[#1E0B4B] dark:border-[#FFB800]",
      )}
    >
      <p className="text-xs text-muted-foreground dark:text-[#FFB800]">{label}</p>
      <p className="font-bold dark:text-[#FFB800]">{value}</p>
      {subtext && <p className="text-xs text-muted-foreground dark:text-[#FFB800]">{subtext}</p>}
    </div>
  )
}

function ActionButton({
  icon: Icon,
  label,
  className,
}: {
  icon: React.ElementType
  label: string
  className?: string
}) {
  return (
    <button
      className={cn(
        "group relative w-16 h-16 rounded-full text-white flex items-center justify-center transition-transform hover:scale-110",
        className,
      )}
    >
      <Icon className="w-6 h-6" />
      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-medium text-foreground dark:text-[#FFB800] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </button>
  )
}

