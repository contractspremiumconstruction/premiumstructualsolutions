import {
  Users, 
  HardHat,
  BadgeCheck,
  DraftingCompass,
  Lightbulb,
  ClipboardList,
  Layers,
  Scale,
  Briefcase,
  UserCog,
  Landmark,
  Trophy
} from "lucide-react"

export default function CoreStrengths() {
  return (
    <section className="py-24 px-6 bg-slate-100 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#972727] mb-4">Core Strengths</h2>
          <div className="w-16 h-1 bg-[#972727] mx-auto rounded-full"></div>
        </div>
      
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Divider lines for desktop */}
          <div className="hidden md:block absolute left-[33.33%] top-4 bottom-4 w-px bg-slate-100"></div>
          <div className="hidden md:block absolute right-[33.33%] top-4 bottom-4 w-px bg-slate-100"></div>

          {[
            {
              category: "Technical Excellence",
              items: [
                { title: "Excellent Quality", desc: "Precision engineering with zero tolerance for errors.", icon: BadgeCheck },
                { title: "Expert Team", desc: "Led by veterans with 40+ years of field expertise.", icon: Users },
                { title: "Renowned Architects", desc: "Collaborating with industry-leading design firms.", icon: DraftingCompass },
                { title: "Modern Techniques", desc: "Advanced formwork and automated scaffolding systems.", icon: Lightbulb },
              ]
            },
            {
              category: "Execution & Control",
              items: [
                { title: "Efficient Planning", desc: "Critical path analysis for timely project delivery.", icon: ClipboardList },
                { title: "Complex Projects", desc: "Specialized execution for high-rise & industrial structures.", icon: Layers },
                { title: "Safety First", desc: "ISO-certified safety protocols and regular audits.", icon: HardHat },
                { title: "Economical", desc: "Value engineering to optimize material usage & cost.", icon: Scale },
              ]
            },
            {
              category: "Trust & Governance",
              items: [
                { title: "Reputed Clients", desc: "Partner of choice for India's top developers.", icon: Briefcase },
                { title: "Top Management", desc: "Hands-on leadership involved in every milestone.", icon: UserCog },
                { title: "Financial Prudence", desc: "Debt-free operations ensuring project continuity.", icon: Landmark },
                { title: "Proven Track Record", desc: "100% on-time delivery across all major townships.", icon: Trophy },
              ]
            }
          ].map((col, idx) => (
            <div key={idx} className="space-y-4 md:space-y-6 relative border-b-4 border-blue-50/50 last:border-0 pb-6 mb-6 md:pb-0 md:mb-0 md:border-0 last:mb-0">
              <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider md:border-b md:border-slate-100 pb-2 md:pb-4 mx-2 md:mx-4">
                {col.category}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="group p-3 md:p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 hover:scale-105 active:scale-[0.98] active:bg-blue-50 transition-all duration-300 ease-out cursor-pointer md:cursor-default">
                    <div className="flex items-start gap-3 md:gap-4">
                      <item.icon strokeWidth={1.5} className="w-9 h-9 md:w-8 md:h-8 text-[#0B2545] md:text-slate-600 group-hover:text-slate-900 transition-colors duration-300 shrink-0 mt-0.5 md:mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-900 md:text-slate-800 text-base md:text-lg group-hover:text-black transition-colors duration-300 leading-snug">
                          {item.title}
                        </h4>
                        <div className="relative pt-0.5 md:pt-1">
                           <p className="text-sm text-slate-600 md:text-slate-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed block">
                             {item.desc}
                           </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
