import { motion } from 'framer-motion'
import { Sparkles, Stars, Shield, Rocket, Cpu } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-fuchsia-400" />,
    title: 'AI Native Storytelling',
    desc: 'Cinematic narratives generated and refined with multi‑modal models for brand‑safe virality.'
  },
  {
    icon: <Stars className="h-6 w-6 text-fuchsia-400" />,
    title: 'Holographic Presence',
    desc: 'Hyper‑real avatars with expressive motion capture and real‑time voice synthesis.'
  },
  {
    icon: <Shield className="h-6 w-6 text-fuchsia-400" />,
    title: 'Safety by Design',
    desc: 'Guardrails, rights management, and compliance baked into every campaign.'
  },
  {
    icon: <Rocket className="h-6 w-6 text-fuchsia-400" />,
    title: 'Performance Engine',
    desc: 'Predictive optimization across channels with closed‑loop attribution.'
  },
  {
    icon: <Cpu className="h-6 w-6 text-fuchsia-400" />,
    title: 'Toolchain Integration',
    desc: 'Seamless pipeline from ideation to post with your existing stack.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative py-20">
      {/* glow accents */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-72 w-[80%] rounded-full bg-fuchsia-600/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.15)]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl transition group-hover:scale-125" />
              <div className="flex items-center gap-3">
                {f.icon}
                <h3 className="text-white font-semibold tracking-tight">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-300/90">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
