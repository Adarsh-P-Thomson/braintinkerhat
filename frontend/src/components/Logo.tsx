import Link from 'next/link';
import { Brain, GraduationCap } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
      <div className="relative">
        <div className="bg-indigo-600 text-white p-1.5 rounded-lg group-hover:bg-indigo-700 transition-colors">
          <Brain className="w-5 h-5" />
        </div>
        <div className="absolute -top-2 -right-2 text-indigo-900 rotate-12 bg-white rounded-full p-0.5 shadow-sm border border-slate-100">
          <GraduationCap className="w-3.5 h-3.5" />
        </div>
      </div>
      <span className="font-semibold text-xl tracking-tight text-slate-900">
        BrainTinker<span className="text-indigo-600 font-bold">Hat</span>
      </span>
    </Link>
  );
}
