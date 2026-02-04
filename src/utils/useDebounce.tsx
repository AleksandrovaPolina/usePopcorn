import { useCallback, useRef } from "react";

export default function useDebounce<T, U>(
  func: (value: T) => U,
  delay: number,
) {
  const timer = useRef<number>(null);
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(async () => {
      await func(e.target.value as T);
      }, delay);
    },
    [delay, func],
  );
  return handler;
}