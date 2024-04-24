'use client';

import type { Item } from '@/lib/tab-group-data';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { Route } from 'next';

export default function Tab({
  path,
  parallelRoutesKey,
  item,
}: {
  path: string;
  parallelRoutesKey?: string;
  item: Item;
}) {
  const segment = useSelectedLayoutSegment(parallelRoutesKey);

  const href = item.slug ? path + '/' + item.slug : path;
  
  const isActive =
    // Example home pages e.g. `/`
    (item.name==="Categories" && segment === null) ||
    segment === item.segment ||
    // Nested pages e.g. `/layouts/electronics`
    segment === item.slug;

  return (
    <Link
      href={href as Route}
      className={clsx("px-2 py-1 text-lg font-medium", {
        " hover:bg-red-100 hover:text-red-400 ":
          !isActive,
        "bg-red-400 text-white": isActive,
      })}
    >
      {item.name}
    </Link>
  );
};
