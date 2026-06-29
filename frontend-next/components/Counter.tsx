"use client";

import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Heading from "@/components/Heading";

type CounterProps = {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
};

export default function Counter({
  start = 1,
  end,
  duration = 2000,
  suffix = "+",
}: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    let current = start;

    const stepTime = duration / (end - start);

    const timer = setInterval(() => {
      current++;

      setCount(current);

      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, start, end, duration]);

  return (
    <>
      <span ref={ref}>
        <Heading text={`${count}${suffix}`} />
      </span>
    </>
  );
}
