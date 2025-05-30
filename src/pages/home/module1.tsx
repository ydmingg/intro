import OrbitingCircles from "@/components/ui/orbiting-circles";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FlipWords } from "@/components/ui/flip-words.tsx";

export function OrbitingCirclesDemo() {
    const words = ["YDMING", "Graceful", "Creative", "BingBing"];

	return (
		<section className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-12 md:mt-40 md:mb-12 py-24 flex flex-wrap-reverse md:flex-nowrap justify-items-center justify-around items-center gap-16">
			<CardContainer className="inter-var">
				<CardBody className="p-8 relative bg-gradient-to-r from-gray-50 from-60% to-gray-200 rounded-3xl shadow-xl">
					<CardItem
						translateZ="50"
						className="text-xl font-bold text-neutral-600 dark:text-white">
						Name:
					</CardItem>
					<CardItem
						translateZ="50"
						className="text-xl font-bold text-neutral-600 dark:text-white">
						<h2 className="py-6 border-b-2 border-slate-700">
                            <FlipWords words={words} />
                        </h2>
					</CardItem>
					<div className="[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]">
                        <div className="pt-4 text-md md:text-xl leading-tight text-end">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white">
                                About me:
                            </CardItem>
                            <div className="text-slate-400 hover:text-slate-800 hover:translate-x-1 transition py-[2px] cursor-pointer">
                                <a href="">Web Design</a>
                            </div>
                            <div className="text-slate-400 hover:text-slate-800 hover:translate-x-1 transition py-[2px] cursor-pointer">
                                <a href="">Mobile Design</a>
                            </div>
                            <div className="text-slate-400 hover:text-slate-800 hover:translate-x-1 transition py-[2px] cursor-pointer">
                                <a href="">Big Screen Design</a>
                            </div>
                            <div className="text-slate-400 hover:text-slate-800 hover:translate-x-1 transition py-[2px] cursor-pointer">
                                <a href="">Digital Nomad</a>
                            </div>
                            <div className="text-slate-400 hover:text-slate-800 hover:translate-x-1 transition py-[2px] cursor-pointer">
                                <a href="">Other</a>
                            </div>
                        </div>
					</div>
					<div className="bg-orange-400 w-16 h-16 absolute -left-4 -bottom-4 rounded-full"></div>
				</CardBody>
			</CardContainer>

			{/* Inner Circles */}
			<OrbitingCircles
				className="size-12 border-none bg-transparent"
				duration={10}
				delay={20}
				radius={260}>
				<Icons.whatsapp />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-8 border-none bg-transparent"
				duration={16}
				delay={10}
				radius={260}>
				<Icons.notion />
			</OrbitingCircles>

			{/* Outer Circles (reverse) */}
			<OrbitingCircles
				className="size-[52px] border-none bg-transparent"
				radius={300}
				duration={20}
				reverse>
				<Icons.googleDrive />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-48 border-none bg-transparent"
				radius={300}
				duration={9}
				delay={20}
				reverse>
				<Icons.gitHub />
			</OrbitingCircles>
		</section>
	);
}

const Icons = {
	gitHub: () => (
		<img
			src="https://book.funxdata.com/public/img/website/ydm.png"
			className="relative mr-16 mt-24 shadow-lg rounded-full"
			alt=""
		/>
	),
	notion: () => (
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
				fill="#ffffff"
			/>
			<path
				d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
				fill="#000000"
				fillRule="evenodd"
				clipRule="evenodd"
			/>
		</svg>
	),
	openai: () => (
		<svg
			width="100"
			height="100"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
		</svg>
	),
	googleDrive: () => (
		<svg
			width="100"
			height="100"
			viewBox="0 0 87.3 78"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
				fill="#0066da"
			/>
			<path
				d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
				fill="#00ac47"
			/>
			<path
				d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
				fill="#ea4335"
			/>
			<path
				d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
				fill="#00832d"
			/>
			<path
				d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
				fill="#2684fc"
			/>
			<path
				d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
				fill="#ffba00"
			/>
		</svg>
	),
	whatsapp: () => (
		<svg
			width="100"
			height="100"
			viewBox="0 0 175.216 175.552"
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient
					id="b"
					x1="85.915"
					x2="86.535"
					y1="32.567"
					y2="137.092"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#57d163" />
					<stop offset="1" stopColor="#23b33a" />
				</linearGradient>
				<filter
					id="a"
					width="1.115"
					height="1.114"
					x="-.057"
					y="-.057"
					colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="3.531" />
				</filter>
			</defs>
			<path
				d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
				fill="#b3b3b3"
				filter="url(#a)"
			/>
			<path
				d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
				fill="#ffffff"
			/>
			<path
				d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
				fill="url(#linearGradient1780)"
			/>
			<path
				d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
				fill="url(#b)"
			/>
			<path
				d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
				fill="#ffffff"
				fillRule="evenodd"
			/>
		</svg>
	),
};
