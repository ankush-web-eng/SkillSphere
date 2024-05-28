"use client"

import Hero from "@/components/layouts/hero";
import Navbar from "@/components/layouts/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-w-screen">
      <Navbar />
      <Hero />
    </div>
  )
}
