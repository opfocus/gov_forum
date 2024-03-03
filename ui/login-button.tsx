import { UserIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function LoginButton() {

  return (
    <div>
      <Link
        className=" bg-blue-400 text-white text-base px-2 py-1 ml-1 hover:bg-blue-500  flex flex-row gap-1 items-center"
        href={"/api/auth/login"}
      >
        <UserIcon className=" w-5 h-5" />
        <div className="  whitespace-nowrap">Log In</div>
      </Link>
    </div>
  );
}
