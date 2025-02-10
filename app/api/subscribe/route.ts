import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {email} = await req.json();

        if(!email) {
            return NextResponse.json({error: "Email is required"}, {status: 400});
        }

        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        const DATACENTER = API_KEY?.split("-")[1];

        const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;


        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `apikey ${API_KEY}`,
            },
            body: JSON.stringify({
                email_address: email,
                status: "susbscribed",
            }),
        });

        if(!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({error: errorData.detail}, { status: response.status});
        }

        return NextResponse.json({message: "Successfully subscribed!"}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}