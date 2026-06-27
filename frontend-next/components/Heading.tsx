import styles from "@/src/scss/button.module.scss";
import React from "react";

type HeadingProps = {
  text: string;
  // variant?: "primary" | "secondary";
};

export default function Heading(props: HeadingProps) {
  return (
    <>
      <h1 className={`${styles.button}`}>{props.text}</h1>
    </>
  );
}
