import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useAnimation() {
  const refAnimation = useRef<any>(null);

  const { contextSafe } = useGSAP({ scope: refAnimation });

  const opacityAnimation = contextSafe(() => {
    gsap.fromTo(
      ".page",
      {
        opacity: 0,
        delay: 0.2,
      },
      {
        opacity: 1,
        delay: 0.2,
      }
    );
  });

  return {
    refAnimation,
    opacityAnimation,
  };
}
