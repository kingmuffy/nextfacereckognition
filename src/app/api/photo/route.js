import { NextResponse } from 'next/server';

const API_URL = process.env.REACT_APP_API_URL;

export async function POST(request) {
    const formData = new FormData();
    const { comments, topic, files } = await request.json();

    if (!comments || !topic) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    formData.append("comments", comments);
    formData.append("topic", topic);
    if (files) {
        formData.append("files", files);
    }

    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
}
