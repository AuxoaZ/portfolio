import { useTranslation } from "react-i18next";
import { GitCommitHorizontal, Github } from "lucide-react";
import fastwork from "../assets/logo-fastwork.png";
import freelance from "../assets/freelance.png";

export default function Freelance() {
  const { t } = useTranslation();

  return (
    <section
      id="skill"
      className="w-full bg-base-100 h-auto py-32 border-t
         [border-image:linear-gradient(to_right,transparent,theme(--color-primary),transparent)_1]"
    >
      <div className=" container mx-auto px-4 md:px-32 flex flex-col gap-10">
        <div className="flex flex-col justify-center">
          <div className="mx-auto mb-3">
            <h2 className="text-lg md:text-xl text-primary flex flex-row gap-2 code-font">
              <GitCommitHorizontal size={30} />
              {t("freelance.name")}
            </h2>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-6xl font-bold">
              Hire Me <span className="text-primary">On</span>
            </h2>
          </div>
          <div className="text-center">
            <p className="text-base-content/70 mt-2">
              {t("freelance.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="group relative bg-base-300 p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 hover:border-success border border-base-content/20 shadow-lg">
          {/* glow blur */}
          <div className=" absolute inset-12 rounded-full bg-success/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

          {/* content */}
          <div className="relative flex flex-col items-center gap-4">
            <div className="bg-success/10 p-3 rounded-xl">
              <img
                src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo.png"
                alt="Upwork"
                className="w-9 h-9"
              />
            </div>

            <p className="text-lg font-semibold">Upwork</p>

            {/* hover text */}
            <p className="text-success text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
              Visit Profile →
            </p>
          </div>
        </div>
        <div className="group relative bg-base-300 p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 hover:border-primary border border-base-content/20 shadow-lg">
          {/* glow blur */}
          <div className=" absolute inset-12 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

          {/* content */}
          <div className="relative flex flex-col items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <img src={fastwork} alt="Fastwork" className="w-9 h-9" />
            </div>

            <p className="text-lg font-semibold">Fastwork</p>

            {/* hover text */}
            <p className="text-primary text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
              Visit Profile →
            </p>
          </div>
        </div>
        <div className="group relative bg-base-300 p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 hover:border-primary border border-base-content/20 shadow-lg">
          {/* glow blur */}
          <div className=" absolute inset-12 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

          {/* content */}
          <div className="relative flex flex-col items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <img src={freelance} alt="Fastwork" className="w-9 h-9" />
            </div>

            <p className="text-lg font-semibold">Freelance</p>

            {/* hover text */}
            <p className="text-primary text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
              Visit Profile →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
