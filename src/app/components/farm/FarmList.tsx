"use client";

import { Farm } from "@/app/types/farm";
import FarmCard from "./FarmCard";

interface FarmListProps {
  farms: Farm[];
  loading: boolean;
}

export default function FarmList({ farms, loading }: FarmListProps) {
  if (loading) return <div className="p-4">로딩 중...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {farms.map((farm) => (
        <FarmCard key={farm.id} farm={farm} />
      ))}
    </div>
  );
}
