import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const result = await fetch(
    "https://randomuser.me/api/?results=4&inc=gender,name,email,phone,cell,picture",
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  const { results } = await result.json();
  return NextResponse.json({
    status: 200,
    message: "Success",
    results: results,
  });
}
