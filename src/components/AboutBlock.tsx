interface AboutBlockProps {
  image: string
  title: string
  text: string
  reverse?: boolean
}

export default function AboutBlock({ image, title, text, reverse }: AboutBlockProps) {
  return (
    <div
      className={`flex flex-col md:flex-row text-[#972727] ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-10 py-16`}
    >
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-95 object-cover rounded-lg"
        />
      </div>

      <div className="md:w-1/2">
        <h1 className="text-5xl mb-4">
          {title}
        </h1>
        <p className="text-gray-600 text-2xl leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  )
}
