import { PrismaClient } from "@prisma/client";

// 데이터베이스 URL 확인
console.log(
  "DB URL:",
  process.env.DATABASE_URL?.replace(/\/\/.*@/, "//*****:*****@"),
);

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL!,
    },
  },
});

async function main() {
  console.log("🌱 시드 시작...");

  try {
    // 간단한 생성부터 시도
    const farm = await prisma.farm.create({
      data: {
        imageURL: "https://picsum.photos/300/200",
        title: "테스트 숙소",
        rating: 4.5,
        distance: 100,
        availableDates: "2024-03-01",
        content: "테스트 내용",
        price: 100000,
      },
    });

    console.log("✅ 생성 성공:", farm);
  } catch (error) {
    console.error("❌ 에러:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("시드 실패:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
