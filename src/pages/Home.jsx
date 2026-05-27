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
      <section className="relative overflow-hidden py-16">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/40 via-purple-400/20 to-transparent blur-3xl opacity-60 transform -translate-x-1/2"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">AI Workspace for Modern Teams</h1>
            <p className="text-lg text-gray-400 mb-6">Organize tasks, automate workflows, and boost team productivity with AI-driven intelligence built for collaboration.</p>
            <div className="flex gap-4">
              <Link to="/pricing" className="btn-primary">Start Free Trial</Link>
              <a href="#demo" className="btn-primary bg-transparent text-primary border border-white/10">Watch Demo</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-sm">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-gray-400">Teams</div>
              </div>
              <div className="text-sm">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-gray-400">Tasks Managed</div>
              </div>
              <div className="text-sm">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-gray-400">Avg Productivity Boost</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="relative">
            <div className="card p-6 shadow-soft-lg">
              <div className="h-64 bg-gradient-to-br from-black/60 via-gray-800 to-black rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-8 left-8 w-56 card p-4">
              <div className="text-xs text-gray-400">Live Collaboration</div>
              <div className="font-semibold">Realtime edits & comments</div>
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
            <div className="card p-6 border border-white/6">
              <div className="font-semibold">Free</div>
              <div className="text-3xl font-extrabold my-4">$0<span className="text-sm">/mo</span></div>
              <ul className="text-sm text-gray-400 space-y-2 mb-4">
                <li>Basic AI tools</li>
                <li>Community support</li>
              </ul>
              <button className="btn-primary w-full">Get started</button>
            </div>
            <div className="card p-6 border border-white/6">
              <div className="text-xs uppercase text-accent font-bold">Popular</div>
              <div className="font-semibold">Pro</div>
              <div className="text-3xl font-extrabold my-4">$9<span className="text-sm">/mo</span></div>
              <ul className="text-sm text-gray-400 space-y-2 mb-4">
                <li>Advanced AI + integrations</li>
                <li>Priority support</li>
              </ul>
              <button className="btn-primary w-full">Start Free Trial</button>
            </div>
            <div className="card p-6 border border-white/6">
              <div className="font-semibold">Enterprise</div>
              <div className="text-3xl font-extrabold my-4">Custom</div>
              <ul className="text-sm text-gray-400 space-y-2 mb-4">
                <li>SSO & Compliance</li>
                <li>Dedicated support</li>
              </ul>
              <button className="btn-primary w-full">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

