import Image from "next/image";
import Link from "next/link";
import { Brain, Sparkles, Target, Compass, Award, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-200 flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl opacity-30">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-indigo-200 to-emerald-100 opacity-50" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20 bg-indigo-50/50">
                <Sparkles className="w-4 h-4 mr-2" />
                A New Era of Learning
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                A platform that creates <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Thinkers</span>, not memorizers.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Traditional education pushes information at you. Better learning pulls knowledge out of you. 
                Discover the Socratic AI tutor that guides you to the "Aha!" moment through layered questioning and deep reflection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-600/25">
                  Try the Tutor <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="px-8 py-4 rounded-full font-semibold text-lg text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center shadow-sm">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100 ring-1 ring-slate-900/5 aspect-[4/3]">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Students collaborating and thinking deeply"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Philosophy section */}
        <section id="philosophy" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">The Socratic Flip</h2>
              <p className="mt-4 text-lg text-slate-600">
                Stop passive watching. We use structured questioning designed to help you discover the answers yourself.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Compass, 
                  title: "Guide, Don't Give", 
                  desc: "No spoon-feeding knowledge. Our AI acts as a mentor, offering micro-hints instead of raw answers, forcing you to connect the dots."
                },
                { 
                  icon: Brain, 
                  title: "Provoke Curiosity", 
                  desc: "Every learning unit becomes a conversation. We dig into your assumptions, logic, and reasoning to build a stronger mental model."
                },
                { 
                  icon: Target, 
                  title: "Evaluate Reasoning", 
                  desc: "Its not just about getting the correct answer. The platform traces your logical path to mastery, strengthening deep understanding."
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-indigo-100 transition-colors group">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ring-1 ring-slate-900/5 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all text-indigo-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gamified Learning section */}
        <section id="features" className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="relative bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-8">
                  <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                    <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
                      <Award className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Logic Streak: 5 Days</h3>
                      <p className="text-sm text-slate-500">You're reasoning exceptionally well today.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-sm text-slate-500 font-semibold mb-1">Tutor</p>
                      <p className="text-slate-800">"What happens to the pressure if we halve the volume, assuming temperature stays constant?"</p>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 ml-8 text-right">
                      <p className="text-sm text-indigo-400 font-semibold mb-1">You</p>
                      <p className="text-indigo-900">"The particles have less space, so they hit the walls more often. The pressure must double."</p>
                    </div>
                    <div className="flex items-center justify-center py-2">
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                        +15 Insight XP 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                  Addictive, Curiosity-Driven Progression
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Instead of linear chapters, you explore open-world learning maps. Earn XP for good reasoning, maintain streaks, and unlock "Thinker Mode" for advanced, minimally-guided exploration.
                </p>
                <ul className="space-y-4">
                  {[
                    "XP for explaining your thought process",
                    "Concept graphs instead of boring curriculums",
                    "Challenge arenas to test your independence",
                    "AI-generated insights on your learning style"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <div className="mr-3 p-1 rounded-full bg-indigo-100 text-indigo-600">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900 rounded-3xl p-12 lg:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 hidden md:block"></div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6 relative z-10">
              Ready to train your mind?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
              Join the movement. Build transferable thinking skills and long-term mastery in a world designed to ignite intellectual exploration.
            </p>
            <Link href="/register" className="inline-block bg-white text-slate-900 hover:bg-indigo-50 px-8 py-4 rounded-full font-bold text-lg transition-colors relative z-10 shadow-lg">
              Start Learning for Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
