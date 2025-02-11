import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const apiKey = process.env.MAILCHIMP_API_KEY;
        const listId = process.env.MAILCHIMP_LIST_ID;
        const datacenter = apiKey?.split("-")[1]; // Extract datacenter from API key

        if (!apiKey || !listId || !datacenter) {
            return NextResponse.json({ error: "Missing Mailchimp credentials" }, { status: 500 });
        }

        // Ensure the datacenter value is valid and clean
        if (!/^[a-z0-9]+$/.test(datacenter)) {
            return NextResponse.json({ error: "Invalid datacenter" }, { status: 500 });
        }

        const response = await fetch(
            `https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}/members`,
            {
                method: "POST",
                headers: {
                    Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email_address: email,
                    status: "subscribed",
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: data.detail || "Subscription failed" }, { status: response.status });
        }

        return NextResponse.json({ message: "Success! You are subscribed." }, { status: 200 });

    } catch (error) {
        console.error("Subscription Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
