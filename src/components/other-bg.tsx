import { useEffect, useState, useRef } from 'react'

export function OtherBg() { 
    // 设置滚动鼠标时，图片修改transform的translate属性值
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const oMyBg = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (oMyBg.current) { 
            const elementHeight = oMyBg.current.offsetHeight;
            const elementWidth = oMyBg.current.offsetWidth;
    
            window.addEventListener('scroll', () => {
                // 获取当前滚动的垂直距离
                const scrollY = window.scrollY;
    
                // 计算元素的新位置
                let newTranslateY = scrollY;
                let newTranslateX = (window.innerWidth - elementWidth) * Math.random(); // 随机水平位置
    
                // 确保元素不超出可视范围
                if (newTranslateY + elementHeight > window.innerHeight) {
                    newTranslateY = window.innerHeight - elementHeight;
                }
    
                oMyBg.current!.style.transform = `translate(${newTranslateX}px, ${newTranslateY}px)`;
            });
        }

    }, []);
    


    return (
        <>
            <div ref={oMyBg} className="absolute top-32 right-32 z-0" style={{
                transition: 'all 0.5s ease',
                // transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}>
                <img loading="lazy" width="525" src="https://www.qzq.at/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-circle.e1e5dc56.png&w=640&q=75" alt="" />
            </div>
        </>
    );
}
