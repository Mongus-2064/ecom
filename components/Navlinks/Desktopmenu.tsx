"use client"

import { SearchIcon, UserCircle2, UserPlus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Desktopmenu() {
  return (
    <div>
         <nav className="flex justify-between items-center gap-6 ">
        <div className="flex items-center gap-4">
          <Link href="/">
            <p className="font-bold text-red-500 ubuntu-bold text-2xl md:text-4xl">
              Code<span className="text-blue-500 ubuntu-bold">Rider</span>
            </p>
          </Link>

          {/* NAVLINKS */}

          <div className=" gap-6 hidden lg:flex items-center bg-white rounded-md py-1 px-5">
            <Link
              className="hover:bg-black hover:text-white p-2  rounded-md  border-b border-transparent  transition-all duration-150"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:bg-black hover:text-white p-2   rounded-md border-b border-transparent  transition-all duration-300"
              href="/shop"
            >
              Shop
            </Link>
            <Link
              className="hover:bg-black hover:text-white p-2 rounded-md border-b border-transparent  transition-all duration-150"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="hover:bg-black hover:text-white rounded-md p-2  border-b border-transparent transition-all duration-150"
              href="/faq"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* RIGHT-SIDE-NAVLINKS */}

        <div className=" gap-4 items-center  hidden lg:flex">
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="Search item in one click "
              className="px-2 py-1 rounded-md border text-white border-white placeholder:text-white"
            />
            <button className="hover:cursor-pointer bg-white rounded-md shadow-md p-1">
              <SearchIcon className="text-black" />
            </button>
          </div>
          <div className=" gap-4 hidden lg:flex">
            <Link
              className="flex gap-2 hover:bg-blue-600 items-center bg-blue-500 text-white p-2 rounded-md"
              href="/login"
            >
              <UserCircle2 size={19} />
              Login
            </Link>
            <Link
              className="flex gap-2 items-center hover:bg-blue-600  bg-blue-500 text-white p-2 rounded-md"
              href="/signup"
            >
              <UserPlus size={19} />
              Signup
            </Link>
          </div>
        </div>
      </nav>
     
    </div>
  );
}
