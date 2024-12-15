import { TabsBtn, TabsContent, TabsProvider } from "@/components/ui/tabs";
import { VideoCard } from "@/components/card/video";

// 加载视频资源
const video_arr1 = [
    { id: "unique-id-1", src: new URL("@/assets/videos/01.mp4", import.meta.url).href },
    { id: "unique-id-2", src: new URL("@/assets/videos/02.mp4", import.meta.url).href },
    { id: "unique-id-3", src: new URL("@/assets/videos/03.mp4", import.meta.url).href },
    { id: "unique-id-4", src: new URL("@/assets/videos/04.mp4", import.meta.url).href },
    { id: "unique-id-5", src: new URL("@/assets/videos/05.mp4", import.meta.url).href },
    { id: "unique-id-6", src: new URL("@/assets/videos/06.mp4", import.meta.url).href },
    { id: "unique-id-7", src: new URL("@/assets/videos/07.mp4", import.meta.url).href },
    
];
const video_arr2 = [
    { id: "unique-id-1", src: new URL("@/assets/videos/01.mp4", import.meta.url).href },
    { id: "unique-id-2", src: new URL("@/assets/videos/02.mp4", import.meta.url).href },
    { id: "unique-id-3", src: new URL("@/assets/videos/03.mp4", import.meta.url).href },
    
];
const video_arr3 = [
    { id: "unique-id-1", src: new URL("@/assets/videos/01.mp4", import.meta.url).href },
    { id: "unique-id-2", src: new URL("@/assets/videos/02.mp4", import.meta.url).href },
    { id: "unique-id-3", src: new URL("@/assets/videos/03.mp4", import.meta.url).href },
    { id: "unique-id-4", src: new URL("@/assets/videos/04.mp4", import.meta.url).href },
    { id: "unique-id-5", src: new URL("@/assets/videos/05.mp4", import.meta.url).href },
    
];

export function Module7() {
	return (
		<section className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-52">
			<TabsProvider defaultValue={"music"}>
				<div className="flex items-end gap-6 justify-between flex-wrap-reverse lg:flex-nowrap">
					<div className="mt-5 gap-x-6 gap-y-3 flex cursor-pointer flex-wrap font-bold text-grey-900">
						<TabsBtn value="music">
							<span className="relative z-[2] uppercase">
								music
							</span>
						</TabsBtn>
						{/* <TabsBtn value="book" className="">
							<span className="relative z-[2] uppercase">
								Book
							</span>
						</TabsBtn>
						<TabsBtn value="other">
							<span className="relative z-[2] uppercase">
								Other
							</span>
						</TabsBtn> */}
					</div>
				</div>
				<TabsContent
					value="music">
                    <VideoCard cards={video_arr1} className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4" />
                </TabsContent>
                <TabsContent
					value="book">
                    <VideoCard cards={video_arr2} className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4" />
                </TabsContent>
                <TabsContent
					value="other">
                    <VideoCard cards={video_arr3} className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4" />
                </TabsContent>

                
			</TabsProvider>
		</section>
	);
}
