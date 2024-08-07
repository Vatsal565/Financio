import { useUser } from "@clerk/nextjs";
import React from "react";

function WelcomeMsg() {
	const { user, isLoaded } = useUser();
	return (
		<div className="space-y-2 mb-4">
			<h2 className="w-fit text-3xl lg:text-4xl text-transparent font-bold text-stroke relative welcome"
			data-content={`Welcome Back, ${user?.firstName}`}>
				Welcome Back{isLoaded ? ", " : " "}
				{user?.firstName}
			</h2>
			<p className="text-base text-[#ffffffc4]">
				This is your Financial Overview Report
			</p>
		</div>
	);
}

export default WelcomeMsg;
