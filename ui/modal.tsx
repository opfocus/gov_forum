"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Login from "@/ui/login";

export default function Modal() {
  const router = useRouter();

  // Listen click event
  useEffect(() => {
    function handleClickOutside(event: any) {
      const element = document.getElementById("login");
      const targetElement = event.target;

      if (element && !element.contains(targetElement)) {
        router.back();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className=" fixed top-0 left-0 z-40 h-full w-full  bg-gray-600 bg-opacity-40 flex justify-center items-center">
        <Login />
    </div>
  );
}
