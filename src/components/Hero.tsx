export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/placeholder.png')",
      }}
    >
      <div className="h-full bg-black/50 flex items-center">
        <div className="max-w-4xl mx-auto px-6 text-white">
          <h1 className="text-6xl mb-4">
            Premium Structural Solutions
          </h1>
          <p className="mb-6 text-2xl">
            RCC, Interiors, Restoration & Waterproofing & Turnkey Projects
          </p>
        </div>
      </div>
    </section>
  )
}
