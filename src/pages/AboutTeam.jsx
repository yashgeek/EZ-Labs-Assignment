import React from "react";
import Navbar from "../components/Navbar";
import bgPattern from "../assets/bg-pattern.png";
import stickyNote from "../assets/sticky-note.png";
import indiaGate from "../assets/india-gate.svg";
import silhouettes from "../assets/team-silhouettes.svg";
import curlyLeft from "../assets/curly-right.svg";
import curlyRight from "../assets/curly-left.svg";

export default function AboutTeam() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main
        className="grow relative"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div
          className="container mx-auto px-6 py-12 relative overflow-visible"
          style={{ maxWidth: 1280 }}
        >
          {/* STICKY NOTE (top-left) */}
          <div
            className="hidden sm:block absolute"
            style={{
              left: 36,
              top: 34,
              width: 320,
              transform: "rotate(-7deg)",
              zIndex: 30,
              filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.12))",
            }}
          >
            <img src={stickyNote} alt="sticky-note" className="w-full h-auto block" />
          </div>

          {/* INDIA GATE (bottom-left) */}
          <div
            className="hidden md:block absolute"
            style={{
              left: 28,
              bottom: 42,
              width: 220,
              zIndex: 18,
              transform: "translateZ(0)",
            }}
          >
            <img src={indiaGate} alt="india-gate" className="w-full h-auto block" />
          </div>

          {/* CENTER: silhouettes + arrows + labels */}
          <div className="w-full flex flex-col items-center justify-center">
            <div
              className="relative w-full mx-auto flex justify-center items-end"
              style={{ minHeight: 420, maxWidth: 920 }}
            >
              {/* silhouettes image - centered and slightly lifted */}
              <img
                src={silhouettes}
                alt="team silhouettes"
                className="block w-full max-w-[520px]"
                style={{
                  zIndex: 20,
                  transform: "translateY(-8px)",
                  filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.12))",
                }}
              />

              

              {/* ---------- Art Curators (right side, pointing inward) ---------- */}
              <div
                className="hidden sm:flex flex-col items-center absolute"
                style={{
                  top: "2%",         // pulled up a bit
                  right: "2%",       // moved inside so it points at right-most figure
                  zIndex: 28,
                  transform: "rotate(12deg)",
                }}
              >
                <img src={curlyRight} alt="arrow-right" style={{ width: 120 }} />
                <div
                  className="handwritten -mt-1.5"
                  style={{ fontSize: 16, color: "#1E3A5F" }}
                >
                  Art Curators
                </div>
              </div>

              {/* ---------- Branding Experts (left near monument) ---------- */}
              <div
                className="hidden md:flex flex-col items-center absolute"
                style={{
                  left: "5%",       
                  bottom: "18%",     
                  zIndex: 288,
                  transform: "rotate(-18deg)",
                }}
              >
                <img src={curlyLeft} alt="arrow-left" style={{ width: 140 }} />
                <div
                  className="handwritten -mt-1.5"
                  style={{ fontSize: 16, color: "#1E3A5F" }}
                >
                  Branding Experts
                </div>
              </div>
            </div>

            {/* Subtitle / CTA under silhouettes */}
            <div className="text-center mt-10">
              <p
                className="text-lg md:text-xl text-gray-800 mb-6"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", lineHeight: 1.45 }}
              >
                Take a closer look at the stories V bring to life.
              </p>

              <button
                className="inline-block px-6 py-2 rounded-full text-white"
                style={{ background: "#F47A43", fontWeight: 600 }}
                onClick={() => {
                  window.location.href = "/portfolio";
                }}
              >
                View Portfolio
              </button>
            </div>
          </div>

          {/* bottom small decorative line */}
          <div className="absolute left-0 right-0 bottom-2 text-center text-xs text-gray-400 z-10">
            <span className="opacity-60">—</span>
          </div>
        </div>
      </main>

    </div>
  );
}
