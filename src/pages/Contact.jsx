import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CursorGlow from '../components/CursorGlow'
import { useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import Footer from '../components/Footer'

function ContactCard({ emoji, title, email, desc }) {
  const ref = useRef(null)
  return (
    <motion.div ref={ref} whileHover={{ y: -6 }} className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6 backdrop-blur-md">
      <CursorGlow parentRef={ref} size={200} />
      <div className="text-3xl">{emoji}</div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="text-sm text-gray-300 mt-2">{desc}</div>
      <a href={`mailto:${email}`} className="mt-4 inline-block text-sm text-purple-300">{email}</a>
    </motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  function validate() {
    const e = {}
    if (!form.name) e.name = 'Name required'
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.message) e.message = 'Message required'
    return e
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: null })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const eobj = validate()
    if (Object.keys(eobj).length) {
      setErrors(eobj)
      setStatus(null)
      return
    }
    setStatus('Thanks — we will respond within 24 hours')
    setForm({ name: '', email: '', company: '', subject: '', message: '' })
  }

  const cards = [
    { emoji: '💼', title: 'Sales Inquiry', email: 'sales@smartdesk.com', desc: 'Questions about plans and pricing for teams.' },
    { emoji: '🛠️', title: 'Technical Support', email: 'support@smartdesk.com', desc: 'Get help with integrations and technical issues.' },
    { emoji: '🤝', title: 'Partnerships', email: 'partners@smartdesk.com', desc: 'Partner with us to build integrated experiences.' },
    { emoji: '🚀', title: 'Careers', email: 'careers@smartdesk.com', desc: 'Join the team — we’re hiring across functions.' }
  ]

  return (
    <div className="relative overflow-hidden pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#040617] via-[#06102a] to-[#040316]" />
      <div className="absolute -top-40 left-10 w-[680px] h-[680px] rounded-full bg-gradient-to-r from-purple-700/30 to-blue-400/20 blur-3xl opacity-50 pointer-events-none" />

      {/* Hero */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-700/20 to-blue-400/10 text-xs font-semibold text-purple-300">Get in touch</div>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 leading-tight">Let’s Build Smarter Workflows Together</h1>
            <p className="mt-4 text-gray-300 max-w-xl">Whether you’re evaluating SmartDesk for your enterprise or need help from our support team, we’re ready to help. Start a conversation and we’ll get back quickly.</p>
          </motion.div>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-white/4 to-white/2 border border-white/6 backdrop-blur-md">
              <div className="grid grid-cols-2 gap-4">
                {cards.map((c) => <ContactCard key={c.title} {...c} />)}
              </div>
            </div>

            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute -bottom-8 right-6 w-44 p-3 rounded-xl bg-gradient-to-r from-purple-800/40 to-blue-700/25 border border-white/6 backdrop-blur-md">
              <div className="text-xs text-gray-300">Live support</div>
              <div className="font-semibold">Chat response time: ~2 min</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
          <div>
            <SectionTitle title="Contact Us" subtitle="We’re here to help" />

            <form onSubmit={handleSubmit} className="mt-6 grid gap-3 bg-gradient-to-br from-white/4 to-white/2 p-6 rounded-2xl border border-white/6 backdrop-blur-md">
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="relative">
                  <input name="name" value={form.name} onChange={handleChange} className={`peer w-full p-3 rounded-lg bg-transparent border ${errors.name ? 'border-red-500' : 'border-white/6'}`} placeholder=" " />
                  <span className="absolute left-3 top-1 text-xs text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-300 transition-all">Name</span>
                  {errors.name && <div className="text-xs text-red-400 mt-1">{errors.name}</div>}
                </label>
                <label className="relative">
                  <input name="email" value={form.email} onChange={handleChange} className={`peer w-full p-3 rounded-lg bg-transparent border ${errors.email ? 'border-red-500' : 'border-white/6'}`} placeholder=" " />
                  <span className="absolute left-3 top-1 text-xs text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-300 transition-all">Email</span>
                  {errors.email && <div className="text-xs text-red-400 mt-1">{errors.email}</div>}
                </label>
              </div>

              <label className="relative">
                <input name="company" value={form.company} onChange={handleChange} className="peer w-full p-3 rounded-lg bg-transparent border border-white/6" placeholder=" " />
                <span className="absolute left-3 top-1 text-xs text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-300 transition-all">Company</span>
              </label>

              <label className="relative">
                <input name="subject" value={form.subject} onChange={handleChange} className="peer w-full p-3 rounded-lg bg-transparent border border-white/6" placeholder=" " />
                <span className="absolute left-3 top-1 text-xs text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-300 transition-all">Subject</span>
              </label>

              <label className="relative">
                <textarea name="message" value={form.message} onChange={handleChange} rows={6} className={`peer w-full p-3 rounded-lg bg-transparent border ${errors.message ? 'border-red-500' : 'border-white/6'}`} placeholder=" " />
                <span className="absolute left-3 top-1 text-xs text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-300 transition-all">Message</span>
                {errors.message && <div className="text-xs text-red-400 mt-1">{errors.message}</div>}
              </label>

              <div className="flex items-center justify-between mt-2">
                <button type="submit" className="btn-primary bg-gradient-to-r from-purple-600 to-blue-400">Send Message</button>
                {status && <div className="text-sm text-green-300">{status}</div>}
              </div>
            </form>
          </div>

          <div>
            <SectionTitle title="Office Locations" subtitle="Where we operate" />
            <div className="mt-6 grid gap-4">
              {[
                { city: 'New York', addr: '123 Madison Ave, NY', phone: '+1 212 555 0100', tz: 'EST' },
                { city: 'London', addr: '10 Downing St, London', phone: '+44 20 7946 0958', tz: 'BST' },
                { city: 'Bangalore', addr: 'MG Road, Bangalore', phone: '+91 80 5555 0101', tz: 'IST' }
              ].map((loc) => (
                <motion.div key={loc.city} whileHover={{ scale: 1.02 }} className="p-4 rounded-2xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6 backdrop-blur-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-white">{loc.city}</div>
                      <div className="text-sm text-gray-300">{loc.addr}</div>
                      <div className="text-sm text-gray-300 mt-1">{loc.phone} • {loc.tz}</div>
                    </div>
                    <div className="w-28 h-16 rounded-md bg-gradient-to-br from-purple-700/30 to-blue-400/20" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <SectionTitle title="Live Support" subtitle="We’re available 24/7" />
              <div className="mt-4 grid gap-3">
                <motion.div className="p-4 rounded-2xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6">24/7 Support • AI assistant • Response time ~2 min</motion.div>
                <motion.div className="p-4 rounded-2xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6">Quick links: <a href="#faq" className="text-purple-300">FAQ</a> • <a href="#" className="text-purple-300">Docs</a></motion.div>
              </div>
            </div>

            <div id="faq" className="mt-8">
              <SectionTitle title="FAQ" subtitle="Common questions" />
              <div className="mt-3 grid gap-3">
                <FAQAccordion q={'What is your response time?'} a={'We typically respond within 24 hours; live chat ~2 minutes for urgent issues.'} />
                <FAQAccordion q={'Do you offer enterprise support?'} a={'Yes — dedicated SLA and onboarding for enterprise customers.'} />
                <FAQAccordion q={'How do I request technical help?'} a={'Open a ticket via Technical Support or chat with our assistant.'} />
                <FAQAccordion q={'How does pricing support work?'} a={'Sales will guide you through plans and custom enterprise options.'} />
              </div>
            </div>

            <div className="mt-8">
              <SectionTitle title="Follow Us" subtitle="Social channels" />
              <div className="mt-3 flex gap-3">
                <a href="#" className="p-3 rounded-lg bg-white/5 hover:bg-white/8">LinkedIn</a>
                <a href="#" className="p-3 rounded-lg bg-white/5 hover:bg-white/8">Twitter</a>
                <a href="#" className="p-3 rounded-lg bg-white/5 hover:bg-white/8">GitHub</a>
                <a href="#" className="p-3 rounded-lg bg-white/5 hover:bg-white/8">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">Need Help Scaling Your Team?</h2>
          <p className="mt-3 text-gray-300">Schedule a demo or speak directly with an expert to tailor SmartDesk to your needs.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="btn-primary">Schedule Demo</a>
            <a href="#" className="btn-primary bg-transparent text-primary border border-white/10">Talk to Expert</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
