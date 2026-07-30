import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { profile, quickStats } from '@/data/resume';
import TypingText from './TypingText';
import SystemStatusCard from './SystemStatusCard';
import AnimatedCounter from './AnimatedCounter';

const roles = ['Backend Engineer', 'Java · Spring Boot', 'Distributed Systems', 'API Architect'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-5"
          >
            <TypingText words={roles} />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Hi, I'm {profile.name.split(' ')[0]} —
            <br />
            I build <span className="gradient-text">systems that hold up</span> under real load.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-ink-muted sm:text-lg"
          >
            {profile.tagline} Currently a {profile.title.toLowerCase()} at{' '}
            <span className="text-ink">To The New</span>, based in {profile.location}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href={profile.resumeFile} download className="btn-primary">
              <Download size={16} /> Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {quickStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <SystemStatusCard />
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-faint hover:text-ink-muted"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
