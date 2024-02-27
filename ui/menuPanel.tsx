"use client";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

// test data tags
import type { Tag } from "@/lib/type"

export const tags: Tag[] = [
  {
    index: 0, 
    name: "no-tags"
  },
  {
    index: 1, 
    name: "not-passed"
  },
  {
    index: 3, 
    name: "passed"
  },
  {
    index: 4, 
    name: "season-4"
  },
  {
    index: 5, 
    name: "cycle-11"
  },
  {
    index: 6, 
    name: "cycle-10"
  },
  {
    index: 7, 
    name: "season-5"
  },
  {
    index: 8, 
    name: "season-3"
  },
  {
    index: 9, 
    name: "intent-3"
  },
]

export default function MenuPanel() {

const data = tags

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-96  origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1 px-2">
          <div className=" overflow-y-auto h-96 ">
            {data.map((item) => (
              <Menu.Item key={item.index}>
                {({ active }) => (
                  <Link
                    href={`/tag/${item.name}`}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-2 py-2 text-sm"
                    )}
                  >
                    <div className=" text-sm text-gray-700">{item.name}</div>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </div>
      </Menu.Items>
    </Transition>
  );
}
