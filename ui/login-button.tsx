import { UserIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function LoginButton() {
  return (
    <div>
      <Link
        className=" ml-2 flex flex-row items-center gap-1 bg-sky-600 px-2  py-1 text-sm text-white hover:bg-sky-700"
        href={"/api/auth/login"}
      >
        <UserIcon className=" h-5 w-5 shrink-0" />
        <div className=" text-nowrap">Log In</div>
      </Link>
    </div>
  );
}
