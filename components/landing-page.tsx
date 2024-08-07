"use client";
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import HeaderLogo from "./header-logo";
import { Loader2 } from "lucide-react";
import Navigation from "./Navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./theme-change";

function LandingPage() {
	const { isSignedIn } = useUser();
	return (
		<header className="bg-gradient-to-b from-[#183EC2] to-[#EAEEFE] px-4 py-8 lg:px-14">
			<div className="max-w-screen-2xl mx-auto">
				<div className="w-full flex items-center justify-between mb-14">
					<div className="flex items-center lg:gap-x-16">
						<HeaderLogo />
						<Navigation />
					</div>
					<div className="flex items-center gap-x-8">
					<div>
						{isSignedIn ? (
							<div>
								<ClerkLoaded>
									<UserButton afterSignOutUrl="/" />
								</ClerkLoaded>
								<ClerkLoading>
									<Loader2 className="size-8 animate-spin text-slate-400" />
								</ClerkLoading>
							</div>
						) : (
							<div>
                                <Link href="/sign-in">
								<Button size="sm" className="dark:text-[#0c1ca9] tracking-[1.5px]">
                                    Sign In
								</Button>
                                </Link>
							</div>
						)}
					</div>
					<ModeToggle />
					</div>
				</div>
			</div>
		</header>
	);
}

export default LandingPage;
