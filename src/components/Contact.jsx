import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle, FiMail, FiMapPin } from 'react-icons/fi';
import { profile, socialLinks } from '../data';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const key = import.meta.env.VITE_WEB3FORMS_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const fd = new FormData(e.target);
    fd.append('access_key', key);
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) { setStatus('success'); e.target.reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-tag">Say Hello</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Get In Touch</h2>
          <p className="mt-3 text-slate-400 max-w-lg mx-auto">I'm always open to new opportunities and collaborations.</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 max-w-[920px] mx-auto">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-6 justify-center"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3 leading-snug">Let's build something great together.</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Whether you have a project in mind, a question, or just want to connect — my inbox is always open.</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <FiMail size={17} className="text-primary-600" />
                </div>
                <a href={`mailto:${profile.email}`} className="text-primary-600 font-medium hover:underline">{profile.email}</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <FiMapPin size={17} className="text-primary-600" />
                </div>
                {profile.location}
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                  className="glass-card w-11 h-11 flex items-center justify-center !rounded-full text-slate-400 transition-all duration-300 hover:text-primary-600 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit}>
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-medium text-slate-600 mb-1.5">Name</label>
                  <input id="c-name" name="name" type="text" required placeholder="Your name"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition" />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-medium text-slate-600 mb-1.5">Email</label>
                  <input id="c-email" name="email" type="email" required placeholder="you@email.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition" />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="c-subject" className="block text-sm font-medium text-slate-600 mb-1.5">Subject</label>
                <input id="c-subject" name="subject" type="text" required placeholder="Project inquiry"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition" />
              </div>

              <div className="mb-5">
                <label htmlFor="c-msg" className="block text-sm font-medium text-slate-600 mb-1.5">Message</label>
                <textarea id="c-msg" name="message" rows="4" required placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white resize-y focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition" />
              </div>

              <button type="submit" disabled={status === 'loading'}
                className="btn-primary w-full justify-center !py-3.5 text-base disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : <><FiSend size={18} /> Send Message</>}
              </button>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-emerald-50 text-emerald-600 rounded-xl flex items-center gap-2 text-sm font-medium"
                >
                  <FiCheckCircle /> Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 text-sm font-medium"
                >
                  <FiAlertCircle /> Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
