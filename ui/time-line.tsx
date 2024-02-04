'use client'
import { useEffect, useState } from "react";

export default function TimeLine() {
  const [scrollerPosition, setScrollerPosition] = useState({top: 0});
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollerElement = document.getElementById('side-scroller')
      const scrollAreaElement = document.getElementById('side-scroll-area')

      if (scrollerElement && scrollAreaElement) {
        const scrollerRect = scrollerElement.getBoundingClientRect()
        const scrollAreaRect = scrollAreaElement.getBoundingClientRect()

        const relativeTop = scrollerRect.top - scrollAreaRect.top;
        setScrollerPosition({top:relativeTop})
      }
    }
    handleScroll()
  }, []);

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
      setScrollerPosition(prevPosition => ({
        top: prevPosition.top + deltaY,
      }));
      setDragStartY(e.clientY);
    }
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  console.log(isDragging)


  // 其他你的组件逻辑...

  return (
    <div>
      {/* 右侧内容导航 */}
      <div id="side-scroll-area" className=" bg-gray-50" style={{ height: '232px' }}>
        {/* ... */}
        {/* 使用 scrollPosition 来确定滚动位置，添加相应样式 */}
        <div  className=" border-l-2 border-solid border-blue-500" style={{ height: `${scrollerPosition.top}px` }}></div>
        <div 
          id='side-scroller'  
          className="border-l-4 border-solid border-blue-500" style={{ height: '50px', top: '20px',  cursor: isDragging ? 'grabbing' : 'grab'}}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp} 
          onMouseLeave={handleMouseLeave}
        >{scrollerPosition.top}</div>
        <div className=" border-l-2 border-solid border-blue-500" style={{ height: `${232-50 - scrollerPosition.top}px` }}></div>
        {/* ... */}
      </div>

      {/* 内容区域 */}
      <div>
        {/* ... */}
      </div>
    </div>
  );
}

