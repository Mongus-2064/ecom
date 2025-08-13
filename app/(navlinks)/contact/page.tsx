"use client"


import React from "react";
import {motion} from "framer-motion"

export default function Contact() {
  return (
    <motion.div
      animate= {{opacity:1 , y:0}}
      initial= {{opacity:0 , y:30}}
      transition={{duration: 0.5 , delay: 0.1}}
      >
    <div className="flex justify-center">
      
<div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg z-99">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black outline-none"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black outline-none resize-none"
              placeholder="Type your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </motion.div>

      
  );
}
