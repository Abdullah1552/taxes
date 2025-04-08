import IndividualTailoredSolution from "./assets/Tailored Lending Options.webp";
import FastLoan from "./assets/fastClock1.webp";
import CompetitiveInterest from "./assets/Low Interest1.webp";
import arrow from "./assets/arrow2.png"
export function Process() {
    return (
        <div className="w-full bg-black py-4">
            <div className="relative container mx-auto flex flex-col items-start md:items-center lg:items-center">
                {/* arrow 1 */}
                <div className="process-arrow absolute mb-1 flex   items-center justify-center md:h-60 md:w-60 lg:h-80 lg:w-80 md:top-[10%] md:right-[18%] lg:top-[5%] lg:right-[20%] invert">
                    <img src={arrow} alt="Fast Loan" className="max-h-full max-w-full object-contain" />
                </div>
                {/* arrow 2 */}
                <div className="process-arrow absolute mb-1 flex   items-center justify-center md:h-60 md:w-60 lg:h-80 lg:w-80 md:top-[40%] md:right-[55%] lg:top-[35%] lg:right-[60%] invert">
                    <img src={arrow} alt="Fast Loan" className="max-h-full max-w-full object-contain" />
                </div>
                {/* Feature 1 */}
                <div className="self-end flex w-full flex-col items-center px-8 py-6 text-center md:w-auto md:items-start lg:items-center">
                    <div className="mb-1 flex h-24 w-24 items-center justify-center">
                        <img src={FastLoan} alt="Fast Loan" className="max-h-full max-w-full object-contain" />
                    </div>

                    <h3 className="mb-1 text-xl font-bold text-white">
                        Fast Loan
                        <br />
                        Applications
                    </h3>
                </div>

                {/* Feature 2 */}
                <div className="flex w-full flex-col items-center px-8 py-6 text-center md:w-auto md:items-center lg:items-center">
                    <div className="mb-1 flex h-24 w-24 items-center justify-center">
                        <img src={IndividualTailoredSolution} alt="Tailored Solutions" className="max-h-full max-w-full object-contain" />
                    </div>
                    <h3 className="mb-1 text-xl font-bold text-white">Individually <br /> Tailored Solutions</h3>
                </div>

                {/* Feature 3 */}
                <div className="self-start flex w-full flex-col items-center px-8 py-6 text-center md:w-auto md:items-end lg:items-center">
                    <div className="mb-1 flex h-24 w-24 items-center justify-center">
                        <img src={CompetitiveInterest} alt="Competitive Interest" className="max-h-full max-w-full object-contain" />
                    </div>
                    <h3 className="mb-1 text-xl font-bold text-white">Competitive <br /> Interest Rates</h3>
                </div>
            </div>
        </div>
    );
}