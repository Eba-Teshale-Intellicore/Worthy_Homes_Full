import React from "react";
import AboutHero from "@/components/Aboutpage/AboutHero";
import AboutLegacy from "@/components/Aboutpage/AboutLegacy";
import AboutService from "@/components/Aboutpage/AboutService";
import AboutImpact from "@/components/Aboutpage/AboutImpact";
import AboutAgent from "@/components/Aboutpage/AboutAgent";
import AboutAsk from "@/components/Aboutpage/AboutAsk";
import AboutContact from "@/components/Aboutpage/AboutContact";
import AboutArticle from "@/components/Aboutpage/AboutArticle";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutLegacy />
      <AboutService />
      <AboutImpact />
      <AboutAgent />
      <AboutAsk />
      <AboutContact />
      <AboutArticle />
    </>
  );
}
