"use client";

import { Globe, Menu, Search, User } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [searchLocation, setSearchLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-red-500 text-2xl font-bold">Airbnb</div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium">
              당신의 공간을 에어비앤비하세요
            </button>
            <button>
              <Globe className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 border rounded-full p-2">
              <Menu className="w-5 h-5" />
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 검색바 */}
        <div className="py-4">
          <div className="flex items-center border rounded-full shadow-sm hover:shadow-md transition">
            <div className="flex-1 px-6 py-3">
              <label className="text-xs font-medium">여행지</label>
              <input
                type="text"
                placeholder="여행지 검색"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="block w-full outline-none"
              />
            </div>

            <div className="flex-1 px-6 py-3 border-l">
              <label className="text-xs font-medium">체크인</label>
              <input
                type="text"
                placeholder="날짜 추가"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="block w-full outline-none"
              />
            </div>

            <div className="flex-1 px-6 py-3 border-l">
              <label className="text-xs font-medium">체크아웃</label>
              <input
                type="text"
                placeholder="날짜 추가"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="block w-full outline-none"
              />
            </div>

            <div className="flex-1 px-6 py-3 border-l">
              <label className="text-xs font-medium">여행자</label>
              <input
                type="text"
                placeholder="게스트 추가"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="block w-full outline-none"
              />
            </div>

            <button className="bg-red-500 text-white p-4 rounded-full m-2">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
