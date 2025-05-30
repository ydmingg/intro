import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
export function MyMap({
	className,
	children,
	childrenClassName,
}: {
	className: string;
	children: React.ReactNode | string;
	childrenClassName: string;
}) {
	let T = (window as any).T;
	const zoom = 4.2;
	const mapContainerRef = useRef(null);
    let map: any = null;
    const img_user = new URL('@/assets/images/ydm.png', import.meta.url).href;

	useEffect(() => {
		if (!mapContainerRef.current) return;
        
        map = new T.Map(mapContainerRef.current, {
            center: new T.LngLat(107.40769, 33.89945),
            zoom: zoom,
            draggable: false,
            scrollwheel: false,    
            removeControl: new T.Control.Zoom()
            
        });

        map.disablePinchToZoom(); // 可选：移除单击控件
        map.disableDoubleClickZoom(); // 可选：移除双击控件
        map.disableScrollWheelZoom(); // 可选：移除缩放控件

	}, [mapContainerRef]);

	return (
		<>
			<div
				id="my-map"
				ref={mapContainerRef}
				className={cn("my-map relative ", className)}></div>
			<p className={cn("relative", childrenClassName)}>{children}</p>
			<img
                alt="hero icon"
                loading="lazy"
                width="1140"
                height="1142"
                decoding="async"
                data-nimg="1"
                className="border-[4px] border-slate-50 absolute w-[16%] left-[43%] top-[38%] rounded-full new_location_animate z-20"
                // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-circle.c18e5fff.png&amp;w=1200&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-circle.c18e5fff.png&amp;w=3840&amp;q=75 2x"
                src={ img_user }
			/>
			<img
                src={ img_user }
				className="border-[4px] border-slate-50 absolute w-[16%] left-[43%] top-[38%] rounded-full shadow-lg z-20"
				alt=""
			/>
		</>
	);
}