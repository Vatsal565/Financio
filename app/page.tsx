
import Avatar1 from "@/components/Avatar1";
import { Feature } from "@/components/feature";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Keypoints } from "@/components/Keypoints";
import LandingPage from "@/components/landing-page";
import { PageWrapper } from "@/components/page-wrapper";

export default function Home() {
    return (
        <>
        <LandingPage/>
        <Hero/>
        <Feature />
        <PageWrapper>
				{/* <section className="-mt-24 md:pt-5 md:pb-10 bg-gradient-to-t from-[#183EC2] to-[#EAEEFE] overflow-x-clip "> */}
				<div className="w-full h-[600px] dark:bg-white">
					<div className="p-5 text-center">
						<div className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
							Meet Our Team
						</div>
						<p className="mt-2 mb-10 dark:text-black">
							Meet the experts behind your financial success.
						</p>
						<div className="flex justify-center flex-wrap">
							<Avatar1
								modelPath="/avatar1.glb"
								name="Miten Gandhi"
								role="Developer"
								linkedinUrl="https://www.linkedin.com/in/miten-j-gandhi-0917471a9/"
								email="miten.gandhi@example.com"
                                githubUrl="https://github.com/mjgandhi2305"
							/>
							<Avatar1
								modelPath="/avatar2.glb"
								name="Vatsal Bateriwala"
								role="Developer"
								linkedinUrl="https://www.linkedin.com/in/vatsal-bateriwala/"
								email="vatsalbateriwala562005@gmail.com"
                                githubUrl="https://github.com/Vatsal565"
							/>
							<Avatar1
								modelPath="/avatar3.glb"
								name="Diya Pansheriya"
								role="Developer"
								linkedinUrl="https://www.linkedin.com/in/diya-pansheriya-02aa462a9/"
								email="pansheriyadiya@gmail.com"
                                githubUrl="https://github.com/Diya5772"
							/>
							<Avatar1
								modelPath="/avatar4.glb"
								name="Priya Bhanderi"
								role="Developer"
								linkedinUrl="https://www.linkedin.com/in/priya-bhanderi-7b0b1227a/"
								email="priyabhanderi2@gmail.com"
                                githubUrl="https://github.com/Priya584"
							/>
						</div>
					</div>
				</div>
				{/* </section> */}
			</PageWrapper>
        <Keypoints />
        <Footer />
        </>
    )
}