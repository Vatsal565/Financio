"use server";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

type Props = {
	name: string;
	email: string;
	message: string;
};

const send = async ({ name, email, message }: Props) => {
	await sendMail({
		to: "mjgandhi2305@gmail.com",
		name: name,
		subject: `Response From ${name}`,
		body: compileWelcomeTemplate(name, email, message),
	});
};

export default send;
