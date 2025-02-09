import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const {email} = await req.json();

    if(!email) {
        return NextResponse.json({error: "Email is required"}, {status: 400});
    }

    const transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false,
        auth: {
            user: "your-sendinblue-email@example.com",
            pass: "your-sendinblue-api-key",
        },
    });

    try {
        await transporter.sendMail({
            from: '"Bookstore Newsletter" <your-email@example.com>',
            to: email,
            subject: "Thanks for subscribing!",
            text: "Thank you for subscribing to our Newsletter",
            html: "<p> Thank you for subscribing to our Newsletter. <p>",
        });

        return NextResponse.json({message: "Subscription successful!"});
    } catch (error) {
        return NextResponse.json({error: "Failed to send email"}, {status: 500});
    }
}