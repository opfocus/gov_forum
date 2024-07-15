import { Route } from "next";
import Link from "next/link";
import Router from "next/router";

export default function NotFound() {
  return (
    <div className=" mt-8 space-y-6">
      <h2 className=" text-2xl font-bold">
        [TBA]Oops! That page doesn’t exist or is private.
      </h2>
      <section className=" flex flex-col gap-6 lg:flex-row">
        <div className=" flex-1 space-y-2">
          <h2 className=" text-lg font-semibold">Popular</h2>
          <ul className=" space-y-2">
            <li className=" flex flex-col">
              <Link href={"/" as Route} className=" text-sky-600">
                Popular tipic title here
              </Link>
              <Link
                href={"/" as Route}
                className=" text-sm text-gray-500 dark:text-gray-200"
              >
                Category and tag here
              </Link>
            </li>
            <li className=" flex flex-col">
              <Link href={"/" as Route} className=" text-sky-600">
                Popular tipic title here
              </Link>
              <Link
                href={"/" as Route}
                className=" text-sm text-gray-500 dark:text-gray-200"
              >
                Category and tag here
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex-1 space-y-2">
          <h2 className=" text-lg font-semibold">Recent</h2>
          <ul className=" space-y-2">
            <li className=" flex flex-col">
              <Link href={"/" as Route} className=" text-sky-600">
                Recent topic title here
              </Link>
              <Link
                href={"/" as Route}
                className=" text-sm text-gray-500 dark:text-gray-200"
              >
                Category and tag here
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <form action="/search" className="space-y-2">
        <h2 className=" text-lg font-semibold">Search this site</h2>
        <div className=" flex gap-2">
          <input
            type="text"
            className=" border border-solid border-gray-200 bg-inherit focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-gray-500 focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
            name="q"
          />
          <button type="submit" className=" bg-sky-600 px-2 py-1 text-white">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
