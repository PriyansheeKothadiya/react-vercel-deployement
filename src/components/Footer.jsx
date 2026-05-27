import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

function FooterLink({ children }) {
  return (
    <a className="block text-gray-300 hover:text-white transition-colors duration-200 py-1 relative overflow-hidden" href="#">
      <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1">{children}</span>
    </a>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  return (
    <footer className="relative footer-bg text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute -top-40 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-700/20 to-blue-400/10 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-700/10 to-purple-400/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">SmartDesk</div>
            <p className="text-gray-400 mt-3">AI workspace that helps teams automate repetitive work and focus on outcomes.</p>
            <div className="mt-4 flex gap-3">
              <motion.a whileHover={{ scale: 1.08 }} className="p-2 rounded-full bg-white/5 hover:bg-white/8" href="#"><FaLinkedin className="text-xl text-gray-300" /></motion.a>
              <motion.a whileHover={{ scale: 1.08 }} className="p-2 rounded-full bg-white/5 hover:bg-white/8" href="#"><FaGithub className="text-xl text-gray-300" /></motion.a>
              <motion.a whileHover={{ scale: 1.08 }} className="p-2 rounded-full bg-white/5 hover:bg-white/8" href="#"><FaTwitter className="text-xl text-gray-300" /></motion.a>
              <motion.a whileHover={{ scale: 1.08 }} className="p-2 rounded-full bg-white/5 hover:bg-white/8" href="#"><FaInstagram className="text-xl text-gray-300" /></motion.a>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-3 text-gray-200">Product</div>
            <nav className="space-y-1">
              <a href="#" className="group block relative overflow-hidden">
                <span className="text-gray-300 group-hover:text-white transition-colors">Features</span>
              </a>
              <FooterLink>Dashboard</FooterLink>
              <FooterLink>Integrations</FooterLink>
              <FooterLink>AI Assistant</FooterLink>
              <FooterLink>Pricing</FooterLink>
            </nav>
          </div>

          <div>
            <div className="font-semibold mb-3 text-gray-200">Resources</div>
            <nav className="space-y-1">
              <FooterLink>Blog</FooterLink>
              <FooterLink>Documentation</FooterLink>
              <FooterLink>Help Center</FooterLink>
              <FooterLink>API Docs</FooterLink>
              <FooterLink>Community</FooterLink>
            </nav>
          </div>

          <div>
            <div className="font-semibold mb-3 text-gray-200">Newsletter</div>
            <div className="glass p-4 rounded-2xl">
              <p className="text-sm text-gray-300">Get product updates and AI productivity tips.</p>
              <form onSubmit={(e)=>e.preventDefault()} className="mt-3 flex gap-2">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" className="w-full p-3 rounded-lg bg-transparent border border-white/6 placeholder-gray-400" />
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 text-white">Subscribe</button>
              </form>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 border-t border-white/6 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <div>© {new Date().getFullYear()} SmartDesk. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <div className="text-gray-400">Made with <span className="text-red-400">❤</span> by SmartDesk Team</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
