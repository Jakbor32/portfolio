import { useEffect, useState } from 'react';

function randomBinaryString(length: number) {
  return Array.from({ length }, () => (Math.random() > 0.5 ? '1' : '0')).join('');
}

/**
 * Custom hook for "decrypting" text animation.
 * Starts with a binary noise overlay (0/1), 
 * then gradually reveals the target text character by character.
 *
 * Useful for creating a hacking/terminal-like effect.
 */

export function useDecryptText(
  text: string,
  {
    speed = 20,
    delay = 500,
    baseLength = 30,
  }: { speed?: number; delay?: number; baseLength?: number } = {}
) {
  const [displayed, setDisplayed] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let step = 0;
    let timeout: NodeJS.Timeout;
    let phase: 'shrink' | 'decode' = 'shrink';

    setDisplayed(randomBinaryString(baseLength));
    setIsDone(false);

    const run = () => {
      step++;

      if (phase === 'shrink') {
        const currentLength = Math.max(baseLength - step, text.length);
        setDisplayed(randomBinaryString(currentLength));

        if (currentLength === text.length) {
          phase = 'decode';
          step = 0;
        }
      } else {
        const revealed = text.slice(0, step);
        const masked = randomBinaryString(Math.max(text.length - step, 0));
        setDisplayed(revealed + masked);

        if (step >= text.length) {
          clearTimeout(timeout);
          setDisplayed(text);
          setIsDone(true);
          return;
        }
      }

      timeout = setTimeout(run, speed);
    };

    const init = setTimeout(run, delay);

    return () => {
      clearTimeout(init);
      clearTimeout(timeout);
    };
  }, [text, speed, delay, baseLength]);

  return { displayed, isDone };
}
