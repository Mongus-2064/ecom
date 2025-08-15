import { NextResponse, NextRequest } from "next/server";
import { User } from "@/Models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// Login service

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.password) {
      return NextResponse.json(
        { error: "Name and password are mandatory!" },
        { status: 400 }
      );
    }

    const hashedpassword = await bcrypt.hash(body.password, 10);
    const newUser = new User({ name: body.name, password: hashedpassword });
    await newUser.save();

const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET as string ,{expiresIn: "1h"})


    return NextResponse.json({
      msg: "User created Successfully",
      user: newUser,
      token
    });
  } catch (error) {
    return NextResponse.json(
      { Error: "Internal Server error", error },
      { status: 500 }
    );
  }
}
