import { NextRequest,NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { Console } from "console";
import Error from "next/error";
export default function verifyToken(request:NextRequest){
    try {
        const token = request.cookies.get('token')?.value||"";
        console.log("token: ",token)
        console.log("kEY",process.env.SECRET_KEY)
        const data:any = jwt.verify(token,process.env.SECRET_KEY!);
        console.log("data:",data)
        return data.id;
    } catch (error:any) {
        console.log('error:',error.message)
        //throw new Error(error.message)
    }
}