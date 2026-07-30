import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '@/data/resume';

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">05 · Education</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Foundation</h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-base font-semibold text-ink">{edu.institution}</h3>
              <p className="mt-1 text-sm text-ink-muted">{edu.degree}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs text-ink-faint">
                <span>{edu.duration}</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {edu.location}
                </span>
                {edu.detail && <span className="chip">{edu.detail}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
