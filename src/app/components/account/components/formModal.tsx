'use client'
import { IonIcon } from "@ionic/react";
import { logInOutline, closeOutline } from "ionicons/icons";
import { useState } from "react";
import SignIn from "../components/SignIn";
import Register from "../components/Register";
import axios from "axios";

export default function FormModal(){
    const [login_page, changePage] = useState(true);

    function change(e:any) {
        console.log(e.target.id)
        if(e.target.id ==='register'){
          changePage(false)
        }else{
          changePage(true);
        }
      }
    return (
        <div className="login">
          <div
            className="text-violet-700 flex font-bold cursor-pointer"
            onClick={() => (document.getElementById("my_modal") as any).showModal()}
          >
            Login&nbsp;
            <IonIcon icon={logInOutline} className="text-2xl" />
          </div>
    
          <dialog id="my_modal" className="modal">
            <div className="modal-box text-center">
              <form method="dialog" className=" absolute right-7 top-4">
                <button className="modal-backdrop text-red-600">
                  <IonIcon icon={closeOutline} className="text-2xl" />
                </button>
              </form>
              <h3 className="font-bold text-lg">
                <span
                  className={`${login_page && "text-violet-700"} cursor-pointer`}
                  onClick={change}
                >
                  Login
                </span>
                &nbsp; | &nbsp;
                <span
                  className={`${!login_page && "text-violet-700"} cursor-pointer`}
                  id='register'
                  onClick={change}
                >
                  Register
                </span>
              </h3>
              {login_page ? <SignIn /> : <Register changepage = {changePage}/>}
    
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      );
}