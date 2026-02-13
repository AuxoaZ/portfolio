import projects from "../data/projects.json";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { GitCommitHorizontal, Github, ChevronDown } from "lucide-react";

export default function Portfolio() {
  const { t } = useTranslation();
  const [active, setActive] = useState("all");
  const [expandedCard, setExpandedCard] = useState(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <section
      id="portfolio"
      className="w-full bg-base-300 min-h-screen py-18 border-t
      [border-image:linear-gradient(to_right,transparent,theme(--color-primary),transparent)_1]"
    >
      <div className="container mx-auto px-4 md:px-32 flex flex-col gap-10">
        {/* HEADER */}
        <div>
          <h2 className="text-lg md:text-xl text-primary flex items-center gap-2 code-font">
            <GitCommitHorizontal size={30} />
            {t("portfolio.name")}
          </h2>

          <h3 className="text-3xl md:text-6xl font-bold mt-2">
            Featured <span className="text-primary">Projects</span>
          </h3>

          <p className="text-base-content/70 max-w-xl mt-2">
            {t("portfolio.subtitle")}
          </p>

          <div className="flex justify-end mt-2">
            <a
              href="https://github.com/auxoaz"
              target="_blank"
              rel="noopener noreferrer"
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
              className={`btn btn-sm md:btn-lg rounded-full transition-all ${
                active === f
                  ? "btn-primary text-base-200"
                  : "btn-outline-primary text-base-content/80 border-base-content/20 hover:border-primary hover:bg-primary/20"
              }`}
            >
              {t(`portfolio.filters.${f}`)}
            </button>
          ))}
        </div>

        {/* GRID PROJECTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.key}>
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setExpandedCard(expandedCard === p.key ? null : p.key)
                }
                onClick={() =>
                  setExpandedCard(expandedCard === p.key ? null : p.key)
                }
                className="card bg-base-100 shadow hover:shadow-md cursor-pointer transition-shadow"
              >
                {/* IMAGE */}
                <figure className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={t(`portfolio.items.${p.key}.title`)}
                    className="object-cover w-full h-full"
                  />
                </figure>

                {/* CONTENT */}
                <div className="card-body p-4">
                  <div className=" w-1/2 flex justify-start">
                    <p>{p.year}</p>
                    <p>{p.by}</p>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="card-title text-lg font-semibold">
                      {t(`portfolio.items.${p.key}.title`)}
                    </h3>

                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        expandedCard === p.key ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className={`text-sm text-base-content/70 transition-all duration-300 ${
                      expandedCard === p.key
                        ? "line-clamp-none"
                        : "line-clamp-2"
                    }`}
                  >
                    {t(`portfolio.items.${p.key}.desc`)}
                  </p>

                  {/* TAGS */}
                  {expandedCard === p.key && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge bg-base-content/10 badge-sm text-xs text-base-content/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Button */}
                  {expandedCard === p.key && (
                    <>
                      <div className="flex gap-2 mt-3 justify-center">
                        {p.url && (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary rounded-xl w-1/2"
                          >
                            Live View
                          </a>
                        )}

                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-primary rounded-xl w-1/2"
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA GITHUB */}
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/auxoaz"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn btn-outline-primary bg-base-100 border-primary/80 rounded-full hover:bg-primary text-base-content/80 hover:text-base-200 transition-all"
          >
            <span className="p-1 rounded-full">
              <Github size={17} className="group-hover:text-base-300" />
            </span>
            {t("portfolio.BtnGithub")}
          </a>
        </div>
      </div>
    </section>
  );
}
