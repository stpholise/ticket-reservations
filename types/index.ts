import type { IconType } from "react-icons";
export type QuickLink = {
  title: string;
  url: string;
};



export type EventCategory =
  | "Music"
  | "Technology"
  | "Business"
  | "Arts & Culture"
  | "Food & Drink"
  | "Sports";

export type EventStatus = "active" | "expired" | "inactive";

export type ReservationStatus = "held" | "confirmed" | "cancelled" | "expired";

export interface Reservation {
  id: string;
  reservationNumber: string;
  eventId: string;
  event: string;
  ticketTypeId: string;
  ticketType: string;
  email: string;
  quantity: number;
  status: ReservationStatus;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface TicketType {
  id: string;
  eventId: string;
  event: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  reservations: Reservation[];
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  startsAt: string | null;
  expiresAt: string | null;
  location: string | null;
  imageUrl: string | null;
  status: EventStatus;
  ticketTypes: TicketType[];
  reservations: Reservation[];
  createdAt: string;
  updatedAt: string;
}

export type EventsResponse = Event[];


export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink extends FooterLink {
  icon: IconType;
}
