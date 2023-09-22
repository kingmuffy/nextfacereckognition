import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Q from "@/models/Bu"




export const POST = async (request) => {
    const body = await request.json();
  
    const newQ = new Q(body);
  
    try {
      await connect();
  
      await newQ.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };

export const GET = async (request) => {
    // fetch
    return new NextResponse("Hello World");
    };







