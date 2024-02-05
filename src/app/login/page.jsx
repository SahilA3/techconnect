import React from "react";
import BGImage from "../components/bgImage/bgImage";

const page = () => {
  return (
    <>
      <div className="w-100% h-[calc(100vh-140px)] flex flex-col items-center justify-center bg-gray">
        <div className="w-auto md:w-[17%] h-auto p-10 bg-black rounded-lg flex flex-col text-snow">
          <h1 className="text-4xl text-center font-semibold pb-5">Login</h1>

          <label forhtml="Email">Email</label>
          <input
            type="text"
            className="p-2 rounded mb-5 text-black"
            placeholder="example@gmail.com"
          />

          <label forhtml="Password">Password</label>
          <input
            type="password"
            className="p-2 rounded mb-7 text-black"
            placeholder="Password"
          />

          <button className="bg-darkpurple hover:bg-snow hover:text-darkpurple text-snow font-bold py-2 px-4 rounded drop-shadow-lg transition-all duration-200 ease-in">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
