import IndividualTailoredSolution from "./assets/Tailored Lending Options.avif";
import FastLoan from "./assets/Fast Loan Application.avif";
import CompetitiveInterest from "./assets/Low Interest.avif";

export function FeatureIconsSection() {
  return (
    <>
      <div className="w-full bg-black py-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col items-center border-r border-violet-200 px-8 text-center">
            <div className="mb-1 flex h-30 w-30 items-center justify-center">
              <img src={FastLoan} alt="Fast Loan" />
            </div>
            <h3 className="mb-1 text-xl font-bold text-white">
              Fast Loan
              <br />
              Applications
            </h3>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center border-r border-violet-200 px-8 text-center">
            <div className="mb-1 flex h-30 w-30 items-center justify-center">
              <img src={IndividualTailoredSolution} alt="Fast Loan" />
            </div>
            <h3 className="mb-1 text-xl font-bold text-white">Individually <br /> Tailored Solutions</h3>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center px-8 text-center">
            <div className="mb-1 flex h-30 w-30 items-center justify-center">
              <img src={CompetitiveInterest} alt="Fast Loan" />
            </div>
            <h3 className="mb-1 text-xl font-bold text-white">Competitive <br /> Interest Rates</h3>
          </div>
        </div>
      </div>
    </>
  );
}
