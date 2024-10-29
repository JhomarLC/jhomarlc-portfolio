export default function Clients({ stats }) {
	return (
		<div className="bg-gray-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="text-center space-y-4">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Trusted by Clients and Employers
						</h2>
						<p className="text-lg leading-8 text-gray-300">
							With a proven track record of delivering
							high-quality web solutions, I help clients turn
							ideas into reality.
						</p>
					</div>
					<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
						{stats.map((stat) => (
							<div
								key={stat.id}
								className="flex flex-col bg-white/5 p-8"
							>
								<dt className="text-sm font-semibold leading-6 text-gray-300">
									{stat.name}
								</dt>
								<dd className="order-first text-3xl font-semibold tracking-tight text-white">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
