import {
  Building2, 
  Home, 
  Hotel, 
  Briefcase, 
  ShieldCheck, 
  Warehouse, 
  Brush, 
  Construction, 
  GraduationCap
} from "lucide-react"

export default function MajorWorks() {
  return (
    <section className="py-24 px-6 bg-slate-100 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#972727] mb-4">Major Works & Capabilities</h2>
          <div className="w-16 h-1 bg-[#972727] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {[
            { title: "Residential Townships", icon: Home, desc: "Integrated living communities with modern amenities." },
            { title: "High-Rise Buildings", icon: Building2, desc: "Sky-scraping structures with advanced engineering." },
            { title: "Row Houses & Villas", icon: Hotel, desc: "Luxury independent residences and gated villas." },
            { title: "Commercial Offices", icon: Briefcase, desc: "Premium office spaces, malls, and retail hubs." },
            { title: "Infrastructure", icon: Construction, desc: "Roads, bridges, and civic utility frameworks." },
            { title: "Industrial Buildings", icon: Warehouse, desc: "Factories, warehouses, and logistic parks." },
            { title: "Institutional", icon: GraduationCap, desc: "Schools, colleges, and educational campuses." },
            { title: "Interiors", icon: Brush, desc: "Turnkey interior solutions for distinctive spaces." },
            { title: "Restoration", icon: ShieldCheck, desc: "Structural strengthening and heritage conservation." },
          ].map((work, idx) => (
            <div key={idx} className="group p-4 md:p-8 rounded-xl bg-white border border-gray-100 md:border-transparent shadow-sm md:shadow-sm hover:shadow-lg hover:border-gray-200 hover:scale-105 active:scale-95 active:bg-blue-50/30 transition-all duration-300 ease-out cursor-pointer md:cursor-default">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 md:mb-6 p-3 md:p-4 rounded-full bg-blue-50/50 md:bg-gray-50 group-hover:bg-blue-100 md:group-hover:bg-gray-100 transition-colors duration-300">
                  <work.icon strokeWidth={1.5} className="w-7 h-7 md:w-8 md:h-8 text-[#0B2545] md:text-slate-800 group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-1 md:mb-2 leading-tight">
                  {work.title}
                </h3>
                <div className="h-auto md:h-6 overflow-visible relative flex justify-center w-full">
                   <p className="hidden md:block text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute whitespace-nowrap">
                     {work.desc}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
