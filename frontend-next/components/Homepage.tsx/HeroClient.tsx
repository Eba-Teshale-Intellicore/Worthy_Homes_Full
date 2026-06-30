import React from "react";
import styles from "@/src/scss/heroclient.module.scss";
import Heading from "@/components/Heading";
import Image from "next/image";
import pic1 from "@/public/hero1.svg";
import Paragraph from "../Paragraph";
import { Quote } from "lucide-react";

export default function HeroClient() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroclients}>
          <div className={styles.hccontent}>
            <Heading text="Client Review" />

            <div className={styles.secbox}>
              <div className={styles.image}>
                <Image alt="Sec" src={pic1} fill />
              </div>
              <div className={styles.review}>
                <p>
                  <Paragraph
                    text="They didn't just show me listings—they helped me understand the market, guided me through financing options, and negotiated the best deal on my behalf. Their patience, professionalism, and attention to detail made all the difference. I am beyond grateful for their help and would choose them again in a heartbeat!"
                    size="sm"
                  />
                </p>
                <Quote size={30} />
                <Heading text="Kebede Abdisa" size="md" />
                <Heading text="Addis Ababa, Ethiopia" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
