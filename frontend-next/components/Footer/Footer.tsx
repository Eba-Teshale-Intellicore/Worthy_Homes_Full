"use client";

import React from "react";
import styles from "@/src/scss/footer.module.scss";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";

import {
  FaFacebookF,
  FaTelegram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { MoveUpRight } from "lucide-react";

export default function Footer() {
  const router = useRouter();
  const pages = [
    { label: "About Us", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Agents", href: "/agents" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTelegram />, href: "https://t.me/username" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaTiktok />, href: "https://tiktok.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaXTwitter />, href: "https://x.com" },
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.fcontent}>
          {/* TOP TEXT */}
          <div className={styles.top}>
            <Heading text="Ready to Find Your Next Space?" color="white" />
            <p>
              <Paragraph
                text="Discover properties, connect with experts, and make informed decisions."
                size="lg"
                color="white"
              />
            </p>
            <hr />
          </div>

          {/* MAIN GRID */}
          <div className={styles.grid}>
            {/* SOCIALS */}
            <div className={styles.column}>
              <Heading text="Our Social" size="md" color="white" />

              <div className={styles.query}>
                <div className={styles.socials}>
                  {socialLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
                <Paragraph text="Business Inquiry:" color="white" />
                <Paragraph text="worthyhomes@gmail.com" color="white" />
              </div>
            </div>

            {/* PAGES */}
            <div className={styles.column}>
              <Heading text="Pages" size="md" color="white" />
              <ul>
                {pages.map((page, i) => (
                  <li key={i}>
                    <Link href={page.href}>{page.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA / INFO */}
            <div className={styles.column}>
              <Heading text="Get Started" size="md" color="white" />
              <Paragraph
                text="Start your journey with trusted real estate experts."
                size="sm"
                color="white"
              />
              <div className={styles.cta}>
                <Button
                  text="Contact Us"
                  variant="secondary"
                  onClick={() => router.push("/")}
                  icon={<MoveUpRight size={18} />}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <Paragraph
              text="© 2026 Real Estate Platform. All rights reserved."
              size="sm"
              color="white"
            />
            <div className={styles.rfooter}>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Paragraph text="Privacy Policy" color="white" size="sm" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Paragraph
                  text="Build by Gpspace_Tech"
                  color="white"
                  size="sm"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
      </div>
    </footer>
  );
}
