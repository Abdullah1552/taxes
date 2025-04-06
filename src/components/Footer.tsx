import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="footer-logo text-center mb-12">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold mr-1">FINANCE</span>
             🔗
              <span className="text-3xl font-bold ml-1">LINK</span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Float Me Column */}
          <div className="footer-column text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Float Me</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</Link></li>
              <li><Link to="/partners" className="text-gray-700 hover:text-purple-600 transition-colors">Partner With Us</Link></li>
              <li><Link to="/personal-loans" className="text-gray-700 hover:text-purple-600 transition-colors">Personal Loans</Link></li>
              <li><Link to="/business-loans" className="text-gray-700 hover:text-purple-600 transition-colors">Business Loans</Link></li>
              <li><Link to="/apply-now" className="text-gray-700 hover:text-purple-600 transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          {/* Personal Loans Column */}
          <div className="footer-column text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Personal Loans</h3>
            <ul className="space-y-2">
              <li><Link to="/personal-loans/car" className="text-gray-700 hover:text-purple-600 transition-colors">Car Loans</Link></li>
              <li><Link to="/personal-loans/bike" className="text-gray-700 hover:text-purple-600 transition-colors">Motorcycle Loans</Link></li>
              <li><Link to="/personal-loans/caravan" className="text-gray-700 hover:text-purple-600 transition-colors">Caravan Loans</Link></li>
              <li><Link to="/personal-loans/boat" className="text-gray-700 hover:text-purple-600 transition-colors">Boat Loans</Link></li>
              <li><Link to="/personal-loans/jetski" className="text-gray-700 hover:text-purple-600 transition-colors">Jet Ski Loans</Link></li>
            </ul>
          </div>

          {/* Business Loans Column */}
          <div className="footer-column text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Business Loans</h3>
            <ul className="space-y-2">
              <li><Link to="/business-loans/Truck-finance" className="text-gray-700 hover:text-purple-600 transition-colors">Truck Finance</Link></li>
              <li><Link to="/business-loans/Trailer-finance" className="text-gray-700 hover:text-purple-600 transition-colors">Trailer Finance</Link></li>
              <li><Link to="/business-loans/Equipment-finance" className="text-gray-700 hover:text-purple-600 transition-colors">Equipment Finance</Link></li>
              <li><Link to="/business-loans/Commercial-Fitout" className="text-gray-700 hover:text-purple-600 transition-colors">Commercial Fit Out Finance</Link></li>
              <li><Link to="/business-loans/Unsecured-loan" className="text-gray-700 hover:text-purple-600 transition-colors">Unsecured Finance</Link></li>
              <li><Link to="/business-loans/Business-Overdraft" className="text-gray-700 hover:text-purple-600 transition-colors">Business Overdraft</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact and Social */}
        <div className="footer-contact-social flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Contact Info */}
          <div className="contact-info text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            {/* <p className="mb-1">Phone: <a href="tel:0455914144" className="text-gray-700 hover:text-purple-600 transition-colors">0455914144</a></p> */}
            <p>Email: <a href="mailto:info@floatme.com.au" className="text-gray-700 hover:text-purple-600 transition-colors">Enquiries@finacelinkaustralia.com.au</a></p>
          </div>

          {/* Social Icons */}
          <div className="social-icons flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon bg-black text-white rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon bg-black text-white rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon bg-black text-white rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Legal Information */}
        <div className="legal-info text-xs text-gray-500 mb-8 text-center">
          <p className="mb-4">
            Finance🔗Link Pty Ltd ATF The Trustee for Float Investment Trust (Brisbane, Queensland, 4000, Australia) trading as Float Me is an 
            authorised credit representative (ACR # 542402) of Fintegration Pty Ltd (Australian Credit Licence #511803).
          </p>
        </div>

        {/* Bottom Links and Logos */}
        <div className="footer-bottom">
          <div className="footer-links flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <span className="text-gray-700">2025 Finance🔗Link. All Rights Reserved</span>
            <span className="hidden md:inline text-gray-400">|</span>
            <Link to="/privacy" className="text-gray-700 hover:text-purple-600 transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline text-gray-400">|</span>
            <Link to="/complaints" className="text-gray-700 hover:text-purple-600 transition-colors">Compliments & Concerns</Link>
            <span className="hidden md:inline text-gray-400">|</span>
            <Link to="/hardship" className="text-gray-700 hover:text-purple-600 transition-colors">Hardship</Link>
            <span className="hidden md:inline text-gray-400">|</span>
            <Link to="/credit-guide" className="text-gray-700 hover:text-purple-600 transition-colors">Credit Guide</Link>
            <span className="hidden md:inline text-gray-400">|</span>
            <Link to="/complaints-policy" className="text-gray-700 hover:text-purple-600 transition-colors">Complaints Policy</Link>
          </div>

          <div className="footer-certification flex flex-col items-center">
            <p className="text-center text-xs text-gray-500 mb-4">Brisbane, Queensland, 4000, Australia</p>
            <div className="certification-logos flex flex-wrap justify-center gap-6 mb-6">
              <img src="/certification-logos/fbaa.png" alt="FBAA Logo" className="h-10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3e%3crect width='120' height='40' fill='%23f3f4f6'/%3e%3ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12px' fill='%23666'%3eFBAA Logo%3c/text%3e%3c/svg%3e";
                }}
              />
              <img src="/certification-logos/afca.png" alt="AFCA Logo" className="h-10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3e%3crect width='120' height='40' fill='%23f3f4f6'/%3e%3ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12px' fill='%23666'%3eAFCA Logo%3c/text%3e%3c/svg%3e";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 