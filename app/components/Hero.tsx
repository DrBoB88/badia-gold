import Image from "next/image";
import {
  BookOpen,
  Globe,
  ChevronDown,
  ChevronsDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Badia Gold"
          fill
          priority
          className="object-cover object-[72%_center] md:object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          lg:justify-start
          px-5
          sm:px-8
          lg:px-20
          pt-28
          pb-14
        "
      >
        <div
          className="
            w-full
            max-w-[340px]
            sm:max-w-[430px]
            md:max-w-[500px]
            lg:max-w-[520px]
            xl:max-w-[560px]
            text-center
            lg:text-left
          "
        >
          
          {/* Soon Image */}
          <div className="w-full">
            <Image
              src="/images/soon.png"
              alt="Coming Soon"
              width={1200}
              height={700}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Buttons */}
          <div
            className="
              mt-6
              flex
              flex-col
              sm:flex-row
              gap-4
              items-center
              lg:items-start
              justify-center
              lg:justify-start
            "
          >
            
            {/* Story Button */}
            <a
              href="#story"
              className="
                group
                w-full
                sm:w-auto
                min-w-[250px]
                flex
                items-center
                justify-center
                gap-3
                bg-[#d4a017]
                text-black
                font-bold
                rounded-full
                px-6
                py-4
                text-sm
                lg:text-[15px]
                hover:scale-105
                transition
              "
            >
              <BookOpen size={22} />

              اقرأ حكاية بادية جولد

              <ChevronDown
                size={20}
                className="group-hover:translate-y-1 transition"
              />
            </a>

            {/* Agency Button */}
            <a
              href="#agency"
              className="
                group
                w-full
                sm:w-auto
                min-w-[250px]
                flex
                items-center
                justify-center
                gap-3
                border
                border-[#d4a017]
                bg-black/30
                text-[#d4a017]
                font-bold
                rounded-full
                px-6
                py-4
                text-sm
                lg:text-[15px]
                hover:bg-[#d4a017]
                hover:text-black
                transition
              "
            >
              <Globe size={22} />

              مطلوب وكلاء

              <ChevronsDown
                size={20}
                className="group-hover:translate-y-1 transition"
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}