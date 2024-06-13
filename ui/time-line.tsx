"use client";
/*
Test two methods of side(time-line) navigation. 
The first method uses router.push(). Test result: After navigation, unable to set the position of elements; the global navigation bar (nav) is covering some content. 
The second method uses window.scrollTo()/.scrollIntoView()
*/
import { useEffect, useState } from "react";
import type { Post } from "@/lib/type";
import { formatTimeSince } from "@/utils/formatTimeSince";
import { formatDate } from "@/utils/formatDate";
import { Button } from "./custom-compoment";
import { ArrowUturnLeftIcon, BellIcon } from "@heroicons/react/16/solid";

const sideScrollAreaHeight = 240;

export default function TimeLine({
  postCount,
  postsRecord,
  activePostId,
  setNextPostIndex,
}: {
  postCount: number;
  postsRecord: Post[];
  activePostId: string | undefined;
  setNextPostIndex: any;
}) {
  const [scrollerPosition, setScrollerPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);

  useEffect(() => {
    if (activePostId) {
      setScrollerPosition(
        parsePostId(activePostId) * (sideScrollAreaHeight / postCount),
      );
    }
  }, [activePostId]);

  const scrollerHeight = sideScrollAreaHeight / postCount;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaY = e.clientY - dragStartY;
      const newScrollerPosition = scrollerPosition + deltaY;

      if (
        newScrollerPosition >= 0 &&
        newScrollerPosition <= sideScrollAreaHeight
      )
        setScrollerPosition(newScrollerPosition);
      setDragStartY(e.clientY);
    }
  };
  const handleMouseLeave = () => {
    setIsDragging(false);

    setNextPostIndex(
      `post-${Math.floor(
        scrollerPosition / (sideScrollAreaHeight / postCount),
      )}`,
    );
  };

  const handleClick = (e: React.MouseEvent) => {
    const parentTop = getParentTop();

    if (parentTop !== null) {
      const newRelativeTopToParent = e.clientY - parentTop;

      setNextPostIndex(
        `post-${Math.floor(
          newRelativeTopToParent / (sideScrollAreaHeight / postCount),
        )}`,
      );
    }
  };

  const getParentTop = () => {
    const parentElement = document.getElementById("side-scroll-area");
    if (parentElement) {
      const parentRect = parentElement.getBoundingClientRect();
      return parentRect.top;
    }
    return null;
  };

  function parsePostId(id: string) {
    const match = id!.match(/^post-(\d+)$/);

    return parseInt(match![1]);
  }

  return (
    <div className=" hidden lg:block sticky right-0 top-24 h-full">
      <div className=" flex flex-col gap-2 ">
        <div className=" select-none text-base font-normal text-gray-400">
          Aug 2022
        </div>
        <div
          id="side-scroll-area"
          style={{ height: `${sideScrollAreaHeight}px` }}
        >
          <div
            className=" cursor-pointer border-l-2 border-solid border-blue-200"
            style={{ height: `${scrollerPosition}px` }}
            onClick={handleClick}
          ></div>
          <div
            id="side-scroller"
            className=" flex cursor-ns-resize items-center border-l-4 border-solid border-blue-400"
            style={{
              marginLeft: "-2px",
              height: `${scrollerHeight}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className=" flex select-none flex-col pl-2">
              <div>
                {Math.floor(
                  scrollerPosition / (sideScrollAreaHeight / postCount),
                ) + 1}{" "}
                / {postCount}
              </div>
              <div className=" text-base font-normal text-gray-400">
                {formatDate(
                  postsRecord[
                    Math.floor(
                      scrollerPosition / (sideScrollAreaHeight / postCount),
                    )
                  ].created_at,
                )}
              </div>
            </div>
          </div>
          <div
            className=" cursor-pointer border-l-2 border-solid border-blue-200"
            style={{
              height: `${
                sideScrollAreaHeight - scrollerHeight - scrollerPosition
              }px`,
            }}
            onClick={handleClick}
          ></div>
        </div>
        <div className=" text-gray-400">
          {formatTimeSince(postsRecord[postCount - 1].created_at)}
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button handleEvent={()=>console.log("TBA, topic replay")}>
          <ArrowUturnLeftIcon className=" w-5 h-5" />
        </Button>
        <Button handleEvent={() =>console.log("TBA, topic notification")}>
          <BellIcon className=" w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
