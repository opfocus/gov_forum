"use client";

import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { useParams, } from "next/navigation";
import { useState } from "react";

export default function TagInfoButton() {
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)

  const length = params.slug.length
  return (
    <div>
      <button className="px-2 py-1 h-full bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-white "
        onClick={() => setIsOpen(!isOpen)}
        title="show tag info"
      >
        <InformationCircleIcon className="w-5 h-5" />
      </button> 
      {
        isOpen && (
          <section className=" absolute shadow-md left-0 w-full bg-white my-4 p-7 border border-solid border-gray-100
          flex flex-col gap-4">
           <div className=" text-2xl">{params.slug[length-1]}</div>
           <div className=" text-sm">This tag isn't restricted to any categories, and has no synonyms.</div>
         </section>
        )
      }
    </div>
  );
}
