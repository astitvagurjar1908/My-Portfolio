import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '@/data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">02 · Experience</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Deployment log</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            A running history of the roles, systems, and shipped work behind the numbers above.
          </p>
        </motion.div>

        <div className="relative mt-14 pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-signal-cyan/60 to-transparent sm:left-[9px]" />

          {experience.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-base-950 ring-2 ring-accent sm:-left-10">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                      <Briefcase size={16} className="text-accent-light" />
                      {role.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-signal-cyan">{role.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-ink-muted">{role.duration}</p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-xs text-ink-faint">
                      <MapPin size={12} /> {role.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {role.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
