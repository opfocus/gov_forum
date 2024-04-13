import Image from "next/image";
import Link from "next/link";
import UserMenuDropdown from "./user-menu-dropdown";
import TextSearchButton from "./text-search-button";
import MenuButton from "./menu-button";
import Theme from "./theme";

export default async function GlobalNav() {
  return (
    <header className=" sticky top-0 z-50 w-full border-t border-solid border-gray-100 bg-inherit shadow-lg">
      <nav className=" mx-auto flex h-16 w-full flex-row items-center px-3 sm:max-lg:max-w-xl lg:max-xl:max-w-4xl  xl:max-w-6xl">
        <Link href={"/"} className=" shrink-0">
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
            <Theme />
          </li>
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
