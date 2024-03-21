"use client";

import Link from "next/link";
import clsx from "clsx";
import FilterDropdownBarCategories from "@/ui/filter-dropdown-bar-categories";
import FilterDropdownBarAllTags from "@/ui/filter-dropdown-bar-all-tags";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useSelectedLayoutSegment } from "next/navigation";
import FilterDropdownBarSubCategories from "./filter-dropdown-bar-sub-categories";

export default function FilterBars() {
  const { user, error, isLoading } = useUser();
  const segment = useSelectedLayoutSegment();

  return (
    <nav className=" bg-white">
      <ul className="flex flex-row  gap-2 text-gray-700 my-2">
        <FilterDropdownBarCategories />
        <FilterDropdownBarSubCategories />
        <FilterDropdownBarAllTags />
        <li>
          <Link
            href={"/categories"}
            className={clsx("px-2 py-1 text-lg font-medium", {
              " hover:text-red-400 hover:bg-red-100 ":
                segment === "categories" || segment === null,
              "bg-red-400 text-white":
                segment === "categories" || segment === null,
            })}
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            href={"/latest"}
            className={clsx("px-2 py-1 text-lg font-medium", {
              " hover:text-red-400 hover:bg-red-100 ": segment === "latest",
              "bg-red-400 text-white": segment === "latest",
            })}
          >
            Latest
          </Link>
        </li>
        {user && (
          <li>
            <Link
              href={"/unread"}
              className={clsx("px-2 py-1 text-lg font-medium", {
                " hover:text-red-400 hover:bg-red-100 ": segment === "unread",
                "bg-red-400 text-white": segment === "unread",
              })}
            >
              Unread
            </Link>
          </li>
        )}
        <li>
          <Link
            href={"/top"}
            className={clsx("px-2 py-1 text-lg font-medium", {
              " hover:text-red-400 hover:bg-red-100 ": segment === "top",
              "bg-red-400 text-white": segment === "top",
            })}
          >
            Top
          </Link>
        </li>
      </ul>
    </nav>
  );
}
