import * as Icon from "@tabler/icons-react";

export function Footer() {
	return (
		<footer className="py-24">
            <div className="pt-4 text-center font-fantasy text-2xl text-gray-300">
                BingBing &amp; 123456789
                <div className="flex text-2xl slate-700 justify-center items-center h-12 gap-x-4 ">
                    <a target="_blank" href="https://github.com/ydmingg">
                        <Icon.IconBrandGithubFilled />
                    </a>
                    <a target="_blank" href="https://github.com/ydmingg">
                        <Icon.IconBrandGithubFilled />
                    </a>
                    <a target="_blank" href="https://github.com/ydmingg">
                        <Icon.IconBrandGithubFilled />
                    </a>
                    <a target="_blank" href="https://github.com/ydmingg">
                        <Icon.IconBrandGithubFilled />
                    </a>
                </div>
            </div>
		</footer>
	);
}
