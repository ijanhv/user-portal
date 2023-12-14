"use client";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "../Container";
import { BsArrowUpRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-slate-900 z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <h1 className="text-2xl font-semibold text-white font-Poppins">
              {" "}
              Nivaran.{" "}
            </h1>
            <div className="flex gap-4 items-center">
              <div className="rounded-full  px-3 py-2 text-sm leading-6 text-indigo-200 ring-1  hover:shadow-md">
                <Link
                  href="/portal"
                  className="text-sm text-indigo-200 flex gap-2  items-center font-semibold"
                >
                  Get Started <BsArrowUpRight className=" " />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
