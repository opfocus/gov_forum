import React from "react";
import { homeItems } from "@/lib/tab-group-data";
import { getSession } from "@auth0/nextjs-auth0";
import FilterDropdownBars from "./_components/filter-dropdown-bars";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "topics",
};

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = "";
  const session = await getSession();
  const user: any = session?.user;

  const items = user
    ? homeItems
    : homeItems?.filter((item) => item.name !== "Unread");

  return (
    <div className=" mt-8 space-y-6 bg-inherit">
      <FilterDropdownBars items={items} path={path} />
      {children}
    </div>
  );
}
