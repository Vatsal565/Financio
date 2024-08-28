"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<div className="container-footer  relative flex flex-col flex-wrap justify-between gap-y-10  bg-gradient-to-b from-[#153666] via-[#060e1c] to-[#1a2f4d] px-4 py-10 md:px-32 ">
			<div className="z-10">
				<div
					className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full "
					id="wave1"
				/>
				<div
					className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full "
					id="wave2"
				/>
				<div
					className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full "
					id="wave3"
				/>
				<div
					className="wave absolute -top-16 left-0 z-50 h-[4rem] w-full "
					id="wave4"
				/>
			</div>
			<div className="mx-auto flex w-full flex-row md:gap-0 justify-center items-center">
				<ul className="flex gap-8 text-blue-400 justify-center items-center">
					<Link
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-blue-500 transition-colors"
					>
						<FaLinkedin size={24} />
					</Link>
					<Link
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-black transition-all"
					>
						<FaGithub size={24} />
					</Link>
                    <Link
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-[#fd1d1d] transition-all"
					>
						<FaInstagram size={24} />
					</Link>
				</ul>
			</div>
            <div className="mx-auto flex w-full flex-row md:gap-0 justify-center items-center">
                <ul className="flex gap-8 text-blue-400 justify-center items-center">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Team</Link></li>
                    <li><Link href="/contactus/">Contact</Link></li>
                </ul>
			</div>
			<div className="text-white border-t-2 border-blue-800 pt-2 text-center font-mono text-xs md:text-base">
				Made with <span className="animate-pulse">❤️</span> by AI Alchemists • ©
				2024
			</div>
		</div>
	);
}

export default Footer;
