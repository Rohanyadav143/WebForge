import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_ydjm1ps",
        "template_hxl5eli",
        formRef.current,
        "a8Q8lWhEbciUqpPvW"
      )
      .then(() => {
        showToast("Message sent successfully ✅", "success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showToast("Failed to send message ❌", "error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="bg-gray-50 text-gray-800 relative">
      {/* TOAST */}
      {toast.show && (
        <div
          className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg text-white
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </div>
      )}

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-200 to-indigo-300 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Talk About Your Project
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Whether you are a startup, business, or individual — WebForge is
            here to help you build fast, modern, and scalable websites.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose WebForge?</h2>
            <p className="text-gray-600 mb-4">
              We specialize in designing and developing websites that are not
              only visually appealing but also optimized for performance and
              scalability.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Modern UI/UX design</li>
              <li>✅ Fully responsive websites</li>
              <li>✅ SEO-friendly structure</li>
              <li>✅ Affordable pricing</li>
              <li>✅ Long-term support</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Our Contact Details</h3>
            <p className="mb-2">📍 Lucknow, Uttar Pradesh, India</p>
            <p className="mb-2">📞 +91 98765 43210</p>
            <p className="mb-2">✉️ hello@webforge.com</p>
            <p className="text-sm text-gray-500 mt-4">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES HELP SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">How Can We Help You?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Business Websites",
              "Portfolio Websites",
              "Landing Pages",
              "E-commerce Solutions",
              "Web Applications",
              "Website Redesign",
            ].map((service) => (
              <div
                key={service}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{service}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  High-quality, scalable solutions tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Send Us a Message
            </h2>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Describe your project or requirements..."
                required
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-4 rounded-lg font-semibold transition
                ${
                  isSending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold">How long does a project take?</h4>
              <p className="text-gray-600 mt-2">
                Usually 1–3 weeks depending on complexity and requirements.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Do you provide support?</h4>
              <p className="text-gray-600 mt-2">
                Yes, we provide post-launch support and maintenance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">What technologies do you use?</h4>
              <p className="text-gray-600 mt-2">
                React, Tailwind CSS, Node.js, and modern frameworks.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Is pricing flexible?</h4>
              <p className="text-gray-600 mt-2">
                Absolutely. We offer affordable and flexible pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-indigo-300 to-purple-200 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6">
          Contact WebForge today and turn your idea into reality.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
