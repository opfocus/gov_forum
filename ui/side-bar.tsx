// components/Sidebar.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [activePostId, setActivePostId] = useState("");
  console.log(activePostId);

  useEffect(() => {
    const handleScroll = () => {
      // 获取页面上的所有元素
      const allElements = document.querySelectorAll("[id]");

      // 遍历所有元素
      allElements.forEach((element) => {
        // 获取元素的位置信息
        const elementRect = element.getBoundingClientRect();

        // 判断元素的顶部边框是否达到视口顶端
        if (elementRect.top <= 0 && elementRect.bottom > 0) {
          // 满足条件，触发回调
          setActivePostId(`${element.id}`);
        }
      });
    };

    // 添加滚动事件监听器
    window.addEventListener("scroll", handleScroll);

    // 清理事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="  bg-slate-300">
      <Link href={`#post-5`} className=" sticky top-20 bg-gray-200">
      {activePostId} / 5
      </Link>
    </div>
  );
};
