import React, { useState, useEffect } from 'react';
import Damo1 from "./damo1";
import { useSpring, animated } from '@react-spring/web';
import { useWindowScroll } from 'react-use';

export function OtherBg() {
    const [width, setWidth] = useState(1000);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    // 更新宽度为窗口宽度的 90%
    useEffect(() => {
        setWidth(0.9 * window.innerWidth);
    }, []);


    // 获取窗口滚动位置
    let { y: scrollY } = useWindowScroll();

    // 计算滚动位置的模
    const modScrollY = -scrollY % width;
    
    // 获取浏览器可滚动的最大值
    const maxScrollY = viewportHeight;

    // 创建动画值
    const animatedProps = useSpring({
        x: modScrollY,
        y: scrollY,
        delay: 50,
        config: { mass: 1, tension: 20, friction: 10 } 
    });

    return (
        <animated.div
            className="float-bal absolute top-32 right-32"
            style={{
                transform: animatedProps.x.to(x => `translateX(${x}px)`),
                translateY: animatedProps.y.to(y => `${y}px`)
            }}
        >
            <img
                alt=""
                loading="lazy"
                width="525"
                height="517"
                decoding="async"
                data-nimg="1"
                className="z-[1]"
                src="/public/imgs/white-circle.webp"
            />
        </animated.div>
    );
}
