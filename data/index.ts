import { QuickLink, Event, SocialLink, FooterLink } from "@/types";

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

export const events: Event[] = [
  {
    id: "evt-001",
    slug: "lagos-music-festival-2026",
    title: "Lagos Music Festival",
    description:
      "Experience an unforgettable night of live music, Afrobeats, amazing performances, and great vibes featuring talented artists and DJs.",
    category: "Music",
    coverImage:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=85",
    date: "2026-11-21",
    startTime: "16:00",
    endTime: "23:30",
    venue: "Eko Atlantic City",
    city: "Lagos",
    address: "Eko Atlantic, Victoria Island, Lagos",
    price: 15000,
    currency: "NGN",
    availableTickets: 850,
    totalTickets: 2000,
    organizer: {
      name: "Pulse Events",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    featured: true,
    tags: ["Afrobeats", "Live Music", "Festival"],
  },
  {
    id: "evt-002",
    slug: "tech-innovation-summit",
    title: "Tech Innovation Summit",
    description:
      "Connect with developers, founders, designers, and technology leaders to explore AI, software development, startups, and the future of technology.",
    category: "Technology",
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
    date: "2026-11-28",
    startTime: "09:00",
    endTime: "17:00",
    venue: "Landmark Event Centre",
    city: "Lagos",
    address: "Water Corporation Road, Victoria Island, Lagos",
    price: 25000,
    currency: "NGN",
    availableTickets: 320,
    totalTickets: 500,
    organizer: {
      name: "TechConnect Africa",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    },
    featured: true,
    tags: ["Technology", "AI", "Networking"],
  },
  {
    id: "evt-003",
    slug: "africa-business-leadership-forum",
    title: "Africa Business Leadership Forum",
    description:
      "A gathering of entrepreneurs, executives, and emerging leaders focused on business growth, investment opportunities, and building successful companies.",
    category: "Business",
    coverImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    date: "2026-12-05",
    startTime: "10:00",
    endTime: "16:00",
    venue: "Transcorp Hilton",
    city: "Abuja",
    address: "1 Aguiyi Ironsi Street, Maitama, Abuja",
    price: 30000,
    currency: "NGN",
    availableTickets: 180,
    totalTickets: 300,
    organizer: {
      name: "Elevate Africa",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    featured: true,
    tags: ["Entrepreneurship", "Leadership", "Business"],
  },
  {
    id: "evt-004",
    slug: "creative-arts-exhibition",
    title: "Creative Arts Exhibition",
    description:
      "Discover contemporary African art, photography, paintings, and handmade pieces from emerging and established artists.",
    category: "Arts & Culture",
    coverImage:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85",
    date: "2026-11-14",
    startTime: "11:00",
    endTime: "18:00",
    venue: "Nike Art Gallery",
    city: "Lagos",
    address: "Nike Art Gallery, Lekki, Lagos",
    price: 5000,
    currency: "NGN",
    availableTickets: 140,
    totalTickets: 200,
    organizer: {
      name: "Canvas Collective",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    },
    featured: false,
    tags: ["Art", "Photography", "Culture"],
  },
  {
    id: "evt-005",
    slug: "taste-of-lagos-food-fair",
    title: "Taste of Lagos Food Fair",
    description:
      "Enjoy a celebration of Nigerian cuisine, street food, local delicacies, refreshing drinks, and culinary experiences from talented chefs.",
    category: "Food & Drink",
    coverImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
    date: "2026-11-15",
    startTime: "12:00",
    endTime: "20:00",
    venue: "Muri Okunola Park",
    city: "Lagos",
    address: "Victoria Island, Lagos",
    price: 3000,
    currency: "NGN",
    availableTickets: 600,
    totalTickets: 1000,
    organizer: {
      name: "Foodie Africa",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    },
    featured: false,
    tags: ["Food", "Nigerian Cuisine", "Lifestyle"],
  },
  {
    id: "evt-006",
    slug: "city-marathon-2026",
    title: "City Marathon 2026",
    description:
      "Take part in an energetic community running event designed to promote fitness, healthy living, and community spirit.",
    category: "Sports",
    coverImage:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=85",
    date: "2026-12-12",
    startTime: "06:00",
    endTime: "12:00",
    venue: "National Stadium",
    city: "Lagos",
    address: "Surulere, Lagos",
    price: 10000,
    currency: "NGN",
    availableTickets: 1200,
    totalTickets: 2000,
    organizer: {
      name: "ActiveLife Nigeria",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    featured: false,
    tags: ["Running", "Fitness", "Marathon"],
  },
  {
    id: "evt-007",
    slug: "new-year-eve-gala",
    title: "New Year's Eve Gala",
    description:
      "Welcome the new year with an elegant evening of live entertainment, fine dining, music, and memorable celebrations.",
    category: "Arts & Culture",
    coverImage:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    date: "2026-12-31",
    startTime: "19:00",
    endTime: "01:00",
    venue: "Eko Hotel & Suites",
    city: "Lagos",
    address: "Plot 1415, Adetokunbo Ademola Street, Victoria Island, Lagos",
    price: 50000,
    currency: "NGN",
    availableTickets: 250,
    totalTickets: 400,
    organizer: {
      name: "Grand Moments",
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    },
    featured: true,
    tags: ["Gala", "Celebration", "New Year"],
  },
  {
    id: "evt-008",
    slug: "startup-founders-networking-night",
    title: "Startup Founders Networking Night",
    description:
      "Meet ambitious founders, share ideas, discover potential collaborators, and build valuable connections in the startup ecosystem.",
    category: "Business",
    coverImage:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85",
    date: "2026-11-07",
    startTime: "17:00",
    endTime: "21:00",
    venue: "The Zone Tech Park",
    city: "Lagos",
    address: "Gbagada, Lagos",
    price: 7500,
    currency: "NGN",
    availableTickets: 90,
    totalTickets: 150,
    organizer: {
      name: "Founders Hub",
      avatar:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80",
    },
    featured: false,
    tags: ["Startups", "Networking", "Founders"],
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
