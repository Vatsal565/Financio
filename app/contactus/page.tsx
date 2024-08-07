import ContactUs from "@/components/ContactUs";
import { Hero } from "@/components/Hero";
import LandingPage from "@/components/landing-page";
import { PageWrapper } from "@/components/page-wrapper";

export default function contactus() {
    return (
        <>
            <PageWrapper>
            {/* <section className="-mt-24 md:pt-5 md:pb-10 bg-gradient-to-t from-[#183EC2] to-[#EAEEFE] overflow-x-clip "> */}
            <ContactUs />
            {/* </section> */}
            </PageWrapper>
        </>
    )
}
