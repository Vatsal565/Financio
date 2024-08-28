"use client";
import React from "react";
import { Button } from "./ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import send from "@/hooks/sendMail";
import { LogOut, Mail, MessageCircle, Send, TrendingUp, User } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "name must be at least 2 characters.",
	}),
	email: z.string().email("Invalid Email Address"),
	message: z.string().min(1, "Message is Required"),
});

function ContactUs() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const name = values.name;
		const email = values.email;
		const message = values.message;
		send({ name, email, message });
		toast.success("Thanks for Submitting Response");
		form.reset({name: "", email: "", message: ""})
	}
	return (
		<main className="mt-10 flex flex-col lg:px-24 px-4 gap-4 justify-center mb-10">
			<div className="flex gap-4 items-center font-bold"><TrendingUp color="#256EFF" /> Send a Message</div>
			<div className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-[#183EC2] to-[#466bff] dark:bg-gradient-to-b dark:from-[#183EC2] dark:to-[#eaeefe] text-transparent bg-clip-text">Questions about Financio? Get in touch</div>
			<div className="font-light">Please do not hesitate to contact us by sending a message.</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="flex gap-4 items-center"><User color="#256EFF" /> Name </FormLabel>
								<FormControl>
									<Input placeholder="Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="flex gap-4 items-center"><Mail color="#256EFF" /> Email </FormLabel>
								<FormControl>
									<Input placeholder="Email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="flex gap-4 items-center"><MessageCircle color="#256EFF" /> Message </FormLabel>
								<Textarea
									placeholder="Message goes here"
									className="resize-none"
									{...field}
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="flex gap-4 items-center w-full border-[#256EFF]" variant="outline"><LogOut />Submit</Button>
				</form>
			</Form>
		</main>
	);
}

export default ContactUs;
