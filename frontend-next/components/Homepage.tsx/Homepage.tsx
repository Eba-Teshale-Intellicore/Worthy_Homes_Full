import React from "react";

import Hero from "./Hero";
import HeroAbout from "./HeroAbout";
import HeroAdvantage from "./HeroAdvantage";
import HeroServices from "./HeroServices";
import HeroProperities from "./HeroProperities";
import HeroPartners from "./HeroPartners";
import HeroClient from "./HeroClient"

export default function Homepage() {
  return (
    <>
      <Hero />
      <HeroAbout />
      <HeroAdvantage />
      <HeroServices />
      <HeroProperities />
      <HeroPartners />
      <HeroClient />
    </>
  );
}
