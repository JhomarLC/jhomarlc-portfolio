import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "/logo.png";

export default function Headers() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header id="home" className="bg-white">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<a href="#home" className="-m-1.5 p-1.5">
						<span className="sr-only">jlc</span>
						<img alt="" src={Logo} className="h-8 w-auto" />
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-12">
					<a
						href="#home"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Home
					</a>
					<a
						href="#about"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						About
					</a>
					<a
						href="#projects"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Projects
					</a>
					<a
						href="#contact-me"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Contact Me
					</a>
				</PopoverGroup>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="https://www.canva.com/design/DAGQsnUpFlk/cUDQIBxTdAkMABApmsaroQ/view?utm_content=DAGQsnUpFlk&utm_campaign=designshare&utm_medium=link&utm_source=editor"
						className="text-sm font-semibold leading-6 text-white rounded-md bg-gray-900 px-3 py-1"
					>
						View CV <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">jlc</span>
							<img alt="" src={Logo} className="h-8 w-auto" />
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									About
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Project
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Contact Me
								</a>
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									View CV
								</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
