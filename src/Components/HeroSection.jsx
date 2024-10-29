import Profile from "/my-profile.png";

export default function HeroSection() {
	return (
		<div className="relative mx-auto max-w-7xl sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-x-24">
			<div className="max-w-xl px-6 text-center lg:text-left lg:px-0">
				<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
					<span className="block xl:inline">
						Build better websites.
					</span>{" "}
					<span className="block text-indigo-600 xl:inline">
						Elevate your digital presence.
					</span>
				</h2>
				<p className="mt-6 text-lg leading-8 text-gray-700">
					I specialize in creating stunning websites and web
					applications that bring your business to life.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
					<a
						href="#contact-me"
						className="rounded-md bg-gray-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					>
						Contact Me
					</a>
					<a
						href="#about"
						className="text-base font-semibold leading-6 text-gray-600"
					>
						Learn more about me<span aria-hidden="true">→</span>
					</a>
				</div>
			</div>

			{/* Profile Image Section */}
			<div className="relative flex justify-center lg:mt-0 lg:flex-shrink-0">
				<img
					alt="My Profile"
					src={Profile}
					className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[620px] lg:h-[620px] object-cover"
				/>
			</div>
		</div>
	);
}
