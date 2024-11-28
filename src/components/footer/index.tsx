import * as Icon from "@tabler/icons-react";

export function Footer() {
	return (
		<footer className="my-32  pt-4 text-center font-fantasy text-2xl text-gray-300 border-y-2 border-black-100 border-dashed">
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
		</footer>
	);
}
