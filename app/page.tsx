import { cn } from "@/lib/utils";
import Card from "../components/ui/Card";

export default function Page() {
  return (
    <div className={cn("min-h-screen flex items-center justify-center bg-gray-50")}>
      <Card />
    </div>
  )
}
  