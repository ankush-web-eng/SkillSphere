"use client";

import Animation from "@/components/center/animation";
import Bottom from "@/components/center/bottom";
import Floats from "@/components/center/floats";
import Primary from "@/components/center/primary";
import Footer from "@/components/layouts/footer";
import Hero from "@/components/layouts/hero";
import Navbar from "@/components/layouts/navbar";
import Secondary from "@/components/layouts/secondary";
import Tertiary from "@/components/layouts/tertiary";
import { Button } from "@/components/ui/button";

import PageWrapper from "./page-wrapper";

import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <PageWrapper>
      <div className="flex flex-col min-w-screen">
        <Navbar />
        <Hero />

        <div className="md:py-6 py-3 text-2xl md:text-4xl flex justify-center max-md:px-2 text-gray-600 flex-col items-center">
          <h1>Unlock The Power Of</h1>
          <h1>Collaboration: Skill Sphere</h1>
          <p className="md:text-lg text-sm text-center text-gray-400 pt-2">
          Join our network to be a part of exceptional services
          </p>
        </div>

        <motion.div 
          // style={{ scaleX: scrollYProgress }}
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.3, duration: 0.6, ease: 'easeInOut'}}
          >
          <Secondary />
        </motion.div>
        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.3, duration: 0.6, ease: 'easeInOut'}}
          className="max-md:hidden"
          >
          <Tertiary />
        </motion.div>
        

        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.3, duration: 0.6, ease: 'easeInOut'}} 
          className="py-8 flex justify-center">
          <div className="w-1/2 flex justify-end">
            <Button variant={"default"} className="px-10 text-xl rounded-full">
              Get In Touch
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.3, duration: 0.6, ease: 'easeInOut'}}
          >
          <Primary />
        </motion.div>

        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.3, duration: 0.6, ease: 'easeInOut'}}
          >
          <Floats />
        </motion.div>

        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.3, duration: 0.6, ease: 'easeInOut'}}
          >
          <Animation />
        </motion.div>

        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.3, duration: 0.6, ease: 'easeInOut'}}
          >
          <Bottom />
        </motion.div>
        

        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.3, duration: 0.6, ease: 'easeInOut'}}
          className="pt-3 pb-10"></motion.div>

        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay: 0.3, duration: 0.6, ease: 'easeInOut'}}
          >
          <Footer />
        </motion.div>
      </div>
    </PageWrapper>
  );
}
