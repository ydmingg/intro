import * as Icon from "@tabler/icons-react";

export function Module3() {
	return (
		<section className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32 lg:mt-64">
			<div className="accentLightBg w-full lg:w-2/3 rounded-3xl block lg:flex relative left-0 right-5 py-6 pl-6 xl:pl-12 pr-6 lg:pr-0">
				<div className="w-full lg:w-1/2 flex flex-col lg:mr-6 xl:mr-12">
					<h2 className="flex align-center gap-2 text-orange-400 text-5xl xl:text-6xl font-semibold whitespace-nowrap">
						<Icon.IconBrandGithubFilled size={60} />
						ADSASDA
					</h2>
					<p className="text-xl py-6">
						I have worked at Microsoft for 4 years, developed
						multiple products.
					</p>
					<div className="my-auto font-sans accentWhiteBg rounded-xl relative overflow-hidden min-w-[200px] connectivityLink">
						<div className="relative z-10 h-full min-h-[130px]">
							<div
								className="text-sm text-gray-50 link_decoration accentDarkBg w-full h-full rounded-xl px-4 py-8 flex items-center"
                                >
								<div>
									I added features into a giant{" "}
									<a
										target="_blank"
										rel="external"
										href="https://react.dev/">
										React
									</a>{" "}
									codebase, used NoSQL database (
									<a
										target="_blank"
										rel="external"
										href="https://learn.microsoft.com/azure/cosmos-db/introduction">
										Azure CosmosDB
									</a>
									) and{" "}
									<a
										target="_blank"
										rel="external"
										href="https://www.asp.net/">
										ASP.NET
									</a>{" "}
									for backend, create data visualization based
									on{" "}
									<a
										target="_blank"
										rel="external"
										href="https://www.microsoft.com/maps/choose-your-bing-maps-api">
										Bing Maps
									</a>
									, contributed features to{" "}
									<a
										target="_blank"
										rel="external"
										href="https://github.com/microsoft/fluentui">
										FluentUI
									</a>
								</div>
							</div>
						</div>
						<div className="px-4 py-8 w-full h-full absolute left-0 top-0">
							<div className="flex items-start mb-3 justify-between">
								<div className="font-fantasy text-lg">
									Microsoft 365 networking connectivity
								</div>
								<Icon.IconArrowUpRight className="ml-8 relative top-2 text-slate-300" />
							</div>
							<div className="text-sm text-gray-400">
								Diagnosis and Optimize for customers' network
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
