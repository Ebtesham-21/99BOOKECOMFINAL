import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";

import Slide from "@/models/Slide";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.query;

    if(req.method === "PUT") {
        try {
            await dbConnect();

            const {imageUrl, title, description} = req.body;
            const slide = await Slide.findByIdAndUpdate(id, {imageUrl, title, description}, {new: true} );


            if(!slide) {
                return res.status(404).json({error: "Slide not found"});
            }

            res.status(200).json(slide);
        } catch (error) {
            res.status(500).json({error: "Failed to update slide"});
        }
    }
}