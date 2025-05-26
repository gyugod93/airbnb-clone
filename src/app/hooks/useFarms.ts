"use client";

import { useEffect, useState } from "react";
import { Farm } from "../types/farm";

interface FormData {
  title: string;
  price: string;
  imageURL: string;
  rating: number;
  distance: number;
  availableDates: string;
  content: string;
}

export function useFarms() {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);

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

  const createFarm = async (formData: FormData) => {
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
        fetchFarms(); // 목록 새로고침
      }
    } catch (error) {
      console.error("생성 실패:", error);
    }
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  return {
    farms,
    loading,
    createFarm,
  };
}
