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
            className="px-2 py-1 flex flex-row gap-1 bg-blue-400 text-white hover:bg-blue-500"
            onClick={() => {
              handleCreate(), setStatus("creating");
            }}
          >
            <PlusIcon className=" w-6 h-6" />
            Create Topic
          </button>
        ) : (
          <button
            disabled={true}
            className="px-2 py-1 flex flex-row gap-1 bg-blue-400 text-white hover:bg-blue-500 cursor-not-allowed"
            onClick={() => {
              handleCreate(), setStatus("creating");
            }}
          >
            <PlusIcon className=" w-6 h-6" />
            Create Topic
          </button>
        )}
      </div>
    );
  else if (status === "creating") return <Processing />;
  else 
  return (
    <Link
      className="px-2 py-1 flex flex-row gap-1 bg-blue-400 text-white hover:bg-blue-500"
      href={"/latest"}
      onClick={() => setStatus("create")}
    >
      Check
    </Link>
  );
}
