"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

type LangContent = {
  heroLabel: string;
  title: string;
  introQuestion: string;
  introHighlight: string;
  introText: string;
  allQuestionsTitle: string;
  contactTitle: string;
  contactText: string;
  contactBtn: string;
  appointmentBtn: string;
  backHome: string;
  backFaq: string;
  questions: FaqItem[];
};

type Props = {
  image: string;
  slugLabelFr: string;
  slugLabelAr: string;
  fr: LangContent;
  ar: LangContent;
};

export default function FaqServicePage({
  image,
  slugLabelFr,
  slugLabelAr,
  fr,
  ar,
}: Props) {
  const [lang, setLang] = useState<"fr" | "ar">("fr");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isArabic = lang === "ar";
  const t = isArabic ? ar : fr;

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#f6f4f1] text-[#111111]"
    >
      <section className="relative h-[420px] w-full overflow-hidden md:h-[500px]">
        <Image
          src={image}
          alt={t.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/45" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 md:px-10">
          <div className="max-w-3xl text-white">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full border border-white/30 bg-white/10 p-1 backdrop-blur">
                <button
                  onClick={() => setLang("fr")}
                  className={`rounded-full px-3 py-1.5 text-sm ${
                    !isArabic ? "bg-white text-black" : "text-white"
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang("ar")}
                  className={`rounded-full px-3 py-1.5 text-sm ${
                    isArabic ? "bg-white text-black" : "text-white"
                  }`}
                >
                  AR
                </button>
              </div>
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/75">
              {t.heroLabel}
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              {t.title}
            </h1>

            <a
              href="https://wa.me/212687027233"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-5 rounded-full border border-white/80 px-8 py-4 text-lg font-medium text-white transition hover:bg-white hover:text-black"
            >
              <span>{t.appointmentBtn}</span>
              <span className="text-3xl leading-none">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-8 text-sm text-zinc-500 md:px-10">
        <p>
          <Link href="/" className="transition hover:text-black">
            {t.backHome}
          </Link>{" "}
          {" > "}
          <Link href="/faq" className="transition hover:text-black">
            {t.backFaq}
          </Link>{" "}
          {" > "}
          <span className="text-black">
            {isArabic ? slugLabelAr : slugLabelFr}
          </span>
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-4 md:px-10">
        <div className="text-center">
          <p className="text-2xl leading-relaxed text-black md:text-4xl">
            {t.introQuestion}{" "}
            <span className="text-[#c59d2a] underline underline-offset-4">
              {t.introHighlight}
            </span>{" "}
            ?
          </p>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-zinc-800 md:text-[22px]">
            {t.introText}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
        <h2 className="text-center text-3xl font-semibold leading-tight md:text-6xl">
          {t.allQuestionsTitle}
        </h2>

        <div className="mt-12 space-y-4">
          {t.questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-[1.25rem] border border-black/10 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
                >
                  <span className="text-lg font-medium leading-8 text-black underline underline-offset-4 md:text-[22px]">
                    {item.q}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black text-xl transition ${
                      isOpen ? "rotate-45 bg-black text-white" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 md:px-7">
                      <p className="max-w-5xl text-base leading-8 text-zinc-700 md:text-lg">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-6 text-center md:px-10 md:pb-28">
        <h3 className="text-3xl font-semibold md:text-5xl">
          {t.contactTitle}
        </h3>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-zinc-800 md:text-[22px]">
          {t.contactText}
        </p>

        <a
          href="/contact"
          className="mt-10 inline-flex rounded-full border border-black px-8 py-4 text-lg font-medium text-black transition hover:bg-black hover:text-white"
        >
          {t.contactBtn}
        </a>
      </section>
    </main>
  );
}