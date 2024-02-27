"use client";
/*
Test two methods of side(time-line) navigation. 
The first method uses router.push(). Test result: After navigation, unable to set the position of elements; the global navigation bar (nav) is covering some content. 
The second method uses window.scrollTo()
*/
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import type { Post } from "@/lib/type";
import { formatTimeSince } from "@/utils/formatTimeSince";
import { formatDate } from "@/utils/formatDate";

// test, Assume there are 10 posts in total
const sideScrollAreaHeight = 240;

export default function TimeLine({
  postCount,
  postsRecord,
  activePostId,
  setActivePostId,
}: {
  postCount: number;
  postsRecord: Post[];
  activePostId: string | undefined;
  setActivePostId: (id: string) => void;
}) {
  const [scrollerPosition, setScrollerPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  // const router = useRouter()

  useEffect(() => {
    if (activePostId) {
      setScrollerPosition(
        parsePostId(activePostId) * (sideScrollAreaHeight / postCount)
      );
    }
  }, [activePostId]);

  const scrollerHeight = sideScrollAreaHeight / postCount;

  // Math.floor(scrollerPosition / (sideScrollAreaHeight / postCount))
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
    setActivePostId(
      `post-${Math.floor(
        scrollerPosition / (sideScrollAreaHeight / postCount)
      )}`
    );
  };

  const handleClick = (e: React.MouseEvent) => {
    const parentTop = getParentTop();

    if (parentTop !== null) {
      const newRelativeTopToParent = e.clientY - parentTop;

      setActivePostId(
        `post-${Math.floor(
          newRelativeTopToParent / (sideScrollAreaHeight / postCount)
        )}`
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
    <div className=" sticky top-24 right-0 h-full">
      <div className=" flex flex-col gap-2 ">
        <div className=" text-base text-gray-400 font-normal select-none">
          Aug 2022
        </div>
        <div
          id="side-scroll-area"
          style={{ height: `${sideScrollAreaHeight}px` }}
        >
          <div
            className=" border-l-2 border-solid border-blue-200 cursor-pointer"
            style={{ height: `${scrollerPosition}px` }}
            onClick={handleClick}
          ></div>
          <div
            id="side-scroller"
            className=" border-l-4 border-solid border-blue-400 flex items-center cursor-ns-resize"
            style={{
              marginLeft: "-2px",
              height: `${scrollerHeight}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className=" pl-2 select-none flex flex-col">
              <div>
                {Math.floor(
                  scrollerPosition / (sideScrollAreaHeight / postCount)
                ) + 1}{" "}
                / {postCount}
              </div>
              <div className=" text-gray-400 text-base font-normal">
                {formatDate(postsRecord[Math.floor(
                  scrollerPosition / (sideScrollAreaHeight / postCount)
                )].created_at)}
              </div>
            </div>
          </div>
          <div
            className=" border-l-2 border-solid border-blue-200 cursor-pointer"
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
      <div>{/* ... */}</div>
    </div>
  );
}
