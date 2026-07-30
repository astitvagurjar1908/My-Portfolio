import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, ShieldCheck, Zap } from 'lucide-react';

const metrics = [
  { icon: Zap, label: 'p99 latency', base: 96, unit: 'ms', jitter: 6, tone: 'text-signal-green' },
  { icon: Activity, label: 'throughput', base: 712, unit: 'req/s', jitter: 18, tone: 'text-signal-cyan' },
  { icon: Database, label: 'cache hit rate', base: 94.2, unit: '%', jitter: 0.6, tone: 'text-accent-light' },
  { icon: ShieldCheck, label: 'uptime', base: 99.99, unit: '%', jitter: 0.01, tone: 'text-signal-green' },
];

function useLiveValue(base: number, jitter: number) {
  const [value, setValue] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      const delta = (Math.random() - 0.5) * 2 * jitter;
      setValue(Math.round((base + delta) * 100) / 100);
    }, 2200);
    return () => clearInterval(id);
  }, [base, jitter]);
  return value;
}

function MetricRow({ metric }: { metric: (typeof metrics)[number] }) {
  const value = useLiveValue(metric.base, metric.jitter);
  const Icon = metric.icon;
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-white/[0.02] px-4 py-3">
      <div className="flex items-center gap-2.5">
        <Icon size={14} className={metric.tone} />
        <span className="font-mono text-xs text-ink-muted">{metric.label}</span>
      </div>
      <span className={`font-mono text-sm font-medium ${metric.tone}`}>
        {value}
        <span className="text-ink-faint">{metric.unit}</span>
      </span>
    </div>
  );
}

export default function SystemStatusCard() {
  const path =
    'M0,32 L20,28 L40,34 L60,20 L80,24 L100,12 L120,18 L140,8 L160,14 L180,6 L200,10';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="glass w-full max-w-sm animate-floaty rounded-2xl p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-signal-green shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
          <span className="font-mono text-xs text-ink-muted">production · all services healthy</span>
        </div>
        <span className="font-mono text-[10px] text-ink-faint">live</span>
      </div>

      <div className="mb-4 rounded-lg border border-white/[0.04] bg-white/[0.02] p-3">
        <svg viewBox="0 0 200 40" className="h-10 w-full" preserveAspectRatio="none">
          <path d={path} fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.85} />
        </svg>
      </div>

      <div className="space-y-2">
        {metrics.map((m) => (
          <MetricRow key={m.label} metric={m} />
        ))}
      </div>
    </motion.div>
  );
}
