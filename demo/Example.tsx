import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Example = () => {
    const constraintsRef = useRef<any>(null);
    

    return (
        <>
            <div className="framer-module2 z-[1]">
                <div className="example-container">
                    <motion.div className="drag-area"  />
                    <motion.div animate={{ x: [0, 200, 0] }}/>
                </div>
            </div>
            
        </>
    );
};
