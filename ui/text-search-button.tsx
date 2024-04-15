"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Menu } from "@headlessui/react";
import TextSearch from "./text-search";

export default function TextSearchButton() {
  return (
    <Menu as="div" className="inline-block ">
      <div>
        <Menu.Button className="p-1 text-gray-400 hover:scale-125 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
          <MagnifyingGlassIcon className="w-8" />
        </Menu.Button>
        <TextSearch />
      </div>
    </Menu>
  );
}
