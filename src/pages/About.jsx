import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import TestimonialCard from '../components/TestimonialCard'
import StatsCard from '../components/StatsCard'
import Footer from '../components/Footer'

function AnimatedCounter({ to, label, duration = 1200 }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = null
    const from = 0
    function step(ts) {
      if (!start) start = ts
      const progress = Math.min(1, (ts - start) / duration)
      setValue(Math.floor(from + (to - from) * progress))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [to, duration])
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{value}{to>=1000?'+':''}</div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  )
}

const TIMELINE = [
  { year: '2019', title: 'Idea Started', desc: 'A small team obsessed with productivity sketches the first concepts.' },
  { year: '2020', title: 'MVP Launched', desc: 'Closed beta with early adopters and rapid feedback cycles.' },
  { year: '2021', title: 'First 100 Users', desc: 'Organic growth from product-led adoption and referrals.' },
  { year: '2022', title: 'AI Integration', desc: 'Built AI-driven workflows and suggestions into core experiences.' },
  { year: '2024', title: 'Global Expansion', desc: 'Offices and customers span multiple continents.' }
]

export default function About() {
  const testimonials = [
    { avatar: 'EM', name: 'Elliot Morales', role: 'Founder & CEO', quote: 'SmartDesk transformed how our teams work — faster decisions, less busywork.' },
    { avatar: 'LK', name: 'Lina Kim', role: 'Head of Product', quote: 'Our AI features help teams focus on outcomes, not processes.' },
    { avatar: 'AR', name: 'Asha Rai', role: 'Customer Success, NovaCorp', quote: 'Our customers love the clarity SmartDesk brings to their workflows.' }
  ]

  return (
    <div className="relative overflow-hidden pb-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#0b1020] to-[#050616]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-purple-700/30 to-blue-400/20 blur-3xl opacity-60 pointer-events-none" />

      {/* Hero */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-700/20 to-blue-400/10 text-xs font-semibold text-purple-300">About SmartDesk</div>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 leading-tight">Building the Future of Smart Workspaces</h1>
            <p className="mt-4 text-gray-300 max-w-xl">SmartDesk is an AI-powered productivity platform designed to remove friction from teamwork. We combine collaboration, automation, and intelligent suggestions so teams can focus on what matters.</p>

            <div className="mt-6 flex gap-4">
              <a href="#careers" className="btn-primary">Careers</a>
              <a href="#contact" className="btn-primary bg-transparent text-primary border border-white/10">Contact Us</a>
            </div>

            <div className="mt-8 flex gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-400/80 shadow-lg"/> Founded 2019</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400/80 shadow-lg"/> Remote-first</div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-white/4 to-white/2 p-6 backdrop-blur-lg border border-white/6 shadow-2xl">
              <div className="h-64 rounded-xl bg-gradient-to-br from-[#020617] to-[#071028] shadow-inner overflow-hidden relative">
                <div className="absolute -right-12 -top-12 w-48 h-48 rounded-lg bg-gradient-to-tr from-purple-500/30 to-blue-300/20 blur-2xl" />
                <div className="absolute left-6 top-6 text-sm text-gray-300">Team Collaboration</div>
                <div className="absolute bottom-6 left-6 bg-gradient-to-r from-purple-600 to-blue-400 text-white px-3 py-1 rounded-full text-xs shadow">Live session</div>
              </div>
            </div>

            {/* Floating UI */}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="absolute -bottom-8 right-8 w-44 p-3 rounded-xl bg-gradient-to-r from-purple-800/40 to-blue-700/25 border border-white/6 backdrop-blur-md">
              <div className="text-xs text-gray-300">Active now</div>
              <div className="font-semibold">24 members</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Story" subtitle="How we got here" />
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-400 opacity-60" />
              <div className="space-y-8 pl-12">
                {TIMELINE.map((t, idx) => (
                  <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12 }} className="relative">
                    <div className="absolute -left-6 top-0">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg ring-4 ring-white/5" />
                    </div>
                    <div className="bg-white/3 p-4 rounded-xl border border-white/6 backdrop-blur-md">
                      <div className="text-sm text-gray-300 font-semibold">{t.title} <span className="text-xs text-gray-400">• {t.year}</span></div>
                      <div className="text-sm text-gray-400 mt-2">{t.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white">Mission & Vision</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-lg bg-gradient-to-br from-white/6 to-white/4 border border-white/6">
                  <div className="text-3xl mb-3">🚀</div>
                  <div className="font-semibold">Mission</div>
                  <p className="text-sm text-gray-300 mt-2">Help teams focus on high-value work by automating repetitive tasks and surfacing intelligent next steps.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-lg bg-gradient-to-br from-white/6 to-white/4 border border-white/6">
                  <div className="text-3xl mb-3">🔭</div>
                  <div className="font-semibold">Vision</div>
                  <p className="text-sm text-gray-300 mt-2">A world where collaboration is effortless and every team moves faster toward meaningful outcomes.</p>
                </motion.div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm text-gray-400">Core Values</h4>
                <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {['Innovation','Simplicity','Security','Collaboration','AI-first Thinking'].map((v)=> (
                    <motion.div whileHover={{ y: -6 }} key={v} className="p-4 rounded-lg bg-gradient-to-br from-white/5 to-white/3 border border-white/6 text-sm text-gray-200">{v}</motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Meet Our Team" subtitle="The people building SmartDesk" />
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Elliot Morales', role: 'Founder & CEO', avatar: 'EM' },
              { name: 'Lina Kim', role: 'Head of Product', avatar: 'LK' },
              { name: 'Marco Silva', role: 'Engineering Lead', avatar: 'MS' },
              { name: 'Asha Rai', role: 'Head of Customer Success', avatar: 'AR' }
            ].map((m) => (
              <motion.div key={m.name} whileHover={{ scale: 1.03 }} className="p-4 rounded-xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6 backdrop-blur-md text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-400 flex items-center justify-center text-xl font-bold text-white shadow-lg">{m.avatar}</div>
                <div className="mt-3 font-semibold">{m.name}</div>
                <div className="text-sm text-gray-400">{m.role}</div>
                <div className="mt-3 flex justify-center gap-3 text-gray-300">
                  <a href="#" aria-label="twitter" className="hover:text-white">🔗</a>
                  <a href="#" aria-label="linkedin" className="hover:text-white">🔗</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture + Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden">
            <img src="/assets/office-preview.jpg" alt="Office preview" className="w-full h-72 object-cover rounded-xl shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Workspace Culture</h3>
            <p className="mt-3 text-gray-300">We are remote-first, growth-minded, and committed to building a safe environment where experimentation and learning thrive.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/6">Flexible work</div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/6">Innovation sprints</div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/6">Learning budget</div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/6">Inclusive teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gradient-to-br from-white/2 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedCounter to={50} label={'Employees'} />
            <AnimatedCounter to={10000} label={'Customers'} duration={1600} />
            <AnimatedCounter to={25} label={'Countries'} />
            <AnimatedCounter to={99} label={'Satisfaction (%)'} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Testimonials" subtitle="What people say" />
          <div className="mt-6">
            <AnimatePresence>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-3 gap-4">
                {testimonials.map((t) => (
                  <TestimonialCard key={t.name} avatar={t.avatar} name={t.name} role={t.role} quote={t.quote} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="careers" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">Join the Future of Productivity</h2>
          <p className="mt-3 text-gray-300">Careers, partnerships, and customer success — help us build something meaningful.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#careers" className="btn-primary">Careers</a>
            <a href="#contact" className="btn-primary bg-transparent text-primary border border-white/10">Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

