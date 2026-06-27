import React from "react";
import styles from "@/src/scss/heroabout.module.scss";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Image from "next/image";
export default function HeroAbout() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroabout}>
          <div className={styles.hacontent}>
            <Heading text="About Us" />
            <div className={styles.grid}>
              <div className={`${styles.firblock} ${styles.block1}`}>
                <p>More than 60% of buyers prefer suburban homes</p>
                <h1>60%</h1>
              </div>
              <div className={`${styles.secblock} ${styles.block2}`}>
                <p>
                  Over the years, we have helped countless families, investors,
                  and businesses find properties that match their dreams and
                  goals. With a deep understanding of market trends and a
                  client-first approach, we have expanded our services, built
                  lasting relationships, and earned a reputation for integrity
                  and reliability.
                </p>
                <Button text="More About Us" />
              </div>
              <div className={`${styles.thiblock} ${styles.block3}`}>
                <Image
                  src="/hero1.svg"
                  alt="Luxury home"
                  width={400}
                  height={200}
                  style={{
                    width: "6%",
                    height: "auto",
                  }}
                />
                <Image
                  src="/hero2.svg"
                  alt="Luxury home"
                  width={400}
                  height={200}
                  style={{
                    width: "10%",
                    height: "auto",
                  }}
                />
                <p>
                  Our mission —is to help people acquire a new quality of life.
                </p>
                <Image
                  src="/hero1.svg"
                  alt="Luxury home"
                  width={400}
                  height={200}
                  style={{
                    width: "10%",
                    height: "auto",
                  }}
                />
                <Image
                  src="/hero2.svg"
                  alt="Luxury home"
                  width={400}
                  height={200}
                  style={{
                    width: "10%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
