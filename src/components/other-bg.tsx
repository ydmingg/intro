import { useState } from 'react'

export function OtherBg() { 
    // 设置滚动鼠标时，图片修改transform的translate属性值
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    

    const handleScroll = () => {
        const { scrollTop, clientWidth } = document.documentElement;
        // 处理小球图片到浏览器边缘时，x轴向着反方向移动
        const oOtherBg = document.documentElement;
        if (3 > clientWidth) {
            setTranslateX(-scrollTop);
        }
        
        setTranslateX(scrollTop)
        setTranslateY(scrollTop);

        

    }

    window.addEventListener('scroll', handleScroll);    

    return (
        <>
            <div className="absolute top-32 right-32" style={{
                transition: 'all 0.5s ease',
                transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
            }}>
                <img loading="lazy" width="525" src="https://www.qzq.at/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-circle.e1e5dc56.png&w=640&q=75" alt="" />
            </div>
        </>
    );
}
