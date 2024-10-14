"use server"
import clientPromise from "@/lib/db";

const getChargers = async (city: string) => {
  const client = await clientPromise;
  const db = client.db("EPCluster");
  const collection = db.collection(city);

  const chargers = await collection.find({}).toArray();
  return chargers.map((charger) => ({
    ...charger,
    _id: charger._id.toString(),
  }));
}

export default getChargers