"use client";

import { useState, useEffect } from "react";

interface TypedTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypedText({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseDuration = 2000,
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        const nextChar = currentPhrase[displayText.length];
        // Add natural randomness to typing speed
        let currentSpeed = typingSpeed + (Math.random() * 40 - 20);
        
        // Pause slightly longer on punctuation
        if (['.', ',', '!', '?'].includes(nextChar)) {
          currentSpeed += 300;
        }

        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, currentSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        // Deleting is usually faster and more consistent
        const currentSpeed = deletingSpeed + (Math.random() * 10 - 5);
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, currentSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {displayText}
      <span
        style={{
          display: "inline-block",
          width: "0.12em",
          height: "1.1em",
          backgroundColor: "var(--accent)",
          marginLeft: "4px",
          animation: "blink 1s step-end infinite",
          verticalAlign: "middle",
          transform: "translateY(-5%)",
        }}
      />
    </span>
  );
}
