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


export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: EventCategory;
  coverImage: string;
  date: string;
  startTime: string;
  endTime: string;
  venue: string;
  city: string;
  address: string;
  price: number;
  currency: "NGN";
  availableTickets: number;
  totalTickets: number;
  organizer: {
    name: string;
    avatar: string;
  };
  featured: boolean;
  tags: string[];
}