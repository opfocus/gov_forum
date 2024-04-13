"use client";
import { before } from "node:test";
import React from "react";

export default function TestDialog() {
  var a = "#0088CC";

  const beforeStyle = {
    content: '"hello"',
    display: "block",
    width: "20px",
    height: "20px",
    backgroundColor: a,
    marginRight: "5px"
  };

  return (
    <div className=" mt-8">
      <p className=" text-[#0088CC]">test page</p>
      <p style={beforeStyle}>Before content</p>
    </div>
  )
}
