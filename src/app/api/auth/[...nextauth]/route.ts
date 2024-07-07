import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; 
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
const authOptions = {
    providers:[
        CredentialsProvider({
            name:"cradentials",
            credentials:{},
            async authorize(cradentials){
                const user = {id:"1"};
                return user;

            },
        })
    ],
    session:{
        strategy:"jwt",
    },
    secret: process.env.SECRET_KEY,
    pages:{
        signIn:"/"
    }
}
/*
const handler = nextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!
        }),
    ]
})*/
const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};