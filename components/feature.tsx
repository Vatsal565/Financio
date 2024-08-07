"use client";

import Image from "next/image";
import cogImage from "@/public/cog.png";
import cylinderImage from "@/public/cylinder.png";
import noodleImage from "@/public/noodle.png";
import {motion} from "framer-motion";
import Link from "next/link";

export const Feature = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-b from-[#183EC2] to-[#EAEEFE] overflow-x-clip ">
<div className="container">
        <div className="md:flex items-center">
        <div className="mt-20 md:mt-0 md:h-[648px] mr-10 md:flex-1 relative ">
        <motion.img src='/tube.png' height={600} width={600} className="absolute top-18 left-20"animate={{
              x: 0,
              y: 0,
              scale: 1,
              rotate: 180,

            }}
            transition={{
              repeat:Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut"
            }}  alt="logo"/>
          </div>
          <div className="md:w-[520px]">
            <h1 className="text-3xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              About Us
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            At Financio, we believe that managing your finances should be simple, intuitive, and stress-free. Whether you're an individual looking to keep track of personal expenses or a business aiming to streamline financial operations, Financio is designed to meet all your financial management needs.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
          
            
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
