
"use client";
import { cn } from "@/lib/utils";
import Card from "../components/ui/Card";
import StaggaringCard from "@/components/ui/StaggaringCard";
import ParlalexCard from "@/components/ui/ParlalexCard";
import Modal from "@/components/ui/TiltCard";
import { useState } from "react";
import MagneticButton from "@/components/ui/ParlalexCard";
import TiltCard from "@/components/ui/TiltCard";


export default function Page() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    // <ParlalexCard />
    // <div className={cn("min-h-screen flex items-center justify-center bg-gray-900")}>
    //   <Card />
    //   <StaggaringCard />
    // </div>
    <TiltCard />
    // <HorizontalGallery />
  ) 
}
  