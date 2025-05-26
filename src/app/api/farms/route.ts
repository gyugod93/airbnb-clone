import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  console.log("API 호출됨!");

  try {
    console.log("Prisma 쿼리 시작...");
    const farms = await prisma.farm.findMany();
    console.log("조회된 데이터:", farms);

    return NextResponse.json(farms || []);
  } catch (error: unknown) {
    // any -> unknown으로 변경
    console.error("API 에러 상세:", error);
    const errorMessage =
      error instanceof Error ? error.message : "알 수 없는 오류";

    return NextResponse.json(
      {
        error: "데이터 조회 실패",
        message: errorMessage,
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const farm = await prisma.farm.create({
      data: body,
    });

    return NextResponse.json(farm);
  } catch (error: unknown) {
    console.error("생성 에러:", error);
    return NextResponse.json({ error: "생성 실패" }, { status: 500 });
  }
}
