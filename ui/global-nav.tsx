import Image from "next/image";
import Link from "next/link";
import UserMenuDropdown from "./user-menu-dropdown";
import TextSearchButton from "./text-search-button";
import MenuButton from "./menu-button";

export default async function GlobalNav() {
  return (
    <header className=" bg-white sticky top-0 w-full  shadow-lg z-20 border-t border-solid border-gray-100">
      <nav className=" flex flex-row mx-auto max-w-[1110px] h-[60px]  px-[10px] items-center">
        <Link href={"/"}>
          <Image
            src={"/op-logo.png"}
            alt="OP Logo"
            width={40}
            height={40}
            priority={true}
          ></Image>
        </Link>
        <ul className=" grow  relative flex flex-row  justify-end items-center">
          <li>
            <TextSearchButton />
          </li>
          <li>
            <MenuButton />
          </li>
          <li>
            <UserMenuDropdown />
          </li>
        </ul>
      </nav>
    </header>
  );
}
