/** @format */

import { t } from "i18next";
import { ChevronDown, MoveDown, Phone, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";
import cv from "../assets/cv/cv-Alvian_Nugroho-2026.pdf";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="z-40  w-full h-dvh grid grid-cols-1 items-center justify-center bg-base-100">
      {/* Content - CENTER ALIGN */}
      <div>
        <div className="text-center w-full max-w-6xl mx-auto">
          <div>
            {/* Headline */}
            <p className="text-lg md:text-xl text-primary code-font">
              Software Engineer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-9xl font-extrabold text-base-content mb-6 sm:mb-8 leading-tight">
              Alvian Nugroho
            </h1>
            {/* Subheadline */}
            <p className="text-lg sm:text-lg md:text-xl lg:text-xl text-base-content/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              {t("hero.desc")}
              {/* <span className="text-primary font-bold">Traveloka</span>. */}
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-2 ">
            <a href="#portfolio">
              {" "}
              <button className="btn h-16 px-10 btn-primary hover:bg-white hover:text-primary text-base-200 btn-lg rounded-full  py-3 sm:py-4 text-base sm:text-lg font-semibold sm:w-auto">
                {t("hero.cta.viewProjects")}
              </button>
            </a>
            <a href="#contact">
              {" "}
              <button className="btn  h-16 px-10 btn-outline btn-primary hover:btn-primary btn-lg rounded-full  py-3 sm:py-4 text-base sm:text-lg font-semibold sm:w-auto">
                {t("hero.cta.getInTouch")}
              </button>
            </a>
            <a href={cv} download>
              <button className="btn  h-16 px-10 btn-outline btn-primary hover:btn-primary btn-lg rounded-full  py-3 sm:py-4 text-base sm:text-lg font-semibold sm:w-auto">
                {t("hero.cta.downloadCV")}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid justify-center content-end">
        <MoveDown className="animate-bounce text-gray-500" size={35} />
      </div>
    </section>
  );
}
