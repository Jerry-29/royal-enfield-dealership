import { Metadata } from "next";

export interface PageMetadata extends Metadata {
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
}

// Add a custom error type
export interface ApiError {
  message: string;
  statusCode?: number;
}

export type PartnershipType = "dealership" | "distribution" | "studio";

export interface Partnership {
  _id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  partnershipType: PartnershipType;
  location: string;
  message: string;
  isRead: boolean;
  submittedAt: string;
  createdAt?: string;
  updatedAt?: string;
}
