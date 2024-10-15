import { useEffect, useRef } from "react";
import { motion, scroll } from "framer-motion";

export const Example = () => {
    const constraintsRef = useRef<HTMLDivElement>(null);

    useEffect(() => { 
        scroll((progress: any) => { 
            if (constraintsRef.current) { 
                constraintsRef.current.style.transform = `translate3d(${progress * 1000}px, 0, 0)`
            }
        });

    }, []);


    return (
        <>
            <div className="framer-module2">
                <div className="example-container">
                    <motion.div className="drag-area" ref={constraintsRef} />
                    <motion.div drag dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                    }} />
                </div>
            </div>
            
        </>
    );
};
