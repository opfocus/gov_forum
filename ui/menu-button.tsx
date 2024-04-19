"use client";

import { Bars3Icon } from "@heroicons/react/16/solid";
import { Menu } from "@headlessui/react";
import MenuPanel from "./menu-panel";

export default function MenuButton({style}: {
  style: {
    button:string,
    icon:string
  }
}) {
  return (
    <Menu as="div" className="inline-block ">
      <div>
        <Menu.Button className={style.button}>
          <Bars3Icon className={style.icon} />
        </Menu.Button>
        <MenuPanel />
      </div>
    </Menu>
  );
}
