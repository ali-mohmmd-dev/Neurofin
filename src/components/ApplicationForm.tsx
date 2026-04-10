"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { PROGRAMS, JOBS } from "@/lib/constants";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Invalid phone number."),
  applyingFor: z.string().min(1, "Please select an option."),
  currentStatus: z.enum(["Student", "Working", "Entrepreneur"], {
    required_error: "Please select your current status.",
  }),
  qualification: z.string().min(2, "Qualification is required."),
  interest: z.string().optional(),
  motivation: z.string().min(20, "Please provide at least 20 characters."),
  experience: z.enum(["Yes", "No"], {
    required_error: "Please select an option.",
  }),
  resume: z.any().optional(), // In a real app, this would be z.instanceof(File)
});

export function ApplicationForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const target = searchParams.get("target");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      applyingFor: target || "",
      currentStatus: undefined,
      qualification: "",
      interest: "",
      motivation: "",
      experience: undefined,
    },
  });

  // Pre-fill "Applying For" if target param exists
  useEffect(() => {
    if (target) {
      form.setValue("applyingFor", target);
    }
  }, [target, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Application submitted! Our team will review it within 48 hours.");
    form.reset();
  }

  // Combine Programs and Jobs for the dropdown
  const allOptions = [
    ...JOBS.filter(j => j.isOpen).map(j => ({ label: j.title, value: j.title.toLowerCase().replace(/ /g, '-') })),
  ];

  const inputStyle = "h-12 bg-transparent border-foreground/10 focus:border-primary focus:ring-0 transition-all duration-300 rounded-none border-t-0 border-l-0 border-r-0 border-b-2";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/70">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className={inputStyle} />
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
                <FormLabel className="text-foreground/70">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} className={inputStyle} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/70">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+123 456 7890" {...field} className={inputStyle} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="applyingFor"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/70">Applying For</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                  <FormControl>
                    <SelectTrigger className={inputStyle}>
                      <SelectValue placeholder="Select a Program or Role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {allOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="currentStatus"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-foreground/70">Current Status</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-wrap gap-4 pt-2"
                  >
                    {["Student", "Working", "Entrepreneur"].map((status) => (
                      <FormItem key={status} className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={status} />
                        </FormControl>
                        <FormLabel className="font-normal">{status}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/70">Highest Qualification</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Master's in Finance" {...field} className={inputStyle} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/70">Area of Interest (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Algorithmic Trading, AI Infrastructure" {...field} className={inputStyle} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground/70">Why do you want to join NeuroFin?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your goals and vision..."
                  className="min-h-[100px] bg-transparent border-foreground/10 focus:border-primary focus:ring-0 transition-all duration-300 rounded-none border-t-0 border-l-0 border-r-0 border-b-2 resize-none pt-4"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-foreground/70">Prior Experience?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-6 pt-2"
                  >
                    {["Yes", "No"].map((exp) => (
                      <FormItem key={exp} className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={exp} />
                        </FormControl>
                        <FormLabel className="font-normal">{exp}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel className="text-foreground/70">Resume / CV</FormLabel>
            <FormControl>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-12 border-b-2 border-foreground/10 cursor-pointer hover:border-primary transition-colors">
                  <span className="text-sm text-muted-foreground pt-3 truncate max-w-full">
                    {fileName || "Click to upload (PDF/DOCX)"}
                  </span>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept=".pdf,.doc,.docx" 
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                  />
                </label>
              </div>
            </FormControl>
          </FormItem>
        </div>

        <div className="pt-8">
          <Button type="submit" size="lg" className="px-12 py-6 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
            Submit Application
          </Button>
        </div>
      </form>
    </Form>
  );
}
