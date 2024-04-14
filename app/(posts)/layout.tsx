import React from "react";
import FilterNav from "@/ui/filter-nav";

import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "topics",
};
const tabs = [
  {
    index: 1,
    name: "Categories",
    segment: "categories",
  },
  {
    index: 2,
    name: "Latest",
    segment: "latest",
  },
  {
    index: 3,
    name: "Unread",
    segment: "unread",
  },
  {
    index: 4,
    name: "Top",
    segment: "top",
  },
];

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" mt-8 space-y-6 bg-inherit">
      <FilterNav tabs={tabs} />
      {children}
    </div>
  );
}
