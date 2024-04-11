import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  return NextResponse.json({
    id: "1",
    name: "ring 1",
    description: "This is ring 1",
  });
}

export async function POST(request) {
  const data = await request.json();

  const client = await MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();
  const ringsCollection = db.collection("rings");
  const result = await ringsCollection.insertOne(data);

  console.log("result", result);

  client.close();

  return NextResponse.json({
    success: true,
  });
}
