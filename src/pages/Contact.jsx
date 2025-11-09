import React, { useState } from "react";
import Navbar from "../components/Navbar";

import bgPattern from "../assets/bg-pattern.png";
import mandala from "../assets/mandala-corner.png"; // right corner decoration (optional)

const API_ENDPOINT = "https://vernanbackend.ezlab.in/api/contact-us/";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(form.email.trim())) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    // phone optional — but if present, basic digits check
    if (form.phone && !/^[\d+\-\s()]{6,20}$/.test(form.phone.trim()))
      e.phone = "Enter a valid phone number";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setApiError("");
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      };

      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // try to parse error message
        let text = "";
        try {
          const data = await res.json();
          text = JSON.stringify(data);
        } catch {
          text = await res.text();
        }
        throw new Error(`Server returned ${res.status}: ${text || res.statusText}`);
      }

      const data = await res.json();

      // success case (expects 200 and created object)
      console.log("API response:", data);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("Contact API error:", err);
      setApiError("Failed to submit form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main
        className="flex-grow"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="container mx-auto px-6 py-20 relative" style={{ maxWidth: 1280 }}>
          {/* right mandala decoration */}
          {/* <img
            src={mandala}
            alt="mandala corner"
            className="hidden lg:block absolute right-0 top-0"
            style={{ width: 360, opacity: 0.95, pointerEvents: "none", zIndex:0}}
          /> */}

          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left column — copy text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Join the Story
              </h2>
              <p className="text-sm text-gray-700 mb-8">
                Ready to bring your vision to life? Let's talk.
              </p>

              <div className="text-base text-gray-800 leading-relaxed max-w-md">
                <p>Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.</p>
                <p className="mt-3">Let's catch up over coffee.</p>
                <p className="mt-2">Great stories always begin with a good conversation.</p>
              </div>

              <div className="mt-12">
                <a href="mailto:vernita@varnanfilms.co.in" className="text-sm text-[#F47A43] underline">vernita@varnanfilms.co.in</a>
                <span className="mx-3 text-sm text-gray-500">|</span>
                <a href="tel:+919873684567" className="text-sm text-[#F47A43]">+91 98736 84567</a>
              </div>
            </div>

            {/* Right column — form */}
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h3 className="text-xl font-serif mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                  Ready to bring your vision to life? Let's talk.
                </h3>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name*"
                      className={`w-full px-4 py-3 border bg-white rounded-sm focus:outline-none focus:ring ${
                        errors.name ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.name && <div className="text-xs text-red-500 mt-1">{errors.name}</div>}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email*"
                      className={`w-full px-4 py-3 border bg-white rounded-sm focus:outline-none focus:ring ${
                        errors.email ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.email && <div className="text-xs text-red-500 mt-1">{errors.email}</div>}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className={`w-full px-4 py-3 border bg-white rounded-sm focus:outline-none focus:ring ${
                        errors.phone ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.phone && <div className="text-xs text-red-500 mt-1">{errors.phone}</div>}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message*"
                      rows={6}
                      className={`w-full px-4 py-3 border bg-white rounded-sm focus:outline-none focus:ring ${
                        errors.message ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.message && <div className="text-xs text-red-500 mt-1">{errors.message}</div>}
                  </div>

                  {/* Submit */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`px-6 py-2 rounded-full text-white font-semibold ${submitting ? "opacity-60" : ""}`}
                      style={{ background: "#F47A43" }}
                    >
                      {submitting ? "Sending..." : "Submit"}
                    </button>
                  </div>

                  {/* API error / success message */}
                  {apiError && <div className="text-sm text-red-600 mt-2">{apiError}</div>}
                  {success && (
                    <div className="mt-3 p-3 bg-green-50 border border-green-200 text-green-800 rounded">
                      Form Submitted
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* small decorative bottom marker */}
          <div className="absolute left-0 right-0 bottom-2 text-center text-xs text-gray-400 z-10">
            <span className="opacity-60">—</span>
          </div>
        </div>
      </main>

    </div>
  );
}
