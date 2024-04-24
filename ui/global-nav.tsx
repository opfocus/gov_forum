"use client";

import Image from "next/image";
import Link from "next/link";
import UserMenu from "@/ui/user-menu";
import TextSearch from "@/ui/text-search";
import Menu from "@/ui/menu";
import ThemeSwitch from "@/ui/theme-switch";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoginButton from "@/ui/login-button";

export default function GlobalNav() {
  const { user, error, isLoading } = useUser();
  const globalNavButtonStyle = {
    button:
      "p-1 text-gray-400 hover:scale-125 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white",
    icon: "w-8",
  };

  return (
    <header className=" sticky top-0 z-10 w-full border-t border-solid border-gray-100 bg-inherit shadow-lg">
      <nav className=" relative mx-auto flex h-16 w-full items-center justify-between px-3 sm:max-lg:max-w-xl lg:max-xl:max-w-4xl  xl:max-w-6xl">
        <Link href="/" className=" shrink-0">
          <Image
            src={"/op-logo.png"}
            alt="OP Logo"
            width={40}
            height={40}
            priority={true}
          ></Image>
        </Link>
        <div className="flex items-center">
          <ThemeSwitch style={globalNavButtonStyle} />
          <TextSearch style={globalNavButtonStyle} />
          <Menu style={globalNavButtonStyle} />
          {user ? <UserMenu  avantar={user.picture}/> : <LoginButton />}
        </div>
      </nav>
    </header>
  );
}
