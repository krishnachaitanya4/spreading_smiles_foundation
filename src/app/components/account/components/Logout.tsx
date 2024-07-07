"use client";
import axios from "axios";
import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import { useRouter } from "next/navigation";
export default function Logout() {
  const router = useRouter();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  async function onLogout() {
    try {
      const res: any = await axios.get("/api/users/logout");
      console.log(res.message);
      router.refresh();
    } catch (error: any) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="m-1 cursor-pointer flex items-center">
          Account<IonIcon className="ms-1" icon={chevronDownOutline} />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] mt-3 menu p-2 shadow-lg bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Donations</a>
          </li>
          <li className="text-red-600"> 
            <a onClick={onLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}
