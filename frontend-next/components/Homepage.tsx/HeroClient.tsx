"use client";
import React, { useEffect, useState } from "react";
import styles from "@/src/scss/heroclient.module.scss";
import Heading from "@/components/Heading";
import Image from "next/image";
import pic1 from "@/public/client1.svg";
import Paragraph from "../Paragraph";
import { Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const reviews = [
  {
    image: pic1,
    name: "Blen Abdisa",
    city: "Addis Ababa",
    review:
      "They didn't just show me listings—they helped me understand the market, guided me through financing options, and negotiated the best deal on my behalf. Their patience, professionalism, and attention to detail made all the difference. I am beyond grateful for their help and would choose them again in a heartbeat!",
  },
  {
    image: pic1,
    name: "Abel Tadesse",
    city: "Adama",
    review:
      "They didn't just show me listings—they helped me understand the market, guided me through financing options",
  },
  {
    image: pic1,
    name: "Marta Bekele",
    city: "Bahir Dar",
    review:
      "They didn't just show me listings—they helped me understand the market, guided me through financing options, and negotiated the best deal on my behalf.",
  },
];

export default function HeroClient() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroclients}>
          <div className={styles.hccontent}>
            <Heading text="Client Reviews" />
            <div>
              <p>
                <Paragraph
                  text="Discover what our clients say about their experience."
                  size="lg"
                />
              </p>
              <hr />
            </div>

            <div className={styles.slider}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className={styles.secbox}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={styles.image}>
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className={styles.review}>
                    <span className={styles.quote}>
                      <Quote size={80} />
                    </span>

                    <Paragraph text={review.review} size="sm" />

                    <Heading text={review.name} size="sm" />
                    <Heading text={review.city} size="sm" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
