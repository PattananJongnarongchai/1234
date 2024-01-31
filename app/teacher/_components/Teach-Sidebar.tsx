"use client";
import { Hide, Link, Slide } from "@chakra-ui/react";
import React from "react";

function TSidebar() {
  return (
    <>
      <Hide below="lg">
        <div className="flex-row p-4 h-full shadow-r-lg">
          Menu
          <ul>
            <li>
              <Link href="/teacher/dashboard">แดชบอร์ด</Link>
            </li>
            <li>
              <Link href="#">รายชื่อนักศึกษา</Link>
            </li>
            <li>
              <Link href="#">สถานะของคำร้อง</Link>
            </li>
            <li>
              <Link href="#">สถานประกอบการณ์</Link>
            </li>
          </ul>
        </div>
      </Hide>
    </>
  );
}

export default TSidebar;
