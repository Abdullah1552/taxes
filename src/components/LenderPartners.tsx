import React from 'react';
import './LenderPartners.css';

export function LenderPartners() {
  // Define our lending partners
  const lenders = [
    { name: "Suncorp", logo: "/lender-logos/suncorp.png" },
    { name: "Grow", logo: "/lender-logos/grow.png" },
    { name: "Flexi Commercial", logo: "/lender-logos/flexi-commercial.png" },
    { name: "Firstmac", logo: "/lender-logos/firstmac.png" },
    { name: "Finance One", logo: "/lender-logos/finance-one.png" },
    { name: "Early Pay", logo: "/lender-logos/earlypay.png" },
    { name: "Commonwealth Bank", logo: "/lender-logos/commonwealth.png" },
    { name: "Capital Finance", logo: "/lender-logos/capital-finance.png" },
    { name: "Branded Financial", logo: "/lender-logos/branded-financial.png" },
    { name: "BOQ", logo: "/lender-logos/boq.png" }
  ];

  // Handle image error by replacing with a placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // prevent infinite loop
    target.src = `https://placehold.co/200x80/e2d1ff/333333?text=${name}`;
  };

  return (
    <section className="lender-partners-section py-12 md:py-16">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Lenders we partner with fighting to give<br />
          you the best deal!
        </h2>
      </div>

      {/* Logo carousel for large screens */}
      <div className="partner-logos-container overflow-hidden">
        <div className="partner-logos-wrapper">
          <div className="partner-logos flex animate-scroll">
            {/* First set of logos */}
            {lenders.map((lender, index) => (
              <div 
                key={`lender-1-${index}`} 
                className="partner-logo-item flex items-center justify-center mx-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <img 
                  src={lender.logo} 
                  alt={`${lender.name} logo`} 
                  className="h-12 md:h-16 object-contain" 
                  onError={(e) => handleImageError(e, lender.name)}
                />
              </div>
            ))}
            
            {/* Duplicate for seamless loop */}
            {lenders.map((lender, index) => (
              <div 
                key={`lender-2-${index}`} 
                className="partner-logo-item flex items-center justify-center mx-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <img 
                  src={lender.logo} 
                  alt={`${lender.name} logo`} 
                  className="h-12 md:h-16 object-contain" 
                  onError={(e) => handleImageError(e, lender.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid layout for smaller screens */}
      <div className="md:hidden partner-logos-grid grid grid-cols-2 gap-4 px-4 py-6">
        {lenders.map((lender, index) => (
          <div 
            key={`lender-grid-${index}`} 
            className="partner-logo-grid-item flex items-center justify-center bg-white p-4 rounded-lg shadow-sm"
          >
            <img 
              src={lender.logo} 
              alt={`${lender.name} logo`} 
              className="h-10 object-contain" 
              onError={(e) => handleImageError(e, lender.name)}
            />
          </div>
        ))}
      </div>
    </section>
  );
} 