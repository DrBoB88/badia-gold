"use client";

import Image from "next/image";
import { Lock, Mail } from "lucide-react";

export default function StorySection() {
  return (
    <section
      id="story"
      dir="rtl"
      className="relative overflow-hidden py-14 lg:py-16"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/story-bg.jpg"
          alt="Story Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/84"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        {/* Title */}
        <div className="mb-7 flex justify-center">
          <Image
            src="/images/bgstory.png"
            alt="حكاية بادية جولد"
            width={520}
            height={130}
            className="
              w-[250px]
              sm:w-[340px]
              lg:w-[470px]
              object-contain
            "
          />
        </div>

        {/* Story */}
        <div className="mx-auto max-w-5xl text-center">
          <p
            className="
              text-[#c5a749]
              text-[17px]
              sm:text-[21px]
              lg:text-[28px]
              font-bold
              leading-[2]
            "
            style={{
              fontFamily: "serif",
            }}
          >
            في قلب الأردن، حيث تمتد روح البادية الأصيلة وتُروى حكايات الكرم
            والجودة عبر الأجيال، وُلدت (بادية جولد) لتجسد معنى الأصالة الأردنية
            بروح عصرية راقية.

            ليست (بادية جولد) مجرد علامة تجارية، بل انعكاس لهوية تحمل فخر الأرض
            الأردنية، وأناقة التفاصيل، والقيم التي صنعت مكانة الأردن كرمزٍ
            للضيافة والثقة والجودة الحقيقية.

            نستمد إلهامنا من طبيعة الأردن وتاريخه وثقافته الغنية، لنقدم تجربة
            تعبّر عن الفخامة الهادئة والذوق الأصيل في كل تفصيل.
          </p>

{/* Last Line */}
<h3
  className="
    mt-4
    mb-4
    text-[#d4a017]
    text-[17px]
    sm:text-[21px]
    lg:text-[28px]
    font-extrabold
    leading-[1.25]
  "
  style={{
    fontFamily: "serif",
  }}
>
  لأن القيمة الحقيقية لا تُصنع بالوقت… بل تُصنع بالأصل.
</h3>
        </div>

        {/* Products */}
        <div className="mt-8 flex justify-center">
          <div className="grid w-full max-w-5xl scale-[0.70] origin-top grid-cols-1 gap-4 lg:grid-cols-2">

            {/* Product 800 */}
            <div
              className="
                rounded-[28px]
                border border-[#7b5416]
                bg-black/45
                backdrop-blur-sm
                p-6
              "
            >
              <div className="flex items-center justify-between gap-5">

                {/* Info */}
                <div className="flex-1 text-right">
                  <h3 className="mb-3 text-[22px] font-bold text-[#d4a017]">
                    سمن بلدي أردني فاخر
                  </h3>

                  <div className="mb-5 inline-block rounded-full bg-[#2a1803] px-4 py-1 text-sm text-[#d4a017]">
                    800g
                  </div>

                  <ul className="space-y-3 text-[#d9c29b] text-[15px]">
                    <li>✓ طبيعي 100%</li>
                    <li>✓ غني بالفيتامينات A, D3 & E</li>
                    <li>✓ خالٍ من المواد الحافظة</li>
                    <li>✓ مصنوع بالطريقة التقليدية</li>
                  </ul>

                  <button
                    className="
                      mt-6
                      flex items-center gap-2
                      rounded-full
                      border border-[#8d631a]
                      px-5 py-2
                      text-sm
                      text-[#d4a017]
                      transition
                      hover:bg-[#d4a017]
                      hover:text-black
                    "
                  >
                    <Lock size={15} />
                    المزيد قريباً
                  </button>
                </div>

                {/* Image */}
                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    w-[180px]
                    h-[240px]
                    lg:w-[220px]
                    lg:h-[280px]
                    flex-shrink-0
                  "
                >
                  <Image
                    src="/images/tin-800.png"
                    alt="800g"
                    fill
                    className="
                      object-contain
                      drop-shadow-[0_0_30px_rgba(212,160,23,0.25)]
                    "
                  />
                </div>

              </div>
            </div>

            {/* Product 350 */}
            <div
              className="
                rounded-[28px]
                border border-[#7b5416]
                bg-black/45
                backdrop-blur-sm
                p-6
              "
            >
              <div className="flex items-center justify-between gap-5">

                {/* Info */}
                <div className="flex-1 text-right">
                  <h3 className="mb-3 text-[22px] font-bold text-[#d4a017]">
                    سمن بلدي أردني فاخر
                  </h3>

                  <div className="mb-5 inline-block rounded-full bg-[#2a1803] px-4 py-1 text-sm text-[#d4a017]">
                    350g
                  </div>

                  <ul className="space-y-3 text-[#d9c29b] text-[15px]">
                    <li>✓ طبيعي 100%</li>
                    <li>✓ غني بالفيتامينات A, D3 & E</li>
                    <li>✓ خالٍ من المواد الحافظة</li>
                    <li>✓ مصنوع بالطريقة التقليدية</li>
                  </ul>

                  <button
                    className="
                      mt-6
                      flex items-center gap-2
                      rounded-full
                      border border-[#8d631a]
                      px-5 py-2
                      text-sm
                      text-[#d4a017]
                      transition
                      hover:bg-[#d4a017]
                      hover:text-black
                    "
                  >
                    <Lock size={15} />
                    المزيد قريباً
                  </button>
                </div>

                {/* Image */}
                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    w-[150px]
                    h-[200px]
                    lg:w-[180px]
                    lg:h-[230px]
                    flex-shrink-0
                  "
                >
                  <Image
                    src="/images/jar-350.png"
                    alt="350g"
                    fill
                    className="
                      object-contain
                      drop-shadow-[0_0_30px_rgba(212,160,23,0.22)]
                    "
                  />
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Subscribe */}
        <div className="-mt-8">
          <div
            className="
              mx-auto
              flex
              max-w-5xl
              flex-col
              items-center
              justify-center
              gap-3
              lg:flex-row
            "
          >

            <h3
              className="
                text-[16px]
                lg:text-[20px]
                font-bold
                text-[#d4a017]
                whitespace-nowrap
              "
            >
              كن أول من يعرف عن الإطلاق
            </h3>

            <form
              action="https://formsubmit.co/info@badiagold.com"
              method="POST"
              className="flex w-full max-w-3xl gap-3"
            >
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="hidden"
                name="_next"
                value="http://192.168.8.12:3000/#story"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="ادخل بريدك الإلكتروني"
                className="
                  h-[52px]
                  flex-1
                  rounded-full
                  border border-[#7b5416]
                  bg-black/55
                  px-6
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-gray-400
                  focus:border-[#d4a017]
                "
              />

              <button
                type="submit"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#d4a017]
                  px-7
                  text-sm
                  font-bold
                  text-black
                  transition
                  hover:scale-105
                "
              >
                <Mail size={17} />
                اشترك الآن
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}