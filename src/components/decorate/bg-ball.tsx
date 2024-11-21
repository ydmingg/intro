import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useWindowScroll } from 'react-use';

export function BgBall() {
    const [width, setWidth] = useState(1000);
    const myRef = React.useRef<HTMLDivElement>(null);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [newH, setNewH] = useState(0);

    // 更新宽度为窗口宽度的 90%
    useEffect(() => {
        setWidth(0.9 * window.innerWidth);
        setScrollHeight(document.documentElement.scrollHeight);

    }, []);


    // 获取窗口滚动位置
    let { y: scrollY } = useWindowScroll();

    // 计算滚动位置的模
    const modScrollY = -scrollY % width;
    
    // 在每次宽度或滚动位置变化时重新计算 newH
    useEffect(() => {
        if (myRef.current) {
            const rect = myRef.current.getBoundingClientRect();
            const newHValue = scrollHeight * 0.9 - rect.height - rect.y;
            setNewH(newHValue);
        }
    }, [scrollHeight, width, scrollY]);

    // 限制 scrollY 的最大值
    if (scrollY > newH) {
        scrollY = newH ;
    }
    

    // 创建动画值
    const animatedProps = useSpring({
        x: modScrollY,
        y: scrollY,
        config: { mass: 1, tension: 12, friction: 20 } 
    });
    
    

    return (
        <animated.div
            ref = {myRef}
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
