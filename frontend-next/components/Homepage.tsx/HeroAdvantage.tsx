import React from "react";
import styles from "@/src/scss/heroadvantage.module.scss";
import Heading from "@/components/Heading";
import Paragraph from "../Paragraph";
export default function HeroAdvantage() {
  const elements = [
    {
      heading: "We are visionaries",
      para: "We are visionaries We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your area will change in a few years",
      classname: "background",
    },
    {
      heading: "We are always objectives",
      para: "We do not want to sell you any specific object, our goal is to find the “right” apartment for you and remain partners for many years.",
    },
    {
      heading: "We provide a full range of services",
      para: "We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork.",
      classname: "background",
    },
    {
      heading: "We are real estate experts",
      para: "We have more than 130 objects in our portfolio, but for you we will make an individual selection with only suitable options.",
    },
    {
      heading: 'Let\'s find your "place of power"',
      para: "The housing should make your life better. Therefore, when selecting real estate, we carefully learn your request and find only what is ideal.",
      classname: "background",
    },
    {
      heading: "We will answer any Questions",
      para: "Whether it's the legal execution of a transaction, interior design or the technical details of a building, our brokers will tell you everything.",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.seccontainer}>
          <div className={styles.heroadva}>
            <div className={styles.grid}>
              <Heading text="Our advantages" />
              <div>
                <p>
                  <Paragraph
                    text="We offer an individual approach to each client."
                    size="lg"
                  />
                </p>
                <hr />
              </div>
              <div className={styles.sections}>
                {elements.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className={`${styles.secbox} ${
                        element.classname ? styles[element.classname] : ""
                      }`}
                    >
                      <Heading text={element.heading} size="md" />
                      <Paragraph text={element.para} size="sm" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
