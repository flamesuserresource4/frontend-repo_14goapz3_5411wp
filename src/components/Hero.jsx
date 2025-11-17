import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full bg-purple-700/25 blur-[120px]" />
      </div>

      {/* Spline 3D scene */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* Overlay copy */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white/95 drop-shadow-[0_8px_40px_rgba(168,85,247,0.35)]"
            >
              Next‑gen AI Influencer Agency
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
              className="mt-5 text-base md:text-lg text-zinc-300/90 max-w-xl"
            >
              We craft synthetic creators with cinematic presence, data‑driven storytelling, and brand‑safe performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#work" className="rounded-xl bg-white/10 backdrop-blur-xl px-5 py-3 text-white/90 hover:text-white border border-white/15 hover:border-white/25 transition shadow-[0_0_30px_rgba(168,85,247,0.25)]">
                Explore Work
              </a>
              <a href="#contact" className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-700 px-5 py-3 text-white font-semibold shadow-[0_0_40px_rgba(168,85,247,0.7)] hover:shadow-[0_0_60px_rgba(168,85,247,0.9)] transition">
                Book a Strategy Call
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
