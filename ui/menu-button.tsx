"use client";

import { Bars3Icon } from "@heroicons/react/16/solid";
import { Menu } from "@headlessui/react";
import MenuPanel from "./menu-panel";

export default function MenuButton() {
  return (
    <Menu as="div" className="inline-block ">
      <div>
        <Menu.Button className="p-1 text-gray-400 hover:scale-125 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
          <Bars3Icon className="w-8 " />
        </Menu.Button>
        <MenuPanel />
      </div>
    </Menu>
  );
}
