import {
	FingerPrintIcon,
	CommandLineIcon,
	DevicePhoneMobileIcon,
	ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "Full-Stack Development",
		description:
			"Expertise in both front-end and back-end technologies to build dynamic web applications.",
		icon: CommandLineIcon,
	},
	{
		name: "Responsive Design",
		description:
			"Creating responsive, mobile-first designs that ensure great user experiences on any device.",
		icon: DevicePhoneMobileIcon,
	},
	{
		name: "Performance Optimization",
		description:
			"Implementing best practices to enhance performance, scalability, and security.",
		icon: ArrowTrendingUpIcon,
	},
	{
		name: "Advanced security",
		description:
			"Experience in cloud deployment and DevOps practices for seamless project delivery.",
		icon: FingerPrintIcon,
	},
];

export default function AboutMe() {
	return (
		<div id="about" className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-indigo-600">
						About Me
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Bringing Ideas to Life with Code
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						I’m{" "}
						<strong className="text-indigo-600">
							Jhomar Candelario
						</strong>
						, a <strong>Web Developer</strong>
						and <strong>Graphic Designer</strong> based in the
						Philippines, currently pursuing a Bachelor of Science in
						Information Technology. With a passion for creating
						impactful digital experiences.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
										<feature.icon
											aria-hidden="true"
											className="h-6 w-6 text-white"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
