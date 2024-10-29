import { Component } from "react";
import Lakbay from "/Lakbay.png";
import POS from "/TomsPos.png";
import GWA from "/GwaCalculator.png";
import MeNote from "/MeNote.png";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectList: [
				{
					name: "Lakbay",
					description:
						"Mobile friendly project showcasing travel experiences.",
					image: Lakbay,
					liveDemo: "http://localhost/Adventours%20V4/",
				},
				{
					name: "Toms Chicken House POS",
					description:
						"Mobile friendly project showcasing travel experiences.",
					image: POS,
					liveDemo: "http://localhost/TOM_S1/staff/",
				},
				{
					name: "GWA Calculator",
					description:
						"Mobile friendly project showcasing travel experiences.",
					image: GWA,
					liveDemo: "https://jhomarlc.github.io/gwa-ko/",
				},
				{
					name: "Me Note",
					description:
						"Mobile friendly project showcasing travel experiences.",
					image: MeNote,
					liveDemo: "https://jhomarlc.github.io/me-note/",
				},
			],
		};
	}

	render() {
		return (
			<div id="projects" className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
					<h2 className="text-center text-base/7 font-semibold text-indigo-600">
						Browse
					</h2>
					<p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
						My Recent Projects
					</p>

					<div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
						{this.state.projectList.map((project, index) => (
							<div key={index} className="relative lg:row-span-2">
								<div className="absolute inset-px bg-white"></div>
								<div className="relative flex h-full rounded-lg flex-col overflow-hidden">
									<div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
										<p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
											{project.name}
										</p>
										<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
											{project.description}
										</p>
									</div>
									<div className="inset-x-10 bottom-10 top-10 overflow-hidden rounded m-5">
										<img
											className="size-full object-cover object-top"
											src={project.image}
											alt={project.name}
										/>
									</div>
									{/* <div className="flex justify-center space-x-4 inset-x-10 mb-5">
										<a
											href={project.liveDemo}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
										>
											Live Demo
										</a>
									</div> */}
								</div>
								<div className="pointer-events-none absolute inset-px shadow ring-1 ring-black/5 rounded-lg"></div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
