import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(sentence: string) {
  return sentence
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/[\s-]+/g, " ") // Replace multiple spaces or hyphens with a single space
    .trim() // Trim leading and trailing spaces
    .replace(/\s/g, "-"); // Replace spaces with hyphens
}
