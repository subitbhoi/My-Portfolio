"use client";

import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import Background from "@/components/Background";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "Mechanical Engineer",
    "Frontend Developer",
    "Problem solver",
    "Tech Enthusiast",
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 p-8 md:p-12">
      <Background />
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 rounded-2xl p-8 shadow-xl">
        <motion.div
          className="flex flex-col justify-center gap-6 order-2 md:order-1 items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Subit
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            <Typewriter words={words} />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
            Passionate about building beautiful, responsive, and user-friendly
            web applications with modern technologies.
          </p>
          <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="flex gap-4">
            <div className="flex gap-4 mt-2">
              <a href="#projects">
                <button className="px-6 py-3 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-105 transition duration-300">
                  View Projects
                </button>
              </a>

              <a href="#contact">
                <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-white/20 hover:scale-105 transition duration-300">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center order-1 md:order-2 group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.99, scale: 0.99 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 flex items-center justify-center group">
            <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-3xl transition duration-300 group-hover:bg-blue-500/60"></div>
            <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-3xl transition duration-300 group-hover:bg-blue-500/60"></div>
            <div className="relative z-10 w-full h-full rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl overflow-hidden ransition duration-300 hover:scale-105">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
