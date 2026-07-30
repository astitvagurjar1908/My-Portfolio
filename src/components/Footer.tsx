import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/resume';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="section-wrap flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-xs text-ink-faint">{profile.title} · {profile.location}</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-xs text-ink-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-ink">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-ink">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-muted hover:text-ink">
            <Mail size={16} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-ink-faint">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Framer Motion.
      </p>
    </footer>
  );
}
