"use client";
import { useState } from "react";

// test, Assume there are 10 posts in total
const id = 10;
const sideScrollAreaHeight = 240;

const scrollerHeight = sideScrollAreaHeight / id;

export default function TimeLine() {
  const [scrollerPosition, setScrollerPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);

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

      if (newScrollerPosition >= 0 && newScrollerPosition <= sideScrollAreaHeight)
        setScrollerPosition(newScrollerPosition);
      setDragStartY(e.clientY);
    }
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
    setScrollerPosition(
      Math.floor(scrollerPosition / (sideScrollAreaHeight / id)) *
        (sideScrollAreaHeight / id)
    );
  };

  const handleClick = (e: React.MouseEvent) => {
    const parentTop = getParentTop();

    if (parentTop !== null) {
      const newRelativeTopToParent = e.clientY - parentTop;
      setScrollerPosition(
        Math.floor(newRelativeTopToParent / (sideScrollAreaHeight / id)) *
          (sideScrollAreaHeight / id)
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

  return (
    <div className=" fixed w-full bg-gray-50">
      <div className=" flex flex-col gap-1 ">
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
            className=" bg-gray-300 border-l-4 border-solid border-blue-400 flex items-center cursor-ns-resize"
            style={{
              marginLeft: "-2px",
              height: `${scrollerHeight}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className=" pl-2 select-none">
              {scrollerPosition}
            </div>
          </div>
          <div
            className=" border-l-2 border-solid border-blue-200 cursor-pointer"
            style={{
              height: `${
                sideScrollAreaHeight -
                scrollerHeight -
                scrollerPosition
              }px`,
            }}
            onClick={handleClick}
          ></div>
        </div>
        {/* ... */}
      </div>
      <div>{/* ... */}</div>
    </div>
  );
}
