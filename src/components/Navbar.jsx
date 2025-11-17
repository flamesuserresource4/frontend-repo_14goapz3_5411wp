import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)]">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-[0_0_30px_rgba(217,70,239,0.5)]" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-fuchsia-400" />
                <span className="text-sm md:text-base tracking-widest uppercase font-medium text-fuchsia-200/90">Flare AI</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#work" className="text-sm text-zinc-300 hover:text-white transition">Work</a>
              <a href="#services" className="text-sm text-zinc-300 hover:text-white transition">Services</a>
              <a href="#about" className="text-sm text-zinc-300 hover:text-white transition">About</a>
              <a href="#contact" className="text-sm text-zinc-300 hover:text-white transition">Contact</a>
            </nav>
            <div className="hidden md:block">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.9)] transition">
                Book a Demo
              </a>
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10">
              {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {['Work','Services','About','Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block rounded-lg px-3 py-2 text-zinc-300 hover:text-white hover:bg-white/5 transition">
                    {item}
                  </a>
                ))}
                <a href="#contact" className="mt-2 block text-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                  Book a Demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
