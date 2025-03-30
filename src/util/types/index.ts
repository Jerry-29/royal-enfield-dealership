import { Metadata } from 'next'

export interface PageMetadata extends Metadata {
  alternates?: {
    canonical?: string
    languages?: Record<string, string>
  }
}

// Add a custom error type
export interface ApiError  {
  message: string;
  statusCode?: number;
}