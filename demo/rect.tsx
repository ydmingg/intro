import { motion } from "framer-motion"

export function Rect() {
    // const list = { hidden: { opacity: 0 } }
    // const item = { hidden: { x: -10, opacity: 0 } }

    return (
        <>
            <motion.div
                className="box-img relative z-[1]"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
            />

            {/* <motion.div
                className="box-img"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            /> */}


        </>
    );
}
