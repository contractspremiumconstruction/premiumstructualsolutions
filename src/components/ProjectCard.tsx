import {cn} from "@/lib/utils"

interface ProjectCardProps {
  image: string
  title: string
  className?: string
}

export default function ProjectCard({ image, title, className }: ProjectCardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-300", className)}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 md:p-5">
        <p className="text-gray-600 text-lg md:text-xl font-medium leading-tight">
          {title}
        </p>
      </div>
    </div>
  )
}
