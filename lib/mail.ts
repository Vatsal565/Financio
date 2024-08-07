import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { welcomeTemplate } from "./templates/welcome";

export async function sendMail({
	to,
	name,
	subject,
	body,
}: {
	to: string;
	name: string;
	subject: string;
	body: string;
}) {
	const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

	const transport = nodemailer.createTransport({
		service: "gmail",
		secure: true,
		port: 465,
		auth: {
			user: SMTP_EMAIL,
			pass: SMTP_PASSWORD,
		},
	});
	//   try {
	//     const testResult = await transport.verify();
	//     console.log(testResult);
	//   } catch (error) {
	//     console.error({ testResult: error });
	//     return;
	//   }

	try {
		const sendResult = await transport.sendMail({
			from: SMTP_EMAIL,
			to,
			subject,
			html: body,
		});
		console.log(sendResult);
	} catch (error) {
		console.log({ sendResult: error });
	}
}

export function compileWelcomeTemplate(
	name: string,
	email: string,
	message: string
) {
	const template = handlebars.compile(welcomeTemplate);
	const htmlBody = template({
		name: name,
		message: message,
        email: email,
	});
	return htmlBody;
}
