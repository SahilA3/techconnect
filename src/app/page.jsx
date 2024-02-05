import Image from "next/image";
import techConnect from "../../public/tech-connect.jpg";
import Link from "next/link";
import Highlights from "./components/Highlights/Highlights";

export default function Home() {
  return (
    <>
      <div className='w-[100vw] h-[calc(100vh-140px)] flex bg-gray text-snow '>
        <div className='w-[100vw] h-[400px] my-40 px-20 flex flex-col items-start'>
          <h1 className='font-bold text-5xl'>
            Welcome to <br />
            <span className='font-bold text-6xl'>TECH CONNECT</span>
          </h1>

          <p className='text-md py-8'>
            The TechConnect Community project was conceived in response to the
            growing demand for a centralized platform that caters specifically
            to the tech community. Existing platforms offer fragmented services,
            and there is a need for a comprehensive platform that integrates the
            functionalities of several platforms into one cohesive ecosystem.The
            purpose of the TechConnect Community platform is to serve as a
            one-stop destination for tech enthusiasts, offering a unified
            experience for accessing and contributing to tech-related
            information, knowledge, and collaborative projects.
          </p>

          <button className='bg-darkpurple hover:bg-black hover:text-darkpurple text-snow px-10 py-5 rounded-md text-lg font-medium'>
            <Link href={"/"}>Connect</Link>
          </button>
        </div>

        <div className='w-[100vw] h-[400px] my-20 px-20 flex flex-col items-start'>
          <Image src={techConnect} alt='Tech-Connect' className='rounded-lg' />
        </div>
      </div>
      <Highlights />
    </>
  );
}
