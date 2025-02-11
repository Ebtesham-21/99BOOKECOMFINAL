import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI || "");
const db = client.db("yourDatabase");
const slidesCollection = db.collection("slides");

export async function GET() {
    try {
        await client.connect();
        const slides = await slidesCollection.find().toArray();
        return NextResponse.json(slides, {status: 200});
    } catch (error) {
        return NextResponse.json({error: "Failed to fetch slides"}, {status: 500});
    }
}

export async function POST(req: Request) {
    try {
        const {imageUrl, title, description} = await req.json();
        await client.connect();
        await slidesCollection.insertOne({imageUrl, title, description});
        return NextResponse.json({message: "Slide added successfully"}, {status: 201});
    } catch (error) {
        return NextResponse.json({error: "Failed to add slide"}, {status: 500});
    }
}

