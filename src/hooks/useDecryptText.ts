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
    speed = 50,
    delay = 1000,
    baseLength = 30,
  }: { speed?: number; delay?: number; baseLength?: number } = {}
) {
  const [displayed, setDisplayed] = useState(text);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let step = 0;
    let interval: NodeJS.Timeout;

    setDisplayed(randomBinaryString(baseLength));
    setIsDone(false);

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        step++;

        const revealed = text.slice(0, step);
        const masked = randomBinaryString(Math.max(baseLength - step, 0));

        setDisplayed(revealed + masked);

        if (step >= Math.max(text.length, baseLength)) {
          clearInterval(interval);
          setDisplayed(text);
          setIsDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay, baseLength]);

  return { displayed, isDone };
}
