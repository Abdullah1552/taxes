import React, { useState } from "react";
import "./Testimonials.css";

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Eren Dalkılıç",
      handle: "@eren.dalkiliç",
      time: "2 years ago",
      avatar: "E",
      avatarColor: "#f06292",
      text: "I was looking at these cars on the road thinking I really would like to be driving one of them, just one week later I'm driving in one. All ...",
      rating: 5,
    },
    {
      id: 2,
      name: "Deon Deeral",
      handle: "@deon.deeral",
      time: "2 years ago",
      avatar: "D",
      avatarColor: "#1976d2",
      text: "The service was exceptional from start to finish. The application process was straightforward and the approval came through quickly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Tom Hissey",
      handle: "@tom.hissey",
      time: "2 years ago",
      avatar: "T",
      avatarColor: "#9c27b0",
      text: "Rob was very professional and knowledgeable, he helped me to finance my new car and went above and beyond what was required.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sarah Chen",
      handle: "@sarah.chen",
      time: "1 year ago",
      avatar: "S",
      avatarColor: "#43a047",
      text: "Float Me made the whole financing process incredibly simple. I was approved within hours and their customer service is outstanding!",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-2xl text-yellow-400">
          ★
        </span>
      ));
  };

  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    const index = (activeSlide + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section className="testimonials-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">What our awesome clients say</h2>
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-bold md:text-4xl">about Finance🔗Link</h2>
          </div>
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-lg">
            Intrigued? You should be. It's time to fast forward your finances with Float Me, a local
            Australian-based company that helps people just like you take control of their money.
            See how we've helped our clients live happier lives by providing easy access, flexible,
            fair, and transparent financing options!
          </p>
        </div>

        <div className="relative">
          <div className="testimonials-container grid grid-cols-1 gap-4 md:grid-cols-3">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card rounded-lg border border-gray-100 bg-white p-6 shadow-lg"
              >
                <div className="mb-4 flex items-center">
                  <div
                    className="avatar flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl font-bold text-white"
                    style={{ backgroundColor: testimonial.avatarColor }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.handle} • {testimonial.time}
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex items-center">
                  <div className="google-icon mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="24px"
                      height="24px"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                  </div>
                  <div className="stars flex">{renderStars(testimonial.rating)}</div>
                </div>

                <p className="text-gray-800">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="nav-button absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md focus:outline-none md:-left-12"
            aria-label="Previous testimonial"
            title="Previous testimonial"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="nav-button absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md focus:outline-none md:-right-12"
            aria-label="Next testimonial"
            title="Next testimonial"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
