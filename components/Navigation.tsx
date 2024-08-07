"use client";

import { useMedia } from "react-use";
import { usePathname, useRouter } from "next/navigation";

import NavButton from "./NavButton";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

const routes = [
	{
		href: "/dashboard/",
		label: "Overview",
	},
	{
		href: "/dashboard/transactions",
		label: "Transactions",
	},
	{
		href: "/dashboard/accounts",
		label: "Accounts",
	},
	{
		href: "/dashboard/categories",
		label: "Categories",
	},
	{
		href: "/contactus/",
		label: "Contact Us",
	},
	{
		href: "/aboutus/",
		label: "Team",
	},
];

function Navigation() {
	const [isopen, setIsOpen] = useState(false);

	const router = useRouter();
	const pathname = usePathname();
	const isMobile = useMedia("(max-width: 1024px)", false);

	const onClick = (href: string) => {
		router.push(href);
		setIsOpen(false);
	};

	if (isMobile) {
		return (
			<Sheet open={isopen} onOpenChange={setIsOpen}>
				<SheetTrigger>
					<Button
						variant="outline"
						size="sm"
						className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
					>
						<Menu className="size-4" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="px-2">
					<nav className="flex flex-col gap-y-2 pt-6">
						<Button
								variant={'/' === pathname ? "secondary" : "ghost"}
								key={'/'}
								onClick={() => onClick('/')}
								className="w-full justify-start"
							>
							<div className="items-center flex">
								<Image src="/logo.svg" alt="logo" height={30} width={30} />
								<p className="font-semibold dark:text-white ml-2.5">
									Financio
								</p>
							</div>
						</Button>
						{routes.map(route => (
							<Button
								variant={route.href === pathname ? "secondary" : "ghost"}
								key={route.href}
								onClick={() => onClick(route.href)}
								className="w-full justify-start"
							>
								{route.label}
							</Button>
						))}
					</nav>
				</SheetContent>
			</Sheet>
		);
	}

	return (
		<nav className="hidden lg:flex items-center gap-2 overflow-x-auto">
			{routes.map(route => (
				<NavButton
					key={route.href}
					href={route.href}
					label={route.label}
					isActive={pathname === route.href}
				/>
			))}
		</nav>
	);
}

export default Navigation;
