"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";

export default function AnimatedText({ text }: { text: string }) {
  // const [displayedText, setDisplayedText] = useState<string>(text);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    animate(
      "span",
      { opacity: [0, 1], filter: ["blur(4px)", "blur(0px)"] },
      {
        duration: 1.5,
        ease: "easeInOut",
        delay: stagger(0.05),
      }
    );
  };
  return (
    <motion.h1
      ref={scope}
      className="max-w-4xl font-bold mx-auto text-neutral-600 max-h-40 text-4xl flex items-center justify-center flex-wrap p-10 text-center"
    >
      {/* <motion.span className="" style={{
        opacity:0
      }}>{text}</motion.span> */}

      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", marginRight: "2px" }}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
