"use client";

import Link from "next/link";
import clsx from "clsx";
import FilterDropdownBarCategories from "@/ui/filter-dropdown-bar-categories";
import FilterDropdownBarAllTags from "@/ui/filter-dropdown-bar-all-tags";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import FilterDropdownBarSubCategories from "./filter-dropdown-bar-sub-categories";
import NewTopicButton from "@/ui/new-topic-button";

export default function FilterNav({ tabs }: { tabs: any[] }) {
  const { user, error, isLoading } = useUser();
  const params = useParams();
  const length = params.slug?.length;
  const segment = params.slug
    ? params.slug[length - 1]
    : useSelectedLayoutSegment();

  console.log(segment);

  const displayTabs = user
    ? tabs
    : tabs?.filter((item) => item.name !== "Unread");
  console.log(tabs);
  console.log(displayTabs);

  return (
    <nav className=" my-2 flex w-full flex-row items-center flex-wrap  gap-2 bg-inherit text-gray-600 dark:text-slate-100">
      <ul className=" flex gap-2 bg-inherit">
        <FilterDropdownBarCategories />
        <FilterDropdownBarSubCategories />
        <FilterDropdownBarAllTags />
      </ul>
      <ul className=" flex grow items-center gap-2">
        {displayTabs?.map((tab: any) => (
          <li key={tab.index}>
            <Link
              href={tab.segment}
              className={clsx("px-2 py-1 text-lg font-medium", {
                " hover:bg-red-100 hover:text-red-400 ":
                  tab.segment !== segment,
                "bg-red-400 text-slate-100": tab.segment === segment,
              })}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
      <NewTopicButton />
    </nav>
  );
}
