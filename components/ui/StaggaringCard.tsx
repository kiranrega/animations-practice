"use client";

import { cn } from "@/lib/utils";
import {
  AxeIcon,
  BanIcon,
  GitBranch,
  PoundSterling,
  SmartphoneChargingIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { useState } from "react";

interface SkillProps {
  name: string;
  href: string;
  children?: React.ReactNode;
}

let technologies = [
  {
    name: "Express",
    href: "https://expressjs.com/",
    icon: <BanIcon />,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <AxeIcon />,
  },
  {
    name: "Postman",
    href: "https://www.postman.com/",
    icon: <PoundSterling />,
  },
  {
    name: "Github",
    href: "https://github.com",
    icon: <GitBranch />,
  },
  {
    name: "SonarQube",
    href: "https://www.sonarsource.com/",
    icon: <SmartphoneChargingIcon />,
  },
];

function Skill({ name, children }: SkillProps) {
  return (
    <motion.span
      variants={childVariants}
    //   className="inline-flex items-center rounded border border-neutral-600 bg-white p-1 text-sm leading-4 text-neutral-100 no-underline whitespace-nowrap
    //   bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]"
    className={cn(
                    "flex items-center gap-2 text-[10px] text-gray-700 mt-4",
                    "shadow-[0_1px_1px_rgba(0,0,0,.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]",
                    "rounded-lg py-1 px-2"
                  )}
    >
      {/* <div className="size-4 flex-shrink-0">{children}</div> */}
      <p className="ml-1 text-sm font-bold">{name}</p>
    </motion.span>
  );
}

const parentVariants = {
  open: {
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.3,
      direction: "reverse",
    },
  },
};

const childVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -10,
  },
};

export default function StaggaringCard() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <motion.div
        variants={parentVariants}
        className="flex gap-2 justify-center items-center my-0"
        initial={false}
        animate={open ? "open" : "closed"}
      >
        {technologies.map((technology: any, techIndex: number) => (
          <Skill key={techIndex} name={technology.name} href={technology.href} />
            /* {technology.icon}
          </Skill> */
        ))}
      </motion.div>
      <motion.button onClick={() => setOpen(!open)} className="p-1 bg-neutral-600 text-neutral-100 rounded-xl font-bold m-2">Toggle</motion.button>
    </div>
  );
}
