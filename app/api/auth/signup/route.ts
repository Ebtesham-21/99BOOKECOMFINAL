import {hash} from "bcryptjs";
import { NextResponse } from "next/server";
import {connectDB} from "@/lib/db";
import User from "@/models/User";


export async function POST(req: Request) {
    try {
        const {email, password} = await req.json();

        if(!email || !password) {
            return NextResponse.json({message: "Email and password are required"}, {status: 400});
        }

        await connectDB();

        const existingUser = await User.findOne({email});

        if(existingUser) {
            return NextResponse.json({message: "User already exists"}, {status: 400});
        }

        const hashedPassword = await hash(password, 10);
        const newUser = new User({email, password: hashedPassword});
        await newUser.save();

        return NextResponse.json({message: "User created successfully"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Error creating user"}, {status: 500});
    }
}