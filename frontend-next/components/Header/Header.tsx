"use client";

import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/src/scss/header.module.scss";
export default function Header() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="logo">
            <Link href="/" className="logo">
              <Image
                src="/logo.svg"
                alt="Worthy Homes"
                width={140}
                height={50}
              />
            </Link>
          </div>
          <div className={styles.nav}>
            <ul>
              <li>
                <Button text="About Us" onClick={() => router.push("/")} />
              </li>
              <li>
                <Button text="Services" onClick={() => router.push("/gg")} />
              </li>
              <li>
                <Button text="Properties" onClick={() => router.push("/")} />
              </li>
              <li>
                <Button text="Blogs" onClick={() => router.push("/")} />
              </li>
              <li>
                <Button text="Agents" onClick={() => router.push("/")} />
              </li>
            </ul>
          </div>
          <div className="contact">
            <Button
              text="Contact Us"
              variant="secondary"
              onClick={() => router.push("/")}
              icon={<MoveUpRight size={18} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
