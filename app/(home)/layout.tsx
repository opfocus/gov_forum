import React from "react";
import TabGroup from "@/ui/tab-group";
import { homeItems } from "@/lib/tab-group-data";
import { getSession } from "@auth0/nextjs-auth0";
import NewTopicButton from "@/ui/new-topic-button";
import FilterDropdownBarCategories from "@/app/(home)/_components/filter-dropdown-bar-categories";
import FilterDropdownBarAllTags from "@/app/(home)/_components/filter-dropdown-bar-all-tags";
import FilterDropdownBarSubCategories from "@/app/(home)/_components/filter-dropdown-bar-sub-categories";

import type { Metadata } from "next";

export const revalidate = 1800;

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
      <nav className=" my-2 flex w-full flex-row flex-wrap items-center  gap-2 bg-inherit text-gray-600 dark:text-gray-100">
        <div className=" flex gap-2 bg-inherit">
          <FilterDropdownBarCategories />
          <FilterDropdownBarSubCategories />
          <FilterDropdownBarAllTags />
        </div>
        <TabGroup items={items} path={path} />
        <NewTopicButton />
      </nav>
      {children}
    </div>
  );
}
