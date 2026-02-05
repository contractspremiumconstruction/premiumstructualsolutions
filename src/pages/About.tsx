import {
  ShieldCheck, 
  Users, 
  Award, 
  HardHat,
  TrendingUp 
} from "lucide-react"

import VerticalTimeline from "@/components/VerticalTimeline"

export default function About() {
  return (
    <main className="pt-24 font-sans">
      
      {/* SECTION 1: WHO WE ARE (DARK - BLUE) */}
      <section className="px-6 py-20 pb-20 bg-[var(--about-bg-dark)] text-[var(--about-text-dark)]">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-[var(--about-accent)] mb-6">Who We Are</h1>
          <div className="w-24 h-1 bg-[var(--about-accent)] mx-auto mb-10"></div>
          
          <div className="max-w-4xl mx-auto text-xl text-gray-200 leading-relaxed space-y-6 text-justify sm:text-center">
            <p>
              It was sixty-five years ago (in 1955) that the Indian construction industry saw the entry of 
              <strong> Late Mr. Haji Hamid Khan Bhati</strong>, the founder-chairman of M/s H.S. Khan & Sons. 
              He created an impeccable image and reputation in the construction arena for over three decades.
            </p>

            <p>
              Over time, this flawless professional history earned a respected place in the Indian construction industry. 
              As the family grew and the next generations continued the legacy, the group expanded with the establishment 
              of M/s Naaz Constructions Pvt. Ltd. in 1990, M/s Naaz Construction Co. in 2005, M/s Dynamics Infraprojects 
              in 2011, and finally <strong>M/s Premium Structural Solutions LLP in 2021</strong>.
            </p>
            <p>
              Today, Premium Structural Solutions LLP is recognized as one of Mumbai’s foremost, reputed, dynamic, 
              and diversified civil engineering construction firms, delivering commercial and residential interior works, 
              waterproofing solutions, civil construction, restoration, and turnkey projects.
            </p>
            <p className="font-semibold text-white">
              The brand stands for quality workmanship of the highest standards and the ability to deliver projects on time.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: LEGACY (WHITE - handled in component) */}
      <VerticalTimeline />

      {/* SECTION 3: PRESENCE (DARK - BLUE) */}
      <section className="py-20 px-6 text-center bg-[var(--about-bg-dark)] text-[var(--about-text-dark)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Our Presence</h2>
          <div className="bg-white w-full md:w-[60%] mx-auto rounded-2xl overflow-hidden border border-white/10 relative shadow-sm">
             <img 
               src="/map.png" 
               alt="Map of India Presence" 
               className="w-full h-auto" 
             />
          </div>
        </div>
      </section>

      {/* SECTION 4: VISION, VALUES & COMMITMENTS (WHITE) */}
      <section className="py-20 px-6 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Row 1: Vision, Mission, Values */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Vision */}
            <div className="bg-[#1f2937] p-8 rounded-2xl border-t-4 border-[var(--about-accent)] shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <TrendingUp size={24} className="text-[var(--about-accent)]"/> Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To be a world-class construction and infrastructure enterprise committed to quality, 
                timely completion, customer satisfaction, and continuous learning.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#1f2937] p-8 rounded-2xl border-t-4 border-[var(--about-accent)] shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <ShieldCheck size={24} className="text-[var(--about-accent)]"/> Mission
              </h3>
              <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-5">
                <li>Adopt latest technologies in engineering & construction.</li>
                <li>Encourage innovation, integrity, and skill upgradation.</li>
                <li>Maintain a safe and motivating work environment.</li>
                <li>Act as a responsible corporate citizen.</li>
              </ul>
            </div>

            {/* Values */}
            <div className="bg-[#1f2937] p-8 rounded-2xl border-t-4 border-[var(--about-accent)] shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <Users size={24} className="text-[var(--about-accent)]"/> Values
              </h3>
              <ul className="text-gray-300 leading-relaxed grid grid-cols-1 gap-2">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--about-accent)] rounded-full"></div> Openness and trust</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--about-accent)] rounded-full"></div> Integrity and reliability</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--about-accent)] rounded-full"></div> Superior quality commitment</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--about-accent)] rounded-full"></div> Accountability & Creativity</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[var(--about-accent)] rounded-full"></div> People power</li>
              </ul>
            </div>
          </div>

          {/* Row 2: Quality & Safety */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#1f2937] p-8 rounded-2xl border-t-4 border-[var(--about-accent)] shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-[var(--about-accent)]"/> Quality Commitment
              </h3>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--about-accent)] font-bold">✓</span> Quality planning through checklists and inspections.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--about-accent)] font-bold">✓</span> Continuous improvement through testing.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--about-accent)] font-bold">✓</span> Consistent adherence to time schedules.
                </li>
              </ul>
            </div>

            <div className="bg-[#1f2937] p-8 rounded-2xl border-t-4 border-[var(--about-accent)] shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <HardHat className="w-8 h-8 text-[var(--about-accent)]"/> Safety Commitment
              </h3>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--about-accent)] font-bold">✓</span> Safe working environments across all locations.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--about-accent)] font-bold">✓</span> Implementation of strict safety norms and SOPs.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--about-accent)] font-bold">✓</span> Regular training & awareness programs.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: SUCCESS MANTRA (LIGHT/DARK adjusted) */}
      <section className="pt-20 pb-20 px-6 bg-[var(--about-bg-dark)] text-gray-800">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">

          <h2 className="text-4xl md:text-5xl font-bold mb-10 relative z-10 text-[#972727]">Our Success Mantra</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 text-left">
            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-2xl mb-2 text-[#972727]">3rd Generation</h4>
              <p className="text-gray-600">Legacy in civil construction passed down through decades.</p>
            </div>
             <div className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-2xl mb-2 text-[#972727]">40+ Years</h4>
              <p className="text-gray-600">Directors with vast on-field experience.</p>
            </div>
             <div className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-2xl mb-2 text-[#972727]">In-House Teams</h4>
              <p className="text-gray-600">Formwork, reinforcement, and finishing experts.</p>
            </div>
             <div className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-2xl mb-2 text-[#972727]">28+ Years</h4>
              <p className="text-gray-600">Average long-term workforce loyalty.</p>
            </div>
             <div className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-2xl mb-2 text-[#972727]">80% Qualified</h4>
              <p className="text-gray-600">Technically skilled staff (Diploma & B.E. Civil).</p>
            </div>
             <div className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-2xl mb-2 text-[#972727]">Proven Delivery</h4>
              <p className="text-gray-600">Strong record of on-time project handover.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
