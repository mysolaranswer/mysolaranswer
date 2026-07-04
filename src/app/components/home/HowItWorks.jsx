export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Get the solar answers you need in three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center shadow-lg relative z-10 mb-6">
                <span className="text-3xl font-black text-[var(--color-navy)]">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose a Tool</h3>
              <p className="text-gray-500">
                Select the calculator that matches your needs—whether it's system sizing, battery backup, or ROI.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center shadow-lg relative z-10 mb-6">
                <span className="text-3xl font-black text-[var(--color-amber)]">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enter Details</h3>
              <p className="text-gray-500">
                Input your basic information like monthly electric bill, location, or appliance usage. No personal info required.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center shadow-lg relative z-10 mb-6">
                <span className="text-3xl font-black text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Instant Answers</h3>
              <p className="text-gray-500">
                Review your personalized results, complete with charts, cost breakdowns, and actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
