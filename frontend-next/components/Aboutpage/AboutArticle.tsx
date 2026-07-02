import React from "react";
import styles from "@/src/scss/aboutarticle.module.scss";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import pic1 from "@/public/article1.svg";
import pic2 from "@/public/article2.svg";
import pic3 from "@/public/article3.svg";
import Image from "next/image";
import Button from "@/components/Button";
import { MoveUpRight } from "lucide-react";

const elements = [
  {
    src: pic1,
    heading: "Family Living",
    paragraph: "Designed for comfort, safety, ...",
  },
  {
    src: pic2,
    heading: "Real Estate & Economy",
    paragraph: "Real estate plays a vital role ...",
  },
  {
    src: pic3,
    heading: "Economic Impact",
    paragraph: "Every new housing project...",
  },
  {
    src: pic1,
    heading: "Sustainable Commu...",
    paragraph: "We build more than homes—we... ",
  },
];
export default function AboutArticle() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutarticle}>
        <div className={styles.aacontent}>
          <Heading text="Our Articles" />
          <div>
            <p>
              <Paragraph text="Our team consists of professionals" size="lg" />
            </p>
            <hr />
          </div>
          <div className={styles.section}>
            {elements.map((element, index) => {
              return (
                <div key={index} className={styles.secbox}>
                  <div className={styles.detail}>
                    <Heading text={element.heading} size="sm" />
                    <div className={styles.cont}>
                      <Paragraph text={element.paragraph} size="sm" />
                      {/* <div>
                        <Button text="" icon={<MoveUpRight size={18} />} />
                      </div> */}
                    </div>
                  </div>
                  <div className={styles.image}>
                    <Image
                      src={element.src}
                      alt="Luxury home"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.lastbtn}>
            <Button
              text="View All Properties"
              icon={<MoveUpRight size={18} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
