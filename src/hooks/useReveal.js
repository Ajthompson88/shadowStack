import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver-powered visibility hook.
 * Returns a ref to attach to the target node and a boolean indicating
 * whether the element has intersected the viewport.
 */
export default function useReveal({
  threshold = 0.5,
  root = null,
  rootMargin = "0px",
  once = true,
} = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, once]);

  return { ref: elementRef, isVisible };
}
