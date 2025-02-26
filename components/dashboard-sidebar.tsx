"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User2, Users, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SidebarProps {
  className?: string;
}

export function DashboardSidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Patient", href: "/dashboard/patient", icon: User2 },
    { name: "Caregiver", href: "/dashboard/caregiver", icon: Users },
    { name: "Doctor", href: "/dashboard/doctor", icon: Stethoscope },
  ];

  return (
    <div
      className={cn(
        "flex h-screen flex-col",
        "bg-[#0078d4] text-white",
        "dark:bg-[#0078d4] dark:text-[#FFB800]",
        className
      )}
    >
      <div className="flex items-center h-14 border-b border-white/20 px-6">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <Image src="./logo.png" width="30" height="30" alt="logo" />
            <h2 className="text-lg font-semibold">NORA</h2>
          </div>
          <p className="text-xs">Healthcare Portal</p>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                className={cn(
                  "justify-start gap-2 text-white hover:bg-white/10",
                  "dark:text-[#FFB800] dark:hover:bg-[#1E0B4B]/40",
                  pathname === item.href && [
                    "bg-white/20 hover:bg-white/20",
                    "dark:bg-[#1E0B4B]/40 dark:hover:bg-[#1E0B4B]/40",
                  ]
                )}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 w-full"
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}
