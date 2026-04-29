"use client";

import React, { useEffect, useState } from "react";
type TypewriterProps = { words: string[] };

export default function Typewriter({ words }: TypewriterProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(() => {
      setText(currentWord.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, 100);
    if (charIndex === currentWord.length) {
      setTimeout(() => {
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % words.length);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, index, words]);
  return <span>{text}</span>;
}
