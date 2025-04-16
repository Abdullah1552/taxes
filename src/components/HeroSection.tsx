import { useState } from "react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  head: string,
  titleShort: string;
  titleLong: string;
  image: string[];
  text: string;
  overlay: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ head, titleShort, titleLong, image, text, overlay }) => {
  const [loanAmount, setLoanAmount] = useState("");

  return (
    <>
      <div className="hero-section">
        <div className="sm-pb-0 container mx-auto grid grid-cols-1 gap-10 pb-20 pt-10 md:grid-cols-2 md:gap-20 md:pb-0">
          <div className="flex flex-col justify-center">
            <h3 className="mb-2 text-xl font-semibold text-black-600">{head}</h3>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-black md:text-6xl">
              {titleShort}
              <br />
              {titleLong}
              <br />
            </h1>
            <p className="text-gray-700">
              {text}
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative h-[50vh] w-[90vw] sm:h-[70vh] sm:w-[50vw] lg:h-[80vh] lg:w-[40vw]">
              {/* The hand image is used as the base */}
              <div
                className="hand-bg absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${image[0]})`
                }}
              ></div>

              {/* Phone content overlay */}
              {overlay &&
                <div className="absolute left-[32%] top-[-20%] flex h-[60%] w-[60%] flex-col items-center card-hero sm:left-[20%] sm:top-[-3%] sm:w-[60%] lg:left-[26%] lg:top-[-5%] lg:w-[50%]">
                  {/* Logo Section */}
                  <div className="mb-4 w-full pt-14 text-center">
                    <h2 className="hidden text-2xl font-bold tracking-wider">
                      Finance🔗Link
                    </h2>
                  </div>

                  {/* Card Section */}
                  <div className="sm-card-sec mb-10 w-[90%] m:w-[80%] rounded-xl bg-white p-5 shadow-2xl">
                    <h3 className="mb-3 text-lg font-bold">Let's get started</h3>
                    <div className="mb-3">
                      <p className="mb-1 text-xs">How much do you want to borrow?</p>
                      <div className="flex w-full items-center rounded-md border border-gray-300 bg-violet-50 px-3 py-2 text-sm">
                        <span className="mr-1 text-gray-500">$</span>
                        <input
                          type="text"
                          className="flex-1 bg-transparent outline-none"
                          placeholder="0"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    <Link to="/apply-now">
                      <button className="w-full rounded-full bg-black py-2 text-sm text-white">
                        See Your Options
                      </button>
                    </Link>
                  </div>

                  {/* Arrow - Updated to match reference */}
                  <div className="sm-d-none relative mb-2 hidden">
                    {/* The left-pointing arrow from first image */}
                    <svg
                      fill="currentColor"
                      className="svg-arrow absolute -left-24 -top-4 h-20 w-20 text-black"
                      preserveAspectRatio="none"
                      data-bbox="21.011 48.593 157.978 102.814"
                      viewBox="21.011 48.593 157.978 102.814"
                      height="200"
                      width="200"
                      xmlns="http://www.w3.org/2000/svg"
                      data-type="shape"
                      role="img"
                      aria-label="Arrow"
                    >
                      <g>
                        <path d="M23.455 118.529c1.544 7.121 9.351 10.638 15.871 9.094 7.035-1.63 9.694-9.265 9.008-16.043-.429-4.289-.772-6.863-1.63-11.582 14.327 18.702 40.064 34.487 57.393 41.265 26.252 10.295 61.511 12.354 69.06 7.978 5.576-3.26 10.209-15.871-1.201-15.614-16.729.257-38.691-3.861-54.133-9.608-12.868-4.804-39.291-21.705-50.101-38.348 1.201.601 11.753 7.121 14.927 8.751 4.204 2.145 12.868.172 16.214-5.576 3.689-6.348-.944-15.185-3.603-17.501-7.464-6.52-17.329-9.608-26.337-13.469-8.236-3.432-16.557-6.606-25.136-8.836-7.206-1.887-13.469 2.402-15.871 9.094-7.035 19.56-9.008 39.892-4.461 60.395z"></path>
                      </g>
                    </svg>
                  </div>

                  {/* Bottom Text - Updated to match reference */}
                  <div className="sm-d-none mt-20 text-center arrow-txt hidden">
                    <p className="text-lg font-bold tracking-tight text-black">
                      START YOUR NO
                      <br />
                      OBLIGATION QUOTE
                      <br />
                      HERE
                    </p>
                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection