import type { BarItem } from "./type"
import {
  UserIcon,
  ListBulletIcon,
  BellIcon,
  UserPlusIcon,
  CogIcon,
  EnvelopeIcon,
  CheckBadgeIcon,
  QueueListIcon,
  ArrowUturnLeftIcon,
  ClockIcon,
  PencilIcon,
  HeartIcon,
  BookmarkIcon,
  CheckIcon,
  AtSymbolIcon,
  ExclamationCircleIcon,
  PlusCircleIcon,
  ArchiveBoxIcon,
  LockClosedIcon,
  PlusIcon,
  UsersIcon,
  ComputerDesktopIcon,
  Bars3Icon,
} from "@heroicons/react/16/solid";

export const barsItems: BarItem[]  = [
  {
    id: 10,
    name: "Summary",
    slug: "summary",
    icon:UserIcon,
    children: null,
  },
  {
    id: 20,
    name: "Atictity",
    slug:"activity",
    icon:ListBulletIcon,
    children: [
      {
        id: 21,
        name: "All",
        slug: "",
        icon:ListBulletIcon,
      },
      {
        id: 22,
        name: "Topics",
        slug: "topics",
        icon:QueueListIcon,
      },
      {
        id: 23,
        name: "Replies",
        slug: "replies",
        icon: ArrowUturnLeftIcon,
      },
      {
        id: 24,
        name: "Read",
        slug: "read",
        icon: ClockIcon,
      },
      {
        id: 25,
        name: "Drafts",
        slug: "drafts",
        icon:PencilIcon,
      },
      {
        id: 26,
        name: "Likes",
        slug: "likes",
        icon: HeartIcon,
      },
      {
        id: 27,
        name: "Bookmarks",
        slug: "bookmarks",
        icon: BookmarkIcon,
      },
      {
        id: 28,
        name: "Solved",
        slug: "solved",
        icon: CheckIcon,

      },
      {
        id: 29,
        name: "Votes",
        slug: "votes",
        icon:HeartIcon,
      },
    ],
  },
  {
    id: 30,
    name: "Notifications",
    slug: "notifications",
    icon: BellIcon,
    children: [
      {
        id: 31,
        name: "All",
        slug: "",
        icon: BellIcon,
      },
      {
        id: 32,
        name: "Responses",
        slug: "responses",
        icon: ArrowUturnLeftIcon,
      },
      {
        id: 33,
        name: "Likes",
        slug: "likes",
        icon: HeartIcon,
      },
      {
        id: 34,
        name: "Mentions",
        slug: "mentions",
        icon: AtSymbolIcon,

      },
      {
        id: 35,
        name: "Edits",
        slug: "edits",
        icon: PencilIcon,
      },
      {
        id: 36,
        name: "Dismiss All",
        slug: "dismiss",
        icon: CheckIcon,
      },
    ],
  },
  {
    id: 40,
    name: "Messages",
    slug: "messages",
    icon:EnvelopeIcon,
    children: [
      {
        id: 41,
        name: "Latest",
        slug: "",
        icon: EnvelopeIcon,
      },
      {
        id: 42,
        name: "Sent",
        slug: "sent",
        icon: ArrowUturnLeftIcon,
      },
      {
        id: 42,
        name: "New",
        slug: "new",
        icon:ExclamationCircleIcon,
      },
      {
        id: 43,
        name: "Unread",
        slug: "unread",
        icon:PlusCircleIcon,
      },
      {
        id: 44,
        name: "Archive",
        slug: "archive",
        icon: ArchiveBoxIcon,
      },
    {
      id: 45,
      name: "New Message",
      slug: "new-message",
      icon: EnvelopeIcon,
    },
  ],
  },
  {
    id: 50,
    name: "Invites",
    slug: "invites",
    icon: UserPlusIcon,
    children: null,
  },
  {
    id: 60,
    name: "Badges",
    slug: "badges",
    icon: CheckBadgeIcon,
    children: null,
  },
  {
    id: 70,
    name: "Preferences",
    slug: "preferences",
    icon: CogIcon,
    children: [
      {
        id: 71,
        name: "Accout",
        slug: "",
        icon: UserIcon,
      },
      {
        id: 72,
        name: "Security",
        slug: "security",
        icon: LockClosedIcon,

      },
      {
        id: 73,
        name: "Profile",
        slug: "profile",
        icon: UserIcon,
      },
      {
        id: 74,
        name: "Emails",
        slug: "emails",
        icon: EnvelopeIcon,
      },
      {
        id: 75,
        name: "Notifications",
        slug: "notifications",
        icon:BellIcon,
      },
      {
        id: 76,
        name: "Tracking",
        slug: "tracking",
        icon:PlusIcon,
      },
      {
        id: 77,
        name: "Users",
        slug: "users",
        icon: UsersIcon,
      },
      {
        id: 78,
        name: "Interface",
        slug: "interface",
        icon: ComputerDesktopIcon,
      },
      {
        id: 79,
        name: "Navigation Menu",
        slug: "navigation-menu",
        icon: Bars3Icon,
      },
    ]
  },
]