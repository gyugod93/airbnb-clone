"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Farm {
  id: string;
  imageURL: string;
  title: string;
  rating: number;
  distance: number;
  availableDates: string;
  content: string;
  price: number;
}

export default function Home() {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    imageURL: "https://picsum.photos/300/200",
    rating: 4.5,
    distance: 100,
    availableDates: "2024-03-01",
    content: "",
  });

  // 데이터 조회
  const fetchFarms = async () => {
    try {
      const response = await fetch("/api/farms");
      const data = await response.json();
      setFarms(data);
    } catch (error) {
      console.error("조회 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  // 새 숙소 추가
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/farms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: parseInt(formData.price),
        }),
      });

      if (response.ok) {
        const newFarm = await response.json();
        console.log("생성 성공:", newFarm);

        // 목록 새로고침
        fetchFarms();

        // 폼 초기화
        setFormData({
          title: "",
          price: "",
          imageURL: "https://picsum.photos/300/200",
          rating: 4.5,
          distance: 100,
          availableDates: "2024-03-01",
          content: "",
        });
      }
    } catch (error) {
      console.error("생성 실패:", error);
    }
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  if (loading) return <div className="p-4">로딩 중...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">숙소 관리</h1>

      {/* 추가 폼 */}
      <div className="mb-8 bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-bold mb-4">새 숙소 추가</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">제목</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">가격</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">설명</label>
            <textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full border p-2 rounded"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            추가하기
          </button>
        </form>
      </div>

      {/* 숙소 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {farms.map((farm) => (
          <div
            key={farm.id}
            className="border rounded-lg overflow-hidden shadow"
          >
            <Image
              src={farm.imageURL}
              alt={farm.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg">{farm.title}</h3>
              <p className="text-gray-600">{farm.distance}km</p>
              <p className="text-gray-700 text-sm my-2">{farm.content}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">
                  ₩{farm.price.toLocaleString()}/박
                </span>
                <span className="text-yellow-500">⭐ {farm.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import AirBnbItem from "./components/AirBnbItem";
// import AirBnbList from "./components/AirBnbList";
// import Search from "./components/Search";

// export default function Home() {
//   return (
//     <>
//       {/* <TestPage /> */}
//       <Search />
//       <AirBnbList />
//       <AirBnbItem />
//     </>
//   );
// }
