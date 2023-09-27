"use client";

import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function LandingPage() {
  const { isSignedIn } = useAuth();

  if(isSignedIn) {
    redirect("/dashboard");
  }

  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      {/* <LandingContent /> */}
    </div>
  )
}
