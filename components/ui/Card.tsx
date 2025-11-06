"use client";

import { cn } from "@/lib/utils";
import { div } from "framer-motion/client";
import {
  ParkingCircleIcon,
  ParkingCircleOff,
  ParkingMeter,
  ParkingSquareIcon,
  Plus,
  X,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Card() {
  return (
    <div
      className={cn(
        "w-72 min-h-[26rem] h-[28rem] rounded-xl",
        "shadow-[0_1px_1px_rgba(0,0,0,.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]",
        "p-6 flex flex-col bg-white"
      )}
    >
      <h2 className="font-bold text-[10px]">Acceritiny</h2>
      <p className="text-neutral-600 text-[10px]">
        accecetinity beautiful snippets
      </p>
      <div className="flex justify-center items-center">
        <button
          className={cn(
            "flex items-center gap-2 text-[10px] mt-4",
            "shadow-[0_1px_1px_rgba(0,0,0,.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]",
            "rounded-lg py-1 px-2"
          )}
        >
          <Image
            width={50}
            height={50}
            className="h-4 w-4"
            src="/machine-vision-svgrepo-com.svg"
            alt="logo"
          />
          Acceritiny
          <X className="h-3 w-3 text-neutral-500" />
        </button>
      </div>
      <motion.div className="bg-gray-100 rounded-lg flex-1 mt-4 border-dashed border border-neutral-200 relative">
        <motion.div
          className="absolute inset-0 w-full h-full bg-white rounded-lg divide-y divide-neutral-200"
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(px)",
          }}
          whileHover={{
            opacity: 1,
            scale: 1.05,
            filter: "blur(0px)",
          }}
          transition={{
            // duration: 0.3,
            // ease: "easeInOut",

            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
        >
          <div className="flex gap-2 py-5 px-4">
            <div
              className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
                    bg-white rounded-md flex items-center justify-center"
            >
              <ParkingMeter className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[8px] text-neutral-600 ">
                Acceritiny UI Components
              </p>
              <p className="text-[8px] text-neutral-400 mt-1">
                A collection of UI Compoenents
              </p>
            </div>
          </div>
          <div className="flex gap-2 py-5 px-4">
            <div
              className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
                    bg-white rounded-md flex items-center justify-center"
            >
              <ParkingCircleIcon className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[8px] text-neutral-600 ">Circle</p>
              <p className="text-[8px] text-neutral-400 mt-1">
                Parking at your own speeds
              </p>
            </div>
          </div>
          <div className="flex gap-2 py-5 px-4">
            <div
              className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
                    bg-white rounded-md flex items-center justify-center"
            >
              <ParkingCircleOff className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[8px] text-neutral-600 ">
                Circle Off
              </p>
              <p className="text-[8px] text-neutral-400 mt-1">
                No Parking here
              </p>
            </div>
          </div>
          <div className="flex gap-2 py-5 px-4">
            <div
              className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
                    bg-white rounded-md flex items-center justify-center"
            >
              <ParkingSquareIcon className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[8px] text-neutral-600 ">
                Circle Square
              </p>
              <p className="text-[8px] text-neutral-400 mt-1">
                Square parking at no cost
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center mt-3">
            <div
              className="h-4 w-4 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]
                    rounded-md flex items-center justify-center"
            >
              <Plus className="h-3 w-3 text-neutral-500" />
            </div>
            <p className="font-bold text-[8px] text-neutral-600 ">
              Create Project
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
