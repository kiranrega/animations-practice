"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

// Define the type for a single card object
type Card = {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string; // Added this based on the <Link href> in the image
  content: () => JSX.Element; // Added the content function
};

const cards: Card[] = [
  {
    title: "Jujutsu Kaisen",
    description: "A student joins a secret society to fight cursed spirits.",
    src: "https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435340_1280.png",
    ctaText: "Watch Now",
    ctaLink: "/watch/jjk",
    content: () => (
      <div>
        <p className="py-2 text-sm text-gray-700">
          **Jujutsu Kaisen** follows **Yuji Itadori**, an athletic high schooler
          who becomes the host to a powerful Curse named **Sukuna**. He joins Tokyo
          Jujutsu High to train and battle malevolent spirits.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Key themes: Sacrifice, inner strength, and found family.
        </p>
      </div>
    ),
  },
  {
    title: "Attack on Titan",
    description: "Humanity's fight for survival against massive Titans.",
    src: "https://cdn.pixabay.com/photo/2025/04/17/12/03/girl-9540346_1280.jpg",
    ctaText: "Final Season",
    ctaLink: "/watch/aot",
    content: () => (
      <div>
        <p className="py-2 text-sm text-gray-700">
          **Attack on Titan** explores humanity’s struggle for freedom against
          giant humanoid Titans. The truth behind the walls changes everything.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Key themes: Freedom, morality, and survival.
        </p>
      </div>
    ),
  },
  {
    title: "Demon Slayer",
    description: "A brother's quest to cure his sister turned demon.",
    src: "https://cdn.pixabay.com/photo/2024/11/06/20/31/girl-9179307_1280.png",
    ctaText: "New Arc",
    ctaLink: "/watch/ds",
    content: () => (
      <div>
        <p className="py-2 text-sm text-gray-700">
          **Demon Slayer** follows **Tanjiro Kamado**, who becomes a demon slayer
          after his sister **Nezuko** is turned into a demon.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Key themes: Sibling bond, perseverance, and hope.
        </p>
      </div>
    ),
  },
  {
    title: "Spy x Family",
    description: "A spy, an assassin, and a telepath form a makeshift family.",
    src: "https://cdn.pixabay.com/photo/2023/10/07/23/39/girl-8301168_1280.png",
    ctaText: "Popular",
    ctaLink: "/watch/sxf",
    content: () => (
      <div>
        <p className="py-2 text-sm text-gray-700">
          **Spy x Family** follows a spy, an assassin, and a telepath pretending
          to be a normal family — with hilarious and heartwarming results.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Key themes: Family, secrets, and love.
        </p>
      </div>
    ),
  },
  {
    title: "One Piece",
    description: "Luffy and his crew sail the seas in search of the ultimate treasure.",
    src: "https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435339_1280.png",
    ctaText: "Ongoing",
    ctaLink: "/watch/op",
    content: () => (
      <div>
        <p className="py-2 text-sm text-gray-700">
          **One Piece** follows **Monkey D. Luffy** and his pirate crew on their
          grand adventure to find the legendary treasure known as the One Piece.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Key themes: Friendship, freedom, and adventure.
        </p>
      </div>
    ),
  },
];

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) return;
      if (event.target instanceof Node && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

export default function LayoutCards() {
  const [current, setCurrent] = useState<Card | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div className="py-10 bg-gray-100 min-h-screen relative">
      {current && (
        <motion.div
          className="fixed z-10 h-full w-full bg-black/50  backdrop-blur-sm"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
        />
      )}
      {current && (
        <motion.div
          ref={ref}
          layoutId={`card-${current.title}`}
          className="h-[600px] fixed inset-0 z-20 m-auto bg-white w-72 rounded-2xl border border-neutral-200 p-4 overflow-hidden"
        >
          <motion.img
            layoutId={`image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="h-60 aspect-square rounded-xl mb-4"
          />
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-col items-start gap-2">
                {/*
                  Replaced plain h2 with motion.h2 using layoutId so title animates
                  between list and expanded card.
                */}
                <motion.h2
                  layoutId={`title-${current.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                {/* <p className="text-[10px] text-neutral-500">
                  {current.description}
                </p> */}
              </div>
            </div>
            {/*
              Wrap the CTA display in a motion.div with layoutId so the CTA
              animates between list and modal. Keep Link for navigation.
            */}
            <Link href={current.ctaLink}>
              <motion.div
                layoutId={`cta-${current.title}`}
                className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
              >
                {current.ctaText}
              </motion.div>
            </Link>
          </div>
          <motion.div
            className="h-40 overflow-auto mt-4"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
          >
            {current.content()}
          </motion.div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-14 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                {/*
                  Replaced plain h2 with motion.h2 using the same layoutId
                  as the modal so the title animates.
                */}
                <motion.h2
                  layoutId={`title-${card.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <p className="text-[10px] text-neutral-500">
                  {card.description}
                </p>
              </div>
            </div>
            {/*
              Make the CTA a motion.div with the same layoutId as the modal CTA.
            */}
            <motion.div
              layoutId={`cta-${card.title}`}
              className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
