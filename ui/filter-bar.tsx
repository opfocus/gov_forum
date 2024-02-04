'use client'

import Link from "next/link";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import type { Item } from "./filter-bars";

export default function FilterBar({ item }: { item: Item }) {
  const href = '/' + item.slug
  const segment = useSelectedLayoutSegment()
  const isActive = (item.slug === 'categories' && segment === null) || item.slug === segment

  return (
        <Link
          href={href}
          className={clsx("px-2 py-1 text-lg font-medium", {
            ' hover:text-red-400 hover:bg-red-100 ': !isActive,
            'bg-red-400 text-white': isActive, 
          })}
        >
          {item.tab}
        </Link>
  );
}
