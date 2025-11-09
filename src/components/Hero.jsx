import React from "react";
import mandala from "../assets/mandala.svg";
import logo from "../assets/logo.png"; // ✅ your logo image
import bgPattern from "../assets/bg-pattern.png";

export default function Hero() {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        minHeight: "calc(100vh - 96px)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 py-12 md:py-20">
          {/* LEFT: mandala + logo overlay */}
          <div className="w-full md:w-5/12 flex items-center justify-center md:justify-start relative">
            <div className="relative w-[460px] max-w-[48vw] min-w-[300px]">
              {/* Mandala + rotation + faded opacity */}
              <img
                src={mandala}
                alt="mandala"
                className="w-full h-auto object-contain block rotate-mandala mandala-faded"
                style={{ display: "block" }}
              />

              {/* Centered logo on top of mandala */}
              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none"
                aria-hidden
              >
                <img
                  src={logo}
                  alt="V Films Logo"
                  className="object-contain"
                  style={{
                    width: "150px", // ✅ adjust size as per your Figma/screenshot
                    height: "auto",
                    filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: text content */}
          <div className="w-full md:w-7/12 flex items-center">
            <div className="w-full">
              {/* Heading */}
              <h1
                className="mb-6 text-center"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: "#1E3A5F",
                  fontSize: "68px", // adjust if you need finer match
                  lineHeight: 1.02,
                  fontWeight: 400,
                  whiteSpace: "pre-line",
                }}
              >
                {"Varnan is where stories find\ntheir voice and form"}
              </h1>

              {/* Orange categories */}
              <div className="mb-6 text-center">
                <span style={{ color: "#E67248" }} className="mr-6 text-[18px]">
                  Films.
                </span>
                <span style={{ color: "#E67248" }} className="mr-6 text-[18px]">
                  Brands.
                </span>
                <span style={{ color: "#E67248" }} className="text-[18px]">
                  Art
                </span>
              </div>

              {/* Paragraph */}
              <p
                className="text-gray-700 text-center mx-auto"
                style={{
                  fontSize: "13px",
                  maxWidth: "560px",
                  lineHeight: 1.35,
                }}
              >
                Since 2009, I’ve been telling stories — stories of people, their
                journeys, and the places that shape them. Some begin in polished
                boardrooms, others in humble village squares. But every story
                starts the same way — by listening with intention. V believes it
                takes trust, patience, and an eye for the unseen to capture what
                truly matters. V doesn’t just tell stories — V honors them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
