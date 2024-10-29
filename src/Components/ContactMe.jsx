import { useState } from "react";

const ContactMe = () => {
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "e3ee5908-8b43-4df9-a68d-3bd251681ca5");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};
	return (
		<>
			<section id="contact-me" className="bg-gray-900 ">
				<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
						Contact Me
					</h2>
					<p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
						Have a question about a project? Want to collaborate or
						discuss a potential opportunity? Feel free to reach out,
						and I will get back to you as soon as possible!
					</p>
					<p className="text-green-600 font-bold">{result}</p>
					<form action="#" onSubmit={onSubmit} className="space-y-8">
						<input
							type="hidden"
							name="access_key"
							value="e3ee5908-8b43-4df9-a68d-3bd251681ca5"
						/>
						<div>
							<label
								htmlFor="name"
								className="block mb-2 text-sm font-medium text-gray-300"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="block p-3 w-full text-sm  rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
								placeholder="Enter your name"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-300"
							>
								Your email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
								placeholder="youremail@email.com"
								required
							/>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-400"
							>
								Your message
							</label>
							<textarea
								id="message"
								name="message"
								rows="6"
								className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
								placeholder="Leave a comment..."
							></textarea>
						</div>
						<button
							type="submit"
							className="py-3 px-5 text-sm font-medium text-center bg-white text-gray-900 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
						>
							Send message
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default ContactMe;
