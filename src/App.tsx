import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeatureIconsSection } from "./components/FeatureIconsSection";
import { QuoteButton } from "./components/QuoteButton";
import { FloatMeWay } from "./components/FloatMeWay";
import { SimplePhilosophy } from "./components/SimplePhilosophy";
import { WhyLoveFloatMe } from "./components/WhyLoveFloatMe";
import { LoanDivisions } from "./components/LoanDivisions";
import { Testimonials } from "./components/Testimonials";
import { RepaymentCalculator } from "./components/RepaymentCalculator";
import { LenderPartners } from "./components/LenderPartners";
import { ApplyForm } from "./components/ApplyForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <FeatureIconsSection />
                  <FloatMeWay />
                  <SimplePhilosophy />
                  <WhyLoveFloatMe />
                  <LoanDivisions />
                  <Testimonials />
                  <RepaymentCalculator />
                  <LenderPartners />
                  <ApplyForm />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Our Products</h1>
                </div>
              }
            />
            <Route
              path="/personal-loans"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Personal Loans</h1>
                  <p className="mt-4">
                    Get the financial support you need with our range of personal loan options.
                  </p>
                </div>
              }
            />
            <Route
              path="/business-loans"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Business Loans</h1>
                  <p className="mt-4">
                    Grow your business with our flexible business financing solutions.
                  </p>
                </div>
              }
            />

            {/* Personal Loan Type Routes */}
            <Route
              path="/personal-loans/car"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Car Finance</h1>
                  <p className="mt-4">
                    Finance your dream car with our competitive car loan options.
                  </p>
                </div>
              }
            />
            <Route
              path="/personal-loans/bike"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Bike Finance</h1>
                  <p className="mt-4">Get on the road with our motorcycle financing solutions.</p>
                </div>
              }
            />
            <Route
              path="/personal-loans/caravan"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Caravan Finance</h1>
                  <p className="mt-4">
                    Finance your perfect holiday vehicle with our caravan loans.
                  </p>
                </div>
              }
            />
            <Route
              path="/personal-loans/boat"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Boat Finance</h1>
                  <p className="mt-4">
                    Finance your dream boat with our flexible boat loan options.
                  </p>
                </div>
              }
            />
            <Route
              path="/personal-loans/jetski"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Jet Ski Finance</h1>
                  <p className="mt-4">Hit the water with our jet ski financing solutions.</p>
                </div>
              }
            />
            <Route
              path="/personal-loans/personal"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Personal Loans</h1>
                  <p className="mt-4">
                    Get the funds you need for anything with our personal loans.
                  </p>
                </div>
              }
            />

            {/* Business Loan Type Routes */}
            <Route
              path="/business-loans/business-equipment"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Equipment Finance</h1>
                  <p className="mt-4">
                    Get the equipment your business needs with our financing options.
                  </p>
                </div>
              }
            />
            <Route
              path="/business-loans/commercial"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Commercial Property</h1>
                  <p className="mt-4">
                    Invest in commercial property with our tailored financing solutions.
                  </p>
                </div>
              }
            />
            <Route
              path="/business-loans/working-capital"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Working Capital</h1>
                  <p className="mt-4">
                    Keep your business running smoothly with our working capital options.
                  </p>
                </div>
              }
            />
            <Route
              path="/business-loans/business-vehicle"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Business Vehicle Finance</h1>
                  <p className="mt-4">Finance your business vehicles with our competitive rates.</p>
                </div>
              }
            />

            <Route
              path="/about"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Who We Are</h1>
                </div>
              }
            />
            <Route
              path="/partners"
              element={
                <div className="container mx-auto py-12">
                  <h1 className="text-3xl font-bold">Partner With Us</h1>
                </div>
              }
            />
          </Routes>
        </main>
        <QuoteButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
