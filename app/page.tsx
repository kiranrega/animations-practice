"use client";
import { cn } from "@/lib/utils";
import Card from "../components/ui/Card";
import StaggaringCard from "@/components/ui/StaggaringCard";
import ParlalexCard from "@/components/ui/ParlalexCard";
import TiltCard from "@/components/ui/TiltCard";
import LayoutCards from "@/components/ui/LayoutCards";
import { Navbar } from "@/components/ui/Navbar";
import { useState } from "react";

export default function Page() {
  // List of components available in the sidebar
  const componentsList = [
    { key: "Navbar", title: "Navbar", node: <Navbar /> },
    { key: "Card", title: "Card", node: <Card /> },
    { key: "StaggaringCard", title: "StaggaringCard", node: <StaggaringCard /> },
    { key: "ParlalexCard", title: "ParlalexCard", node: <ParlalexCard /> },
    { key: "TiltCard", title: "TiltCard", node: <TiltCard /> },
    { key: "LayoutCards", title: "LayoutCards", node: <LayoutCards /> },
  ];

  const [selectedKey, setSelectedKey] = useState<string>(componentsList[0].key);

  const selected = componentsList.find((c) => c.key === selectedKey) ?? componentsList[0];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-neutral-200 p-4">
        <h3 className="text-sm font-semibold mb-3">Components</h3>
        <ul className="flex flex-col gap-2">
          {componentsList.map((c) => {
            const active = c.key === selectedKey;
            return (
              <li key={c.key}>
                <button
                  onClick={() => setSelectedKey(c.key)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                    active ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"
                  )}
                  aria-pressed={active}
                >
                  {c.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Render the selected component */}
        <div className="w-full h-full">
          {/*
            The selected.node is a React node for the chosen component.
            It will render the component in-place when its title is clicked.
          */}
          {selected.node}
        </div>
      </main>
    </div>
  );
}
