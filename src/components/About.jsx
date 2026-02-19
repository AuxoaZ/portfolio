/** @format */

import { GitCommitHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="w-full h-auto md:h-180 pb-18 md:pb-0 md:py-18 bg-base-100"
    >
      <div className=" container mx-auto px-4 md:px-32">
        <div>
          <div className="mx-auto mb-3">
            <h2 className="code-font text-lg md:text-xl text-primary flex flex-row gap-2">
              <GitCommitHorizontal size={30} />
              {t("about.name")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl md:text-6xl font-extrabold">
                Imagining the <span className="text-primary">Future</span>,
                Building it in Code
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-base-content/70 text-base md:text-lg">
                  {t("about.descFirst")}
                </p>
                <p className="text-base-content/70 text-base md:text-lg">
                  {t("about.descSecond")}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-5xl text-primary font-bold">3+</p>
                  <p className="text-sm text-base-content/70">
                    {t("about.info.experience")}
                  </p>
                </div>
                <div>
                  <p className="text-5xl text-primary font-bold">5</p>
                  <p className="text-sm text-base-content/70">
                    {t("about.info.projects")}
                  </p>
                </div>
                <div>
                  <p className="text-5xl text-primary font-bold">10</p>
                  <p className="text-sm text-base-content/70">
                    {t("about.info.skills")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 p-3 border border-dashed border-primary/20 rounded-4xl flex align-center justify-center">
                <div className="p-3 border border-primary/55 rounded-4xl">
                  <img
                    src="https://ik.imagekit.io/vianz/profile.jpg"
                    alt=""
                    srcset=""
                    className="rounded-4xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
