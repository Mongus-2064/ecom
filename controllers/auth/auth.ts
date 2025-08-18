import { NextResponse, NextRequest } from "next/server";
import { User } from "@/Models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//signup service

export async function Signup(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: "Email and password are mandatory!" },
        { status: 400 }
      );
    }

    //checks if the user is already registered or not in Database

    const user = await User.findOne({email : body.email});

    if (user) {
      return NextResponse.json({ error: "Email already in use!" }, {status: 400});
    }

    const hashedpassword = await bcrypt.hash(body.password, 10);
    const newUser = new User({ email: body.email, password: hashedpassword });
    await newUser.save();

    

    return NextResponse.json({
      msg: "User created Successfully",
      user: {email: newUser.email},
     
    });
  } catch (error) {
    return NextResponse.json(
      { Error: "Internal Server error", error },
      { status: 500 }
    );
  }
}

// Login service

export async function Login(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: "Name and password is required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email: body.email });

    if (!user) {
      return NextResponse.json({ error: "User doesn't exists" });
    }

    const comparepassword = await bcrypt.compare(body.password, user.password);

   if(!comparepassword){

      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 400 }
      );
    }

const token =  jwt.sign({id: user._id}, process.env.JWT_SECRET as string,{expiresIn: "1h"});

return NextResponse.json({success:"User Logged in successfully!",user : { email :user.email},token}, {status: 200})

  } catch (error) {
    return NextResponse.json(
      { Error: "Internal server error", error },
      { status: 500 }
    );
  }
}
