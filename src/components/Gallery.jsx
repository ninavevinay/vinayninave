import { motion } from 'framer-motion';
import { gallery } from '../data';

export default function Gallery() {
  if (!gallery || gallery.length === 0) return null;

  // Duplicate items for seamless infinite loop
  const items = [...gallery, ...gallery, ...gallery];

  return (
    <section id="gallery" className="py-20 overflow-hidden" style={{ background: 'var(--gallery-section-bg)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <span className="section-tag">Moments</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-[Outfit]">Gallery</h2>
          <p className="mt-2 text-slate-400">A glimpse into my journey — hackathons, events, and milestones.</p>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="marquee-outer">
        <div className="marquee-track flex gap-5 w-max">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef2ff, #e0f2fe)' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;">📸</div>`;
                  }}
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-medium text-slate-500 leading-snug line-clamp-2">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
