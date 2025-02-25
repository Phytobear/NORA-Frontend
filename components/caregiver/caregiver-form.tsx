"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  dateOfBirth: z.string(),
  address: z.string().min(5, "Address must be at least 5 characters"),
  contactNumber: z.string().min(10, "Contact number must be at least 10 characters"),
  email: z.string().email("Invalid email address"),
  relationshipToPatient: z.string().min(1, "Please select a relationship"),
})

const relationships = ["Spouse", "Parent", "Child", "Sibling", "Legal Guardian", "Other Family Member", "Friend"]

export function CaregiverForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      address: "",
      contactNumber: "",
      email: "",
      relationshipToPatient: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // TODO: Implement update logic
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} className="border-input/60" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="border-input/60" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Full Address</FormLabel>
                <FormControl>
                  <Input {...field} className="border-input/60" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} className="border-input/60" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className="border-input/60" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="relationshipToPatient"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Relationship to Patient</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {relationships.map((relationship) => (
                      <SelectItem key={relationship} value={relationship.toLowerCase()}>
                        {relationship}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Update Information</Button>
      </form>
    </Form>
  )
}

