"use client";

import Link from "next/link";
import clsx from "clsx";
import FilterDropdownBarCategories from "@/ui/filter-dropdown-bar-categories";
import FilterDropdownBarAllTags from "@/ui/filter-dropdown-bar-all-tags";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import FilterDropdownBarSubCategories from "./filter-dropdown-bar-sub-categories";

export default function FilterBars({ tabs }: { tabs: any[] }) {
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
    <nav className=" bg-white">
      <ul className="flex flex-row flex-wrap  gap-2 text-gray-700 my-2">
        <FilterDropdownBarCategories />
        <FilterDropdownBarSubCategories />
        <FilterDropdownBarAllTags />
        {displayTabs?.map((tab: any) => (
          <li key={tab.index}>
            <Link
              href={tab.segment}
              className={clsx("px-2 py-1 text-lg font-medium", {
                " hover:text-red-400 hover:bg-red-100 ":
                  tab.segment !== segment,
                "bg-red-400 text-white": tab.segment === segment,
              })}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
