import React from "react";
import Navbar from "../components/Navbar";

import bgPattern from "../assets/bg-pattern.png";
import brush from "../assets/brush.svg";
import tape from "../assets/tape.png";
import pic1 from "../assets/polaroid-1.png";
import pic2 from "../assets/polaroid-2.png";
import pic3 from "../assets/polaroid-3.png";
import deco from "../assets/deco.svg";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main
        className="flex-grow relative"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        {/* Content */}
        <div
          className="container mx-auto px-6 py-16 md:py-20 relative overflow-hidden"
          style={{ maxWidth: 1280 }}
        >
          {/* Heading */}
          <div className="w-full text-center mb-10">
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: "#243746",
                fontSize: "28px",
                fontWeight: 400,
              }}
            >
              The storyboard reveals the breadth of our craft.
            </h2>

            <div className="mt-3 flex justify-center">
              <img
                src={brush}
                alt="brush underline"
                style={{ width: "330px", height: "auto" }}
              />
            </div>
          </div>

          {/* Polaroid Row */}
          <div className="flex justify-center items-start gap-6 md:gap-10 mt-8">
            {/* Card 1 */}
            <div className="relative transform -rotate-[6deg]" style={{ width: 260 }}>
              <img
                src={tape}
                alt="tape"
                className="absolute -top-6 left-6 w-16 rotate-[3deg]"
              />
              <div className="bg-white border border-gray-200 shadow-xl rounded-sm">
                <div className="w-full h-[260px] overflow-hidden">
                  <img
                    src={pic1}
                    alt="Film Production"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="py-3 text-center text-sm text-gray-900"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                  }}
                >
                  Film Production
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative transform rotate-0" style={{ width: 260 }}>
              <img
                src={tape}
                alt="tape"
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 rotate-[1deg]"
              />
              <div className="bg-white border border-gray-200 shadow-2xl rounded-sm">
                <div className="w-full h-[300px] overflow-hidden">
                  <img
                    src={pic2}
                    alt="Branding"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="py-3 text-center text-sm text-gray-900"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                  }}
                >
                  Branding
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative transform rotate-[6deg]" style={{ width: 260 }}>
              <img
                src={tape}
                alt="tape"
                className="absolute -top-6 right-6 w-16 -rotate-[3deg]"
              />
              <div className="bg-white border border-gray-200 shadow-xl rounded-sm">
                <div className="w-full h-[260px] overflow-hidden">
                  <img
                    src={pic3}
                    alt="Art Curation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="py-3 text-center text-sm text-gray-900"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                  }}
                >
                  Art Curation
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Bottom Border */}
          <div className="absolute strech left-0 right-0 
                 bottom-0 pointer-events-none">
            <img src={deco} alt="decorative border" className="w-full" />
          </div>
        </div>
      </main>


    </div>
  );
}
