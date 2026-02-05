import { useNavigate } from "react-router-dom"

export default function HomeCategories() {
  const navigate = useNavigate()



  const categories = [
    {
        title: "RCC",
        image: "/rcc/rcc1.png",
        path: "/rcc",
      },
    {
        title: "Interiors",
        image: "/interior/Interior2.png",
        path: "/interiors",
    },
    {
      title: "Restoration & Waterproofing",
      image: "/waterproofing/waterproofing1.png",
      path: "/restoration-waterproofing",
    },
    {
      title: "Turnkey Projects",
      image: "/turnkey/turnkey1.png",
      path: "/turnkey-projects",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-semibold text-[#972727] mb-10">
        Our Specialized Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.path)}
            className="cursor-pointer group transform transition-transform duration-300 hover:scale-110"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <p className="text-center mt-4 text-3xl font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
