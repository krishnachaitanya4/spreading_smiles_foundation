import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import validateLoginForm from "./validateLoginForm";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import { signIn } from "next-auth/react";

// SignIn Component
const SignIn = () => {
  const router = useRouter();
  interface Data {
    email: string;
    password: string;
  }
  // Data object
  const formData: Data = {
    email: "",
    password: "",
  };
  const [form, changeForm] = useState(formData);
  const [formErrors, changeFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  console.log(form);
  const handleChange = (e: any) => {
    changeForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Sumbit ran");
    console.log(form);
    const validation = validateLoginForm(form);
    console.log(validation);
    if (validation) {
      changeFormErrors(validation);
    } else {
      try {
        const res = await axios.post("/api/users/signin", form);
        console.log(res.data);
        router.refresh();
      } catch (error: any) {
        console.log(error.response.data.error);
        setErrorMessage(error.response.data.error);
      }
    }
  };
  return (
    <div>
      <div className="max-w-sx ">
        <hr className="my-3" />
        <button
          onClick={() => signIn("google")}
          className="px-4 max-w-xs mx-auto py-2 border flex gap-2 
        border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 
        hover:text-slate-900 hover:shadow transition duration-150"
        >
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Sign in with Google</span>
        </button>
      </div>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 rounded dark:bg-violet-700" />
        <div
          className="absolute px-4 -translate-x-1/2 bg-white 
        text-violet-700 left-1/2"
        >
          OR
        </div>
      </div>
      <form onSubmit={handleSubmit}>
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
            onChange={handleChange}
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
            onChange={handleChange}
            value={form.password}
          />
          {(formErrors as any).password && (
            <p className="text-red-600 text-xs text-right">
              {(formErrors as any).password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-[150px] bg-violet-700 shadow-lg 
          hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
