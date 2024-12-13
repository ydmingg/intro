import axios from "axios";

export default function Other() {
    // 设置根目录
    const baseURL = "http://localhost:3000";
    
	const axiosData = () => {
		// 向服务器发送请求
		axios({
			// 指定服务器根目录
			baseURL: baseURL,
			// 请求方式
			method: "get",
		}).then((res) => {
			console.log(res.data);
		});
    };
    
   

	return (
		<div className="py-48 text-center">
			
			<div className="flex w-[500px] m-auto gap-2 relative z-1 mb-8">
				<input
					className="flex-1 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-4 ring-1 ring-slate-200 shadow-sm"
					type="text"
					aria-label="Filter projects"
                    placeholder="Filter projects..."
				/>
				<button
					type="button"
					className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
					onClick={axiosData}>
					Click Me
                    
				</button>
			</div>
		</div>
	);
}
