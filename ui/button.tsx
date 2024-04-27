"use client";

import { Route } from "next";
import Link from "next/link";
import React from "react";

export { LinkButton, HoverScaleButton };

// Sky link button
function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href as Route}
      className="bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
    >
      {children}
    </Link>
  );
}

//Global nav button within icon
function HoverScaleButton({
  children,
  state,
  handle,
}: {
  children: React.ReactNode;
  state?: boolean;
  handle: (state?: boolean) => void;
}) {
  return (
    <button
      className="p-1 text-gray-400 hover:scale-125 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
      onClick={()=>state? handle(!state): handle()}
    >
      {children}
    </button>
  );
}
