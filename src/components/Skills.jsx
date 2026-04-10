import { motion } from "framer-motion";
import { skills, techStack } from "../data";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{
        background: "var(--skills-section-bg)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Expertise</span>
          <h2 className="font-[Outfit] text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Skills and Tech Stack
          </h2>
          <p className="mt-2 max-w-2xl text-slate-500">
            Core strengths and the technologies I use to build secure,
            scalable, and modern applications.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-5">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.09 }}
                  className="glass-card p-5 sm:p-6"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border"
                      style={{
                        backgroundColor: skill.iconBg,
                        borderColor: skill.iconBorder,
                        color: skill.iconColor,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-base font-bold text-slate-900">
                          {skill.name}
                        </div>
                        <div
                          className="text-sm font-bold"
                          style={{ color: skill.iconColor }}
                        >
                          {skill.value}%
                        </div>
                      </div>

                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: 0.2 + index * 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      style={{
                        height: "100%",
                        borderRadius: "999px",
                        background: `linear-gradient(90deg, ${skill.gradientFrom}, ${skill.gradientTo})`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  variants={fadeItem}
                  className="glass-card-hover group p-4 text-center sm:p-5"
                >
                  <div
                    className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      backgroundColor: tech.bg,
                      borderColor: tech.border,
                      color: tech.color,
                    }}
                  >
                    <Icon size={25} />
                  </div>

                  <div className="text-sm font-bold text-slate-800">
                    {tech.name}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-500">
                    {tech.description}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
