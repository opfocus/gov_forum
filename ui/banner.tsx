"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Banner() {
  const [isOpenBanner, setIsOpenBanner] = useState(true);

  if (isOpenBanner)
    return (
      <section className=" prose prose-sm prose-invert relative mt-8 max-w-none bg-[#d1f0ff] p-4 pr-8 text-black">
        <p>
          Welcome to the Optimism Collective! You can learn more about the
          Collective's Vision and Governance Processes here.
        </p>
        <p>
          We are currently in a Reflection Period (September 28th-December 22nd)
          and will kick-off Season 5 on January 4th, 2024; meanwhile, you can
          read our Guide to Season 5 here. Governance Fund grants will be
          processed again starting in early January 2024.
        </p>
        <button
          className=" absolute right-0 top-0 p-1"
          onClick={() => setIsOpenBanner(false)}
        >
          <XMarkIcon className=" h-6 w-6 text-gray-400 hover:text-gray-700" />
        </button>
      </section>
    );

  return null;
}
