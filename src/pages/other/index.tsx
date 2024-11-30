import { useRef } from "react";
import axios from "axios";

export function Other() {
    const userRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);

    // 设置根目录
    const baseURL = "http://localhost:8080";
    
    

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
    
    const loginData = () => {
		// 向服务器发送请求
        axios({
            baseURL: baseURL,
            // 请求地址
            url: "login",
			// 请求方式
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            // 请求参数
            data: {
                username: userRef.current?.value,
                password: pwdRef.current?.value,
            },
            
            
		}).then((res) => {
			console.log(res.data);
		}).then((res) => {
            console.log("登录成功后需要显示的页面");
        }).catch((err) => {
            console.log("登录失败后需要显示的页面");
        });
	};

	return (
		<div className="py-48 text-center">
			<h1 className="text-xl font-bold">Other</h1>
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
			<div className="flex w-[500px] m-auto gap-2 relative z-1 mb-4">
				<input
					className="flex-1 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-4 ring-1 ring-slate-200 shadow-sm"
					type="text"
					aria-label="Filter projects"
                    placeholder="Filter projects..."
                    ref={ userRef }
				/>
			</div>
			<div className="flex w-[500px] m-auto gap-2 relative z-1 mb-4">
				<input
                    className="flex-1 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-4 ring-1 ring-slate-200 shadow-sm"
                    type="text"
                    aria-label="Filter projects"
                    placeholder="Filter projects..."
                    ref={ pwdRef }
				/>
			</div>
			<div className="flex w-[500px] m-auto gap-2 relative z-1">
				<button
					type="button"
					className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
					onClick={loginData}>
					Click Me
				</button>
			</div>
		</div>
	);
}
