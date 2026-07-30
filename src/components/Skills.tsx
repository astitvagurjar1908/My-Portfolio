import { motion } from 'framer-motion';
import { skills } from '@/data/resume';

// Frequency-in-resume based emphasis — not invented proficiency scores.
const coreStack = new Set(['Java', 'Spring Boot', 'Elasticsearch', 'Redis', 'MySQL']);

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">03 · Skills</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Service registry</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Everything currently running in production experience, grouped by where it sits in the stack.
            Highlighted tags are the tools used most heavily.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass glass-hover rounded-xl p-5"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={
                      coreStack.has(skill)
                        ? 'rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light'
                        : 'chip'
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
