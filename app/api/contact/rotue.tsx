import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()

    if (!body.email || !body.message) {
        return NextResponse.json(
            { error: "Invalid payload" },
            { status: 400 }
        )
    }

    // Hook up email service here (Resend, SendGrid, etc.)
    return NextResponse.json({ success: true })
}