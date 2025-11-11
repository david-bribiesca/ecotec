export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <p className="mt-2">
          Built with ❤️ using <span className="text-blue-600 font-semibold">Next.js & Supabase</span>.
        </p>
      </div>
    </footer>
  )
}
