import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import heroImg1 from "../assets/hero-img1.jpg";
import heroImg2 from "../assets/hero-img2.jpg";
import heroImg3 from "../assets/hero-img3.jpg";
import heroImg4 from "../assets/hero-img4.jpg";
import heroImg5 from "../assets/hero-img5.jpg";

import service1 from "../assets/web.jpg";
import service2 from "../assets/app.jpg";
import service3 from "../assets/maintenance.jpg";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project2.png";

import aboutImg from "../assets/about.png";

export default function Home() {
  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];
  const services = [service1, service2, service3];
  const projects = [project1, project2, project3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const projectRef = useRef(null);
  const clientRef = useRef(null);

  const testimonials = [
    "WebForge delivered an amazing website for our school.",
    "Sales increased after WebForge redesigned our store.",
    "Professional team and great support!",
    "Creative design and fast delivery.",
    "Highly recommended for startups."
  ];

  /* Hero auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] md:h-[90vh]">
        <img
          src={heroImages[currentIndex]}
          alt="Hero"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-5">
              We Build Powerful Websites
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8">
              Modern, responsive websites for schools, colleges, shops & startups.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((img, i) => (
            <div key={i} className="bg-white rounded-xl shadow-xl overflow-hidden">
              <img src={img} alt="Service" className="h-56 w-full object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {["Website Development", "App Development", "Maintenance"][i]}
                </h3>
                <p className="text-gray-600">
                  Professional and scalable solutions tailored to your needs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-20 bg-gray-100 overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Projects Completed
        </h2>

        <div
          ref={projectRef}
          className="flex gap-6 animate-scroll"
          onMouseEnter={() => (projectRef.current.style.animationPlayState = "paused")}
          onMouseLeave={() => (projectRef.current.style.animationPlayState = "running")}
        >
          {[...projects, ...projects].map((img, i) => (
            <div
              key={i}
              className="bg-white w-[260px] rounded-xl shadow-lg flex-shrink-0"
            >
              <img src={img} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Project {i + 1}</h4>
                <p className="text-sm text-gray-600">
                  Modern responsive website solution.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <img
          src={aboutImg}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative max-w-2xl px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About WebForge
          </h2>
          <p className="text-base md:text-xl mb-8">
            We craft high-quality digital experiences that help businesses grow.
          </p>
          <Link
            to="/about"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          What Clients Say
        </h2>

        <div
          ref={clientRef}
          className="flex gap-6 animate-scroll-slow px-6"
          onMouseEnter={() => (clientRef.current.style.animationPlayState = "paused")}
          onMouseLeave={() => (clientRef.current.style.animationPlayState = "running")}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-indigo-50 p-6 rounded-lg w-[240px] shadow-md"
            >
              <p className="text-gray-700 text-sm">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-indigo-300 to-purple-200 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Start Your Project Today
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Let’s build something amazing together.
        </p>
        <Link
          to="/contact"
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300"
        >
          Get Started
        </Link>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
        .animate-scroll-slow {
          animation: scroll 55s linear infinite;
          width: max-content;
        }
      `}</style>

    </div>
  );
}
