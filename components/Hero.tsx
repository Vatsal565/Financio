"use client";

import Image from "next/image";
import cogImage from "@/public/cog.png";
import cylinderImage from "@/public/cylinder.png";
import noodleImage from "@/public/noodle.png";
import {motion} from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-t from-[#183EC2] to-[#EAEEFE] overflow-x-clip ">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-3xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Finance with Financio
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Discover expert financial advice, investment tips, and wealth management strategies. Our comprehensive resources and personalized guidance help you make informed decisions, grow your wealth, and secure your financial future. Start your journey to financial success with us today.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href="/sign-in">
            <button className="p-[3px] relative">
								<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
								<div className="flex px-4 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
									Sign In
								</div>
							</button>
              </Link>
              <Link href="/aboutus/">
              <button className="bg-white text-black px-4 py-2 m-5 rounded-lg font-medium inline-flex align-items gap-2 items-center tracking-tight">
                <span>learn more</span>
                <img src="/arrow-right.svg" alt="arrow" className="w-7" />
              </button>
              </Link>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] mr-10 md:flex-1 relative ">
            <motion.img
            src={cogImage.src}
            alt="Cog Image"
            className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0 lg:ml-52 "
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              rotate: 270,

            }}
            transition={{
              repeat:Infinity,
              repeatType: "mirror",
              duration: 5,
              ease: "easeInOut"
            }}

            />
            {/* <Image src={cogImage} alt="cogImage" className="md:absolute md:h-full md:w-auto md:max-w-none md:left-28" /> */}
            <motion.img 
            src={cylinderImage.src} 
            alt="cylinderImage" width={220} height={220} className="hidden -24 h-48 rounded-full lg:flex items-center justify-center overflow-hidden relative"
            animate={{
              y:[0,50,0],
              scale:1,
              
            }}
            transition={{
              duration: 2,  // Duration of one full rotation
              repeat: Infinity,  // Repeat indefinitely
                  }}
            />
            <motion.img src={noodleImage.src} alt="noodleImage" width={220} height={220} className="hidden lg:block absolute top-[524px] left-[578px] rotate-[30deg] lg:ml-52" 
            animate={{
              x: [0,-10,0],
              y:[0,15],
              rotate: [0,180],
              scale: [1,1.1,1],
            }}
            transition={{
              repeat:Infinity,
              duration: 5,
            }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
