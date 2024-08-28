import Header from "@/components/Header";
import LandingPage from "@/components/landing-page";

type Props = {
	children: React.ReactNode;
};

function ContactUsLayout({ children }: Props) {
	return (
		<>
            <LandingPage />
			<main>{children}</main>
		</>
	);
}

export default ContactUsLayout;
