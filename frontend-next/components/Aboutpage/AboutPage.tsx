import React from "react";
import AboutHero from "@/components/Aboutpage/AboutHero";
import AboutLegacy from "@/components/Aboutpage/AboutLegacy";
import AboutService from "@/components/Aboutpage/AboutService";
import AboutImpact from "@/components/Aboutpage/AboutImpact";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutLegacy />
      <AboutService />
      <AboutImpact />
    </>
  );
}
