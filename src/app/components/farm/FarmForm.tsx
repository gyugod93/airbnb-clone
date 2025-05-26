"use client";

import { useState } from "react";

interface FarmFormData {
  title: string;
  price: string;
  imageURL: string;
  rating: number;
  distance: number;
  availableDates: string;
  content: string;
}

interface FarmFormProps {
  onSubmit: (data: FarmFormData) => Promise<void>;
}

export default function FarmForm({ onSubmit }: FarmFormProps) {
  const [formData, setFormData] = useState<FarmFormData>({
    title: "",
    price: "",
    imageURL: "https://picsum.photos/300/200",
    rating: 4.5,
    distance: 100,
    availableDates: "2024-03-01",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);

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
  };

  return (
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
  );
}
