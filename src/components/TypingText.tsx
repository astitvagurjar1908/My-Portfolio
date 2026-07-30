import { useEffect, useState } from 'react';

type Props = {
  words: string[];
  typingSpeed?: number;
  pause?: number;
};

export default function TypingText({ words, typingSpeed = 55, pause = 1600 }: Props) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? typingSpeed / 2 : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return (
    <span className="font-mono text-signal-cyan">
      {text}
      <span className="animate-blink">▍</span>
    </span>
  );
}
