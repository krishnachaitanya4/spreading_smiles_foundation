import Image from "next/image";
import about from '../../assets/img/main/about.jpg'
import bg from '../../assets/img/main/about-bg.jpg'
import Link from "next/link";
export default function About(){
return(
    <div className="p-5 mt-9">
<div className={`container mx-auto md:my-14`}>
    <div>
        <div className="md:grid grid-cols-2">
            <div className="h-full flex items-center overflow-hidden justify-center  max-h-[450px]">
                <div className="h-full w-auto bg-black">
                <Image src={bg} className="h-full w-auto object-cover opacity-70 cursor-pointer hover:opacity-100 transition-all ease-in duration-200" alt="about image" />
                </div>
            </div>
            <div className="h-full flex items-center md:p-4 max-w-[600px] mx-auto">
                <div>
                    <h2 className={`md:text-3xl mt-3 text-xl font-bold text-violet-700`}>Uniting Hearts for a Better Tomorrow</h2>
                    <p className={`md:mt-4 mt-2 text-gray-600 mb-4`}>we believe in the transformative power of kindness
                        and compassion. Our journey began with a
                        simple yet profound goal to subscribe to universal humanitarian values and make the world a
                        better place, one smile at a time.</p>
                    <Link href={`/about`} className='bg-violet-700 shadow-lg font-medium hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2'>Read
                        More</Link>
                </div>
            </div>
        </div>
    </div>
</div></div>
);
}