"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Banner() {
  const [isOpenBanner, setIsOpenBanner] = useState(true);

  if (isOpenBanner)
    return (
      <section className=" prose prose-sm prose-invert relative mt-8 max-h-36 max-w-none overflow-y-auto bg-sky-200 p-4 pr-8 text-black">
        <p>
          Welcome to the Optimism Collective! You can learn more about the
          Collective's Vision and Governance Processes{" "}
          <a
            href="https://gov.optimism.io/t/welcome-to-the-optimism-collective-discourse/7"
            className=" text-sky-600 no-underline after:content-['↗']"
          >
            here
          </a>
          .
        </p>
        <p>
          We are currently in a Reflection Period (September 28th-December 22nd)
          and will kick-off Season 5 on January 4th, 2024; meanwhile, you can
          read our Guide to Season 5{" "}
          <a
            href="https://gov.optimism.io/t/guide-to-season-5/6894"
            className=" text-sky-600 no-underline after:content-['↗']"
          >
            here
          </a>
          . See{" "}
          <a
            href="https://community.optimism.io/docs/governance/get-a-grant/"
            className=" text-sky-600 no-underline after:content-['↗']"
          >
            Get a Grant
          </a>{" "}
          to learn more about applying for a Collective Grant.
        </p>
        <button
          className=" absolute right-0 top-0 p-2"
          onClick={() => setIsOpenBanner(false)}
        >
          <XMarkIcon className=" h-6 w-6 text-gray-400 hover:text-gray-700" />
        </button>
      </section>
    );

  return null;
}
