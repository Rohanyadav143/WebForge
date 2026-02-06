import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroImg1 from "../assets/hero-img.png";
import heroImg2 from "../assets/project1.png";
import heroImg3 from "../assets/project2.png";
import heroImg4 from "../assets/project3.png";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project2.png";
import project4 from "../assets/hero-img.png";
import project5 from "../assets/service1.png";

export default function Home() {
  const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];
  const projects = [project1, project2, project3, project4, project5];
  const services = [service1, service2, service3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const projectRef = useRef(null);
  const clientRef = useRef(null);

  const clientTestimonials = [
    `"WebForge built a beautiful website for our school. The process was smooth, and the result exceeded expectations!" — Principal, Sunrise School`,
    `"Thanks to WebForge, our online store is now live and getting more sales than ever. Highly recommended!" — Shop Owner, Trendy Fashion`,
    `"Professional team, creative designs, and excellent support. WebForge is the go-to for website development." — College Admin, Lotus College`,
    `"Amazing service and great support. Highly recommended!" — Startup Founder, TechNova`,
    `"Creative team, fast delivery, and excellent communication." — E-Commerce Owner, ShopEase`
  ];

  // Hero image auto-switch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        let next = prev + direction;
        if (next >= heroImages.length) {
          setDirection(-1);
          next = prev - 1;
        } else if (next < 0) {
          setDirection(1);
          next = prev + 1;
        }
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative">

      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[700px] overflow-hidden">
        <img
          src={heroImages[currentIndex]}
          alt={`Hero ${currentIndex}`}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We Build Amazing Websites
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            WebForge creates modern, responsive websites for schools, shops, colleges, and startups.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition transform"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {services.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-2xl w-full sm:w-[300px] md:w-[350px] flex-shrink-0 overflow-hidden"
            >
              <img src={img} alt={`Service ${idx}`} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">{["Website Development", "E-Commerce Solutions", "Website Maintenance"][idx]}</h3>
                <p className="text-gray-600 text-lg">
                  {["Custom, responsive websites", "Full online store setup", "Keep your website updated and secure"][idx]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/services"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg shadow-lg transition transform"
          >
            Know More
          </Link>
        </div>
      </section>

      {/* Projects Completed Section */}
      <section className="py-20 bg-gray-100 overflow-hidden relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects Completed</h2>
        <div
          ref={projectRef}
          className="flex gap-6 animate-scroll-projects cursor-pointer"
          onMouseEnter={() => projectRef.current.style.animationPlayState = "paused"}
          onMouseLeave={() => projectRef.current.style.animationPlayState = "running"}
        >
          {[...projects, ...projects].map((img, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg w-[250px] md:w-[300px] flex-shrink-0 overflow-hidden">
              <img src={img} alt={`Project ${idx}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{`Project ${idx + 1}`}</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Modern, responsive, and well-optimized website for client needs.
                </p>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes scrollProjects {
            0% { transform: translateX(0); }
            50% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-projects {
            display: flex;
            animation: scrollProjects 45s linear infinite alternate;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center text-white">
        <img src={heroImg1} alt="About Us" className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="relative px-6 max-w-2xl flex flex-col items-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">About WebForge</h2>
          <p className="text-lg md:text-2xl">
            We build modern, responsive websites for schools, shops, colleges, and startups. Creativity, reliability, and quality are our core values.
          </p>
          <Link
            to="/about"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div
          ref={clientRef}
          className="flex gap-6 animate-scroll-clients cursor-pointer px-6"
          onMouseEnter={() => clientRef.current.style.animationPlayState = "paused"}
          onMouseLeave={() => clientRef.current.style.animationPlayState = "running"}
        >
          {[...clientTestimonials, ...clientTestimonials].map((text, idx) => (
            <div key={idx} className="bg-indigo-50 p-6 rounded-lg shadow-md w-[220px] md:w-[250px] h-48 flex items-center">
              <p className="text-gray-700 text-sm md:text-base">{text}</p>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes scrollClients {
            0% { transform: translateX(0); }
            50% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-clients {
            display: flex;
            width: max-content; /* ensures full double width */
            animation: scrollClients 55s linear infinite alternate;
          }
        `}</style>
      </section>

      {/* Contact Teaser */}
      <section className="py-20 bg-gray-200 text-gray-900 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your Web Project Today</h2>
        <p className="mb-6 text-lg md:text-xl max-w-2xl mx-auto">
          Let’s bring your vision to life. Modern, responsive, and high-quality websites that grow your business.
        </p>
        <Link
          to="/contact"
          className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition transform"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}
