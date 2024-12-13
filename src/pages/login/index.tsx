import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
	const navigate = useNavigate();
    const userRef = useRef<HTMLInputElement>(null);
	const pwdRef = useRef<HTMLInputElement>(null);

	// 设置根目录
	const baseURL = "http://localhost:3000";

	const loginData = () => {
		// 向服务器发送请求
		axios({
			baseURL: baseURL,
			// 请求地址
			url: "login",
			// 请求方式
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			// 请求参数
			data: {
				username: userRef.current?.value.trim(),
				password: pwdRef.current?.value.trim(),
			},
		}).then((res) => {
            console.log(res.data.data);
            navigate("/");
            
		}).catch((err) => { 
            console.log(err, "登录失败");
		});
	};

	return (
		<section className="intro-logo p-20">
			<div className="flex w-[500px] m-auto gap-2 relative z-1 mb-4">
				<input
					className="flex-1 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-4 ring-1 ring-slate-200 shadow-sm"
					type="text"
					aria-label="Filter projects"
					placeholder="Filter projects..."
					ref={userRef}
				/>
			</div>
			<div className="flex w-[500px] m-auto gap-2 relative z-1 mb-4">
				<input
					className="flex-1 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-4 ring-1 ring-slate-200 shadow-sm"
					type="text"
					aria-label="Filter projects"
					placeholder="Filter projects..."
					ref={pwdRef}
				/>
			</div>
			<div className="flex w-[500px] m-auto gap-2 relative z-1 mb-4">
				<button
					type="button"
					className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
					onClick={loginData}>
					Click Me
				</button>
			</div>
		</section>
	);
};
