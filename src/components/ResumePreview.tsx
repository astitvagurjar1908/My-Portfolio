import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { profile } from '@/data/resume';

export default function ResumePreview() {
  return (
    <section id="resume" className="py-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass flex flex-col items-center gap-6 rounded-2xl p-8 text-center sm:p-12"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-light">
            <FileText size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Prefer the one-pager?</h2>
            <p className="mt-2 max-w-md text-ink-muted">
              Grab the full resume as a PDF — same experience, same numbers, formatted for a
              quick scan or an ATS upload.
            </p>
          </div>
          <a href={profile.resumeFile} download className="btn-primary">
            <Download size={16} /> Download Resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
