import Image from "next/image";
import Link from "next/link";
import UserMenuDropown from "./user-menu-dropdown";
import TextSearchButton from "./text-search-button";
import MenuButton from "./menu-button";

export default async function GlobalNav() {

  return (
    <div
      className=" bg-white fixed top-0 w-screen py-2  shadow-lg z-20 "
      style={{ paddingRight: 17 }}
    >
      <div className=" flex justify-between mx-auto max-w-5xl px-2 lg:px-4 ">
        <Link href={"/"}>
          <Image
            src={"/op-logo.png"}
            alt="OP Logo"
            width={40}
            height={40}
          ></Image>
        </Link>
        <div className=" relative flex flex-row gap-2 items-center">
          <TextSearchButton />
          <MenuButton />
          <UserMenuDropown />
        </div>
      </div>
    </div>
  );
}
