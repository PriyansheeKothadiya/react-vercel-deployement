import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import FeatureCard from '../components/FeatureCard'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import TestimonialCard from '../components/TestimonialCard'
import StatsCard from '../components/StatsCard'
import Footer from '../components/Footer'

const CATEGORY_DATA = [
  {
    category: 'Productivity',
    items: [
      {
        icon: '⚡',
        title: 'AI Task Manager',
        desc: 'Automatically prioritize tasks using AI and context-aware signals.',
        benefits: ['Auto-prioritization', 'Smart due-dates', 'Context linking']
      },
      {
        icon: '📅',
        title: 'Smart Scheduling',
        desc: 'Schedule work intelligently across team calendars and time zones.',
        benefits: ['Auto-schedule', 'Timezone aware', 'Smart reminders']
      },
      {
        icon: '🔗',
        title: 'Calendar Integration',
        desc: 'Two-way sync with popular calendar providers for unified planning.',
        benefits: ['Sync events', 'Free/busy checks', 'Deep links']
      }
    ]
  },
  {
    category: 'Collaboration',
    items: [
      {
        icon: '👥',
        title: 'Real-time Team Workspace',
        desc: 'Collaborate live on tasks, boards, and notes without delays.',
        benefits: ['Live cursors', 'Comments', 'Mentions']
      },
      {
        icon: '📺',
        title: 'Video Meeting Sync',
        desc: 'Sync action items from calls directly into your workspace.',
        benefits: ['Auto-transcripts', 'Action extraction', 'Follow-ups']
      },
      {
        icon: '🧩',
        title: 'Shared Boards',
        desc: 'Flexible boards for projects and cross-team planning.',
        benefits: ['Custom views', 'Drag & drop', 'Permissions']
      }
    ]
  },
  {
    category: 'Automation',
    items: [
      {
        icon: '🤖',
        title: 'Workflow Automation',
        desc: 'Automate routine work with visual workflows and triggers.',
        benefits: ['Visual editor', 'Pre-built templates', 'Conditionals']
      },
      {
        icon: '✨',
        title: 'AI Suggestions',
        desc: 'AI suggests next steps and content to speed up work.',
        benefits: ['Smart suggestions', 'Autofill content', 'Task templates']
      },
      {
        icon: '🔔',
        title: 'Smart Notifications',
        desc: 'Notifications that learn when and how to notify you.',
        benefits: ['Priority filters', 'Digest mode', 'Snooze rules']
      }
    ]
  },
  {
    category: 'Security',
    items: [
      {
        icon: '🔒',
        title: 'Secure Encryption',
        desc: 'End-to-end encryption and enterprise-grade data protection.',
        benefits: ['AES-256', 'Key rotation', 'Audit logs']
      },
      {
        icon: '🛡️',
        title: 'Role-based Access',
        desc: 'Fine-grained access controls for teams and projects.',
        benefits: ['RBAC', 'SAML & SSO', 'Scoped roles']
      },
      {
        icon: '☁️',
        title: 'Cloud Backup',
        desc: 'Reliable backups and instant restores across regions.',
        benefits: ['Daily backups', 'Point-in-time restore', 'Geo-redundancy']
      }
    ]
  }
]

