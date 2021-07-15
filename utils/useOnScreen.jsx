import { useEffect, useState } from "react";

// Hook
const useOnScreen = (ref, rootMargin = "0px") => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    let currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  });
  return isIntersecting;
};

export default useOnScreen;
