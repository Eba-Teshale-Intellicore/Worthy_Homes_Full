import React from "react";
import styles from "@/src/scss/aboutcontact.module.scss";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";

export default function AboutContact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.aboutcontact}>
          <div className={styles.accontent}>
            <p>
              <Paragraph
                text="We will create a personalized selection for you"
                size="lg"
              />
            </p>
            <h1>
              <Heading
                text="Tell us about the characteristics of your future apartment, and we will compile a catalog with suitable options for you"
                size="md"
              />
            </h1>
            <form>
              <h2>
                <Heading text="Name" size="sm" />
                <input type="text" placeholder="Answer" />
              </h2>

              <h2>
                <Heading text="Email" size="sm" />

                <input type="text" placeholder="Answer" />
              </h2>
              <div>
                <Button text="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
