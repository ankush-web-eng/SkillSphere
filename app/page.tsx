"use client"

import Primary from "@/components/center/primary";
import Hero from "@/components/layouts/hero";
import Navbar from "@/components/layouts/navbar";
import Secondary  from "@/components/layouts/secondary";
import Tertiary from "@/components/layouts/tertiary";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-w-screen">
      <Navbar />
      <Hero />

      <div className="py-6 text-4xl flex justify-center text-gray-600 flex-col items-center">
        <h1>Unlock The Power Of</h1>
        <h1>Collaboration: Skill Sphere</h1>
        <p className="text-sm text-gray-400 pt-4">Join our network of talented freelancers and unlock new opportunities</p>
      </div>

      <Secondary />
      <Tertiary />

      <div className="py-8 flex justify-center">
      <div className="w-1/2 flex justify-end">
        <Button variant={'default'} className="px-10 text-xl rounded-full">Get In Touch</Button>
      </div>
      </div>

      <Primary />
    </div>
  )
}
