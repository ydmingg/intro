import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
export function MyMap({ className }: { className: string }) {
	let T = (window as any).T;
	const zoom = 4.2;
	const mapContainerRef = useRef(null);
	let mapInstance:any = null;

	useEffect(() => {
		if (!mapContainerRef.current) return;

		const loadMap = () => {
			mapInstance = new T.Map(mapContainerRef.current);
			mapInstance.centerAndZoom(new T.LngLat(107.40769, 33.89945), zoom);

			// 关闭tip
			const tip = mapInstance.getContainer().querySelector(".tdt-bottom");
			tip.style.display = "none";
            

		};

		loadMap();

		return () => {
			if (mapInstance && typeof mapInstance.destroy === 'function') {
				mapInstance.destroy();
				mapInstance = null;
			}
        };
        
	}, [mapContainerRef]);

    return <div id="afds" ref={ mapContainerRef } className={cn("relative", className)}></div>;
}
