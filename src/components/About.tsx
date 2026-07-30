import { motion } from 'framer-motion';
import { Cpu, GitBranch, Layers, Radar } from 'lucide-react';
import { profile } from '@/data/resume';

const strengths = [
  {
    icon: Layers,
    title: 'Backend & scalable systems',
    body: 'REST APIs and microservices in Java and Spring Boot, tuned to hold sub-100ms response times under 10K+ concurrent requests.',
  },
  {
    icon: Cpu,
    title: 'Search & caching at scale',
    body: 'Real-time Elasticsearch synchronization and Redis caching strategies that cut database load and keep results instant across millions of records.',
  },
  {
    icon: Radar,
    title: 'Observability-minded',
    body: 'Wired New Relic and Grafana into production services to catch issues before they become incidents, keeping uptime at 99.99%.',
  },
  {
    icon: GitBranch,
    title: 'Quality as a habit',
    body: '95% unit test coverage with JUnit and Mockito, treated as a default rather than an afterthought — it shows up in the bug count.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">01 · About</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Engineering that starts with <span className="gradient-text">the backend</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass glass-hover rounded-xl p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                    <Icon size={17} />
                  </div>
                  <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
