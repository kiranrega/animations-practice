"use client";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export default function TiltCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const springRotateX = useSpring(rotateX);
  const springRotateY = useSpring(rotateY);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springRotateX, rotateY: springRotateY }}
        className="w-64 h-80 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center text-white text-2xl font-bold"
      >
        Tilt Me
      </motion.div>
    </div>
  );
}
