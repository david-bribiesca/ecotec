import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white text-center py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Empower Your Business with{" "}
          <span className="text-blue-600">Real-Time Insights</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A modern dashboard that connects seamlessly with Supabase to visualize your data instantly.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="#features"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
