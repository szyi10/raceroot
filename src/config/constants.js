import {
  feed,
  feedActive,
  search,
  searchActive,
  bell,
  bellActive,
  sidebar,
  sidebarActive,
} from "../assets/icons"

export const navLinks = [
  { href: "/feed", label: "My Feed" },
  { href: "/news", label: "News" },
  { href: "/tv", label: "Streams" },
  { href: "/docs", label: "API" },
]

export const bottomNavLinks = [
  {
    href: "/feed",
    label: "My Feed",
    active: false,
    image: feed,
    activeImage: feedActive,
  },
  {
    href: "/search",
    label: "Search",
    active: false,
    image: search,
    activeImage: searchActive,
  },
  {
    href: "/notifications",
    label: "Notifications",
    active: false,
    image: bell,
    activeImage: bellActive,
  },
  {
    href: "/sidebar",
    label: "Sidebar",
    active: false,
    image: sidebar,
    activeImage: sidebarActive,
  },
]
