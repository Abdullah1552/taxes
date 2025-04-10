import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { QuoteButton } from "./components/QuoteButton";
import { Footer } from "./components/Footer";
import LoanDetail from "./components/LoanDetail";
import Loan from "./Pages/Loan";
import ScrollToTop from "./Utility/ScrollToTop";
import { LegalButtons } from "./components/Legal";
import { PageLayout } from "./Pages/PageLayout";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<PageLayout showTestimonials />} />
            <Route path="/products" element={<PageLayout />} />
            <Route path="/personal-loans" element={<PageLayout showTestimonials />} />
            <Route path="/business-loans" element={<PageLayout showTestimonials />} />
            <Route path="/about" element={<PageLayout showWhoAreWe showFloatMeWay />} />
            <Route
              path="/partners"
              element={
                <PageLayout
                  showProcess={false}
                  showWhyLove={false}
                  showLoanDivisions={false}
                  showPhilosophy={false}
                  showApplyForm={false}
                  showCalculator={false}
                  showWhoAreWe
                  showFloatMeWay
                />
              }
            />
            <Route
              path="/apply-now"
              element={<PageLayout showHero={false} showProcess={false} showWhyLove={false} showLoanDivisions={false} showPhilosophy={false} showFAQ={false} showStepper={false} showTestimonials={false} showLenders={false} />}
            // only ApplyForm + Calculator
            />
            <Route path="/thanks" element={<Loan />} />
            <Route path="/legal" element={<><Loan /><LegalButtons /></>} />
            <Route path="/personal-loans/:loanId" element={<LoanDetail loanType="personal" />} />
            <Route path="/business-loans/:loanId" element={<LoanDetail loanType="business" />} />
          </Routes>
        </main>
        <QuoteButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
