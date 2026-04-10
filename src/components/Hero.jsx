import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile, socialLinks, techStack } from "../data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] },
});

const quickStack = techStack.slice(0, 4);
const marqueeItems = [...techStack, ...techStack];

export default function Hero() {
  const [firstName, ...restName] = profile.name.split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-[84px]"
      style={{
        background: "var(--hero-section-bg)",
      }}
    >
      <div className="pointer-events-none absolute left-[4%] top-[10%] h-72 w-72 rounded-full bg-sky-300/20 blur-[88px]" />
      <div className="pointer-events-none absolute bottom-[12%] right-[6%] h-80 w-80 rounded-full bg-indigo-300/20 blur-[96px]" />
      <div className="pointer-events-none absolute right-[24%] top-[34%] h-52 w-52 rounded-full bg-emerald-200/20 blur-[74px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
        <div className="flex flex-col items-start">
          <motion.div
            {...fadeUp(0)}
            className="mb-6 flex flex-wrap items-center gap-2"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for work
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
              <FiMapPin size={11} className="text-indigo-500" />
              {profile.location}, India
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.05)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
          >
            <img
              src={profile.logoUrl}
              alt="Portfolio logo"
              className="h-5 w-5 object-contain"
            />
            Personal portfolio
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-[Outfit] text-5xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #0f172a 0%, #2563eb 45%, #06b6d4 100%)",
              }}
            >
              {firstName}
            </span>
            <span className="mt-1 block text-slate-900">
              {restName.join(" ")}
            </span>
          </motion.h1>

          <motion.h2
            {...fadeUp(0.16)}
            className="mb-5 mt-4 text-xl font-semibold text-slate-500 xl:text-2xl"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            {...fadeUp(0.22)}
            className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            {...fadeUp(0.28)}
            className="mb-8 flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn-primary">
              Let&apos;s Talk
              <FiArrowRight size={16} />
            </a>
            <a href={profile.resumeUrl} download className="btn-ghost">
              <FiDownload size={17} />
              Resume
            </a>

            <div className="flex gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.34)}
            className="mb-8 flex flex-wrap gap-3"
          >
            {quickStack.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm"
              >
                <Icon size={15} style={{ color }} />
                {name}
              </div>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="flex w-full max-w-lg gap-6 border-t border-slate-200/80 py-4"
          >
            {[
              { label: "CGPA", value: "8.9" },
              { label: "Projects", value: "5+" },
              { label: "Hackathons", value: "5+" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-black leading-none text-slate-900">
                  {item.value}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-200/40 via-indigo-200/30 to-emerald-200/30 blur-3xl" />

          <div className="glass-card relative p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-3">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent" />
              <img
                src={profile.avatarUrl}
                alt={`${profile.name} profile`}
                className="h-[340px] w-full rounded-[1.6rem] object-cover object-top saturate-110 sm:h-[430px]"
              />

              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-lg">
                <img
                  src={profile.logoUrl}
                  alt="Portfolio logo"
                  className="h-5 w-5 object-contain"
                />
                <span className="text-xs font-semibold text-slate-700">
                  {firstName}
                </span>
              </div>

              <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                Open to work
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full border-t border-slate-200/80 py-8">
        <div className="marquee-outer">
          <div className="marquee-track flex w-max gap-4">
            {marqueeItems.map(({ name, icon: Icon, color }, index) => (
              <div
                key={`${name}-${index}`}
                className="flex flex-shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm whitespace-nowrap"
              >
                <Icon size={16} style={{ color }} />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
