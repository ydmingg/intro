import * as Icon from '@tabler/icons-react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { NumberTicker } from "@/components/toggle/number-ticker";
import { Highlight } from "@/components/ui/hero-highlight";

const testimonials = [
    {
        id: "testimonials1",
        name: "Charles Dickens",
        link: {
            icon: Icon.IconButterfly,
            text: "other",
        },
        tip: [
            {
                value: 12,
                text: "list"
            },
            {
                value: 19,
                text: "list"
            },
        ],
		quote: "It was thf, it was arkness, it was the spring of hope, it was the winter of despair.",
    },
    {
        id: "testimonials2",
        name: "Charles Dickens",
        link: {
            icon: Icon.IconSitemap,
            text: "gitee",
        },
        tip: [
            {
                value: 55,
                text: "asdfsdf"
            },
        ],
		quote: "om, it was the age of foolishnenter of despairdespairdespairdespai age of foolishnenter of despairdespairdespairdespai age of foolishnenter of despairdespairdespairdespai age of foolishnenter of despaird.",
    },
    {
        id: "testimonials3",
        name: "Charles Dickens",
        link: {
            icon: Icon.IconBrandGithub,
            text: "github",
        },
        tip: [
            {
                value: 12,
                text: "asdf"
            },
        ],
		quote: "Darkness, it was the spring of hope, it was the winter of despair.",
    },
    
];

export function InfiniteMovingCardsDemo() {
	return (
		<div className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 py-36 md:py-48">
			<p className="text-xl md:text-2xl">
				I share stories about #programming, #gaming, #content-creation
				and #life on the Internet.
				<br />
                My stories have attracted followers. 
                <strong>
                    <NumberTicker value={285844} className="inline-block tabular-nums dark:text-white text-orange-400 text-2xl md:text-3xl font-weight px-2" />
                </strong>
                followers.  
                <br />
                <Highlight className="text-black dark:text-white">
                    Storytelling is my passion because I've been profoundly
                </Highlight>
			</p>
            <InfiniteMovingCards
				items={testimonials}
				direction="left"
				speed="fast"
            />
            <InfiniteMovingCards
				items={testimonials}
				direction="left"
				speed="fast"
            />
            <p className="text-xl md:text-2xl mt-12">
				Storytelling is my passion because I've been profoundly shaped
				by the stories of others.
                <br />
                <a href="" className="flex items-center text-orange-400 font-bold underline gap-1">
                    Discover my inspirations here 
                    <Icon.IconLink stroke="3" />
                </a>
            </p>
            
		</div>
	);
}
