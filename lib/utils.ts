import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY = {
  name: "Bellcorp International",
  tagline: "Sourcing Trust. Delivering Value.",
  phoneDisplay: "+91 81084 06149",
  phone: "+918108406149",
  whatsapp: "918108406149",
  email: "bellcorpinternational@gmail.com",
  website: "www.bellcorpinternational.com",
  address:
    "Office No. A-708, Jaswanti Business Allied Centre, Kanchpada, Ramchandra Lane, Malad West, Mumbai \u2013 400064",
  since: "2016",
} as const;
