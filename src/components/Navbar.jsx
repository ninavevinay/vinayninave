import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { profile } from "../data";

const links = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const THEME_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const savedTheme = window.localStorage.getItem(THEME_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const ids = links.map((link) => link.href.slice(1));
      for (const id of [...ids].reverse()) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-sm">
              <img
                src={profile.logoUrl}
                alt="Vinay Ninave logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="leading-none">
              <div className="font-[Outfit] text-sm font-bold leading-tight text-slate-900 sm:text-base">
                {profile.name}
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-400">
                Full Stack + AI
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-0.5 rounded-full border border-slate-200/70 bg-white/80 px-2 py-1.5 backdrop-blur lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-[0.82rem] font-medium transition-all duration-200 ${
                  active === link.href.slice(1)
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="theme-toggle-btn"
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="btn-primary !px-4 !py-2 !text-sm"
            >
              <FiDownload size={14} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              className="theme-toggle-btn"
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-[84px] z-40 flex flex-col gap-1 rounded-[1.5rem] border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-2xl lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-all ${
                  active === link.href.slice(1)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </a>
            ))}

            <button
              type="button"
              onClick={toggleTheme}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>

            <a
              href={profile.resumeUrl}
              download
              className="btn-primary mt-2 justify-center"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
