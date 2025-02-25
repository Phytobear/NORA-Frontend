"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["patient", "caregiver", "medical"]),
  fullName: z.string().min(2),
  dateOfBirth: z.string().optional(),
  address: z.string().min(5),
  phone: z.string().min(10),
  relationshipToPatient: z.string().optional(),
  medicalLicense: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function SignUpForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)
  const [step, setStep] = React.useState(1)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      address: "",
      phone: "",
    },
  })

  const role = form.watch("role")

  async function onSubmit(values: FormData) {
    if (step === 1) {
      setStep(2)
      return
    }

    try {
      setIsLoading(true)
      // TODO: Implement actual signup logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      // After successful signup, redirect to onboarding
      router.push("/onboarding")
    } catch (error) {
      console.error("Signup failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {step === 1 && (
          <>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Create a password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="patient">Patient</SelectItem>
                      <SelectItem value="caregiver">Caregiver</SelectItem>
                      <SelectItem value="medical">Medical Professional</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 2 && (
          <>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {role === "patient" && (
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {role === "caregiver" && (
              <FormField
                control={form.control}
                name="relationshipToPatient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relationship to Patient</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Parent, Spouse" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {role === "medical" && (
              <FormField
                control={form.control}
                name="medicalLicense"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Medical License Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your license number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? <>Loading...</> : step === 1 ? "Continue" : "Create Account"}
        </Button>
      </form>
    </Form>
  )
}

