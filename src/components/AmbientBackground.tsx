import { motion } from 'framer-motion';
import { Braces, Cloud, Coffee, Database, Layers } from 'lucide-react';

const icons = [
  { Icon: Coffee, top: '12%', left: '6%', delay: 0 },
  { Icon: Database, top: '68%', left: '10%', delay: 1.2 },
  { Icon: Braces, top: '22%', left: '92%', delay: 0.6 },
  { Icon: Cloud, top: '78%', left: '88%', delay: 1.8 },
  { Icon: Layers, top: '45%', left: '3%', delay: 2.4 },
];

export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-[0.06]">
      {icons.map(({ Icon, top, left, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top, left }}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 8 + i, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon size={38} />
        </motion.div>
      ))}
    </div>
  );
}
