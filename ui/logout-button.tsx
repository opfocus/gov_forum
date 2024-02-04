"use client";

import { LogoutIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function LogoutButton() {
  return (
    <Link
      className=" flex flex-row gap-1 items-center hover:bg-gray-200"
      href={"/api/auth/logout"}
    >
      <LogoutIcon className=" w-5 h-5 text-gray-400   " />
      <span className=" pl-2 text-base">Log Out</span>
    </Link>
  );
}
