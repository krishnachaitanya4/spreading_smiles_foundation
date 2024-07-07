import { dbConnect } from "@/dbConfig/dbConfig";
import User from '@/models/User'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';

dbConnect();

export async function POST(request: NextRequest) {
    try {
        const req = await request.json();
        const { name, email, password, confirmPassword } = req;
        console.log(req)
        const user = await User.findOne({email})
        // Verify existance
        if (user) {
            console.log("email already in use")
            return NextResponse.json({ error: "Email already in use" }, { status: 400 })
        }
        // Hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newuser = new User({
            name: name,
            email: email,
            password: hashedPassword
        })
        const savedUser = await newuser.save();
        console.log(savedUser)
        return NextResponse.json(
            { message: "Success", success: true, savedUser }
        )

    } catch (error: any) {
        console.log("problem")
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}