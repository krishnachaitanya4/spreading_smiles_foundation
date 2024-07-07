import { Dancing_Script } from "next/font/google"

const dc = Dancing_Script({subsets:["latin"]})

export default function Quote(){
    
    return(
    <div className="min-h-[200px] bg-violet-100 flex items-center">
        <h1 className={`${dc.className} md:text-4xl font-bold text-2xl p-5 text-violet-700 mx-auto text-center `}>
            "We make a living by what we get, but we make a life by what we give."
            </h1>
    </div>
    )

}