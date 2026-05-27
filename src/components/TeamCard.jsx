import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function TeamCard({ name, role, avatar = '', socials = {} }) {
  const initials = avatar || name.split(' ').map(n=>n[0]).slice(0,2).join('')
  return (
    <div className="card p-4 flex flex-col items-start gap-3 hover-glow soft-transition">
      <div className="flex items-center gap-3 w-full">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">{initials}</div>
        <div className="flex-1">
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          {socials.twitter && <a href={socials.twitter} aria-label="twitter"><FaTwitter /></a>}
          {socials.linkedin && <a href={socials.linkedin} aria-label="linkedin"><FaLinkedin /></a>}
          {socials.github && <a href={socials.github} aria-label="github"><FaGithub /></a>}
        </div>
      </div>
      <p className="text-sm text-gray-400">Passionate about building delightful product experiences and empowering teams.</p>
    </div>
  )
}
