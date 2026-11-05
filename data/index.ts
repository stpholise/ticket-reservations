import { QuickLink, Event, TicketType, SocialLink, FooterLink } from "@/types";

import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export const navigations: QuickLink[] = [
  { title: "Discover events", url: "/discover" },
  {
    title: "How TicketDays Works",
    url: "/how-ticketdays-work",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
  {
    title: "About us",
    url: "/about",
  },
];


 

const createdAt = "2026-10-01T09:00:00.000Z";
const updatedAt = "2026-11-01T09:00:00.000Z";

const createTicketType = (
  eventId: string,
  event: string,
  price: number,
  quantity: number,
): TicketType => ({
  id: `ticket-${eventId}`,
  eventId,
  event,
  name: "General Admission",
  price,
  currency: "NGN",
  quantity,
  reservations: [],
  createdAt,
  updatedAt,
});

export const events: Event[] = [
  {
    id: "evt-001",
    title: "Lagos Music Festival",
    slug: "lagos-music-festival-2026",
    description:
      "Experience an unforgettable night of live music, Afrobeats, amazing performances, and great vibes featuring talented artists and DJs.",
    startsAt: "2026-11-05T11:52:03.569Z",
    expiresAt: "2026-11-05T22:30:00.000Z",
    location: "Eko Atlantic City, Lagos",
    imageUrl:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=85",
    status: "active",
    ticketTypes: [
      createTicketType("evt-001", "Lagos Music Festival", 15000, 2000),
    ],
    reservations: [],
    createdAt,
    updatedAt,
  },
  {
    id: "evt-002",
    title: "Tech Innovation Summit",
    slug: "tech-innovation-summit",
    description:
      "Connect with developers, founders, designers, and technology leaders to explore AI, software development, startups, and the future of technology.",
    startsAt: "2026-11-28T08:00:00.000Z",
    expiresAt: "2026-11-28T16:00:00.000Z",
    location:
      "Landmark Event Centre, Water Corporation Road, Victoria Island, Lagos",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
    status: "active",
    ticketTypes: [
      createTicketType("evt-002", "Tech Innovation Summit", 25000, 500),
    ],
    reservations: [],
    createdAt,
    updatedAt,
  },
  {
    id: "evt-003",
    title: "Africa Business Leadership Forum",
    slug: "africa-business-leadership-forum",
    description:
      "A gathering of entrepreneurs, executives, and emerging leaders focused on business growth, investment opportunities, and building successful companies.",
    startsAt: "2026-12-05T09:00:00.000Z",
    expiresAt: "2026-12-05T15:00:00.000Z",
    location: "Transcorp Hilton, 1 Aguiyi Ironsi Street, Maitama, Abuja",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    status: "active",
    ticketTypes: [
      createTicketType(
        "evt-003",
        "Africa Business Leadership Forum",
        30000,
        300,
      ),
    ],
    reservations: [],
    createdAt,
    updatedAt,
  },
  {
    id: "evt-004",
    title: "Creative Arts Exhibition",
    slug: "creative-arts-exhibition",
    description:
      "Discover contemporary African art, photography, paintings, and handmade pieces from emerging and established artists.",
    startsAt: "2026-11-14T10:00:00.000Z",
    expiresAt: "2026-11-14T17:00:00.000Z",
    location: "Nike Art Gallery, Lekki, Lagos",
    imageUrl:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85",
    status: "active",
    ticketTypes: [
      createTicketType("evt-004", "Creative Arts Exhibition", 5000, 200),
    ],
    reservations: [],
    createdAt,
    updatedAt,
  },
  {
    id: "evt-005",
    title: "Taste of Lagos Food Fair",
    slug: "taste-of-lagos-food-fair",
    description:
      "Enjoy a celebration of Nigerian cuisine, street food, local delicacies, refreshing drinks, and culinary experiences from talented chefs.",
    startsAt: "2026-11-15T11:00:00.000Z",
    expiresAt: "2026-11-15T19:00:00.000Z",
    location: "Muri Okunola Park, Victoria Island, Lagos",
    imageUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
    status: "active",
    ticketTypes: [
      createTicketType("evt-005", "Taste of Lagos Food Fair", 3000, 1000),
    ],
    reservations: [],
    createdAt,
    updatedAt,
  },
  {
    id: "evt-006",
    title: "City Marathon 2026",
    slug: "city-marathon-2026",
    description:
      "Take part in an energetic community running event designed to promote fitness, healthy living, and community spirit.",
    startsAt: "2026-12-12T05:00:00.000Z",
    expiresAt: "2026-12-12T11:00:00.000Z",
    location: "National Stadium, Surulere, Lagos",
    imageUrl:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=85",
    status: "active",
    ticketTypes: [
      createTicketType("evt-006", "City Marathon 2026", 10000, 2000),
    ],
    reservations: [],
    createdAt,
    updatedAt,
  },
  {
    id: "evt-007",
    title: "New Year's Eve Gala",
    slug: "new-year-eve-gala",
    description:
      "Welcome the new year with an elegant evening of live entertainment, fine dining, music, and memorable celebrations.",
    startsAt: "2026-12-31T18:00:00.000Z",
    expiresAt: "2027-01-01T00:00:00.000Z",
    location:
      "Eko Hotel & Suites, Plot 1415, Adetokunbo Ademola Street, Victoria Island, Lagos",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    status: "active",
    ticketTypes: [
      createTicketType("evt-007", "New Year's Eve Gala", 50000, 400),
    ],
    reservations: [],
    createdAt,
    updatedAt,
  },
  {
    id: "evt-008",
    title: "Startup Founders Networking Night",
    slug: "startup-founders-networking-night",
    description:
      "Meet ambitious founders, share ideas, discover potential collaborators, and build valuable connections in the startup ecosystem.",
    startsAt: "2026-11-07T16:00:00.000Z",
    expiresAt: "2026-11-07T20:00:00.000Z",
    location: "The Zone Tech Park, Gbagada, Lagos",
    imageUrl:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85",
    status: "active",
    ticketTypes: [
      createTicketType(
        "evt-008",
        "Startup Founders Networking Night",
        7500,
        150,
      ),
    ],
    reservations: [],
    createdAt,
    updatedAt,
  },
];


export const companyLinks: FooterLink[] = [
  {
    label: "Homepage",
    href: "/home",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "How Tix Works",
    href: "/how-tix-works",
  },
  {
    label: "Blog",
    href: "https://blog.tix.africa/",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/tixdotafrica",
    icon: FaFacebookF,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/tixdotafrica",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tixdotafrica/",
    icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@tixdotafrica",
    icon: FaTiktok, // Replace with a TikTok icon from your icon library.
  },
];


export const Locations = [
   {
    label: "Nigeria",
    value: "nigeria"
   },
   {
    label: "China",
    value: "china"
   },
   {
    label: "Uk",
    value: "uk"
   },
   {
    label: "Rwanda",
    value: "rwanda"
   },
   {
    label: "Kenya",
    value: "kenya"
   },
   {
    label: "South Africa",
    value: "south_africa"
   },
   {
    label: "Senegal",
    value: "senegal"
   },
   
]



export const eventCategories = [
  { label: "All Events", value: "all" },
  { label: "Community", value: "community" },
  { label: "Art & Culture", value: "art-culture" },
  { label: "Sports & Wellness", value: "sports-wellness" },
  { label: "Career & Business", value: "career-business" },
  { label: "Spirituality & Religion", value: "spirituality-religion" },
  { label: "Food & Drink", value: "food-drink" },
] as const
export type EventCategory = (typeof eventCategories)[number]["value"];