"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Menu } from "@headlessui/react";
import TextSearch from "./text-search";

export default function TextSearchButton({style}: {
  style: {
    button:string,
    icon:string
  }
}) {
  return (
    <Menu as="div" className="inline-block ">
      <div>
        <Menu.Button className={style.button}>
          <MagnifyingGlassIcon className={style.icon} />
        </Menu.Button>
        <TextSearch />
      </div>
    </Menu>
  );
}
