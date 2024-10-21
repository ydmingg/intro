import { useEffect, useRef } from 'react'
let direction = 1; // 1表示向右，-1表示向左
let position = 0;

export function OtherBg() { 
    // 设置滚动鼠标时，图片修改transform的translate属性值
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    const oMyBg = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (oMyBg.current) { 
            const rect = oMyBg.current.getBoundingClientRect(); // 获取元素相对于视口的位置信息

            function animate() { 
                position += direction * 10; // 每次移动2个像素
                console.log("移动了：",-position);
                oMyBg.current!.style.transform = `translateX(${-position}px)`; // 通过transform移动小球
                
                
                
                // 如果小球到达边界，反转方向
                if (position >= window.innerWidth - rect.width - 128 || position < 0) {
                    direction *= -1; // 反转方向
                    // direction = 0
                
                }

                
                
                requestAnimationFrame(animate);
            }

            animate();

        }

    }, []);
    
    return (
        <>
            <div ref={oMyBg} className="absolute top-32 right-32 z-0" style={{
                display: 'flex',
                // transition: 'all 0.3s ease',
                // transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}>
                <img loading="lazy" width="525" src="https://www.qzq.at/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-circle.e1e5dc56.png&w=640&q=75" alt="" />
            </div>
        </>
    );
}
