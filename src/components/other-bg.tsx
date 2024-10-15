import { useEffect, useState, useRef } from 'react'

export function OtherBg() { 
    // 设置滚动鼠标时，图片修改transform的translate属性值
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const oMyBg = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();
    let idx = 0

    useEffect(() => {
        const handleScroll = () => {
            if (oMyBg.current) {
                // 获取窗口的位置信息
                const { windowOffsetWidth, windowCrollTop, } = {
                    "windowOffsetWidth": document.documentElement.offsetWidth,
                    "windowCrollTop": document.documentElement.scrollTop,
                }
                // 初始化小球的位置信息
                const { oMyBgRight, oMyBgTop} = {
                    "oMyBgRight": windowOffsetWidth - parseInt(getComputedStyle(oMyBg.current).right, 10),
                    "oMyBgTop": parseInt(getComputedStyle(oMyBg.current).top, 10)
                }
                // 获取小球的位置信息
                const rectPosition = oMyBg.current.getBoundingClientRect();
          
                // 初始化小球变化的位置
                let { scrollTop, scrollLeft} = {
                    "scrollTop": windowCrollTop,
                    "scrollLeft": windowCrollTop,
                }

                // 判断浏览器滚动方向
                idx = windowCrollTop > idx ? windowCrollTop + oMyBgTop : windowCrollTop;
                idx = scrollTop;

                // 处理小球水平移动轨迹
                scrollLeft = 0
                // console.log(windowOffsetWidth, rectPosition.right);
                

                const animate = () => {
                    setPosition(prevPos => {
                        const newX = prevPos.x + (scrollLeft - prevPos.x) 
                        const newY = prevPos.y + (scrollTop - prevPos.y) 
                        
                        animationRef.current = requestAnimationFrame(animate);
                        return { x: newX, y: newY };
                    });
                };

                cancelAnimationFrame(animationRef.current!);
                animationRef.current = requestAnimationFrame(animate);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationRef.current!);
        };

    }, []);

        

    return (
        <>
            <div ref={oMyBg} className="absolute top-32 right-32 z-0" style={{
                transition: 'all 0.5s ease',
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}>
                <img loading="lazy" width="525" src="https://www.qzq.at/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-circle.e1e5dc56.png&w=640&q=75" alt="" />
            </div>
        </>
    );
}
