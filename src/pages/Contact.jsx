import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import Footer from '../components/Footer'

const ContactCard = ({ icon, title, desc, action }) => (
  <div className="group relative p-6 rounded-2xl dark:bg-[rgba(255,255,255,0.04)] backdrop-blur-md border border-white/6 dark:border-white/12 hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-400 flex items-center justify-center text-white text-xl shadow-md">{icon}</div>
    <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">{title}</h4>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    <div className="mt-4">
      <a className="inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-white hover:underline" href={action.href}>{action.label}</a>
    </div>
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/20 pointer-events-none" />
  </div>
)

const FloatingInput = ({ id, label, type = 'text', required = false }) => (
  <div className="relative">
    <input id={id} name={id} type={type} required={required} placeholder=" " className="peer w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-3 focus:outline-none focus:border-purple-500 dark:focus:border-blue-400" />
    <label htmlFor={id} className="absolute left-0 top-0 text-sm text-gray-500 dark:text-gray-300 transform origin-left transition-all peer-focus:-translate-y-4 peer-focus:scale-95 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100">{label}</label>
  </div>
)

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 to-white dark:from-[#071026] dark:to-[#030416]" />

      {/* Hero */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-400/10 text-xs font-semibold text-purple-600 dark:text-purple-300">Contact</div>
            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Let’s Build Smarter Workflows Together</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">Whether you're evaluating SmartDesk for your enterprise, need technical help, or want to join our team—we're here to help. Expect a fast response and thoughtful support.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact-form" className="btn-primary">Send a Message</a>
              <a href="#support" className="btn-outline">Live Chat</a>
            </div>
          </motion.div>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-3xl p-6 bg-gradient-to-br from-white/60 to-white/30 dark:from-white/4 dark:to-white/2 border border-white/6 backdrop-blur-md shadow-xl">
              <div className="h-64 rounded-xl bg-gradient-to-br from-[#020617] to-[#071028] shadow-inner overflow-hidden relative">
                <div className="absolute right-6 top-6 text-sm text-gray-300">Support Dashboard</div>
                <div className="absolute left-6 bottom-6 bg-gradient-to-r from-purple-600 to-blue-400 text-white px-3 py-1 rounded-full text-xs">Open Ticket</div>
              </div>
            </div>

            <div className="absolute -bottom-8 right-8 w-56 p-4 rounded-xl dark:bg-white/6 border border-white/6 backdrop-blur-md shadow-lg">
              <div className="text-xs text-gray-500 dark:text-gray-300">Live support</div>
              <div className="font-semibold">Agents online</div>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">Typical response time: <span className="font-medium">under 2 hours</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <SectionTitle title="Contact Options" subtitle="Pick the best way to reach us" />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactCard icon={'💼'} title={'Sales Inquiry'} desc={'Grow with SmartDesk — talk to our sales team about pricing and enterprise plans.'} action={{ href: 'mailto:sales@smartdesk.com', label: 'sales@smartdesk.com' }} />
            <ContactCard icon={'🛠️'} title={'Technical Support'} desc={'Get help with integrations, bugs, and account issues.'} action={{ href: 'mailto:support@smartdesk.com', label: 'support@smartdesk.com' }} />
            <ContactCard icon={'🤝'} title={'Partnerships'} desc={'Interested in partnering? Let’s explore opportunities.'} action={{ href: 'mailto:partners@smartdesk.com', label: 'partners@smartdesk.com' }} />
            <ContactCard icon={'🚀'} title={'Careers'} desc={'Join our team — check open roles and apply.'} action={{ href: 'mailto:jobs@smartdesk.com', label: 'jobs@smartdesk.com' }} />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <SectionTitle title="Send Us a Message" subtitle="We typically reply within 24 hours" />
            <p className="text-gray-600 dark:text-gray-300 mt-2">Please include a brief description of your needs and any relevant links. Our team will route your message to the right specialist.</p>

            <form className="mt-6 space-y-4 dark:bg-white/6 p-6 rounded-2xl border border-white/6 backdrop-blur-md" onSubmit={(e)=>e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatingInput id="name" label="Full name" required />
                <FloatingInput id="email" label="Email address" type="email" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatingInput id="company" label="Company" />
                <FloatingInput id="subject" label="Subject" />
              </div>

              <div className="relative">
                <textarea id="message" name="message" required placeholder=" " rows={6} className="peer w-full bg-transparent border-b border-gray-200 dark:border-white/10 py-3 focus:outline-none focus:border-purple-500 dark:focus:border-blue-400" />
                <label htmlFor="message" className="absolute left-0 top-0 text-sm text-gray-500 dark:text-gray-300 transform origin-left transition-all peer-focus:-translate-y-4 peer-focus:scale-95 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100">Message</label>
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-primary">Send Message</button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br to-white/30 dark:from-white/4 dark:to-white/2 border border-white/6 backdrop-blur-md">
              <h4 className="font-semibold text-gray-900 dark:text-white">Live Support</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Chat with our support agents or use our AI assistant for instant help.</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-400 flex items-center justify-center text-white">AI</div>
                <div>
                  <div className="text-sm font-medium">AI Assistant</div>
                  <div className="text-xs text-gray-500 dark:text-gray-300">Instant answers • 24/7</div>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <a className="btn-secondary" href="#">Start Chat</a>
                <a className="btn-secondary bg-transparent border border-white/10" href="#">View Help Center</a>
              </div>
            </div>

            <div className="p-6 rounded-2xl dark:bg-white/6 border border-white/6 backdrop-blur-md">
              <h4 className="font-semibold text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li><a href="#" className="hover:underline">API Docs</a></li>
                <li><a href="#" className="hover:underline">Status</a></li>
                <li><a href="#" className="hover:underline">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Office Locations" subtitle="Meet our global teams" />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl dark:bg-white/6 border border-white/6 backdrop-blur-md">
              <h5 className="font-semibold">New York</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">123 Market St, NY, NY 10001</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Timezone: EST</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">+1 (212) 555-0123</p>
              <div className="mt-3 h-28 rounded-md bg-gradient-to-br from-purple-100 to-blue-100 dark:from-white/6 dark:to-white/4 flex items-center justify-center text-sm text-gray-500">Map placeholder</div>
            </div>

            <div className="p-4 rounded-xl dark:bg-white/6 border border-white/6 backdrop-blur-md">
              <h5 className="font-semibold">London</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">10 Downing St, London</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Timezone: GMT</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">+44 20 7946 0958</p>
              <div className="mt-3 h-28 rounded-md bg-gradient-to-br from-purple-100 to-blue-100 dark:from-white/6 dark:to-white/4 flex items-center justify-center text-sm text-gray-500">Map placeholder</div>
            </div>

            <div className="p-4 rounded-xl dark:bg-white/6 border border-white/6 backdrop-blur-md">
              <h5 className="font-semibold">Bangalore</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Tech Park Rd, Bangalore</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Timezone: IST</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">+91 80 5555 0123</p>
              <div className="mt-3 h-28 rounded-md bg-gradient-to-br from-purple-100 to-blue-100 dark:from-white/6 dark:to-white/4 flex items-center justify-center text-sm text-gray-500">Map placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Frequently Asked" subtitle="Support & billing" />
          <div className="mt-6 max-w-3xl">
            <FAQAccordion items={[{q:'How do I contact support?', a:'Use the form or email support@smartdesk.com'},{q:'Where can I find invoices?', a:'Invoices are available in billing settings.'},{q:'Does SmartDesk offer SSO?', a:'Yes — SSO with SAML and OIDC are supported.'}]} />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle title="Follow Us" subtitle="Stay connected" />
          <div className="mt-4 flex items-center justify-center gap-4 text-xl text-gray-700 dark:text-gray-300">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="GitHub">🐙</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Need Help Scaling Your Team?</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Schedule a demo or talk to an expert to learn how SmartDesk can power your growth.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a className="btn-primary" href="#">Schedule Demo</a>
            <a className="btn-secondary" href="#">Talk to Expert</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
