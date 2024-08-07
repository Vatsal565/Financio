"use client";
import Image from "next/image";
import { Loader, Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import {motion} from "framer-motion";
export default function Page() {
	return (
		<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative">
			<div className="h-full lg:flex flex-col items-center justify-center px-4">
				<div className="text-center space-y-4 pt-16 lg:pt-0">
					<h1 className="font-bold text-5xl tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Welcome Back!</h1>
					<p className="text-base text-[#7E8CA0]">
						Log in or Create Account to get back to your dashboard!
					</p>
				</div>
				<div className="flex items-center justify-center mt-8">
					<ClerkLoaded>
						<SignUp />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className="animate-spin text-muted-foreground" />
					</ClerkLoading>
				</div>
				
				<motion.img src='/spring.png' height={200} width={200} className="hidden lg:block absolute bottom-14  bg-transparent left-5 rotate-60"   animate={{
              y:[0,50,0],
              scale:1,
              
            }}
            transition={{
              duration: 2,  // Duration of one full rotation
              repeat: Infinity,  // Repeat indefinitely
                  }}  alt="logo"/>
			</div>
			<div className="h-full bg-gradient-to-t from-[#183EC2] to-[#EAEEFE] hidden lg:flex flex-col items-center justify-center group relative">
				
				<motion.img src='/star.png' height={150} width={150}  className="absolute top-5 -left-14" animate={{
              x: 0,
              y: 0,
              scale: 1,
              rotate: 10,

            }}
            transition={{
              repeat:Infinity,
              repeatType: "mirror",
              duration: 0.5,
              ease: "easeInOut"
            }} alt="logo"/>
			
			
			<motion.img src='/star.png' height={80} width={80}  className="absolute top-8 left-20" animate={{
              x: 0,
              y: 0,
              scale: 1,
              rotate: 180,

            }}
            transition={{
              repeat:Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut"
            }} alt="logo"/>
				<motion.img src='/tube.png' height={520} width={520} className="absolute top-18 left-15"animate={{
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
		</div>
	);
}
