import { SearchIcon, UserCircle2, UserPlus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Mobilemenu() {
  return (
    <div className=" lg:hidden flex ">
      <nav className="flex flex-col justify-center z-10 items-center bg-slate-200  w-full p-4 rounded-md">
        <div className="flex items-center gap-4">
          {/* NAVLINKS */}

          <div className=" flex flex-col">
            <Link
              className="hover:text-blue-500 p-2  border-b border-transparent hover:border-blue-500 transition-transform duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-blue-500 p-2 border-b border-transparent hover:border-blue-500 transition-transform duration-300"
              href="/shop"
            >
              Shop
            </Link>
            <Link
              className="hover:text-blue-500 p-2 border-b border-transparent hover:border-blue-500 transition-transform duration-300"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="hover:text-blue-500 p-2  border-b border-transparent hover:border-blue-500 transition-transform duration-500"
              href="/faq"
            >
              FAQ
            </Link>
          </div>
        </div>

        <div className="  items-center  flex flex-col">
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="Search item in one click "
              className="px-2 py-1 rounded-md border border-gray-500 placeholder:text-gray-500"
            />
            <button className="hover:cursor-pointer bg-gray-300 rounded-md shadow-md p-1">
              <SearchIcon className="text-gray-400" />
            </button>
          </div>
          <div className="flex flex-col mt-4 gap-4">
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
