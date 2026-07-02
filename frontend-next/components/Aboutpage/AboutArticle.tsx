import React from "react";
import styles from "@/src/scss/aboutarticle.module.scss";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

export default function AboutArticle() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutagent}>
        <div className={styles.aacontent}>
          <Heading text="Real estate agents" />
          <div>
            <p>
              <Paragraph text="Our team consists of professionals" size="lg" />
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
