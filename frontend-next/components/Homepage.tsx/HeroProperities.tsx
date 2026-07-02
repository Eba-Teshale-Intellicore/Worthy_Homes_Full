import React from "react";
import pic1 from "@/public/properties1.svg";
import pic2 from "@/public/properties2.svg";
import pic3 from "@/public/properties3.svg";
import pic4 from "@/public/properties4.svg";

import Image from "next/image";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import styles from "@/src/scss/heroproperities.module.scss";
import { MoveUpRight } from "lucide-react";

const elements = [
  { src: pic1, heading: "Ayat Real Estate", paragraph: "$120000 USD" },
  { src: pic2, heading: "Phison Real Estate", paragraph: "$140000 USD" },
  { src: pic3, heading: "Romark Real Estate", paragraph: "$150000 USD" },
  { src: pic4, heading: "Noah Real Estate", paragraph: "$100000 USD" },
  { src: pic1, heading: "Temer Real Estate", paragraph: "$80000 USD" },
];

export default function HeroProperities() {
  return (
    <div className={styles.container}>
      <div className={styles.heroproperties}>
        <div className={styles.hpcontent}>
          <Heading text="Latest Properties" />

          <div>
            <div className={styles.section}>
              {elements.map((element, index) => {
                return (
                  <div key={index} className={styles.secbox}>
                    <div className={styles.image}>
                      <Image
                        src={element.src}
                        alt="Luxury home"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className={styles.detail}>
                      <Heading text={element.heading} size="md" />
                      <div className={styles.cont}>
                        <Paragraph text={element.paragraph} size="sm" />
                        <Button text="" icon={<MoveUpRight size={18} />} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
