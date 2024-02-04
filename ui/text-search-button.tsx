"use client";

import { SearchIcon } from "@heroicons/react/outline";
import { Menu } from "@headlessui/react";
import TextSearch from "./text-search";

export default function TextSearchButton() {
  return (
    <Menu as="div" className="inline-block ">
      <div>
        <Menu.Button className=" p-1 text-gray-400 hover:text-gry-700 hover:bg-gray-200 cursor-not-allowed"
        title="TBA">
          <SearchIcon className=" block w-8" />
        </Menu.Button>
        <TextSearch />
      </div>
    </Menu>
  );
}
