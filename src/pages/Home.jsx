import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'
import StatsCard from '../components/StatsCard'
import TestimonialCard from '../components/TestimonialCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden hero">
        <div className="bg-blob top-left" />
        <div className="bg-blob bottom-right" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <div className="hero-badge mb-4">✨ AI Powered Productivity</div>
            <h1 className="lead mb-4">Smarter work, delivered <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">with AI</span></h1>
            <p className="sub mb-6">Organize tasks, automate workflows, and boost team productivity with an elegant AI-driven workspace designed for modern teams.</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/pricing" className="btn-primary btn-glow">Get Started</Link>
              <Link to="#demo" className="btn-secondary">Watch Demo</Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-sm">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-gray-500">Teams</div>
              </div>
              <div className="text-sm">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-gray-500">Tasks Managed</div>
              </div>
              <div className="text-sm">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-gray-500">Avg Productivity Boost</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="relative">
            <div className="mockup mockup-shadow p-6 bg-white dark:bg-transparent">
              <div className="w-full rounded-xl overflow-hidden relative ring-1 ring-gray-200/30 dark:ring-white/6 h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-100 dark:from-[#071226] dark:to-[#061425]" />
                <div className="absolute left-4 top-4 w-36 sm:w-44 h-28 card p-4">
                  <div className="text-xs text-gray-400">Tasks</div>
                  <div className="font-semibold">5 overdue • 12 due today</div>
                </div>
                <div className="absolute right-4 top-12 w-44 sm:w-56 h-40 card p-4">
                  <div className="text-xs text-gray-400">Analytics</div>
                  <div className="font-semibold text-2xl">72%</div>
                </div>
                <div className="absolute bottom-4 left-6 w-[calc(100%-96px)] sm:w-72 card p-4">
                  <div className="text-xs text-gray-400">AI Assistant</div>
                  <div className="font-semibold">Suggests next actions</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Trusted by modern teams" subtitle="Companies that trust SmartDesk" />
          <div className="flex items-center gap-6 flex-wrap mt-4 text-gray-400">
            <div className="opacity-80">Google</div>
            <div className="opacity-80">Slack</div>
            <div className="opacity-80">Notion</div>
            <div className="opacity-80">Spotify</div>
            <div className="opacity-80">Airbnb</div>
            <div className="opacity-80">Netflix</div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-transparent to-black/5">
        <div className="container mx-auto px-4">
          <SectionTitle title="Core Features" subtitle="Intelligent tools to boost your team" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            <FeatureCard icon={"⚡"} title="AI Task Automation">Automatically prioritize and assign tasks using AI.</FeatureCard>
            <FeatureCard icon={"👥"} title="Team Collaboration">Real-time syncing and comments across teams.</FeatureCard>
            <FeatureCard icon={"🔒"} title="Secure by Design">Enterprise-grade security and encryption.</FeatureCard>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Testimonials" subtitle="What customers say" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            <TestimonialCard avatar="PM" name="Alex Johnson" role="Product Manager" quote="SmartDesk replaced 3 different tools for me." />
            <TestimonialCard avatar="SF" name="Priya Shah" role="Founder" quote="My productivity doubled in a week." />
            <TestimonialCard avatar="ML" name="Marcus Lee" role="Engineering Lead" quote="The automation saved us countless hours." />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Pricing Preview" subtitle="Plans for teams of any size" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            <div className="card p-6 border border-white/6 flex flex-col h-full">
              <div className="font-semibold">Free</div>
              <div className="text-3xl font-extrabold my-4">$0<span className="text-sm">/mo</span></div>
              <ul className="text-sm text-gray-400 space-y-2 mb-4 flex-1">
                <li>Basic AI tools</li>
                <li>Community support</li>
              </ul>
              <button className="btn-primary w-full mt-auto">Get started</button>
            </div>
            <div className="card p-6 border border-white/6">
              <div className="text-xs uppercase text-accent font-bold">Popular</div>
              <div className="font-semibold">Pro</div>
              <div className="text-3xl font-extrabold my-4">$9<span className="text-sm">/mo</span></div>
              <ul className="text-sm text-gray-400 space-y-2 mb-4 flex-1">
                <li>Advanced AI + integrations</li>
                <li>Priority support</li>
              </ul>
              <button className="btn-primary w-full mt-auto">Start Free Trial</button>
            </div>
            <div className="card p-6 border border-white/6">
              <div className="font-semibold">Enterprise</div>
              <div className="text-3xl font-extrabold my-4">Custom</div>
              <ul className="text-sm text-gray-400 space-y-2 mb-4 flex-1">
                <li>SSO & Compliance</li>
                <li>Dedicated support</li>
              </ul>
              <button className="btn-primary w-full mt-auto">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

