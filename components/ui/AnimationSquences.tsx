"use client";
import { motion, useAnimate } from "motion/react";

export default function AnimationSequences() {
  const [scope, animate] = useAnimate();

  const startAnimation = async () => {
    animate(
      "button",
      { width: "5rem", borderRadius: "1000px", backgroundColor: "#10b981" },
      { duration: 0.3 }
    );
    animate(".text-btn", { display: "none" }, { duration: 0.1 });
    animate(
      "button",
      { opacity: 1, scale: [1, 1, 2, 0.8, 1] },
      { duration: 0.8 }
    );
    animate(".check-icon path", { pathLength: 1 }, { duration: 0.3 });
    await animate(".check-icon", { scale: [1, 1.5, 1] }, { duration: 0.4 });
        animate(".loder", { opacity: 1 }, { duration: 0.15 });
    await animate(".loder", { rotate: 360 * 4 }, { duration: 2 });
  };
  return (
    <div
      ref={scope}
      className=" relative  h-screen w-full bg-neutral-800 flex items-center justify-center"
    >
      <motion.button
        initial={{
          width: "30rem",
        }}
        onClick={startAnimation}
        className="h-20 rounded-lg bg-purple-500 font-medium
         cursor-pointer text-white text-lg flex items-center justify-center gap-4 overflow-hidden relative"
      >
        <motion.svg
          initial={{ width: "0" }}
          height="28"
          viewBox="0 0 32 32"
          className="loder"
        >
          <circle
            cx="16"
            cy="16"
            r="12"
            stroke="#fff"
            strokeWidth={4}
            fill="none"
          />
        </motion.svg>
        <motion.span className="text-btn">Purchase Now ($19)</motion.span>
      </motion.button>
      <motion.svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        className="check-icon h-8 w-8 absolute z-50 pointer-events-none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          transition={{
            type: "tween",
            duration: 0.3,
            ease: "easeOut",
          }}
          d="M8 16l6 6 10-12"
          stroke="#fff"
          strokeWidth="4"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}
