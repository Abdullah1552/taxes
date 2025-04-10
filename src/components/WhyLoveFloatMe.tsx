import React from "react";
import "./WhyLoveFloatMe.css";

export function WhyLoveFloatMe() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-200 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            A few reasons why you <br className="hidden sm:block" />
            will love Finance link Australia
          </h2>
        </div>

        {/* Grid of Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 max-w-6xl mx-auto">
          {/* Benefit 1 - Fast, Easy Applications */}
          <div className="benefit-item flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="benefit-icon-shadow"></div>
              <div className="benefit-icon-pink h-24 w-24 md:h-28 md:w-28 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill="#EC4899" />
                  <circle cx="50" cy="50" r="30" fill="white" stroke="#EC4899" strokeWidth="2" />
                  <path d="M50 30 L50 50 L65 58" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 20 L50 25" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
                  <path d="M50 75 L50 80" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
                  <path d="M20 50 L25 50" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
                  <path d="M75 50 L80 50" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">Fast, Easy Applications<br/>outcomes</h3>
          </div>

          {/* Benefit 2 - No hidden fees  */}
          <div className="benefit-item flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="benefit-icon-shadow"></div>
              <div className="benefit-icon-yellow h-24 w-24 md:h-28 md:w-28 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(15, 50, 50)">
                    <rect x="25" y="25" width="50" height="50" rx="5" fill="#EAB308" />
                    <circle cx="40" cy="40" r="6" fill="white" />
                    <circle cx="60" cy="40" r="6" fill="white" />
                    <circle cx="40" cy="60" r="6" fill="white" />
                    <circle cx="60" cy="60" r="6" fill="white" />
                    <text x="38" y="43" className="text-2xl font-bold" fill="black">?</text>
                    <text x="58" y="43" className="text-2xl font-bold" fill="black">?</text>
                    <text x="38" y="63" className="text-2xl font-bold" fill="black">?</text>
                    <text x="58" y="63" className="text-2xl font-bold" fill="black">?</text>
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">No hidden<br/>fees </h3>
          </div>

          {/* Benefit 3 - No Impact on Your Credit Score */}
          <div className="benefit-item flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="benefit-icon-shadow"></div>
              <div className="benefit-icon-red h-24 w-24 md:h-28 md:w-28 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(15, 50, 50)">
                    <path d="M30 70 L70 30" stroke="#FF5252" strokeWidth="10" strokeLinecap="round" />
                    <path d="M30 30 L70 70" stroke="#FF5252" strokeWidth="10" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">No Impact on Your <br/>Credit score</h3>
          </div>

          {/* Benefit 4 - Competitive interest rates */}
          <div className="benefit-item flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="benefit-icon-shadow"></div>
              <div className="benefit-icon-gradient h-24 w-24 md:h-28 md:w-28 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(-15, 50, 50)">
                    <rect x="25" y="25" width="50" height="50" rx="5" fill="url(#gradient)" />
                    <path d="M40 40 H60" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <path d="M35 50 H65" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <path d="M40 60 H60" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <text x="45" y="65" className="text-2xl font-bold" fill="white">%</text>
                  </g>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF5252" />
                      <stop offset="100%" stopColor="#FF9800" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">Competitive interest<br/>rates</h3>
          </div>

          {/* Benefit 5 -  Personalised Finance Solutions*/}
          <div className="benefit-item flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="benefit-icon-shadow"></div>
              <div className="benefit-icon-blue h-24 w-24 md:h-28 md:w-28 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="45" cy="45" r="20" fill="#38BDF8" />
                  <circle cx="65" cy="55" r="20" fill="#34D399" />
                  <circle cx="55" cy="50" r="15" fill="white" />
                  <path d="M50 45 L60 55" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                  <path d="M60 45 L50 55" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1"> Personalised Finance <br/>Solutions</h3>
          </div>

          {/* Benefit 6 - Backed by Trusted Partners */}
          <div className="benefit-item flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="benefit-icon-shadow"></div>
              <div className="benefit-icon-blue h-24 w-24 md:h-28 md:w-28 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="20" width="40" height="60" rx="5" fill="#4F46E5" />
                  <rect x="35" y="30" width="30" height="5" rx="2.5" fill="white" />
                  <rect x="35" y="40" width="20" height="5" rx="2.5" fill="white" />
                  <rect x="35" y="50" width="30" height="5" rx="2.5" fill="white" />
                  <rect x="35" y="60" width="25" height="5" rx="2.5" fill="white" />
                  <path d="M75 45 L80 50 L75 55" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M65 50 L80 50" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">Backed by Trusted <br/>Partners</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyLoveFloatMe; 