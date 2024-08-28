"use client";
import React from "react";
import HeaderLogo from "./header-logo";
import Navigation from "./Navigation";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import WelcomeMsg from "./welcome-msg";
import { ModeToggle } from "./theme-change";
import { Filters } from "./filters";

function Header() {
	return (
		<header className="bg-custom-gradient px-4 py-8 lg:px-14 pb-36">
			<div className="max-w-screen-2xl mx-auto">
				<div className="w-full flex items-center justify-between mb-14">
					<div className="flex items-center lg:gap-x-16">
						<HeaderLogo />
						<Navigation />
					</div>
					<div className="flex items-center gap-x-8">
					<ClerkLoaded>
						<UserButton afterSignOutUrl="/" />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className="size-10 animate-spin text-slate-400" />
					</ClerkLoading>
					<ModeToggle />
					</div>
				</div>
                <WelcomeMsg />
				<Filters />
			</div>
		</header>
	);
}

export default Header;
