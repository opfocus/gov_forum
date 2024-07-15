"use client";

import { useEffect } from "react";

export default function Erorr({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error)
  },[error])

  return (
    <div>
      {error.message}
      <button onClick={() => reset()} className=" block bg-sky-600">
        Try again
      </button>
    </div>
  );
}
