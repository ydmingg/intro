// import { useState, useEffect } from 'react';
import * as Icon from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

// 导航链接数据
const navLinks = [
    { to: "/", label: "Home" },
    { to: "/notes", label: "Notes"},
	{ to: "/about", label: "about" },
	{ to: "/other", label: "other" },
	{ to: "/dashboard/settings", label: "Settings" },
	{ to: "/dashboard/profile", label: "Profile" },
];

// 导航链接激活状态
function classNameActivew({ isActive }: { isActive: boolean }): string {
	return isActive ? "text-foreground" : "text-foreground/60";
}

export function Header() {
    // 主题切换
    // const [isDarMode, setIsDarkMode] = useState(false);
    
    // // 设置变化的状态
    // useEffect(() => {
    //     const root = document.documentElement as HTMLElement;
    //     root.className = isDarMode ? "dark" : "light";
    //     root.style.colorScheme = isDarMode?"dark":"light";

    // }, [isDarMode]);
    
    // // 注册点击事件
    // const toggleTheme = () => setIsDarkMode(!isDarMode);

	return (
		<header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-500/10 dark:border-slate-50/[0.06]">
			<div className="flex h-14 items-center p-4">
				<div className="mr-4 hidden md:flex ">
					<a className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden text-lg font-bold sm:inline-block">
                            Ydming
                        </span>
					</a>
					<nav className="flex items-center gap-4 text-sm lg:gap-6">
						{navLinks.map((link) => (
							<NavLink
								to={link.to}
								key={link.to}
								className={({ isActive }) =>
									cn(
										"text-base font-semibold transition-colors hover:text-foreground/80",
										classNameActivew({
											isActive: isActive,
										})
									)
								}>
								{link.label}
							</NavLink>
						))}
					</nav>
				</div>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
                        <button className="inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
                            <span className="hidden lg:inline-flex">
                                搜索文件...
                            </span>
                            <span className="inline-flex lg:hidden">Search...</span>
                            <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                <span className="text-xs">⌘</span>K
                            </kbd>
                        </button>
                    </div>
					<nav className="flex items-center ">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/ydmingg">
							<div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-9 px-0">
								<Icon.IconBrandGithub />
								<span className="sr-only">GitHub</span>
							</div>
                        </a>
                        {/* <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 w-9 px-0"
                            type="button"
                            id="radix-:r4:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed">
                            <Icon.IconSun  />
                        </button> */}
						
					</nav>
				</div>
			</div>
		</header>
	);
}
