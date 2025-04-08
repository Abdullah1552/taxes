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
import Loan from "./Pages/Loan";
import { Process } from "./components/Process";
import ScrollToTop from "./Utility/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Process/>
                  <FloatMeWay />
                  <SimplePhilosophy />
                  <WhyLoveFloatMe />
                  <LoanDivisions />
                  <Testimonials />
                  <Stepper/>
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
                  <Process/>
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
                  <Process/>
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
                <>
                  <Hero />
                  <Process/>
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
                  <Process/>
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
            <Route
              path="/apply-now"
              element={
                <>
                  <ApplyForm />
                  <RepaymentCalculator />
                </>
              }
            />
            <Route
              path="/thanks"
              element={
                <>
                  <Loan/>
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
