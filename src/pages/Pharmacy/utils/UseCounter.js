import { useEffect, useRef, useState } from "react";

export default function useCounter(targetValue, duration = 500) {
  const [animatedValue, setAnimatedValue] = useState(targetValue);
  const rafRef = useRef(null);
  const startValueRef = useRef(targetValue);
  const startTimeRef = useRef(null);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    startValueRef.current = animatedValue;
    startTimeRef.current = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const newValue = startValueRef.current + (targetValue - startValueRef.current) * progress;
      setAnimatedValue(newValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafRef.current);
  }, [targetValue, duration]);

  return Math.round(animatedValue);
}
