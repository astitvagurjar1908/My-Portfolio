import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '@/data/resume';

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: profile.location, href: undefined },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: Github, label: 'GitHub', href: profile.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a recruiter'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">07 · Contact</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let's talk</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Open to backend and full-stack engineering roles. The fastest way to reach me is email.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="glass glass-hover flex items-center gap-3 rounded-xl px-4 py-3.5">
                  <Icon size={16} className="text-accent-light" />
                  <span className="text-sm text-ink">{item.label}</span>
                </div>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </motion.ul>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-ink-muted">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-ink-muted">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                placeholder="Tell me about the role..."
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send size={16} /> Send Message
            </button>
            <p className="text-xs text-ink-faint">
              Opens your email client with this message pre-filled — nothing is sent from the site directly.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
