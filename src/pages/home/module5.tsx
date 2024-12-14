import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function Module5() {
	const imageUrl =
		"https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

	return (
		<section className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-52">
			<div className="w-full h-fit lg:flex gap-4 xl:gap-6">
				<div className="relative w-full lg:w-1/3 gap-4 flex flex-col p-6 accentWhiteBg rounded-3xl">
					<div className="font-fantasy text-2xl xl:text-2xl 2xl:text-3xl z-10 drop-shadow-sm whitespace-nowrap">
						<span className="text-orange-500 font-bold mr-2">
							Games
						</span>
						I made in GameJam
					</div>
					<DirectionAwareHover
                        imageUrl={imageUrl}
                        imageClassName="w-full h-auto aspect-video"
						imageAspectRatio={{ width: 1920, height: 1080 }}>
						<p className="font-bold text-xl">In the mountains</p>
						<p className="font-normal text-sm">$1299 / night</p>
					</DirectionAwareHover>
					<DirectionAwareHover
						imageUrl={imageUrl}
						imageClassName="w-full h-auto aspect-video"
						imageAspectRatio={{ width: 1920, height: 1080 }}>
						<p className="font-bold text-xl">In the mountains</p>
						<p className="font-normal text-sm">$1299 / night</p>
					</DirectionAwareHover>
					<DirectionAwareHover
                        imageUrl={imageUrl}
                        imageClassName="w-full h-auto aspect-video"
						imageAspectRatio={{ width: 1920, height: 1080 }}>
						<p className="font-bold text-xl">In the mountains</p>
						<p className="font-normal text-sm">$1299 / night</p>
					</DirectionAwareHover>
				</div>
				<div className="w-full lg:w-2/3 flex flex-col flex-1 gap-4 xl:gap-6 mt-6 xl:mt-0">
					<div className="relative p-6 accentWhiteBg rounded-3xl h-fit">
						<div className="drop-shadow-sm text-2xl xl:text-4xl font-fantasy whitespace-nowrap  mb-4">
							<span className="text-orange-500 font-bold mr-2">
								Games
							</span>
							I made in Companies
						</div>
						<div className="flex flex-col lg:flex-row gap-4 xl:gap-6 justify-between">
							<DirectionAwareHover
                                imageUrl={imageUrl}
                                imageClassName="w-full h-auto aspect-square"
								className="h-fit basis-1/2 tencentLink">
								<p className="font-bold text-xl">
									In the mountains
								</p>
								<p className="font-normal text-sm">
									$1299 / night
								</p>
							</DirectionAwareHover>
							<DirectionAwareHover
                                imageUrl={imageUrl}
                                imageClassName="w-full h-auto aspect-square"
								className="h-fit basis-1/2 tencentLink">
								<p className="font-bold text-xl">
									In the mountains
								</p>
								<p className="font-normal text-sm">
									$1299 / night
								</p>
							</DirectionAwareHover>
						</div>
					</div>
					<div className="cursor-pointer flex-1 h-full justify-center items-center accentDarkBg rounded-3xl hidden lg:flex">
						<div className="lg:text-6xl xl:text-8xl h-fit font-semibold text-orange-400">
                            Get All Project
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
