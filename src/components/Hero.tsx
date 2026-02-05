import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const projects = [
    { title: "Asian Paints Corp. Office, Mumbai", image: "/Asianpaints.png" },
    { title: "Sagar Darshan Tower, Nerul", image: "/SagarDarshan.png" },
    { title: "Surat Central Shopping Mall", image: "/CentralMall.png" },
    { title: "G.E. Links (Goregoan), Mumbai", image: "/GELinks.png" },
    { title: "Kalpatru Siddhanchal Phase (III), Thane", image: "/Kalpatru.png" },
    { title: "SVK Diamonds, Surat", image: "/SVKdiamonds.png" },
    { title: "Vishwa Lad Parishad, Mumbai", image: "/Vishwa.png" },
  ]

  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] bg-black">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="h-[60vh] md:h-[85vh]">
              <div className="w-full h-full relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
                
                <div className="absolute bottom-16 md:bottom-24 left-0 right-0 text-center z-20 px-4">
                  <h3 className="text-white text-xl md:text-3xl font-bold tracking-wide drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 w-24 h-24 md:w-48 md:h-48 border-0 bg-transparent hover:bg-transparent text-white/70 hover:text-white transition-colors cursor-pointer top-1/2 -translate-y-1/2">
          <ChevronLeft className="w-20 h-20 md:w-40 md:h-40" strokeWidth={3} />
        </CarouselPrevious>
        <CarouselNext className="right-4 w-24 h-24 md:w-48 md:h-48 border-0 bg-transparent hover:bg-transparent text-white/70 hover:text-white transition-colors cursor-pointer top-1/2 -translate-y-1/2">
          <ChevronRight className="w-20 h-20 md:w-40 md:h-40" strokeWidth={3} />
        </CarouselNext>
      </Carousel>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="max-w-5xl px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-xl font-serif">
            Premium Structural Solutions LLP
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-100 drop-shadow-md">
            RCC • Interiors • Restoration • Waterproofing • Turnkey Projects
          </p>
        </div>
      </div>
    </section>
  )
}
