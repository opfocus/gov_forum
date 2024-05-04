"use client";

import { PlusIcon } from "@heroicons/react/16/solid";
import Processing from "./processing";
import Link from "next/link";
import { Button } from "./custom-compoment";

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
          <Button
          disabled={createable? false : true}
            handleEvent={() => {
              handleCreate(), setStatus("creating");
            }}
          >
            <div className=" flex gap-1 items-center">
              <PlusIcon className=" h-6 w-6 shrink-0" />
              <span>Create Topic</span>
            </div>
          </Button>
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
