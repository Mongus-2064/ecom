import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div>
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/">
            <p className="font-bold ubuntu-bold text-4xl">
              Code<span className="text-blue-500 ubuntu-bold">Rider</span>
            </p>
          </Link>

          {/* NAVLINKS */}

          <div className="flex gap-6">
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

    {/* RIGHT-SIDE-NAVLINKS */}

        <div className="flex gap-4">
          <div>
            <input type="text"/>
            <button>Find</button>
          </div>
          <div>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
