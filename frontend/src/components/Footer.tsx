'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 gap-y-12 mb-16">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Stop passively watching. Ignite your curiosity and become an independent thinker through our Socratic AI tutor. A new era of learning awaits.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-indigo-600 transition-colors"><FaTwitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-600 transition-colors"><FaGithub className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-600 transition-colors"><FaLinkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-slate-900 mb-4 text-sm tracking-wider uppercase">Platform</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-indigo-600 transition-colors">The Socratic Tutor</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 transition-colors">Thinker Mode</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 transition-colors">Curiosity Paths</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-slate-900 mb-4 text-sm tracking-wider uppercase">For You</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="#" className="hover:text-indigo-600 transition-colors">Students</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 transition-colors">Teachers</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 transition-colors">Institutions</Link></li>
              <li><Link href="#" className="hover:text-indigo-600 transition-colors">Developers</Link></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-slate-900 mb-4 text-sm tracking-wider uppercase">Stay Updated</h3>
            <p className="text-sm text-slate-500 mb-4">
              Get the latest learning strategies and platform updates straight to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all transition-shadow"
                />
              </div>
              <button 
                type="submit" 
                className="bg-slate-900 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} BrainTinkerHat Learning. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
