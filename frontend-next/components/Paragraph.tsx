import React from "react";
import styles from "@/src/scss/paragraph.module.scss";

type ParagraphProps = {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "white" | "black" | "green";
};

export default function Paragraph({
  text,
  size = "md",
  color = "black",
}: ParagraphProps) {
  return (
    <span className={`${styles.heading} ${styles[size]} ${styles[color]}`}>
      {text}
    </span>
  );
}
