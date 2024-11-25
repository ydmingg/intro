import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import GradualSpacing from "@/components/ui/gradual-spacing";


export default function AutoToggle() { 
    const [isFirstVisible, setIsFirstVisible] = useState(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const visibleClass = {
        opacity: 1,
        transform: "translateX(40px) translateY(-40px) scale(2) translateZ(0px)",
        filter: "blur(0px)",
        position: "absolute",
    };
      
    const hiddenClass = {
        opacity: 0,
        transform: "none",
    };

    const animatedClass = {
        hidden: hiddenClass,
        visible: visibleClass,
    };

    const handleAnimationComplete = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setIsFirstVisible(!isFirstVisible);
        }, 3000); // 延迟1秒后切换，可以根据需要调整
    };

    useEffect(() => {
        return () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        };
    }, []);

    return (
        <div className="App">
        <AnimatePresence>
            {isFirstVisible && (
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={animatedClass as any}
                transition={{ duration: 1 }}
                onAnimationComplete={handleAnimationComplete}
            >
                <GradualSpacing className="inline-block" text="555555" />
            </motion.div>
            )}
            {!isFirstVisible && (
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={animatedClass as any}
                transition={{ duration: 1 }}
                onAnimationComplete={handleAnimationComplete}
            >
                <GradualSpacing className="inline-block" text="sasdfasdf" />
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
}


// return (
//     <h2 className="py-6 border-b-2 border-slate-700">
//         <GradualSpacing className="inline-block" text="Gradual" />
//         <GradualSpacing className="inline-block" text="Gradual" />
//     </h2>
// )