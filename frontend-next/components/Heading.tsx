import styles from "@/src/scss/heading.module.scss";

type HeadingProps = {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "white" | "black" | "green";
};

export default function Heading({
  text,
  size = "lg",
  color = "black",
}: HeadingProps) {
  return (
    <h1 className={`${styles.heading} ${styles[size]} ${styles[color]}`}>
      {text}
    </h1>
  );
}
