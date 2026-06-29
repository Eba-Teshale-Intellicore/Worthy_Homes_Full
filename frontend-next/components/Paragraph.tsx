import React from "react";
import styles from "@/src/scss/paragraph.module.scss";

type ParagraphProps = {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Paragraph({ text, size = "md" }: ParagraphProps) {
  return <span className={`${styles.parag} ${styles[size]}`}>{text}</span>;
}
