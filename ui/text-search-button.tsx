"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Menu } from "@headlessui/react";
import TextSearch from "./text-search";

export default function TextSearchButton() {
  return (
    <Menu as="div" className="inline-block ">
      <div>
        <Menu.Button className=" hover:text-gry-700 p-1 text-gray-400 hover:bg-gray-200">
          <MagnifyingGlassIcon className=" block w-8" />
        </Menu.Button>
        <TextSearch />
      </div>
    </Menu>
  );
}
