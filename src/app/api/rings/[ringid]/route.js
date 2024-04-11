import { NextResponse } from "next/server";
import data from "../../../../ringData.json";

export async function GET(context) {
  const ringId = context.url.split("/").pop();
  const ring = data.filter((i) => ringId === i.id.toString());

  return NextResponse.json({
    ring,
  });
}
