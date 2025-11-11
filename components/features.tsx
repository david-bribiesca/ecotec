import { ChartBar, Database, Lock } from "lucide-react"

const features = [
  {
    icon: <ChartBar className="w-10 h-10 text-blue-600" />,
    title: "Powerful Analytics",
    description: "Visualize and explore your Supabase data with ease and clarity.",
  },
  {
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: "Supabase Integration",
    description: "Seamless connection to your database for real-time updates.",
  },
  {
    icon: <Lock className="w-10 h-10 text-blue-600" />,
    title: "Secure Authentication",
    description: "Built-in Supabase Auth ensures safe and easy user management.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose MyApp?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
