import React from "react";
import styles from "@/src/scss/abouthero.module.scss";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

export default function AboutHero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.aboutHero}>
          <div className={`${styles.firblock} ${styles.block1}`}>
            <Heading text="DRIVEN BY EXCELLENCE" />
          </div>
          <div>
            <div
              className={`${styles.secblock} ${styles.block2} ${styles.herocon}`}
            >
              <p>
                {" "}
                <Paragraph
                  text="   The gap between what gets built and what’s actually needed — for teachers, nurses, service workers, families — keeps widening across cities everywhere. Not for lack of commitment. But for lack of execution."
                  size="sm"
                />
              </p>
              <p>
                {" "}
                <Paragraph
                  text="   Worthy Homes was founded to close that gap: a private development firm operating with the speed, discipline, and accountability to deliver affordable housing at the scale and quality residents deserve."
                  size="sm"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
