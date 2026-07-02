"use client";
import React, { useRef } from "react";
import styles from "@/src/scss/heroabout.module.scss";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Image from "next/image";
import Image1 from "@/public/hero1.svg";
import img1 from "@/public/about1.svg";
import img2 from "@/public/about2.svg";
import img3 from "@/public/about3.svg";

import { MoveUpRight } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import Counter from "@/components/Counter";
import Paragraph from "@/components/Paragraph";

export default function HeroAbout() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const pictures = [
    { src: Image1, scale: scale5 },
    { src: img1, scale: scale6 },
    { src: img2, scale: scale7 },
    { src: img3, scale: scale8 },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.heroabout}>
        <div className={styles.hacontent}>
          <Heading text="About Us" />

          <div className={styles.grid}>
            <div className={`${styles.firblock} ${styles.block1}`}>
              <p>More than 60% of buyers prefer suburban homes</p>
              <h1>
                <Counter end={60} suffix="%" />
              </h1>
            </div>

            <div className={`${styles.secblock} ${styles.block2}`}>
              <p>
                <Paragraph
                  text="Over the years, we have helped countless families, investors,
                and businesses find properties that match their dreams and
                goals. With a deep understanding of market trends and a
                client-first approach, we have expanded our services, built
                lasting relationships, and earned a reputation for integrity and
                reliability."
                  size="sm"
                />
              </p>

              <Button text="More About Us" icon={<MoveUpRight size={18} />} />
            </div>

            <div className={`${styles.thiblock} ${styles.block3}`}>
              <div className={styles.sticky}>
                <motion.p
                  className={styles.centerText}
                  style={{ scale: scale4 }}
                >
                  <Paragraph text="Our mission — is to help people acquire a new quality of life." />
                </motion.p>

                {pictures.map((picture, index) => (
                  <motion.div
                    key={index}
                    style={{ scale: picture.scale }}
                    className={styles.el}
                  >
                    <div className={styles.imagecontainer}>
                      <Image src={picture.src} alt="Luxury home" fill />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
