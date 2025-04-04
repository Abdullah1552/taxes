import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
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
import Hero from "./Pages/Hero";
import { Stepper } from "./components/Stepper";
import { WhoAreWe } from "./components/WhoAreWe";
import LoanDetail from "./components/LoanDetail";

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
                  <Hero />
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
                <>
                  <Hero />
                  <FeatureIconsSection />
                  <WhyLoveFloatMe />
                  <LoanDivisions />
                  <SimplePhilosophy />
                  <Stepper />
                  <RepaymentCalculator />
                  <LenderPartners />
                  <ApplyForm />
                </>
              }
            />
            <Route
              path="/personal-loans"
              element={
                <>
                  <Hero />
                  <FeatureIconsSection />
                  <WhyLoveFloatMe />
                  <LoanDivisions />
                  <SimplePhilosophy />
                  <Stepper />
                  <Testimonials />
                  <RepaymentCalculator />
                  <LenderPartners />
                  <ApplyForm />
                </>
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
              path="/personal-loans/:loanId"
              element={<LoanDetail loanType="personal" />}
            />

            {/* Business Loan Type Routes */}
            <Route
              path="/business-loans/:loanId"
              element={<LoanDetail loanType="business" />}
            />

            <Route
              path="/about"
              element={
                <>
                  <Hero />
                  <FeatureIconsSection />
                  <WhoAreWe />
                  <WhyLoveFloatMe />
                  <LoanDivisions />
                  <FloatMeWay />
                  <Stepper />
                  <RepaymentCalculator />
                  <LenderPartners />
                  <ApplyForm />
                </>
              }
            />
            <Route
              path="/partners"
              element={
                <>
                  <Hero />
                  <WhoAreWe />
                  <FloatMeWay />
                  <Stepper />
                  <LenderPartners />
                </>
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
