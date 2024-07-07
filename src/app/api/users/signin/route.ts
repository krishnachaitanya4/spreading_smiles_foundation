import { dbConnect } from "@/dbConfig/dbConfig";
import User from '@/models/User'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
dbConnect();

export async function POST(request: NextRequest) {
    try {
        const req = await request.json();
        const {email, password} = req;
        const user = await User.findOne({email})
        // Verify existance
        if (!user) {
            //console.log("email already in use")
            return NextResponse.json({ error: "User doesn't exist." }, { status: 400 })
        }
        // Match password
        const passCheck = await bcryptjs.compare(password,user.password)
        if(!passCheck){
            return NextResponse.json({error:"Invalid cradentials"},{status:400})
        }
        const tokenData = {
            id: user._id,
            email: user.email,
            name: user.name
        }
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY !, { expiresIn:'7d'})
        const response = NextResponse.json({
            message: "Login Successful",
            success:true
        })
        response.cookies.set("token",token,{httpOnly:true})
        return response;
    } catch (error: any) {
        console.log("problem")
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}