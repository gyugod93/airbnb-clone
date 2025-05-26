"use client";

import { Farm } from "@/app/types/farm";

interface FarmCardProps {
  farm: Farm;
}

export default function FarmCard({ farm }: FarmCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={farm.imageURL}
        alt={farm.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{farm.title}</h3>
        <p className="text-gray-600">{farm.distance}km</p>
        <p className="text-gray-700 text-sm my-2">{farm.content}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold">₩{farm.price.toLocaleString()}/박</span>
          <span className="text-yellow-500">⭐ {farm.rating}</span>
        </div>
      </div>
    </div>
  );
}
