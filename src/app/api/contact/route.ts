import dbConnect from "@/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";
import Contact from "@/models/Contact"; // Assuming you have a Contact model

export  async function POST(req : NextRequest) {
    try {
        await dbConnect();

        const {name,
            email,
            message} = await req.json(); // Extracting JSON data from the request body

        // Create a new document in the database using the Contact model
        const contact = new Contact(
            {
                name,
                email,
                message
            }
        );
        await contact.save();

        // Return a success response
        return NextResponse.json({ message: "Message sent successfully!" }, { status: 201 });
    } catch (error) {
        // Return an error response
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}



export  async function GET(req : NextRequest) {
    try {
        await dbConnect();

        const data = await Contact.find()

        // Return a success response
        return NextResponse.json({ message: "Message found successfully!" , data }, { status: 200 });
    } catch (error) {
        // Return an error response
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
