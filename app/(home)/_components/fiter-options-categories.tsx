"use client";

import Link from "next/link";
import { Route } from "next";

export default function FilterOptionsCategories({
  herfPrefix,
  herfSuffix,
  item,
}: {
  herfPrefix: string;
  herfSuffix: string;
  item:any;
}) {
  return (
    <Link
      href={`${herfPrefix}/${item.slug}/${item.id}/${herfSuffix}` as Route}
      className="block px-2 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
    >
      <div className="flex flex-row items-center gap-1">
        <div
          className=" h-2 w-2"
          style={{ backgroundColor: `#${item.color}` }}
        ></div>
        <div className=" text-sm">{item.name}</div>
      </div>
    </Link>
  );
}
