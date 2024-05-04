"use client";

import { Route } from "next";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

export { LinkButton, HoverScaleButton, Button, Input };

function Button({
  children,
  handleEvent,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  handleEvent: (evnet: any | undefined) => void;
}) {
  return (
    <button
      disabled={disabled}
      className={clsx("bg-sky-600 px-2 py-1 text-white hover:bg-sky-700", {
        " cursor-not-allowed": disabled,
      })}
      onClick={handleEvent}
    >
      {children}
    </button>
  );
}

function Input({
  id,
  name,
  placeholder,
  handleChange,
}: {
  id?: string;
  name?: string;
  placeholder?: string;
  handleChange?: (event?: any) => void;
}) {
  return (
    <input
      autoFocus
      id={id}
      type="text"
      name={name}
      className=" w-full border border-solid border-gray-300 bg-inherit px-2 py-1 text-gray-600  placeholder:text-gray-300 focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-gray-400 dark:text-gray-100 dark:placeholder:text-gray-400 focus:dark:border-sky-600"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

// Sky link button
function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href as Route}
      className="bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
    >
      {children}
    </Link>
  );
}

//Global nav button within icon
function HoverScaleButton({
  children,
  state,
  handle,
}: {
  children: React.ReactNode;
  state?: boolean;
  handle: (state?: boolean) => void;
}) {
  return (
    <button
      className="p-1 text-gray-400 hover:scale-125 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
      onClick={() => (state ? handle(!state) : handle())}
    >
      {children}
    </button>
  );
}
