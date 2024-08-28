"use client";

import Image from "next/image";
import cogImage from "@/public/cog.png";
import cylinderImage from "@/public/cylinder.png";
import noodleImage from "@/public/noodle.png";
import { motion } from "framer-motion";
import Link from "next/link";

export const Keypoints = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-t from-[#183EC2] to-[#EAEEFE] overflow-x-clip ">
      <div className="container">
        <h1 className="text-3xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
          Key Points
        </h1>
        <div className="lg:flex mt-10">
          <div className="w-full lg:w-1/2 align-middle my-8">
            <h3 className=" text-2xl md:text-4xl mt-14 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Add Accounts
            </h3>
            <h5 className="w-full lg:w-1/2 mt-5 ">
              Easily integrate multiple bank accounts, credit cards, and
              financial assets in one place. Monitor your balances and
              transactions seamlessly.
            </h5>
          </div>
          <Image
            height={600}
            width={700}
            alt="transaction"
            src="/accounts_Ss.png"
            className="rounded"
          />
        </div>

        <div className="lg:flex mt-10">
          <div className="w-full lg:w-1/2 align-middle my-8">
            <h3 className=" text-2xl md:text-4xl mt-14 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Transactions with Payees
            </h3>
            <h5 className="w-full lg:w-1/2 mt-5 ">
            Simplify your payments and record-keeping by associating
            transactions with specific payees. Track where your money is going
            and manage your financial relationships effortlessly.
            </h5>
          </div>
          <Image
            height={600}
            width={700}
            alt="transaction"
            src="/transaction_Ss.png"
            className="rounded"
          />
        </div>

        <div className="lg:flex mt-10 mb-10">
          <div className="w-full lg:w-1/2 align-middle my-8">
            <h3 className=" text-2xl md:text-4xl mt-14 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Categories
            </h3>
            <h5 className="w-full lg:w-1/2 mt-5 ">
            Organize your expenses and income into categories for better
            financial insights. Understand your spending habits and make
            informed budgeting decisions.
            </h5>
          </div>
          <Image
            height={600}
            width={700}
            alt="transaction"
            src="/categories_Ss.png"
            className="rounded"
          />
        </div>

      </div>
    </section>
  );
};
