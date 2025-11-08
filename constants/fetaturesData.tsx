import { Rocket, Camera, Paintbrush, Globe } from "lucide-react";
import Image from "next/image";

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
}

const features: Feature[] = [
  {
    icon: <Rocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state-of-the-art AI, you can generate ultra realistic images in no time at all.",
    content: (
      <div>
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="car"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Camera className="h-8 w-8 text-neutral-200" />,
    title: "Capture lifelike details effortlessly",
    description:
      "Every pixel is crafted to perfection using advanced diffusion algorithms.",
    content: (
      <div>
        <Image
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
          alt="portrait"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-neutral-200" />,
    title: "Turn your imagination into artwork",
    description:
      "Transform simple prompts into stunning digital masterpieces instantly.",
    content: (
      <div>
        <Image
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
          alt="art"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Globe className="h-8 w-8 text-neutral-200" />,
    title: "Generate scenes from around the world",
    description:
      "From bustling cities to serene landscapes — bring any vision to life.",
    content: (
      <div>
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="landscape"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
];

export default features;