import { dbConnect } from "@/dbConfig/dbConfig";
import verifyToken from "./verifyToken";
import User from "@/models/User";
import jwt from 'jsonwebtoken'
import Error from "next/error";
export default async function isAuthenticated(token:any) {
    try {
        const token_val = token;
        console.log("token: ",token)
        console.log("kEY",process.env.SECRET_KEY)
        const data:any = jwt.verify(token_val,process.env.SECRET_KEY!);
        console.log("data:",data)
        return data.id;
    } catch (error:any) {
        console.log('error:',error.message)
        return null
    }
}