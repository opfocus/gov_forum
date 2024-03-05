"use client"

// This component is only for resolving the inability to pass functions from server-side components to client-side components inside the icons.
import Link from "next/link";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";

export default function A({
  path,
  slug,
  children,
  isNav1,
}: {
  path: string;
  slug: string;
  children: React.ReactNode;
  isNav1:boolean
}) {
  const href = path + "/" + slug;
  const segment = useSelectedLayoutSegment();
  const isActive = segment === slug || slug === "";

  return (
    <Link
      className={clsx(" flex-1 flex place-items-center border-b-2 border-solid", {
        " border-orange-400 text-orange-400 ": isActive,
        " border-white ": !isActive,
        " p-2": isNav1,
        " p-3": !isNav1,
      })}
      href={href}
    >
      {children}
    </Link>
  )
}
