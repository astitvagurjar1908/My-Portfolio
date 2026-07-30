import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-grad-accent"
        style={{ scaleX: progress, transformOrigin: 'left' }}
        transition={{ ease: 'linear', duration: 0.1 }}
      />
    </div>
  );
}
