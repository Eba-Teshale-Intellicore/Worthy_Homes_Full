import styles from "@/src/scss/button.module.scss";
import React from "react";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <>
      <button
        className={`${styles.button} ${styles[props.variant || "primary"]} ${props.className || ""}`}
        onClick={props.onClick}
      >
        {props.text}
        {props.icon && <span className={styles.icon}>{props.icon}</span>}
      </button>
    </>
  );
}
