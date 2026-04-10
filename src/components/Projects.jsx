import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <div>
            <span className="section-tag">Work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-[Outfit]">Featured Projects</h2>
            <p className="mt-2 text-slate-400 text-base">Things I've built that I'm proud of.</p>
          </div>
          <a href="https://github.com/ninavevinay" target="_blank" rel="noopener noreferrer"
            className="btn-ghost !py-2.5 !px-5 text-sm self-start sm:self-auto whitespace-nowrap"
          >
            <FiGithub size={16} /> View GitHub
          </a>
        </motion.div>

        {/* Cards grid — always 3 cols on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card-hover overflow-hidden flex flex-col group"
              >
                {/* Project image */}
                <div className="relative h-44 overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0f2fe 100%)' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:3rem;">🚀</div>`;
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed flex-1 mb-4">{p.description}</p>

                  {/* Stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.slice(0, 4).map(t => (
                      <span key={t} className="chip !text-[0.65rem] !px-2 !py-0.5">{t}</span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="chip !text-[0.65rem] !px-2 !py-0.5 !bg-slate-100 !text-slate-500 !border-slate-200">
                        +{p.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="btn-ghost !py-2 !px-3.5 text-xs flex-1 justify-center"
                    >
                      <FiGithub size={13} /> Code
                    </a>
                    {p.demo ? (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer"
                        className="btn-primary !py-2 !px-3.5 text-xs flex-1 justify-center"
                      >
                        <FiExternalLink size={13} /> Live
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* More / Less button */}
        {projects.length > 3 && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-ghost !py-3 !px-8 text-sm font-semibold group"
            >
              {showAll ? 'Show Less' : (
                <>
                  More Projects ({projects.length - 3} more)
                  <FiArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
