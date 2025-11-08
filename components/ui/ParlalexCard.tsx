// Import Lucide icons (install with: npm install lucide-react)

"use client";

import features from "@/constants/fetaturesData";
import { Feature } from "@/constants/fetaturesData";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
  const backendGroundColors = ["#03045e", "#023047", "#386641"]


export default function ParlalexCard() {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"],
  });
  const [backgroundColor, setBackgroundColor] = useState(backendGroundColors[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.floor(latest * (backendGroundColors.length - 1));
    setBackgroundColor(backendGroundColors[index]);
  });

  return (
    <div ref={mainRef} style={{ backgroundColor }} className="min-h-screen flex items-center justify-center bg-neutral-600">
      <div className="mx-auto flex mx-w-4xl flex-col gap-10 py-40 my-auto">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  );
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transformElmenet = useSpring (useTransform(scrollYProgress, [0, 1], [-200, 300]));
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);

  return (
    <motion.div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 items-center py-40 gap-10 mx-auto my-10"
      style={{ opacity, scale }}
    >
      <div className="flex flex-col gap-5">
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </div>
      <motion.div style={{ y: transformElmenet }}>{feature.content}</motion.div>
    </motion.div>
  );
};
