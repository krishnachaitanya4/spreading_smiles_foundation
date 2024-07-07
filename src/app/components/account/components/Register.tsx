import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import validateRegisterForm from "./validateRegister";
const Register = ({ changepage }: any) => {
  const router = useRouter();
  interface Data {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  // Data object
  const formData: Data = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Important states
  const [form, changeForm] = useState(formData);
  const [formErrors, changeFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  //errors
  function removeMessage() {
    setErrorMessage("");
  }
  //Update form changes
  function change(e: any) {
    changeForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  // SignUp function
  async function signUp(e: any) {
    e.preventDefault();
    console.log("submit ran");
    const validation = validateRegisterForm(form);
    console.log(form);  
    console.log(validation);
    if (validation) {
      changeFormErrors(validation);
    } else {
      try {
        console.log(Object.keys(formErrors));
        const res = axios.post("/api/users/register", form);
        console.log("signup successful.");
        console.log((await res).data.error);
        changepage(true);
      } catch (error: any) {
        console.log(error.response.data.error);
        setErrorMessage(error.response.data.error);
      }
    }
    console.log("below validating the form");
  }
  
  // Return statement below
  return (
    <div>
      <div className="px-6 sm:px-0 max-w-sx ">
        <hr className="my-3" />
        <button className="px-4 mx-auto py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Sign up with Google</span>
        </button>
      </div>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 rounded dark:bg-violet-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white text-violet-700 left-1/2">
          OR
        </div>
      </div>
      {errorMessage && (
        <div className="alert alert-error max-w-xs mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={removeMessage}
            className="cursor-pointer stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={signUp} className="">
        <div className=" max-w-xs mx-auto my-3 relative">
          <p className="text-left font-semibold text-sm mb-1 ms-2">Name</p>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="name"
            className={`input input-md input-bordered w-full max-w-xs focus:border-violet-700 ${
              (formErrors as any).name && "border-red-600"
            }`}
            onChange={change}
            value={form.name}
          />
          {(formErrors as any).name && (
            <p className="text-red-600 text-xs text-right">Name required</p>
          )}
        </div>
        <div className=" max-w-xs mx-auto my-3 relative">
          <p className="text-left font-semibold text-sm mb-1 ms-2">Email</p>
          <input
            name="email"
            type="text"
            placeholder="email"
            className={`input input-md input-bordered w-full max-w-xs ${
              (formErrors as any).email
                ? "border-red-600"
                : "focus:border-violet-700 "
            }`}
            onChange={change}
            value={form.email}
          />
          {(formErrors as any).email && (
            <p className="text-red-600 text-xs text-right">
              {(formErrors as any).email}
            </p>
          )}
        </div>
        <div className=" max-w-xs mx-auto my-3 relative">
          <p className="text-left font-semibold text-sm mb-1 ms-2">Password</p>
          <input
            name="password"
            type="password"
            placeholder="password"
            className={`input input-md input-bordered w-full max-w-xs focus:border-violet-700 ${
              (formErrors as any).password && "border-red-600"
            }`}
            onChange={change}
            value={form.password}
          />
          {(formErrors as any).password && (
            <p className="text-red-600 text-xs text-right">
              {(formErrors as any).password}
            </p>
          )}
        </div>
        <div className=" max-w-xs mx-auto my-3 relative">
          <p className="text-left font-semibold text-sm mb-1 ms-2">
            Conform Password
          </p>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Repeat password"
            className={`input input-md input-bordered w-full max-w-xs focus:border-violet-700 ${
              (formErrors as any).confirmPassword && "border-red-600"
            }`}
            onChange={change}
            value={form.confirmPassword}
          />
          {(formErrors as any).confirmPassword && (
            <p className="text-red-600 text-xs text-right">
              {(formErrors as any).confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-[150px] bg-violet-700 shadow-lg hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2"
        >
          register
        </button>
      </form>
    </div>
  );
};

export default Register;
