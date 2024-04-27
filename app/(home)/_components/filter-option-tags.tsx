"use client";

import Link from "next/link";
import { Route } from "next";

export default function FilterOptionsTags({
  href,
  tagName,
}: {
  href: string;
  tagName:string;
}) {
  return (
    <Link
    href={href as Route}
    className="block px-2 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
  >
    <div className=" text-sm">{tagName}</div>
  </Link>
  );
}
