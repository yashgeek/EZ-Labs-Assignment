import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import bgPattern from "../assets/bg-pattern.png";
import camera from "../assets/camera-sketch.svg";
import mandala from "../assets/mandala-corner.png";
import filmFrame from "../assets/film-frame.png";


export default function Portfolio() {
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
        <div className="container mx-auto px-6 py-16 relative overflow-hidden" style={{ maxWidth: 1280 }}>

          {/* Left camera artwork */}
          <img
            src={camera}
            alt="camera"
            className="hidden md:block absolute left-6 top-36"
            style={{ width: 160, opacity: 0.95 }}
          />

          {/* Right mandala corner */}
          <img
            src={mandala}
            alt="mandala corner"
            className="hidden md:block absolute right-0 bottom-0"
            style={{ width: 320, opacity: 0.95 }}
          />

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif" style={{ color: "#243746", fontFamily: "Playfair Display, serif" }}>
              The Highlight Reel
            </h2>
            <p className="text-sm text-gray-700 mt-2">
              Watch the magic we’ve captured.
            </p>
          </div>

          {/* Filmstrip + player */}
          <div className="flex justify-center items-center relative">
            {/* film-frame background */}
            <div style={{ width: "820px", maxWidth: "90%", position: "relative" }}>
              <img src={filmFrame} alt="film frame" className="w-full block" />

              {/* optional small spacer below film-frame if needed */}
            </div>
          </div>

          {/* small decorative bottom marker (center) */}
          <div className="text-center mt-12">
            <span className="text-xs text-gray-400">—</span>
          </div>
        </div>
      </main>

    </div>
  );
}
