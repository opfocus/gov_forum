import Image from "next/image";
import Link from "next/link";
import UserMenuDropdown from "./user-menu-dropdown";
import TextSearchButton from "./text-search-button";
import MenuButton from "./menu-button";

export default async function GlobalNav() {
  return (
    <header className=" sticky top-0 z-20 w-full  border-t border-solid border-gray-100 bg-white shadow-lg">
      <nav className=" mx-auto flex h-[60px] max-w-[1110px] flex-row  items-center px-[10px]">
        <Link href={"/"}>
          <Image
            src={"/op-logo.png"}
            alt="OP Logo"
            width={40}
            height={40}
            priority={true}
          ></Image>
        </Link>
        <ul className=" relative  flex grow flex-row  items-center justify-end">
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
