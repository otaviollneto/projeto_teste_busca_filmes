import { useEffect, useState } from "react";

export function useKeyboardNavigation<T>(items: T[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }
      if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [items.length]);

  return { activeIndex };
}
