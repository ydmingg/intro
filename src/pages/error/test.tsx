import * as Icon from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Test() {
	// const arr = [9, 5, 6, 8, 2, 7, 3, 4, 1];

	// console.log(Math.floor(arr.length / 2));
	// function ssssss(arr:any): any {
	//     if (arr.length <= 1) {
	//         return arr;
	//     }
	// 　　var pivotIndex = Math.floor(arr.length / 2);
	//     var pivot = arr.splice(pivotIndex, 1)[0];

	// 　　var left = [];
	// 　　var right = [];
	// 　　for (var i = 0; i < arr.length; i++) {
	//     if (arr[i] < pivot) {
	//         left.push(arr[i]);
	//     } else {
	//         right.push(arr[i]);
	//     }
	// }
	//     // concat 拼接数组
	//     return ssssss(left).concat([pivot], ssssss(right));
	// };

	// const aaaa = ssssss(arr);
	// console.log(aaaa);

    const [isHovered, setIsHovered] = useState(false);
    const hoverStyle = {
        default: {
            opacity: 0,
            transform: "translateX(-20%) translateY(20%) rotateZ(-10deg)"
        },
        hover: {
            opacity: 1,
            transform: "translateX(0%) translateY(0%) rotateZ(0deg)"
        }
    }

	return (
		<div className="m-40 bg-indigo-100 w-[500px] ceshi">
			<div className="my-auto font-sans accentWhiteBg rounded-xl relative overflow-hidden min-w-[200px] connectivityLink">
                <motion.div
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="relative z-10 h-full min-h-[130px] cursor-pointer">
                    <motion.div
                        initial={{...hoverStyle.default}}
                        animate={isHovered ? {...hoverStyle.hover} : {...hoverStyle.default}}
						className="text-sm text-gray-50 link_decoration accentDarkBg w-full h-full rounded-xl px-4 py-8 flex items-center">
						<div
							style={{
								transform: "translateY(0%) rotateZ(0deg)",
								// transition: {
								// 	duration: 300,
								// 	ease: "easeInOut",
								// },
							}}>
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
					</motion.div>
				</motion.div>
				<div className="px-4 py-8 w-full h-full absolute left-0 top-0">
					<div className="flex items-start mb-3 justify-between">
						<div className="font-fantasy text-lg">
							Microsoft 66969 fffff connectivity
						</div>
						<Icon.IconArrowUpRight className="ml-8 relative top-2 text-slate-300" />
					</div>
					<div className="text-sm text-gray-400">
						Diagnosis and fsgdfg for customers' network
					</div>
				</div>
			</div>

			{/* <motion.div
                className="box-img relative z-[1] bg-blue-400 overflow-hidden"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
				whileHover={{
					// 当鼠标悬停在父元素上时，子元素将应用这些样式
					// children: {
					// 	transform: "translateY(0%) rotateZ(0deg)",
					// 	opacity: 1,
					// 	transition: { duration: 0.5, ease: "easeInOut" },
					// },
				}}>
				<motion.div
					initial={{...hoverStyle.default}}
                    animate={isHovered ? {...hoverStyle.hover} : {...hoverStyle.default}}
                    // transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gray-600 w-100% h-[200px] text-white">
					sadfasdfasdfasdfsdf
				</motion.div>
			</motion.div> */}
		</div>
	);
}
