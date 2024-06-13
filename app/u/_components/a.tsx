"use client";

// This component is only for resolving the inabilitfy to pass functions from server-side components to client-side components inside the icons.
import Link from "next/link";
import clsx from "clsx";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import { Route } from "next";

export default function A({
  path,
  slug,
  children,
  isNav1,
}: {
  path: string;
  slug: string;
  children: React.ReactNode;
  isNav1: boolean;
}) {
  const href = path + "/" + slug;
  const segment = useSelectedLayoutSegment();
  const params = useParams()
  const isActive = segment === slug || slug === "" && params.nav2 === undefined;

  return (
    <Link
      className={clsx(
        " flex flex-1 place-items-center border-b-2 border-solid hover:text-orange-300 ",
        {
          " border-orange-400 text-orange-400 ": isActive,
          " border-white dark:border-gray-700 hover:border-orange-300": !isActive,
          " p-2": isNav1,
          " p-3": !isNav1,
        },
      )}
      href={href as Route}
    >
      {children}
    </Link>
  );
}
