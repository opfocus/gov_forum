"use client";

import FilterDropdownBarCategories from "@/ui/filter-dropdown-bar-categories";
import FilterDropdownBarAllTags from "@/ui/filter-dropdown-bar-all-tags";
import { useUser } from "@auth0/nextjs-auth0/client";
import FilterDropdownBarSubCategories from "./filter-dropdown-bar-sub-categories";
import NewTopicButton from "@/ui/new-topic-button";
import type { Item } from "@/lib/tab-group-data";
import Tab from "@/ui/tab";

export default function TabGroup({
  items,
  path,
  parallelRoutesKey,
}: {
  items: Item[];
  path: string;
  parallelRoutesKey?: string;
}) {
  const { user } = useUser();

  const displayTabs = user
    ? items
    : items?.filter((item) => item.name !== "Unread");

  return (
    <nav className=" my-2 flex w-full flex-row flex-wrap items-center  gap-2 bg-inherit text-gray-600 dark:text-gray-100">
      <ul className=" flex gap-2 bg-inherit">
        <FilterDropdownBarCategories />
        <FilterDropdownBarSubCategories />
        <FilterDropdownBarAllTags />
      </ul>
      <ul className=" flex grow items-center gap-2">
        {displayTabs?.map((item: Item) => (
          <li key={item.name}>
            <Tab
              path={path}
              item={item}
              parallelRoutesKey={parallelRoutesKey}
            />
          </li>
        ))}
      </ul>
      <NewTopicButton />
    </nav>
  );
}
