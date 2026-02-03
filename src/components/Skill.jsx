import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  Database,
  GitCommitHorizontal,
  GitMerge,
  Image,
  ServerCog,
} from "lucide-react";
import skills from "../data/skills.json";
import StackIcon from "tech-stack-icons";

export default function Skill() {
  const { t } = useTranslation();

  const lucideIcons = {
    image: Image,
    servercog: ServerCog,
    database: Database,
    tool: GitMerge,
  };

  return (
    <section
      id="skill"
      className="w-full bg-base-300 h-dvh pt-18 border-t
         [border-image:linear-gradient(to_right,transparent,theme(--color-primary),transparent)_1]"
    >
      <div className=" container mx-auto px-4 md:px-32 flex flex-col gap-10">
        <div className="flex flex-col justify-center">
          <div className="mx-auto mb-3">
            <h2 className="text-lg md:text-xl text-primary flex flex-row gap-2 code-font">
              <GitCommitHorizontal size={30} />
              {t("skill.name")}
            </h2>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-6xl font-bold">
              Tech <span className="text-primary">Stack</span>
            </h2>
          </div>
          <div className="text-center">
            <p className="text-base-content/70 mt-2">{t("skill.subtitle")}</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skills.map((skill, index) => {
            const Icon = lucideIcons[skill.icon] || Code;
            return (
              <div
                key={index}
                className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-content/10 hover:border-primary transition-all duration-300"
              >
                <Icon
                  size={40}
                  className="bg-primary/10 rounded-lg p-2 text-primary"
                />
                <h3 className="text-2xl font-semibold my-4">{skill.skill}</h3>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies?.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-0.5 px-3 py-2 bg-base-300 rounded-full text-xs font-medium"
                    >
                      <StackIcon name={tech.icon} className="w-4 h-4 mr-1" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
