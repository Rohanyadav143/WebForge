import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  // Calculate height for smooth animation
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [menuRef, isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-purple-300 transition">
          WebForge
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`transition font-medium ${
                  location.pathname === link.path
                    ? "text-yellow-400 underline"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none transition-transform transform hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links with smooth transition */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out`}
        style={{ maxHeight: isOpen ? `${menuHeight}px` : "0px" }}
      >
        <ul className="bg-gray-800 px-4 pb-4 space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block transition font-medium ${
                  location.pathname === link.path
                    ? "text-yellow-400 underline"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
