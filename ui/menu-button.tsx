'use client'

import { MenuIcon } from "@heroicons/react/outline";
import { Menu} from '@headlessui/react'
import MenuPanel from "./menuPanel";

export default function MenuButton() {

  return (
    <Menu as="div" className="inline-block ">
    <div>
    <Menu.Button className=" p-1 text-gray-400 hover:text-gry-700 hover:bg-gray-200 cursor-not-allowed"
    title="TBA">
      <MenuIcon className=" block w-8 " />
    </Menu.Button>
    <MenuPanel />
    </div>
    </Menu>
  )
}