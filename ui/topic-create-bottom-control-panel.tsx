"use client";

import { PlusIcon } from "@heroicons/react/16/solid";
import Processing from "./processing";
import Link from "next/link";

export default function TopicCreateBottomControlPanel({
  handleCreate,
  createable,
  status,
  setStatus,
}: {
  handleCreate: () => void;
  createable: boolean;
  status: string;
  setStatus: (status: string) => void;
}) {
  if (status === "create")
    return (
      <div>
        {createable ? (
          <button
            className="flex flex-row gap-1 bg-blue-400 px-2 py-1 text-white hover:bg-blue-500"
            onClick={() => {
              handleCreate(), setStatus("creating");
            }}
          >
            <PlusIcon className=" h-6 w-6" />
            Create Topic
          </button>
        ) : (
          <button
            disabled={true}
            className="flex cursor-not-allowed flex-row gap-1 bg-blue-400 px-2 py-1 text-white hover:bg-blue-500"
            onClick={() => {
              handleCreate(), setStatus("creating");
            }}
          >
            <PlusIcon className=" h-6 w-6" />
            Create Topic
          </button>
        )}
      </div>
    );
  else if (status === "creating") return <Processing />;
  else
    return (
      <Link
        className="flex flex-row gap-1 bg-blue-400 px-2 py-1 text-white hover:bg-blue-500"
        href={"/latest"}
        onClick={() => setStatus("create")}
      >
        Check
      </Link>
    );
}
