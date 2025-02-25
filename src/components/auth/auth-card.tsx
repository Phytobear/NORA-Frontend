"use client"
import { Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignInForm } from "./sign-in-form"
import { SignUpForm } from "./sign-up-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AuthCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-2 text-center">
        <div className="flex justify-center">
          <Heart className="h-12 w-12 text-primary dark:text-white" />
        </div>
        <CardTitle className="text-2xl dark:text-white">NORA Portal</CardTitle>
        <CardDescription className="dark:text-white/70">Your secure healthcare management solution</CardDescription>
        <Button variant="outline" className="mt-2 dark:text-white dark:border-white" asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sign-in">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in" className="dark:text-white dark:data-[state=active]:text-[#1E0B4B]">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="sign-up" className="dark:text-white dark:data-[state=active]:text-[#1E0B4B]">
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <SignInForm />
          </TabsContent>
          <TabsContent value="sign-up">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

