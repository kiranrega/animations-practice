import React, { useState } from "react";
import Link from "next/link"; // Assuming Next.js Link
import { motion } from "framer-motion"; // Assuming Framer Motion

// Type definition for navigation items (based on usage in the code)
type NavItem = {
  href: string;
  title: string;
};

// Mock data based on the code's structure. You need to define title for each item.
const navItems: NavItem[] = [
  {
    href: "/home",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/services",
    title: "Services",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

export const Navbar = () => {
  // Uses null for no hover, or the index of the hovered item
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-40">
      <nav className="max-w-xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex">
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            key={item.title}
            // Set the hovered state on mouse enter
            onMouseEnter={() => setHovered(idx)}
            // Reset the hovered state on mouse leave
            onMouseLeave={() => setHovered(null)}
            className="w-full relative group text-center py-3 text-xs text-neutral-500"
          >
            <motion.span 
              className="relative z-30 group-hover:text-white"
            >
              {item.title}
            </motion.span>

            {/* The animated hover background */}
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 rounded-full w-full h-full bg-black z-10 pointer-events-none"
                // Add a transition to make the move smooth
                transition={{
                  type: "spring",
                  duration: 0.5,
                  bounce: 0.2,
                }}
              />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};