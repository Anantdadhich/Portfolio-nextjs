"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  delay?: number;
  delayStart?: number;
  className?: string;
  onComplete?: (isCompleted: boolean) => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  delay = 0.05,
  className = "",
  delayStart = 0,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [startTyping, setStartTyping] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const tempDiv = document.createElement("div");
      tempDiv.style.visibility = "hidden";
      tempDiv.style.position = "absolute";
      tempDiv.style.width = `${containerRef.current.offsetWidth}px`;
      tempDiv.className = containerRef.current.className;
      tempDiv.textContent = text;
      document.body.appendChild(tempDiv);
      setContainerHeight(tempDiv.offsetHeight + 30);
      document.body.removeChild(tempDiv);
    }
  }, [text]);

  useEffect(() => {
    setDisplayedText("");
    setIsCompleted(false);

    const timer = setTimeout(() => {
      setStartTyping(true);
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1);
          } else {
            clearInterval(typingInterval);
            setIsCompleted(true);
            if (onComplete) {
              onComplete(true);
            }
            return prev;
          }
        });
      }, delay * 1000);

      return () => clearInterval(typingInterval);
    }, delayStart * 1000);

    return () => clearTimeout(timer);
  }, [text, delay, delayStart, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className={`relative ${className}`}
        style={{ height: containerHeight ?? "auto" }}
        initial={{ height: containerHeight ?? "auto" }}
        animate={{ height: containerHeight ?? "auto" }}
      >
        <motion.span className="inline-block">
          {displayedText}
          {startTyping && (
            <span
              className={cn(
                "inline-block w-[7px] h-[17px] bg-white relative top-[1.5px] ml-[2px]",
                isCompleted && "animate-blink"
              )}
            />
          )}
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
};

export default TypingEffect;