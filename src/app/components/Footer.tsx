import Link from "next/link";
import logo from "../assets/img/logo.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="min-h-[300px] bg-gray-50">
      <div className="container text-gray-600 max-w-[1300px] p-5 h-full mx-auto">
        <div className="md:grid md:grid-cols-5 h-full">
          <div className="w-100 p-3  col-span-2 h-full">
            <Image
              src={logo}
              alt=""
              height={60}
              className="transition-all ease-in-out duration-500"
            />
            <p className="text-xs md:max-w-[80%] py-3">
              Your donation fuels our mission. Contribute today to make a
              difference in the lives of those we serve. Together, we can bring
              more smiles to the world.
            </p>
            <button className="bg-violet-700 shadow-lg font-medium hover:bg-violet-600 text-xs rounded-full w-200 text-white px-5 py-2">
              Donate Now
            </button>
          </div>
          <div className="w-100 p-3 h-full">
            <h5 className="font-semibold">Quick Links</h5>
            <ul style={{ listStyleType: "none" }}>
              <li className="my-3"><Link href='/'>Home</Link></li>
              <li className="my-3"><Link href='/about'>About Us</Link></li>
              <li className="my-3"><Link href='/events'>Events</Link></li>
              <li className="my-3"><Link href='/contact'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-100 p-3 h-full">
            <h5 className="font-semibold">Events</h5>
            <ul style={{ listStyleType: "none" }}>
              <li className="my-3">Food Donation</li>
              <li className="my-3">Career Guidance</li>
              <li className="my-3">Books Donation</li>
              <li className="my-3">Children's Day</li>
            </ul>
          </div>
          <div className="w-100 p-3 h-full">
            <h5 className="font-semibold">Contact Us</h5>
            <ul style={{ listStyleType: "none" }}>
              <li className="my-3">+91 12345 67890</li>
              <li className="my-3">Spreadingsmiles@gmail.com</li>
              <li className="my-3">www.spreadingsmiles.co.in</li>
              <li className="my-3">Peddapuram, AP, India.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="min-h-[70px] w-full text-center text-sm p-5">
      © 2023 <strong>Spreading Smiles Foundation</strong>. All rights reserved.<br/>
      Made with ❤️ By <span className="font-bold text-violet-700">UniStacx</span>
      </div>
    </div>
  );
}
