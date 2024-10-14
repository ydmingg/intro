import { useEffect, useState, useRef } from 'react'

export function OtherBg() { 
    // 设置滚动鼠标时，图片修改transform的translate属性值
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const oMyBg = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();

    useEffect(() => {
        const handleScroll = () => {
            if (oMyBg.current) {
                const { scrollTop, clientWidth, scrollHeight, clientHeight } = document.documentElement;
                const rect = oMyBg.current.getBoundingClientRect();
                const ballWidth = rect.width;
                const maxX = clientWidth - ballWidth - 64; // 64 is 2 * margin (32px on each side)

                // Calculate horizontal movement based on scroll amount
                const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
                const targetX = Math.max(0, Math.min(maxX * scrollPercentage, maxX));
                const targetY = scrollTop * 0.8;

                // Smooth animation
                const animate = () => {
                    setPosition(prevPos => {
                        const newX = prevPos.x + (targetX - prevPos.x) * 0.1;
                        const newY = prevPos.y + (targetY - prevPos.y) * 0.1;

                        if (Math.abs(targetX - newX) < 0.1 && Math.abs(targetY - newY) < 0.1) {
                            return { x: targetX, y: targetY };
                        }

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
            <div ref={oMyBg} className="absolute top-32 right-32 z-0 bg-black" style={{
                transition: 'all 0.5s ease',
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}>
                <img loading="lazy" width="525" src="https://www.qzq.at/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-circle.e1e5dc56.png&w=640&q=75" alt="" />
            </div>
        </>
    );
}
