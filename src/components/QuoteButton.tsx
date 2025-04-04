export function QuoteButton() {
  return (
    <div className="fixed right-0 top-1/2 z-10 -translate-y-1/2 transform">
      <button className="flex h-48 w-12 flex-col items-center justify-center rounded-l-lg bg-black text-white shadow-lg transition-all hover:bg-violet-600">
        <span className="vertical-text font-medium uppercase tracking-wider">Request Quote</span>
      </button>
    </div>
  );
}

// Add this CSS to your index.css or a custom stylesheet
// .vertical-text {
//   writing-mode: vertical-rl;
//   transform: rotate(180deg);
// }
