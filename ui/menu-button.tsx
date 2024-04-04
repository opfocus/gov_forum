"use client";

import { Bars3Icon } from "@heroicons/react/16/solid";
import { Menu } from "@headlessui/react";
import MenuPanel from "./menu-panel";

export default function MenuButton() {
  return (
    <Menu as="div" className="inline-block ">
      <div>
        <Menu.Button className=" hover:text-gry-700 p-1 text-gray-400 hover:bg-gray-200">
          <Bars3Icon className=" block w-8 " />
        </Menu.Button>
        <MenuPanel />
      </div>
    </Menu>
  );
}
