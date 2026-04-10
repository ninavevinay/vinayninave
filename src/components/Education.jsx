import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import { education } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50/60">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">Background</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Education</h2>
          <p className="mt-3 text-slate-400 max-w-lg mx-auto">My academic journey and qualifications.</p>
        </motion.div>

        <div className="relative max-w-[800px] mx-auto">
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-cyan-400 to-transparent" />

          <div className="flex flex-col gap-8">
            {education.map((edu, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6 pl-2"
              >
                {/* Dot */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <FiBookOpen size={18} className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card-hover p-5 flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-900">{edu.degree}</h3>
                    <span className="chip !text-[0.7rem]">{edu.year}</span>
                  </div>
                  <p className="text-primary-600 font-semibold text-sm mb-1.5">{edu.institute}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-2">{edu.details}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600">
                    <FiAward size={15} className="text-amber-500" />
                    {edu.marks}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
