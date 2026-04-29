import Image from "next/image";
import profileImage from "@/assets/images/profile3.png";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  const words = [
    "Mechanical Engineer",
    "Frontend Developer",
    "Problem solver",
    "Tech Enthusiast",
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-black mx-auto md:mx-0">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col justify-center gap-6 order-2 md:order-1 items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Subit
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            <Typewriter words={words} />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            Passionate about building beautiful, responsive, and user-friendly
            web applications with modern technologies.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 transition duration-300">
              View Projects
            </button>
            <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-white/20 transition duration-300">
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center order-1 md:order-2">
          <div className="w-64 h-64 backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 rounded-2xl shadow-xl flex items-center justify-center">
            <Image
              src={profileImage}
              alt="Hero"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
