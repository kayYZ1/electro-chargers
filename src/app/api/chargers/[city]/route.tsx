
import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function GET(req: Request, { params }: { params: { city: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db("EPCluster");
    const collection = db.collection(params.city);

    const chargers = await collection.find({}).toArray();

    const formattedChargers = chargers.map((charger) => ({
      ...charger,
      _id: charger._id.toString(),
    }));

    return NextResponse.json(formattedChargers);
  } catch (error) {
    return NextResponse.json({ error: `Failed to fetch chargers, ${error}` }, { status: 500 });
  }
}
