import React from "react";
import styles from "@/src/scss/aboutagent.module.scss";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Image from "next/image";
import Pic1 from "@/public/aboutask.svg";
import { MoveUpRight } from "lucide-react";

export default function AboutAgent() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.seccontainer}>
          <div className={styles.aboutagent}>
            <div className={styles.grid}>
              <Heading text="Frequently Asked Questions" />
              <div className={`${styles.thiblock} ${styles.block3}`}>
                <div className={styles.secbox}>
                  <div
                    className={`${styles.textcontainer} ${styles.blocktext}`}
                  >
                    <div>
                      <Heading text="Frequently Asked Questions" />
                      <Paragraph
                        text="   The gap between what gets built and what’s actually needed — for teachers, nurses, service workers, families — keeps widening across cities everywhere. Not for lack of commitment. But for lack of execution."
                        size="sm"
                      />{" "}
                    </div>

                    <Paragraph
                      text="   Worthy Homes was founded to close that gap: a private development firm operating with the speed, discipline, and accountability to deliver affordable housing at the scale and quality residents deserve."
                      size="sm"
                    />
                  </div>
                  <div
                    className={`${styles.imagecontainer} ${styles.blockimg}`}
                  >
                    <Image src={Pic1} alt="Luxury home" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
