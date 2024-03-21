"use client"

import { XMarkIcon } from "@heroicons/react/16/solid"
import { useRouter } from "next/navigation"

export default function Modal({children}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <div className=" fixed z-40 top-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
      <button
        onClick={() => router.back()}
        className=" absolute p-2 top-0 right-0"
      >
        <XMarkIcon className=" w-8 h-8 hover:text-red-500" />
      </button>
      <div>{children}</div>
    </div>
  )
}