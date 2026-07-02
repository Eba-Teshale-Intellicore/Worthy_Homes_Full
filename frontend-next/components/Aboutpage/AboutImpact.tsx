"use client";

import React from "react";
import styles from "@/src/scss/aboutimpact.module.scss";
import Button from "../Button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Pic1 from "@/public/aboutlegacy.svg";
import Paragraph from "../Paragraph";
import Counter from "../Counter";
import Heading from "../Heading";

export default function AboutImpact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.aboutImpact}>
          <div className={styles.aicontent}>
            <div className={styles.grid}>
              <div className={`${styles.firblock} ${styles.block1}`}>
                <h1>
                  <Heading text="Real Impact" size="md" />
                </h1>

                <p>
                  <Paragraph
                    text="We are committed to making a positive impact on the communities we serve. Our initiatives focus on sustainability, education, and community development, ensuring that our growth benefits everyone."
                    size="sm"
                  />
                </p>

                <Button
                  text="Contact Us"
                  variant="secondary"
                  icon={<MoveUpRight size={18} />}
                />
              </div>

              <div className={`${styles.secblock} ${styles.block2}`}>
                <div className={`${styles.stat} ${styles.stat1}`}>
                  <p>
                    <Paragraph text="Property Transactions" />
                  </p>
                  <h1>
                    <Counter end={70} suffix="%" />
                  </h1>
                </div>
                <div className={`${styles.stat} ${styles.stat2}`}>
                  <p>
                    <Paragraph text="Operating in  Addis Ababa" />
                  </p>
                  <div className={`${styles.imagecontaine}`}>
                    <Image src={Pic1} alt="Luxury home" fill />
                  </div>
                </div>
              </div>

              <div className={`${styles.thiblock} ${styles.block3}`}>
                <div className={`${styles.stat} ${styles.stat1}`}>
                  <p>
                    <Paragraph text="Properties Sold" />
                  </p>
                  <h1>
                    <Counter end={1250} suffix="+" />
                  </h1>
                </div>
                <div className={`${styles.stat} ${styles.stat2}`}>
                  <p>
                    <Paragraph text="Successful Deal Closure Rate" />
                  </p>
                  <h1>
                    <Counter end={98} suffix="%" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
