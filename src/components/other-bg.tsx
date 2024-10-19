import { useEffect, useRef } from 'react'

export function OtherBg() { 
    // 设置滚动鼠标时，图片修改transform的translate属性值
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    const oMyBg = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (oMyBg.current) { 
            const rect = oMyBg.current.getBoundingClientRect(); // 获取元素相对于视口的位置信息
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;

            // 计算新的位置
            let newX = scrollX + (window.innerWidth - rect.width) / 2;
            let newY = scrollY + (window.innerHeight - rect.height) / 2;

            // 确保元素不会超出视口边界
            if (newX < 0) newX = 0;
            if (newY < 0) newY = 0;
            if (newX + rect.width > window.innerWidth) newX = window.innerWidth - rect.width;
            if (newY + rect.height > window.innerHeight) newY = window.innerHeight - rect.height;

            oMyBg.current.style.transform = `translate(${newX}px, ${newY}px)`;
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
