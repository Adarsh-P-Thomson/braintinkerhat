import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Main Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/#philosophy" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Philosophy</Link>
            <Link href="/#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</Link>
            <Link href="/#method" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">The Method</Link>
          </div>

          {/* Auth Navigation */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-indigo-600 hidden md:block transition-colors">
              Sign In
            </Link>
            <Link href="/register" className="bg-slate-900 hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md">
              Start Thinking
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
