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
          {[1, 2, 3, 4].map((_, index) => (
            <CarouselItem key={index} className="h-[60vh] md:h-[85vh]">
              <div className="w-full h-full relative">
                <img
                  src="/placeholder.png"
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/30" />
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
            Premium Structural Solutions
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-100 drop-shadow-md">
            RCC • Interiors • Restoration • Waterproofing • Turnkey Projects
          </p>
        </div>
      </div>
    </section>
  )
}
