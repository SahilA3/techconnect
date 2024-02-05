import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className='w-[100vw] h-[100px] flex items-center justify-between px-20 bg-black text-snow'>
        <h1 className='text-2xl font-semibold'>TECH CONNECT</h1>

        <div className='flex items-center gap-5 font-medium'>
          <Link href={"/"}>Home</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/calender"}>Calender</Link>
          <button className='bg-darkpurple hover:bg-snow hover:text-purple text-snow p-3 rounded-md font-medium'>
            <Link href={"/login"}>Login</Link>
          </button>
          <button className='bg-darkpurple hover:bg-snow hover:text-darkpurple text-snow p-3 rounded-md font-medium'>
            <Link href={"/signup"}>Signup</Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
