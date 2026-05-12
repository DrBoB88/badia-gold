"use client";

import Image from "next/image";
import { Send } from "lucide-react";
import { useState } from "react";

export default function AgencySection() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    setLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    formData.append("_captcha", "false");

    formData.append(
      "_subject",
      "طلب وكالة جديد - بادية جولد"
    );

    try {

      const response = await fetch(
        "https://formsubmit.co/ajax/info@badiagold.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        alert("فشل إرسال الطلب");
      }

    } catch (error) {
      alert("حدث خطأ أثناء الإرسال");
    }

    setLoading(false);
  }

  return (
    <section
      id="agency"
      dir="rtl"
      className="relative overflow-hidden py-16 lg:py-20"
    >

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/agent-bg.jpg"
          alt="Agency Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Right */}
          <div className="flex justify-center lg:justify-end">

            <Image
              src="/images/agent.png"
              alt="مطلوب وكلاء"
              width={520}
              height={620}
              className="
                w-[260px]
                sm:w-[340px]
                lg:w-[470px]
                object-contain
              "
            />

          </div>

          {/* Left */}
          <div className="flex justify-center lg:justify-start">

            <div className="w-full max-w-[430px]">

              {success ? (

                <div
                  className="
                    rounded-[30px]
                    border border-[#d4a017]
                    bg-black/70
                    p-8
                    text-center
                    backdrop-blur-sm
                  "
                >

                  <h3
                    className="
                      mb-4
                      text-2xl
                      font-bold
                      text-[#d4a017]
                    "
                  >
                    تم استلام طلبكم بنجاح ✨
                  </h3>

                  <p
                    className="
                      text-[15px]
                      leading-8
                      text-[#f5e6c5]
                    "
                  >
                    يسعدنا اهتمامكم بالانضمام إلى شبكة بادية جولد،
                    وسيتم التواصل معكم قريبًا لدراسة طلب الوكالة
                    وبحث فرص التعاون المستقبلية.
                  </p>

                </div>

              ) : (

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                  className="space-y-3"
                >

                  {/* Name */}
                  <input
                    type="text"
                    name="الاسم الكامل"
                    required
                    placeholder="الاسم الكامل"
                    className="
                      h-[50px]
                      w-full
                      rounded-full
                      border border-[#7b5416]
                      bg-black/55
                      px-5
                      text-[14px]
                      text-white
                      outline-none
                    "
                  />

                  {/* Company */}
                  <input
                    type="text"
                    name="اسم الشركة"
                    placeholder="اسم الشركة أو المؤسسة"
                    className="
                      h-[50px]
                      w-full
                      rounded-full
                      border border-[#7b5416]
                      bg-black/55
                      px-5
                      text-[14px]
                      text-white
                      outline-none
                    "
                  />

                  {/* Country */}
                  <input
                    type="text"
                    name="الدولة"
                    required
                    placeholder="الدولة / المدينة"
                    className="
                      h-[50px]
                      w-full
                      rounded-full
                      border border-[#7b5416]
                      bg-black/55
                      px-5
                      text-[14px]
                      text-white
                      outline-none
                    "
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    name="رقم الهاتف"
                    required
                    placeholder="رقم الهاتف"
                    className="
                      h-[50px]
                      w-full
                      rounded-full
                      border border-[#7b5416]
                      bg-black/55
                      px-5
                      text-[14px]
                      text-white
                      outline-none
                    "
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="البريد الإلكتروني"
                    required
                    placeholder="البريد الإلكتروني"
                    className="
                      h-[50px]
                      w-full
                      rounded-full
                      border border-[#7b5416]
                      bg-black/55
                      px-5
                      text-[14px]
                      text-white
                      outline-none
                    "
                  />

                  {/* Experience */}
                  <select
                    name="الخبرة"
                    className="
                      h-[50px]
                      w-full
                      rounded-full
                      border border-[#7b5416]
                      bg-black/55
                      px-5
                      text-[14px]
                      text-white
                      outline-none
                    "
                  >
                    <option className="bg-black">
                      هل لديك خبرة سابقة بالتوزيع؟
                    </option>

                    <option className="bg-black">
                      نعم
                    </option>

                    <option className="bg-black">
                      لا
                    </option>
                  </select>

                  {/* Message */}
                  <textarea
                    name="ملاحظات"
                    rows={4}
                    placeholder="حدثنا عن اهتمامك أو المنطقة المستهدفة..."
                    className="
                      w-full
                      rounded-[22px]
                      border border-[#7b5416]
                      bg-black/55
                      p-4
                      text-[14px]
                      text-white
                      outline-none
                    "
                  ></textarea>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#d4a017]
                      py-3
                      text-[15px]
                      font-bold
                      text-black
                      transition
                      hover:scale-[1.02]
                      disabled:opacity-70
                    "
                  >
                    <Send size={18} />

                    {loading
                      ? "جاري الإرسال..."
                      : "سجل اهتمامك الآن"}
                  </button>

                </form>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}