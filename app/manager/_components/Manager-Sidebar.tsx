"use client";
import { Button, Hide, Link, Slide } from "@chakra-ui/react";
import React from "react";

function TSidebar() {
  return (
    <>
      <Hide below="lg">
        <div className="flex-row p-4 h-full shadow-r-lg">
          Menu
          <ul>
            <li>
              <Link href="#">
                <Button>แดชบอร์ด</Button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button>ข้อมูลของนักศึกษา</Button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button>สถานะของคำร้องของนักศึกษา</Button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button>สถานประกอบการณ์</Button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Button>จัดการปีการศึกษา</Button>
              </Link>
            </li>
          </ul>
        </div>
      </Hide>
    </>
  );
}

export default TSidebar;
