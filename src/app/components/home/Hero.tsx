import Image from "next/image";
import hero from '../../assets/img/main/hero2.png'
import herobg from '../../assets/img/main/hero-bg2.png'
export default function Hero(){
    return(
    <div className={`grid md:grid-cols-2 py-5 min-h-[100vh] md:min-h-[70vh] bg-transparent md:bg-violet-50 max-w-full relative`}>
        <div className="h-full w-full absolute z-[-1] bg-neutral-800">
            <Image 
            src={herobg}
            alt="Background pic"
            className="h-full w-full object-cover mix-blend-overlay"
            />
        </div>
        <div className="h-full bg-transparent flex items-center justify-center">
            <div className="ms-5 md:ms-[100px] lg:ms-[150px] mt-[100px]">
                <h1 className={`mb-2 text-4xl md:text-6xl md:min-h-[75px] font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-violet-400 from-5% via-pink-500 via-300% to-green-400 to-90%`}
                >
                    Spreading Smiles
                </h1>
                <h2 className={`mb-3 text-3xl md:text-5xl text-white md:text-gray-500`}>Changing Lives Together</h2>
                <p className={`mb-5 text-xl text-white md:text-gray-500`}>Join us in making the world a better place.</p>
                <button className='shadow-lg bg-violet-700 hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2'>Donate Now</button>
            </div>
        </div>
        <div className="hidden md:flex items-center justify-center h-full pe-5">
            <Image 
            src={hero}
            alt="image"
            className="max-h-[80%] w-auto pt-[60px]"
            />
        </div>
    </div>
    );
}