import Image from "next/image";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-[#d4a017]/20
        bg-black/30
        backdrop-blur-md
      "
    >
      <div
        className="
          max-w-[1920px]
          mx-auto
          h-[64px]
          flex
          items-center
          justify-between
          px-4
          sm:px-6
          md:px-8
          lg:px-12
        "
      >
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="Badia Gold"
            width={180}
            height={60}
            priority
            className=" 
              w-[120px]
              sm:w-[145px]
              md:w-[165px]
              lg:w-[180px]
              h-auto
              object-contain
            "
          />
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/badiagold"
            target="_blank"
            className="
              w-[40px]
              h-[40px]
              sm:w-[42px]
              sm:h-[42px]
              rounded-full
              border
              border-[#d4a017]/50
              bg-black/20
              flex
              items-center
              justify-center
              hover:bg-[#d4a017]/10
              transition
            "
          >
            <Image
              src="/images/insta.png"
              alt="Instagram"
              width={18}
              height={18}
              className="object-contain"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/962781001818"
            target="_blank"
            className="
              w-[40px]
              h-[40px]
              sm:w-[42px]
              sm:h-[42px]
              rounded-full
              border
              border-[#d4a017]/50
              bg-black/20
              flex
              items-center
              justify-center
              hover:bg-[#d4a017]/10
              transition
            "
          >
            <Image
              src="/images/wtsup.png"
              alt="WhatsApp"
              width={18}
              height={18}
              className="object-contain"
            />
          </a>

          {/* Contact Button */}
          <a
            href="tel:+962781001818"
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-[#d4a017]
              text-black
              font-bold
              rounded-full
              px-4
              sm:px-5
              h-[40px]
              sm:h-[42px]
              text-xs
              sm:text-sm
              hover:scale-105
              transition
              whitespace-nowrap
            "
          >
            <Phone size={16} />

            <span className="hidden sm:block">
              تواصل معنا
            </span>
          </a>

        </div>
      </div>
    </header>
  );
}