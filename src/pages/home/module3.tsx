import * as Icon from "@tabler/icons-react";
import { InfoCard } from "@/components/card/info";

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
					<InfoCard
						overlayTitle="Microsoft 365 networking connectivity"
						overlayDescription="I'm always enthusiastic about open source and the Web. Enjoy a lot to work on it."
						infoCardContent={
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
								for backend, create data visualization based on{" "}
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
						}
					/>
				</div>
				<div className="w-full lg:w-1/2 mt-6 lg:mt-0">
					<div className="h-full w-full lg:w-[220%] xl:w-[200%] accentDarkBg rounded-3xl flex py-6 flex-wrap lg:flex-nowrap">
						<div className="flex-initial w-full lg:w-1/2 flex flex-col px-4 xl:px-6 gap-4">
							<InfoCard
								overlayTitle="Microsoft 365 netwo"
								overlayDescription="I'm always enthusiastic about open source and the Web. Enjoy a lot to work on it."
								infoCardContent={
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
										for backend, create data visualization
										based on{" "}
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
								}
							/>
							<InfoCard
								overlayTitle="Microsoft 365 netwo"
								overlayDescription="I'm always enthusiastic about open source and the Web. Enjoy a lot to work on it."
								infoCardContent={
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
										for backend, create data visualization
										based on{" "}
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
								}
							/>
						</div>
						<div className="flex-initial w-full lg:w-1/2 mr-4 xl:mr-6 ml-4 lg:ml-0 mt-8 lg:mt-0">
							<h3 className="flex align-center text-orange-400 text-4xl xl:text-5xl font-semibold whitespace-nowrap">
								<Icon.IconBrandChrome
									size={48}
									className="svg-inline--fa fa-chrome lg:mr-2 xl:mr-5"
								/>
								Chromium
							</h3>
							<p className="text-xl py-6 text-gray-200">
								I'm always enthusiastic about open source and
								the Web. Enjoy a lot to work on it.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// <div className="my-auto font-sans accentWhiteBg rounded-xl relative overflow-hidden min-w-[200px] connectivityLink">
//     <InfoCard className="">
{
	/* <div>
	I added features into a giant{" "}
	<a target="_blank" rel="external" href="https://react.dev/">
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
	<a target="_blank" rel="external" href="https://www.asp.net/">
		ASP.NET
	</a>{" "}
	for backend, create data visualization based on{" "}
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
</div>; */
}
//     </InfoCard>
//     <div className="px-4 py-8 w-full h-full absolute left-0 top-0">
//         <div className="flex items-start mb-3 justify-between">
//             <div className="font-fantasy text-lg">
//                 Microsoft 365 networking
//                 connectivity
//             </div>
//             <Icon.IconArrowUpRight className="ml-8 relative top-2 text-slate-300" />
//         </div>
//         <div className="text-sm text-gray-400">
//             Diagnosis and Optimize for customers'
//             network
//         </div>
//     </div>
// </div>
