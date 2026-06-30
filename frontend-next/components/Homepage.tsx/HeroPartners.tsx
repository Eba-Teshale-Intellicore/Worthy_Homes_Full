"use client";
import React, { useRef } from "react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Image1 from "@/public/hero1.svg";
import Pic1 from "@/public/hero2.svg";
import styles from "@/src/scss/heropartners.module.scss";

export default function HeroPartners() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const pictures = [
    { src: Pic1, scale: scale5 },
    { src: Image1, scale: scale6 },
    { src: Image1, scale: scale7 },
    { src: Image1, scale: scale7 },
    { src: Image1, scale: scale8 },
    { src: Image1, scale: scale8 },
    { src: Image1, scale: scale8 },
  ];
  return (
    <div ref={container} className={styles.container}>
      <div className={styles.heropartners}>
        <div className={styles.hscontent}>
          <Heading text="Our Partners" />
          <div>
            <p>
              <Paragraph
                text="We work only with reliable developers"
                size="lg"
              />
            </p>
            <hr />
          </div>
          <div className={`${styles.thiblock} ${styles.block3}`}>
            <div className={styles.sticky}>
              {pictures.map((picture, index) => (
                <motion.div
                  key={index}
                  style={{ scale: picture.scale }}
                  className={styles.el}
                >
                  <motion.div
                    className={styles.imagecontainer}
                    // animate={{ rotate: 360 }}
                    // transition={{
                    //   duration: 35,
                    //   repeat: Infinity,
                    //   ease: "linear",
                    // }}
                  >
                    <Image src={picture.src} alt="Luxury home" fill />
                  </motion.div>
                </motion.div>
              ))}
              <motion.p
                className={styles.centerimage}
                style={{ scale: scale4 }}
              >
                <Image src={Pic1} alt="Luxury home" fill />
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
