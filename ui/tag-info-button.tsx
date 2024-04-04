"use client";

import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function TagInfoButton() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const length = params.slug.length;
  return (
    <div>
      <button
        className="h-full bg-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-400 hover:text-white "
        onClick={() => setIsOpen(!isOpen)}
        title="show tag info"
      >
        <InformationCircleIcon className="h-5 w-5" />
      </button>
      {isOpen && (
        <section
          className=" absolute left-0 my-4 flex w-full flex-col gap-4 border border-solid border-gray-100
          bg-white p-7 shadow-md"
        >
          <div className=" text-2xl">{params.slug[length - 1]}</div>
          <div className=" text-sm">
            This tag isn't restricted to any categories, and has no synonyms.
          </div>
        </section>
      )}
    </div>
  );
}
