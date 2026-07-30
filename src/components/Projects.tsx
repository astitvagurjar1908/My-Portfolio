import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Github, TerminalSquare } from 'lucide-react';
import { profile, projects } from '@/data/resume';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">04 · Projects</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Systems shipped to production</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Drawn directly from work at To The New — real services carrying real traffic, not demos.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              className="glass glass-hover flex flex-col rounded-2xl p-6"
            >
              <div className="mb-4 flex h-28 items-center justify-center rounded-xl border border-white/[0.05] bg-gradient-to-br from-accent/15 via-base-800 to-signal-cyan/10">
                <TerminalSquare size={28} className="text-accent-light/70" />
              </div>

              <h3 className="text-lg font-semibold text-ink">{project.title}</h3>

              <p className="mt-3 text-sm text-ink-muted">
                <span className="font-medium text-ink-faint">Problem — </span>
                {project.problem}
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                <span className="font-medium text-ink-faint">Solution — </span>
                {project.solution}
              </p>

              <ul className="mt-4 space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-muted">
                    <CheckCircle2 size={14} className="shrink-0 text-signal-green" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-white/[0.04] bg-white/[0.02] p-3 text-sm text-ink-muted">
                <span className="font-medium text-ink-faint">Outcome — </span>
                {project.outcome}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.githubUrl ?? profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary !px-4 !py-2 text-sm"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={project.demoUrl ?? '#contact'}
                  className="btn-secondary !px-4 !py-2 text-sm"
                >
                  <ArrowUpRight size={14} /> {project.demoUrl ? 'Live demo' : 'Internal system'}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
