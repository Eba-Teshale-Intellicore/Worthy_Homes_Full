"use client";
import React, { useState } from "react";
import styles from "@/src/scss/aboutagent.module.scss";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import Pic1 from "@/public/aboutask.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Frequently Asked Questions",
    answer:
      "The gap between what gets built and what's actually needed—for teachers, nurses, service workers, families—keeps widening across cities everywhere.",
  },
  {
    question: "Why Worthy Homes?",
    answer:
      "Worthy Homes was founded to close that gap: a private development firm operating with speed, discipline, and accountability.",
  },
  {
    question: "Frequently Asked Questions",
    answer:
      "The gap between what gets built and what's actually needed—for teachers, nurses, service workers, families—keeps widening across cities everywhere.",
  },
  {
    question: "Frequently Asked Questions",
    answer:
      "The gap between what gets built and what's actually needed—for teachers, nurses, service workers, families—keeps widening across cities everywhere.",
  },
];

export default function AboutAgent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.seccontainer}>
          <div className={styles.aboutagent}>
            <div className={styles.grid}>
              <Heading text="Frequently Asked Questions" />
              <div className={`${styles.thiblock} ${styles.block3}`}>
                <div className={styles.secbox}>
                  <div className={styles.textcontainer}>
                    {faqs.map((faq, index) => (
                      <div key={index} className={styles.faq}>
                        <div
                          className={styles.question}
                          onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                          }
                        >
                          <Heading text={faq.question} size="sm" />
                          <Plus
                            size={24}
                            style={{
                              transform:
                                openIndex === index
                                  ? "rotate(45deg)"
                                  : "rotate(0deg)",
                              transition: "0.3s",
                            }}
                          />
                        </div>
                        <AnimatePresence>
                          {openIndex === index && (
                            <motion.div
                              className={styles.answer}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Paragraph text={faq.answer} size="sm" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
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
