import styles from "@/src/scss/heading.module.scss";

type HeadingProps = {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Heading({ text, size = "lg" }: HeadingProps) {
  return <h1 className={`${styles.heading} ${styles[size]}`}>{text}</h1>;
}
