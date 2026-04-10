import {
  FiArrowUpRight,
  FiDownload,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { profile, socialLinks } from "../data";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden border-t border-slate-200">
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-cyan-100/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-indigo-100/70 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                <img
                  src={profile.logoUrl}
                  alt={`${profile.name} logo`}
                  className="h-full w-full object-contain"
                />
              </span>
              <span>
                <span className="block font-[Outfit] text-lg font-bold text-slate-900">
                  {profile.name}
                </span>
                <span className="block text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                  Developer Portfolio
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Building secure, scalable web applications with modern frontend,
              backend, and AI workflows.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                >
                  {link.name}
                  <FiArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Connect
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-indigo-600"
              >
                <FiMail size={15} />
                {profile.email}
              </a>
              <div className="inline-flex items-center gap-2">
                <FiMapPin size={15} />
                {profile.location}, India
              </div>
            </div>

            <a
              href={profile.resumeUrl}
              download
              className="btn-primary mt-5 !px-4 !py-2.5 !text-sm"
            >
              <FiDownload size={14} />
              Download Resume
            </a>

            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            Copyright {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-semibold text-slate-500 transition-colors hover:text-indigo-600"
          >
            Back to top
            <FiArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
