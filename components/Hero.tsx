"use client";

import Image from "next/image";
import cogImage from "@/public/cog.png";
import cylinderImage from "@/public/cylinder.png";
import noodleImage from "@/public/noodle.png";
import {motion} from "framer-motion";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-t from-[#183EC2] to-[#EAEEFE] overflow-x-clip ">
      <div className="container mb-10">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
          
            <h1 className="text-3xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Finance with Financio
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Financio is a comprehensive Finance SaaS website designed to simplify financial management. It allows users to add accounts, categorize transactions, and manage payees efficiently. Built with cutting-edge technologies like Next.js, Hono API, and Drizzle ORM, Financio offers a fast, intuitive, and customizable experience, ensuring seamless financial operations for its users.
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
      <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full bottom-0 "
          particleColor="#FFFFFF"
        />
    </section>
  );
};
