// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to conditionally join class names and merge Tailwind CSS classes
 * to resolve conflicts efficiently.
 * * @param inputs - An array of class names, conditional objects, or arrays.
 * @returns A single, optimized string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}