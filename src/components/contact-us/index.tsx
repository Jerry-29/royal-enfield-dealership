"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { ApiError } from "@/util/types";
import { BUSINESS_EMAIL } from "@/config/constants";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[0-9+\-() ]+$/, "Please enter a valid phone number"),
  partnershipType: z.enum(["dealership", "distribution", "studio"], {
    required_error: "Please select a partnership type",
  }),
  location: z.string().min(2, "Please enter a valid location"),
  message: z
    .string()
    .min(20, "Please provide more details (minimum 20 characters)"),
});

type FormData = z.infer<typeof formSchema>;

export const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      toast.success("Thank you for your inquiry. We will contact you soon!");
      reset(); // Reset form
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else if (typeof error === "object" && error !== null) {
        const apiError = error as ApiError;
        toast.error(apiError.message || "An unexpected error occurred");
      } else {
        toast.error("Failed to submit form");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 flex justify-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Contact Our Partnership Team
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions about becoming a Enfield Empire business partner?
              Our dedicated team is here to help you explore the opportunities.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Global Headquarters</h3>
                  <p className="text-muted-foreground">
                    Main Block , Royan Enfield Tech Center , 296 , Rajiv Gandhi
                    Salai , Elcot Sez, Sholinganahllur, Chennai, Tamil Nadu
                    600119
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Partnership Hotline</h3>
                  <a
                    href="tel:+919693894599"
                    className="text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    +91 9693894599
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">{BUSINESS_EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20"
                aria-label="Youtube"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Partnership Inquiry Form</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                    {...register("firstName")}
                    id="firstName"
                    className={`flex h-10 w-full rounded-md border ${
                      errors.firstName ? "border-red-500" : "border-input"
                    } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    {...register("lastName")}
                    id="lastName"
                    className={`flex h-10 w-full rounded-md border ${
                      errors.lastName ? "border-red-500" : "border-input"
                    } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium">
                  Company Name
                </label>
                <input
                  {...register("companyName")}
                  id="companyName"
                  className={`flex h-10 w-full rounded-md border ${
                    errors.companyName ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  placeholder="Your Business Ltd."
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className={`flex h-10 w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  placeholder="john.doe@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  id="phone"
                  type="tel"
                  className={`flex h-10 w-full rounded-md border ${
                    errors.phone ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  placeholder="+91 9693894599"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="partnershipType"
                  className="text-sm font-medium"
                >
                  Partnership Type
                </label>
                <select
                  {...register("partnershipType")}
                  id="partnershipType"
                  className={`flex h-10 w-full rounded-md border ${
                    errors.partnershipType ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  <option value="">Select Partnership Type</option>
                  <option value="dealership">Exclusive Dealership</option>
                  <option value="distribution">Regional Distribution</option>
                  <option value="studio">Studio Store</option>
                </select>
                {errors.partnershipType && (
                  <p className="text-red-500 text-sm">
                    {errors.partnershipType.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Proposed Location/Region
                </label>
                <input
                  {...register("location")}
                  id="location"
                  className={`flex h-10 w-full rounded-md border ${
                    errors.location ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  placeholder="City, State, Country"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Additional Information
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  className={`flex min-h-[120px] w-full rounded-md border ${
                    errors.message ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                  placeholder="Tell us about your business experience, investment capacity, and why you're interested in partnering with Enfield Empire..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
