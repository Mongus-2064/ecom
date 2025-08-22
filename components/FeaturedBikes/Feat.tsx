"use client"

import { superbike } from "@/app/data/bike";
import React from "react";
import { motion } from "framer-motion";
import SuperBikeCard from "./SuperBikeCard";
import { Bike } from "@/types/types";

export default function Feat() {
  return (
    <>
      <div>
        <p className="text-center ubuntu-bold text-5xl text-white mt-12 mb-12">
          Featured Bikes
        </p>
      </div>

      <div className="grid  md:grid-cols-2 xl:grid-cols-3  gap-50 w-full place-items-center mt-7 ">
        {superbike.map((bike: Bike) => (
          <motion.div
            key={bike.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale:1 }}
            transition={{ duration: 0.5 , ease:"easeOut"}}
            viewport={{once: true}}
            className=" p-4 rounded-md "
          >
            <SuperBikeCard bike={bike} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
