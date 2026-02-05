"use client"

import {useRef } from "react"
import {useInView } from "framer-motion"

export default function VerticalTimeline() {
  const milestones = [
    {
      year: "1955",
      title: "H.S. Khan & Sons",
      description: "Founded by Late Mr. Haji Hamid Khan Bhati.",
    },
    {
      year: "1990",
      title: "Naaz Constructions Pvt. Ltd.",
      description: "Expansion into a private limited entity.",
    },
    {
      year: "2005",
      title: "Naaz Construction Co.",
      description: "Continued growth and diversification.",
    },
    {
      year: "2011",
      title: "Dynamics Infraprojects",
      description: "Entry into infrastructure projects.",
    },
    {
      year: "2021",
      title: "Premium Structural Solutions LLP",
      description: "The modern, diversified entity of today.",
    },
  ]

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-[#1f2937] mb-4">OUR LEGACY</h2>
          <div className="w-20 h-1 bg-[#1f2937] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connector Line - Left Aligned */}
          <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8 pl-12">
            {milestones.map((milestone, index) => (
              <TimelineCard key={index} milestone={milestone} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ milestone }: { milestone: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div
      ref={ref}
      className={`relative transform transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Connector Dot */}
      <div className="absolute -left-[2.5rem] top-20 w-5 h-5 bg-white border-4 border-[#972727] rounded-full z-10 shadow-sm"></div>

      {/* Card */}
      <div className="bg-white hover:bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 transition-colors duration-300">
        <div className="flex flex-col items-start gap-2">
          {/* Year Badge */}
          <span className="inline-block bg-[#0B2545] text-white text-sm md:text-base font-bold px-4 py-1.5 rounded-full shadow-sm mb-2">
            {milestone.year}
          </span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            {milestone.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </div>
    </div>
  )
}
