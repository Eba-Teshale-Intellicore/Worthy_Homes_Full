import React from "react";
import pic1 from "@/public/agent1.svg";
import pic2 from "@/public/agent2.svg";
import pic3 from "@/public/agent3.svg";
import pic4 from "@/public/agent4.svg";
import Image from "next/image";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import styles from "@/src/scss/aboutagent.module.scss";
import { MoveUpRight } from "lucide-react";

const elements = [
  { src: pic1, heading: "Israel Bedesa", paragraph: "Founder & CEO" },
  { src: pic2, heading: "Meseret Beqele", paragraph: "Real Estate Agent" },
  { src: pic3, heading: "Bereket Abera", paragraph: "Consultant" },
  { src: pic4, heading: "Fenet Belay", paragraph: "Sales Manager" },
];

export default function HeroProperities() {
  return (
    <div className={styles.container}>
      <div className={styles.heroproperties}>
        <div className={styles.hpcontent}>
          <Heading text="Real estate agents" />

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
                      <Heading text={element.heading} size="sm" />
                      <div className={styles.cont}>
                        <Paragraph text={element.paragraph} size="sm" />
                        {/* <Button text="" icon={<MoveUpRight size={18} />} /> */}
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
