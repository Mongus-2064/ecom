import { Bike } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  bike: Bike;
}

export default function SuperBikeCard({ bike }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          className=" h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          src={bike.image}
          width={400}
          height={240}
          alt="superbike"
        />
      </div>

      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">{bike.name}</h2>
        <p className="text-sm text-gray-600">{bike.engine}</p>
        <p className="text-sm text-gray-500 line-clamp-2">{bike.description}</p>
        <p className="text-md font-medium text-blue-600">Rs. {bike.price}</p>

        <Link href={`/bikes/${bike.id}`} className="mt-2 w-full flex justify-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
          View Details
        </Link>
      </div>
    </div>
  );
}
