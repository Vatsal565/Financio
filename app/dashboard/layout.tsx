import Header from "@/components/Header";

type Props = {
	children: React.ReactNode;
};

function DeshboardLayout({ children }: Props) {
	return (
		<>
			<Header />
			<main className="px-3 lg:px-14">{children}</main>
		</>
	);
}

export default DeshboardLayout;
