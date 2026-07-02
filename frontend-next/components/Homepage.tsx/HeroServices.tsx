import React from "react";
import styles from "@/src/scss/heroservice.module.scss";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import pic1 from "@/public/service1.svg";
import pic2 from "@/public/service2.svg";
import pic3 from "@/public/service3.svg";
import pic4 from "@/public/service4.svg";
export default function HeroServices() {
  const elements = [
    {
      src: pic2,
      heading: "Financial Consulting",
      paragraph:
        "We offer a comprehensive range of real estate services to help buyers, sellers, investors & tenants navigate the property market with ease.",
    },
    {
      src: pic1,
      heading: "Property law",
      paragraph: "We offer a comprehensive range of market with ease.",
    },
    {
      src: pic3,
      heading: "Property law",
      paragraph: "We offer a comprehensive range of market with ease.",
    },
    {
      src: pic4,
      heading: "Property law",
      paragraph:
        "We offer a comprehensive range of real estate services to help buyers, sellers, investors & tenants navigate the property market with ease.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.heroservices}>
        <div className={styles.hscontent}>
          <Heading text="Our services" />
          <div className={styles.grid}>
            <div className={`${styles.firblock} ${styles.block1}`}>
              <p>
                <Paragraph
                  text="When selecting real estate, we focus on several important characteristics"
                  size="lg"
                />
              </p>
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
                        <Paragraph text={element.paragraph} size="sm" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
