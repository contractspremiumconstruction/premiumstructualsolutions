"use client"

import { useEffect, useRef } from "react"

export default function VerticalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            // Year
            const year = target.querySelector(".timeline-year")
            if (year) {
                year.classList.remove("opacity-0", "translate-x-10")
                year.classList.add("opacity-100", "translate-x-0")
            }
            
            // Node
            const node = target.querySelector(".timeline-node")
            if (node) {
                 // small delay for node
                 setTimeout(() => {
                    node.classList.remove("scale-0", "opacity-0")
                    node.classList.add("scale-100", "opacity-100")
                 }, 300)
            }

            // Content
            const content = target.querySelector(".timeline-content")
            if (content) {
                // delay for content
                setTimeout(() => {
                    content.classList.remove("opacity-0", "-translate-x-10")
                    content.classList.add("opacity-100", "translate-x-0")
                }, 600)
            }
          }
        })
      },
      { threshold: 0.4 }
    )

    const items = containerRef.current?.querySelectorAll(".timeline-row")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white py-24 px-6 text-gray-900 overflow-hidden relative font-sans">
      {/* Background Texture: Subtle Grid/Blueprint */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto relative px-4" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center mb-24 relative z-10">
             <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-[#1f2937]">OUR LEGACY</h2>
             <div className="w-20 h-1 bg-[#1f2937] mx-auto"></div>
        </div>

        {/* The Spine Line - Clamped length */}
        {/* Positioned relative to the grid columns below. 
            We use a fixed percentage for the left column (e.g. 40%) so the line is at 40%. */}
        <div className="absolute left-[20%] md:left-[40%] top-50 bottom-16 w-1 bg-[#1f2937] opacity-20 z-0 -translate-x-1/2"></div>
         {/* Top/Bottom Caps for Spine to make it look cleaner */}
        {/* <div className="absolute left-[20%] md:left-[40%] top-24 w-2 h-2 bg-[#972727] rounded-full -translate-x-1/2 -translate-y-1/2"></div> */}
        {/* <div className="absolute left-[20%] md:left-[40%] bottom-24 w-2 h-2 bg-[#972727] rounded-full -translate-x-1/2 translate-y-1/2"></div> */}


        <div className="space-y-20">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="timeline-row flex items-start relative z-10 group"
            >
              {/* 1. Year (Left Column) - Width matches spine position (40%) */}
              <div className="w-[20%] md:w-[40%] text-right pr-8 md:pr-16 flex-shrink-0 timeline-year opacity-0 translate-x-10 transition-all duration-700 ease-out">
                <span className="text-4xl md:text-7xl font-bold text-black select-none tracking-tighter block transition-colors">
                  {milestone.year}
                </span>
              </div>

              {/* 2. Node (Center) - Absolute centered on the 40% line */}
              {/* Since we are using flex, this is tricky. Better to have the node in the content flow or absolute?
                  Let's use absolute positioning relative to the row container for perfect alignment with the spine.
                  Left = 40% (same as spine style).
              */}
              <div className="absolute left-[20%] md:left-[39.8%] top-2 md:top-6 -translate-x-1/2 z-20 timeline-node scale-0 opacity-0 transition-all duration-500 ease-back-out origin-center">
                 <div className="w-4 h-4 md:w-5 md:h-5 bg-white border-4 border-[#1f2937] rounded-full shadow-[0_0_10px_#1f2937] group-hover:scale-125 transition-transform duration-300"></div>
              </div>

              {/* 3. Content (Right Column) - Taking remaining space */}
              <div className="flex-1 pl-8 md:pl-16 pt-1 md:pt-3 timeline-content opacity-0 -translate-x-10 transition-all duration-700 ease-out">
                <h3 className="text-xl md:text-3xl font-bold text-[#972727] mb-2 leading-tight">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed max-w-xl">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
