
import AboutUsCards from "@/components/AboutUs";
import Avatar1 from "@/components/Avatar1";
import { Feature } from "@/components/feature";
import { Hero } from "@/components/Hero";
import { Keypoints} from "@/components/Keypoints";
import LandingPage from "@/components/landing-page";

export default function Home() {
    return (
        <>
        <LandingPage/>
        <Hero/>
        <Feature/>
        <Keypoints/>
        </>
    )
}