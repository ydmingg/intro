import { LinkPreview } from "@/components/ui/link-preview";

export function NotFound() {
	return (
		<div className="flex flex-col align-center p-12 text-center">
			<h1 className="w-auto">404</h1>

			<LinkPreview
				url="https://www.bilibili.com/"
				className="w-auto font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
				链接预览图
            </LinkPreview>
            
		</div>
	);
}
