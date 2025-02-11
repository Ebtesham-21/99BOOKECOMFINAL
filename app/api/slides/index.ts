import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import Slide from "@/models/Slide";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === "GET"){
        try {
            await dbConnect();
            const slides = await Slide.find({});
            res.status(200).json(slides);
        } catch (error) {
            res.status(500).json({error: "Failed to fetch slides"});
        }
    }
}