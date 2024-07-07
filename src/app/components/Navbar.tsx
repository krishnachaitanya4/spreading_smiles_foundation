"use client";
import { usePathname } from "next/navigation";
import logo from "../assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import { menu, close, logInOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ children }: { children: React.ReactNode }) {
  //console.log("hello");
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const [display, setToggle] = useState(false);
  /*
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, [display]);
  const handleClickOutside = (e: any) => {
    if(menuRef.current){
      if (!menuRef.current.contains(e.target)) {
        console.log("out");
        toggleOpen();

        //toggle()
      } else {
        toggleClose()
      }
    }
  };
  */
  const [shadow, setShadow] = useState(false);
  function toggleOpen() {
    setToggle(true);
    //console.log(display);
  }
  function toggleClose() {
    setToggle(false);
    //console.log(display);
  }

  function changeShadow() {
    if (window.scrollY > 90) {
      setShadow(false);
    } else {
      setShadow(false);
    }
  }
  if (typeof window === "object") {
    window.addEventListener("scroll", changeShadow);
  }
  const path = usePathname();

  //console.log(path)
  return (
    <>
    <div className={`overlay ${!display && 'hidden'} fixed bg-black h-[100vh] w-full z-[1] opacity-70`}></div>
    <nav
      className={`z-[2] transition-all ease-in-out duration-300 sticky top-0
      ${shadow && `shadow-md md:max-h-[70px] `} 
      lg:py-0 max-h-[79px] bg-violet-50 md:pb-2 
      xl:p-3 lg:flex  md:bg-violet-50 
      lg:justify-between xl:px-32  w-full`}
    >
      <div
        className={`${
          !shadow && "md:py-1 "
        }  ps-4 lg:ps-0 py-3 md:py-0 flex justify-between items-center bg-violet-50 md:w-auto w-full `}
      >
        <Image
          src={logo}
          alt=""
          height={shadow ? 60 : 68}
          className="transition-all ease-in-out duration-500"
        />
        {!display ? 
        <span
        className={`lg:hidden text-3xl  right-10 absolute z-30`}
        onClick={toggleOpen}
      >
        <IonIcon icon={menu} />
      </span>
      :
      <span
          className={`lg:hidden text-3xl  right-10 absolute z-30`}
          onClick={toggleClose}
        >
          <IonIcon icon={close} />
        </span>
      }
      </div>
      <ul
        ref={menuRef}
        className={`text-base text-gray-500 shadow-lg lg:shadow-none
            lg:flex 
            lg:items-center 
            lg:justify-center 
            lg:me-4
            lg:opacity-100 z-[-1]
            lg:z-auto 
            lg:static
            lg:w-auto 
            absolute  
            w-full md:translate-y-0
            bg-violet-100
            lg:bg-transparent
            ${
              !display
                ? " translate-y-[-100%]"
                : "p-5"
            }
            transition-all ease-in-out duration-300 w-full
            `}
      >
        <li className={`${path === "/" && "font-bold"} lg:mx-3 lg:my-0 my-3`}>
          <Link href="/" onClick={toggleClose}>Home</Link>
        </li>
        <li
          className={`${path === "/about" && "font-bold"} lg:mx-3 lg:my-0 my-3`}
        >
          <Link href="/about" onClick={toggleClose}>About Us</Link>
        </li>
        <li
          className={`${
            path === "/events" && "font-bold"
          } lg:mx-3 lg:my-0 my-3`}
        >
          <Link href="/events" onClick={toggleClose}>Events</Link>
        </li>

        <li className={`${
            path === "/contact" && "font-bold"
          } lg:mx-3 lg:my-0 my-3`}>
          <Link href="/contact" onClick={toggleClose}>Contact Us</Link>
        </li>
        <li className={`lg:mx-3 lg:my-0 my-3`} >{children}</li>
        
        <li className={`lg:mx-3 lg:my-0 my-3`} onClick={toggleClose}>
        <Link href={'/donate'} className="bg-violet-700 shadow-lg hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2">
          Donate Now
        </Link>
      </li>
        
        
      </ul>
    </nav>
    </>
  );
}
