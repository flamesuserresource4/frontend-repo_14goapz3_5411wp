export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">© 2025 Flare AI Agency. All rights reserved.</p>
          <div className="flex items-center gap-6 text-zinc-400 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
