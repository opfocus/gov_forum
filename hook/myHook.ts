"use client";

import { useEffect, useState } from "react";
import * as Realm from "realm-web";
import { usePathname } from "next/navigation";

export { useApp, useDetailsClickOutside, useFetch };
function useApp(): Realm.App | null {
  const [app, setApp] = useState<Realm.App | null>(null);
  // Run in useEffect so that App is not created in server-side environment
  useEffect(() => {
    setApp(Realm.getApp(process.env.NEXT_PUBLIC_APP_ID!));
  }, []);
  return app;
}

function useDetailsClickOutside(id: string) {
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: any) {
      const details = document.getElementById(id);
      const targetElement = event.target;

      if (details && !details.contains(targetElement)) {
        details.removeAttribute("open");
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); 

  useEffect(() => {
    const details = document.getElementById(id);
    if (details) {
      details.removeAttribute("open");
    }
  }, [pathname]); 
}

function useFetch(url: string) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return data;
}
