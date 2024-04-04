"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className=" fixed top-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-40">
      <button
        onClick={() => router.back()}
        className=" absolute right-0 top-0 p-2"
      >
        <XMarkIcon className=" h-8 w-8 hover:text-red-500" />
      </button>
      <div>{children}</div>
    </div>
  );
}
