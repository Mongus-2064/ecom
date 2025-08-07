import { superbike } from "@/app/data/bike";
import React from "react";
import { motion } from "framer-motion";
import SuperBikeCard from "./SuperBikeCard";
import { Bike } from "@/types/types";

export default function Feat() {
  return (
    <>
      <div>
        <p className="text-center ubuntu-bold text-5xl text-white mt-12">
          Featured Bikes
        </p>
      </div>

      <div className="grid  md:grid-cols-2 2xl:grid-cols-3 gap-4 place-items-center mt-7 ">
        {superbike.map((bike: Bike) => (
          <motion.div
            key={bike.id}
            animate={{ opacity: 0, y: 10 }}
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 , delay: 0.1 }}
            className="bg-gray-800 p-4 rounded-md "
          >
            <SuperBikeCard bike={bike} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
