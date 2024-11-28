import * as Icon from '@tabler/icons-react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { NumberTicker } from "@/components/toggle/number-ticker";
import { Highlight } from "@/components/ui/hero-highlight";

const testimonials = [
    {
        id: "testimonials1",
        name: "xiaoheizhu",
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
		quote: "zhezhezhezhezhezhezhezhezhezhezhezhezhezhezhezhezhezhezhezhezhezhe",
    },
    {
        id: "testimonials2",
        name: "xiaoheizhu",
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
		quote: "asdfasdfasdfasdfasdfasdfasdfasdfasdsdfage of foolishnenter of despaird.",
    },
    {
        id: "testimonials3",
        name: "guanyu",
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
		quote: "asdfasdf asdf asdfasdfl ikjahsdkfjhasdkjlf sdf espair.",
    },
    {
        id: "testimonials4",
        name: "guanyu",
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
		quote: "asdfasdf asdf asdfasdfl ikjahsdkfjhasdkjlf sdf espair.",
    },
    {
        id: "testimonials5",
        name: "xiaoheizhu",
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
		quote: "asdasdfasdfsdfasdasdfasdfsdfasdasdf asdfsdfasdasdfasdfsdfasdasdfasdfsdf espair.",
    },
    {
        id: "testimonials6",
        name: "guanyu",
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
		quote: "asdfasdf asdf asdfasdfl ikjahsdkfjhasdkjlf sdf espair.",
    },
    
];

export function InfiniteMovingCardsDemo() {
	return (
		<div className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 py-36 md:py-48">
			<p className="text-xl md:text-2xl">
				asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf ntent-creation
				and #lifeasdf ternet.
				<br />
                My stoasdf acted follsdf 
                <strong>
                    <NumberTicker value={285844} className="inline-block tabular-nums dark:text-white text-orange-400 text-2xl md:text-3xl font-weight px-2" />
                </strong>
                followers.  
                <br />
                <Highlight className="text-black dark:text-white">
                    Storyteasdfasdfasd asdfasdfasdfds ve been profoundly
                </Highlight>
			</p>
            <InfiniteMovingCards
				items={testimonials}
				direction="left"
				speed="slow"
            />
            <InfiniteMovingCards
				items={testimonials}
				direction="left"
				speed="slow"
            />
            <p className="text-xl md:text-2xl mt-12">
				Stoasdfasdfasdfasdfasdfasdfasd fasdfasdfasd fasdfasdfasdfasdfas dfasdfasdfasdfasdfxcvzasdf asdfasdfasd ofoundly shaped
				byasdfasdf others. Stoasdfasdfasdfasdfasdfasdfasd Stoasdfasdfasdfasdfasdfasdfasd
                <br />
                <a href="" className="flex items-center text-orange-400 font-bold underline gap-1">
                    Discoverasdfasdfasdf asdfa ere 
                    <Icon.IconLink stroke="3" />
                </a>
            </p>
            
		</div>
	);
}
