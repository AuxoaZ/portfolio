import projects from "../data/projects.json";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { GitCommitHorizontal, Github } from "lucide-react";

export default function Portfolio() {
  const { t } = useTranslation();
  const [active, setActive] = useState("all");
  const [expandedCard, setExpandedCard] = useState(null);
  const [openKey, setOpenKey] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <section
      id="portfolio"
      className="w-full bg-base-300 min-h-screen py-18 border-t
         [border-image:linear-gradient(to_right,transparent,theme(--color-primary),transparent)_1]"
    >
      <div className=" container mx-auto px-4 md:px-32 flex flex-col gap-10">
        <div>
          <div className="mx-auto mb-3">
            <h2 className="text-lg md:text-xl text-primary flex flex-row gap-2 code-font">
              <GitCommitHorizontal size={30} />
              {t("portfolio.name")}
            </h2>
          </div>
          <div>
            <h2 className="text-3xl md:text-6xl font-bold">
              <p>
                Featured <span className="text-primary">Projects</span>
              </p>
            </h2>
          </div>
          <div>
            <p className="text-base-content/70 max-w-xl mt-2">
              {t("portfolio.subtitle")}
            </p>
          </div>
          <div className="flex justify-end">
            <a
              href="http://github.com/auxoaz"
              className="text-base-content/70 hover:text-primary text-base"
            >
              {t("portfolio.viewGithub")}
            </a>
          </div>
        </div>

        {/* FILTER */}
        <div className="flex gap-3 justify-center">
          {["all", "web", "chatBot"].map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`btn btn-sm md:btn-lg rounded-full text-base  ${
                active === f
                  ? "btn-primary text-base-200 "
                  : "btn-outline-primary text-base-content/80 border-base-content/20 hover:border-primary hover:bg-primary/20"
              }`}
            >
              {t(`portfolio.filters.${f}`)}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {filtered.map((p) => (
            <div key={p.key} className="break-inside-avoid">
              <div
                className="card bg-base-100 shadow hover:shadow-md cursor-pointer transition-shadow mb-6"
                onClick={() =>
                  setExpandedCard(expandedCard === p.key ? null : p.key)
                }
              >
                {/* Gambar tetap sama */}
                <figure className="h-auto overflow-hidden">
                  <img
                    src={p.image}
                    alt={t(`portfolio.items.${p.key}.title`)}
                    className="object-cover w-full h-full"
                  />
                </figure>

                <div className="card-body p-4">
                  {/* Header dengan indikator */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="card-title text-lg font-semibold">
                      {t(`portfolio.items.${p.key}.title`)}
                    </h3>
                    <span
                      className={`transition-transform duration-300 ${
                        expandedCard === p.key ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>

                  {/* Deskripsi SEDERHANA - hanya ini yang berubah */}
                  <div className="mb-3">
                    <p
                      className={`text-sm text-base-content/70 transition-all duration-300 ${
                        expandedCard === p.key
                          ? "line-clamp-none" // Tampil lengkap saat expanded
                          : "line-clamp-2" // Hanya 2 baris + ... saat collapsed
                      }`}
                    >
                      {
                        expandedCard === p.key
                          ? t(`portfolio.items.${p.key}.desc`) // Deskripsi lengkap
                          : t(`portfolio.items.${p.key}.desc`) // Deskripsi singkat
                      }
                    </p>
                  </div>
                  {expandedCard === p.key && (
                    <div className="flex flex-wrap gap-1">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge badge-outline badge-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA github */}
        <div className="flex justify-center mt-8 ">
          <a
            href="https://github.com/auxoaz"
            className="group btn btn-outline-primary bg-base-100 border-primary/80 rounded-full  hover:bg-primary text-base-content/80 hover:text-base-200"
          >
            <span className=" p-1 rounded-full">
              <Github size={17} className=" group-hover:text-base-300" />
            </span>
            {t("portfolio.BtnGithub")}
          </a>
        </div>
      </div>
    </section>
  );
}
