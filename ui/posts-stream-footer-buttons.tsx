"use client";

import { Button } from "@/ui/custom-compoment";
import {
  LinkIcon,
  BookmarkIcon,
  FlagIcon,
  ArrowUturnLeftIcon,
  BellIcon,
} from "@heroicons/react/16/solid";

export default function PostsStreamFooterButtons() {
  return (
    <div className=" space-y-2">
      <div className=" flex gap-2">
        <Button handleEvent={() => console.log(" post stream TBA")}>
          <LinkIcon className=" h-5 w-5 shrink-0" />
          <span>Share</span>
        </Button>
        <Button handleEvent={() => console.log(" post stream TBA")}>
          <BookmarkIcon className=" h-5 w-5 shrink-0" />
          <span>Bookmark</span>
        </Button>
        <Button handleEvent={() => console.log(" post stream TBA")}>
          <FlagIcon className=" h-5 w-5 shrink-0" />
          <span>Flag</span>
        </Button>
        <Button handleEvent={() => console.log(" post stream TBA")}>
          <ArrowUturnLeftIcon className=" h-5 w-5 shrink-0" />
          <span>Reply</span>
        </Button>
      </div>
      <div className=" flex gap-2">
        <Button handleEvent={() => console.log(" post stream TBA")}>
          <BellIcon className=" h-5 w-5 shrink-0" />
          <span>Tracking</span>
        </Button>
        <span>You will see a count of new replies because you read this topic.</span>
      </div>
    </div>
  );
}
