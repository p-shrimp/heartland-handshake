import { useState, useEffect } from 'react';
import { HeroRotator } from "@/components/HeroRotator";  // lowercase c
import PricingCards from "@/components/PricingCards";  // lowercase c

export default function Home() {
  return (
    <div>
      <HeroRotator />
      <PricingCards />
    </div>
  );
}
