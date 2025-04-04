import React from "react";
import pic from "../../../public/pic.avif";
function Login() {
  return (
    <div className="flex flex-col md:flex-row bg-white justify-between shadow-2xl rounded-2xl dark:shadow-white">
      {/* left side */}
      <div className="flex  md:rounded-r-none flex-col p-6 bg-white rounded-2xl md:p-20 space-y-5 border md:border-r-0 dark:bg-slate-800 dark:text-white">
        {/* heading */}
        <div className="space-y-3 text-center md:text-left">
          <p className="text-3xl font-bold">Log In</p>
          <p className="">Log in to your account </p>
        </div>
        {/* input field */}

        <div className=" flex flex-col  ">
          <input
            type="text"
            className=" dark:placeholder:text-white border border-slate-300 p-4 rounded-2xl"
            placeholder="Enter your email address"
          ></input>
        </div>
        {/* password and buttpn */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <p className="p-4 text-slate-400 dark:text-blue-500">Forgot password ?</p>
          <button className="dark:bg-cyan-500 bg-slate-500 p-4 md:w-30  rounded-xl text-white">
            Next
          </button>
        </div>

        {/* options */}
        <div className="border-b opacity-40"></div>
        <div className="mb text-center text-slate-400"> or log in with</div>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-between">
          <button className=" text-center p-4 md:w-30 border rounded-2xl">
            Facebook
          </button>
          <button className="text-center p-4 md:w-30 border rounded-2xl">
            Google
          </button>
        </div>
      </div>
      {/* right */}
      <div className="flex dark:bg-slate-800  p-4 border dark:border-white rounded   border-l-0  bg-white hidden md:flex w-sm ">
        <img className="rounded-2xl " src={pic}></img>
      </div>
    </div>
  );
}

export default Login;
