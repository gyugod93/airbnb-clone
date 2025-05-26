"use client";

import FarmForm from "@/app/components/farm/FarmForm";
import FarmList from "@/app/components/farm/FarmList";
import { useFarms } from "./hooks/useFarms";

export default function Home() {
  const { farms, loading, createFarm } = useFarms();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">숙소 관리</h1>

      {/* 추가 폼 */}
      <FarmForm onSubmit={createFarm} />

      {/* 숙소 목록 */}
      <FarmList farms={farms} loading={loading} />
    </div>
  );
}
