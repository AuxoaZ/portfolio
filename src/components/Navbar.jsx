import { CodeXml, Globe, Moon, Sun, Tag, Workflow, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export function Navbar() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div
      className={` w-full  h-18 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-base-100/70 backdrop-blur-xl shadow-sm shadow-base-content/10"
          : "bg-base-100 shadow-none border-b-none"
      }`}
    >
      <div className="navbar container mx-auto px-4 md:px-32">
        {/* Left */}
        <div className="flex-1">
          <p className="font-extrabold brand-font text-2xl md:text-4xl m-0 p-0">
            AL<span className="text-primary">V</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-base-content">
          <a href="#about" className="hover:text-primary transition-colors">
            {t("navbar.about")}
          </a>
          <a href="#portfolio" className="hover:text-primary transition-colors">
            {t("navbar.projects")}
          </a>
          <a href="#skill" className="hover:text-primary transition-colors">
            {t("navbar.skills")}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            {t("navbar.contact")}
          </a>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* moon icon */}
            <svg
              className="swap-on h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
            {/* sun icon */}
            <svg
              className="swap-off h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </label>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="flex items-center space-x-1.5 cursor-pointer"
            >
              <Globe size={19} />
              <span className="uppercase">{i18n.language}</span>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-20 p-2 shadow"
            >
              <li>
                <button onClick={() => changeLang("id")}>ID</button>
              </li>
              <li>
                <button onClick={() => changeLang("en")}>EN</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Menu Button */}
          <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          {/* Drawer */}
          <div className="drawer drawer-end">
            <input
              id="mobile-drawer"
              type="checkbox"
              className="drawer-toggle"
            />

            <div className="drawer-side">
              <label htmlFor="mobile-drawer" className="drawer-overlay"></label>

              <div className="menu p-4 w-80 min-h-full bg-base-100 text-base-content shadow-xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-base-300">
                  <h3 className="text-lg font-semibold">Menu</h3>
                  <label
                    htmlFor="mobile-drawer"
                    className="btn btn-ghost btn-sm btn-circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </label>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2">
                  <a
                    href="#features"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors"
                    onClick={() =>
                      (document.getElementById("mobile-drawer").checked = false)
                    }
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">
                        <Zap />
                      </span>
                    </div>
                    <span className="font-medium">Fitur</span>
                  </a>

                  <a
                    href="#process"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors"
                    onClick={() =>
                      (document.getElementById("mobile-drawer").checked = false)
                    }
                  >
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">
                        <Workflow />
                      </span>
                    </div>
                    <span className="font-medium">Proses</span>
                  </a>

                  <a
                    href="#pricing"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors"
                    onClick={() =>
                      (document.getElementById("mobile-drawer").checked = false)
                    }
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">
                        <Tag />
                      </span>
                    </div>
                    <span className="font-medium">Harga</span>
                  </a>
                </div>

                {/* Theme Toggle */}
                <div className="mt-auto pt-6 border-t border-base-300">
                  <div className="flex items-center justify-between p-3">
                    <div className="dropdown dropdown-top">
                      <div
                        tabIndex={0}
                        className="flex items-center space-x-1.5 cursor-pointer"
                      >
                        <Globe size={19} />
                        <span className="uppercase">{i18n.language}</span>
                      </div>

                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-10 w-20 p-2 shadow"
                      >
                        <li>
                          <button onClick={() => changeLang("id")}>ID</button>
                        </li>
                        <li>
                          <button onClick={() => changeLang("en")}>EN</button>
                        </li>
                      </ul>
                    </div>

                    <label className="swap swap-rotate">
                      <input
                        type="checkbox"
                        className="theme-controller"
                        value="dark"
                      />
                      <div className="swap-off flex items-center gap-2">
                        <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
                          <span className="text-warning">
                            <Moon />
                          </span>
                        </div>
                      </div>
                      <div className="swap-on flex items-center gap-2">
                        <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
                          <span className="text-warning">
                            <Sun />
                          </span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
