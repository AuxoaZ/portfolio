import { useTranslation } from "react-i18next";
import {
  GitCommitHorizontal,
  Github,
  Linkedin,
  Locate,
  Mail,
  MapPin,
  Phone,
  UserRoundPlus,
} from "lucide-react";
import fastwork from "../assets/logo-fastwork.png";
import freelance from "../assets/freelance.png";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="w-full bg-base-300 h-auto py-28 border-t
      [border-image:linear-gradient(to_right,transparent,theme(--color-primary),transparent)_1]"
    >
      <div className=" container mx-auto px-4 md:px-32 flex flex-col gap-10">
        <div className="flex flex-col justify-center">
          <div className="mx-auto mb-3">
            <h2 className="text-lg md:text-xl text-primary flex flex-row gap-2 code-font">
              <GitCommitHorizontal size={30} />
              {t("contact.name")}
            </h2>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-6xl mb-3 font-bold">
              Let's Work <span className="text-primary">Together</span>
            </h2>
          </div>
          <div className="text-center flex justify-center">
            <p className="text-base-content/70 mt-2 max-w-2xl">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="group relative bg-base-100 p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 hover:border-primary border border-base-content/20 shadow-lg">
          {/* content */}
          <div className="relative flex flex-col items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <Mail size={24} className="text-primary" />
            </div>

            <p className="text-lg font-semibold">Email</p>

            <p className="text-base-content/70 text-sm  transition">
              nalviansend@gmail.com
            </p>
          </div>
        </div>
        {/* content */}

        <div className="group relative bg-base-100 p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 hover:border-primary border border-base-content/20 shadow-lg">
          {/* content */}
          <div className="relative flex flex-col items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <MapPin size={24} className="text-primary" />
            </div>

            <p className="text-lg font-semibold">Location</p>

            <p className="text-base-content/70 text-sm  transition">
              Tangerang, Indonesia
            </p>
          </div>
        </div>
        <div className="group relative bg-base-100 p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 hover:border-primary border border-base-content/20 shadow-lg">
          <div className="relative flex flex-col items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <UserRoundPlus size={24} className="text-primary" />
            </div>

            <p className="text-lg font-semibold">Follow Me</p>

            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://github.com/nalviansend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone
                  size={35}
                  className="text-primary/60 bg-base-300 p-2 rounded-lg hover:text-base-300 hover:bg-primary "
                />
              </a>
              <a
                href="https://github.com/nalviansend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={35}
                  className="text-primary/60 bg-base-300 p-2 rounded-lg hover:text-base-300 hover:bg-primary "
                />
              </a>
              <a
                href="https://github.com/nalviansend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={35}
                  className="text-primary/60 bg-base-300 p-2 rounded-lg hover:text-base-300 hover:bg-primary "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
