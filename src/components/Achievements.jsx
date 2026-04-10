import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { achievements, certificates } from '../data';

const INITIAL_CERTIFICATE_COUNT = 3;

export default function Achievements() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const hasMoreCertificates = certificates.length > INITIAL_CERTIFICATE_COUNT;
  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, INITIAL_CERTIFICATE_COUNT);

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">Recognition</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Achievements & Certifications</h2>
          <p className="mt-3 text-slate-400 max-w-lg mx-auto">Milestones and credentials I've earned along the way.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-5">
              <FiStar className="text-amber-500" /> Achievements
            </h3>
            <div className="flex flex-col gap-4">
              {achievements.map((a, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card-hover p-5 border-l-4 !border-l-amber-400"
                >
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{a.title}</h4>
                    <span className="text-xs text-slate-400 flex-shrink-0">{a.year}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{a.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-5">
              <FiCheckCircle className="text-emerald-500" /> Certifications
            </h3>
            <div className="flex flex-col gap-4">
              {visibleCertificates.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card-hover p-5 border-l-4 !border-l-emerald-400"
                >
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                    <span className="text-xs text-slate-400 flex-shrink-0">{c.year}</span>
                  </div>
                  <p className="text-xs font-semibold text-primary-600 mb-1">{c.issuer}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.details}</p>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                    >
                      View Certificate
                      <FiExternalLink size={12} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
            {hasMoreCertificates && (
              <button
                type="button"
                onClick={() => setShowAllCertificates((prev) => !prev)}
                className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-indigo-300 hover:text-indigo-600"
              >
                {showAllCertificates ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
