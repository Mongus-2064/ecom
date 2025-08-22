import { Bike } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  bike: Bike;
}

export default function SuperBikeCard({ bike }: Props) {
  return (
    <div className="relative h-full  flex flex-col bg-gray-900 shadow-lg border border-gray-800 rounded-xl w-86 overflow-hidden transition-transform transform hover:scale-105">
      {/* Bike Image */}
      <div className="relative h-96 overflow-hidden rounded-t-xl">
        <Image
          src={bike.image}
          alt="bike-image"
          className="h-full w-full object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
          width={600}
          height={0}
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col bg-gray-900">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-white text-xl font-bold">{bike.name}</p>
          <p className="text-cyan-400 text-xl font-semibold">{bike.price}</p>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{bike.description}</p>

        {/* Add to Cart Button */}
        <Link
          href="/cart"
          className="mt-6 w-full text-center py-3 px-5 rounded-lg bg-cyan-600 text-white font-medium shadow-lg hover:bg-cyan-500 hover:shadow-xl transition-all"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  );
}
