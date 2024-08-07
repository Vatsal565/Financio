import Header from "@/components/Header";
import LandingPage from "@/components/landing-page";
import PublicHeader from "@/components/public-Header";

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
