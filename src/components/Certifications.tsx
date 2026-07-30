import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '@/data/resume';

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">06 · Certifications</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Certifications</h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-xl p-5"
            >
              <Award size={18} className="text-accent-light" />
              <h3 className="mt-3 text-sm font-semibold text-ink">{cert.name}</h3>
              <p className="mt-1 text-xs text-ink-muted">{cert.issuer}</p>
              {cert.date && <p className="mt-1 font-mono text-xs text-ink-faint">{cert.date}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
