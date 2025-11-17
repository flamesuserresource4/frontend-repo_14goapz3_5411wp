import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* subtle star field */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_40%)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Showcase placeholder section */}
        <section id="work" className="relative py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.2)]">
              <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
              <p className="mt-3 text-zinc-300/90 max-w-2xl">A curated portfolio of AI‑native campaigns and synthetic creators engineered for reach and retention.</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-4">
                    <div className="aspect-video rounded-xl bg-black/60 ring-1 ring-white/10 shadow-inner" />
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-zinc-400">Campaign</p>
                        <p className="font-medium">Neo Persona {i}</p>
                      </div>
                      <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs text-fuchsia-200">Case Study</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
