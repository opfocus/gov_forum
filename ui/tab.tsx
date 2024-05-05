// TODO: Need optimization, abstraction

"use client";

import type { Item } from "@/lib/tab-group-data";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { Route } from "next";
import { URLIngredients, generateNextURL } from "@/utils/url";
import { useParams } from "next/navigation";

export default function Tab({
  currentURLIngredients,
  path,
  parallelRoutesKey,
  item,
}: {
  currentURLIngredients?: URLIngredients;
  path: string;
  parallelRoutesKey?: string;
  item: Item;
}) {
  const slug = useParams().slug;
  const segment = useSelectedLayoutSegment(parallelRoutesKey);

  // path = dd ? generateNextURL(currentURLIngredients)
  let href = "";
  let isActive;

  if (currentURLIngredients) {
    href = slug
      ? generateNextURL({
          ...currentURLIngredients,
          sort: item.slug ? item.slug : "",
          excipients: "l",
        })
      : item.slug
        ? path + item.slug
        : path;

    isActive =
      // Example home pages e.g. `/`
      (item.name === "Categories" && segment === null) ||
      segment === item.segment ||
      // Nested pages e.g. `/layouts/electronics`
      segment === item.slug ||
      currentURLIngredients.sort === item.segment ||
      (slug && currentURLIngredients.sort === "" && item.segment === "latest");
  }
  else {
    href = item.slug? path +"/" + item.slug : path
    isActive =
    // Example home pages e.g. `/`
    segment === item.segment ||
    // Nested pages e.g. `/layouts/electronics`
    segment === item.slug 
  }
  return (
    <Link
      href={href as Route}
      className={clsx("px-2 py-1 text-lg font-medium", {
        " hover:bg-red-100 hover:text-red-400 ": !isActive,
        "bg-red-400 text-white": isActive,
      })}
    >
      {item.name}
    </Link>
  );
}
