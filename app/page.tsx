import Image from "next/image";
import BiographyCard from "@/components/BiographyCard";
import LifeTimeline from "@/components/LifeTimeline";
import MobileHeader from "@/components/MobileHeader";

export default function HomePage() {
  return (
    <main className="flex-1">
      <MobileHeader />

      <div className="min-h-screen w-full px-4 pb-10 pt-2 md:hidden">
        <div className="relative z-10 mx-auto h-[600px] w-[90%] overflow-hidden">
          <Image
            src="/IMG_6601.JPG"
            alt="Portrait of Shabbir Khan at an event"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="90vw"
          />
        </div>
        <div className="relative z-20 mx-auto -mt-36 w-[94%]">
          <BiographyCard />
        </div>
      </div>

      <div className="relative hidden min-h-screen md:block">
        <div className="sticky top-0 z-10 ml-auto h-screen w-2/3">
          <div className="relative h-full w-full">
            <Image
              src="/IMG_6601.JPG"
              alt="Portrait of Shabbir Khan at an event"
              fill
              className="object-cover object-center"
              priority
              quality={100}
              sizes="(min-width: 768px) 66vw, 90vw"
            />
          </div>
        </div>
        <div className="relative z-20 -mt-[calc(100vh-120px)] w-[480px] pb-16">
          <BiographyCard />
        </div>
      </div>

      <LifeTimeline />
    </main>
  );
}