function AnimatedMockup() {
  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="card p-6 bg-gradient-to-br from-black/50 via-gray-800/40 to-black/60"
    >
      <div className="h-64 w-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/6 shadow-soft-lg" />
      <div className="flex gap-3 mt-4">
        <div className="card p-3 w-28">Live</div>
        <div className="card p-3 w-28">Tasks</div>
        <div className="card p-3 w-28">Analytics</div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const el = ref.current
      if (!el) return
      const total = el.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const percent = Math.max(0, Math.min(100, Math.round((scrolled / total) * 100)))
      setProgress(percent)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Top progress bar */}
      <div className="fixed left-0 top-0 w-full z-50 pointer-events-none">
        <div className="h-1 bg-gradient-to-r from-primary to-accent" style={{ width: `${progress}%` }} />
      </div>

      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="inline-block px-3 py-1 rounded-xl bg-gradient-to-r from-primary/20 to-accent/10 text-xs font-semibold text-primary">Powerful AI Features</div>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">Everything Your Team Needs in One Smart Workspace</h1>
            <p className="text-gray-400 mt-4 max-w-xl">SmartDesk brings AI, collaboration, and automation together so teams can focus on impact instead of repetitive tasks.</p>
            <div className="flex gap-4 mt-6">
              <a href="#showcase" className="btn-primary">Explore Dashboard</a>
              <a href="#pricing" className="btn-primary bg-transparent text-primary border border-white/10">Start Free Trial</a>
            </div>
            <div className="mt-8 flex gap-3 text-sm text-gray-400">
              <div className="opacity-80">Trusted by Google</div>
              <div className="opacity-80">Slack</div>
              <div className="opacity-80">Notion</div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="relative">
              <AnimatedMockup />
              <motion.div className="absolute -top-8 right-6 w-48 p-3 card backdrop-blur-sm" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <div className="text-xs text-gray-400">Active users</div>
                <div className="font-semibold">1,243 online</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Feature Categories" subtitle="Organized for clarity and impact" />
          <div className="grid gap-8 lg:grid-cols-2">
            {CATEGORY_DATA.map((cat) => (
              <div key={cat.category} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{cat.category}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((it) => (
                    <FeatureCard key={it.title} icon={it.icon} title={it.title}>
                      {it.desc}
                    </FeatureCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive showcase */}
      <section id="showcase" className="py-20 bg-gradient-to-b from-transparent to-black/5">
        <div className="container mx-auto px-4 space-y-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`grid gap-8 lg:grid-cols-2 items-center ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h3 className="text-2xl font-bold mb-3">{i === 1 ? 'Analytics at a glance' : i === 2 ? 'Task management preview' : 'AI automation in action'}</h3>
                <p className="text-gray-400">{i === 1 ? 'Live insights and trend detection to keep your team focused.' : i === 2 ? 'Organize work with smart lanes and quick actions.' : 'Visual automations that trigger tasks and updates automatically.'}</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="card p-4">Metric</div>
                  <div className="card p-4">Activity</div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="card p-6">
                  <div className="h-56 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Automation visuals */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold">Let AI Handle Repetitive Work</h2>
            <p className="text-gray-400 mt-4">Create rules and workflows that automatically process tasks, assign owners, and even draft messages when conditions are met.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="card p-4">Trigger: New task assigned → Action: Auto assign</div>
              <div className="card p-4">Trigger: Meeting ends → Action: Create follow-ups</div>
            </div>
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <div className="relative">
              <div className="card p-6">
                <div className="h-64 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800" />
              </div>
              <div className="absolute -top-6 right-6 w-40 card p-3">AI Assistant</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-b from-black/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <StatsCard value={'10k+'} label={'Teams'} />
            <StatsCard value={'1M+'} label={'Tasks Automated'} />
            <StatsCard value={'98%'} label={'Productivity Increase'} />
            <StatsCard value={'99.9%'} label={'Uptime'} />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Why SmartDesk vs Traditional Tools" />
          <div className="card p-4">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="text-sm text-gray-400">
                  <th className="w-1/4">Feature</th>
                  <th className="w-1/4">SmartDesk</th>
                  <th className="w-1/4">Traditional Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI Automation</td>
                  <td>✅</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Real-time Collaboration</td>
                  <td>✅</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>Unified Dashboard</td>
                  <td>✅</td>
                  <td>Fragmented</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials & FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
          <div>
            <SectionTitle title="What our customers say" />
            <div className="grid gap-4">
              <TestimonialCard avatar={'AJ'} name={'Alex Johnson'} role={'Product Manager, Acme'} quote={'SmartDesk replaced 3 different tools for me.'} />
              <TestimonialCard avatar={'PS'} name={'Priya Shah'} role={'Founder, Nova'} quote={'Our team cut meeting time by 30% thanks to SmartDesk.'} />
            </div>
          </div>
          <div>
            <SectionTitle title="Frequently asked" />
            <div className="grid gap-3">
              <FAQAccordion q={'Is my data secure?'} a={'Yes — we provide end-to-end encryption and enterprise controls.'} />
              <FAQAccordion q={'What integrations exist?'} a={'Calendar, Slack, Google Workspace, and more via our integrations hub.'} />
              <FAQAccordion q={'How does AI pricing work?'} a={'AI processing is included in Pro plans; enterprise has reserved capacity.'} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Transform Your Team Workflow Today</h2>
          <p className="text-gray-400 mt-3">Start a free trial or book a demo to see SmartDesk in action.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#" className="btn-primary">Get Started</a>
            <a href="#" className="btn-primary bg-transparent text-primary border border-white/10">Book Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
