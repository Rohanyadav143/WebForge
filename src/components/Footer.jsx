import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-lg border-b-2 border-purple-500 inline-block mb-3">
            About WebForge
          </h3>
          <p className="text-gray-300 text-sm">
            WebForge builds modern, responsive websites for businesses and individuals. Quality, creativity, and reliability are our priorities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg border-b-2 border-purple-500 inline-block mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" onClick={scrollToTop} className="hover:text-purple-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop} className="hover:text-purple-400 transition">About</Link>
            </li>
            <li>
              <Link to="/services" onClick={scrollToTop} className="hover:text-purple-400 transition">Services</Link>
            </li>
            <li>
              <Link to="/projects" onClick={scrollToTop} className="hover:text-purple-400 transition">Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop} className="hover:text-purple-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg border-b-2 border-purple-500 inline-block mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">📍 Lucknow, Uttar Pradesh, India</p>
          <p className="text-gray-300 text-sm">📞 +91 98765 43210</p>
          <p className="text-gray-300 text-sm">✉️ hello@webforge.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 text-center py-4 text-gray-400 text-sm">
        © 2026 WebForge — Crafted with 💜 for better websites
      </div>
    </footer>
  );
}
