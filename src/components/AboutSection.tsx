import AboutBlock from "./AboutBlock"

export default function AboutSection() {
  const placeholder = "/placeholder.png";

  return (
    <section className="max-w-7xl mx-auto px-6">
      <AboutBlock
        image={placeholder}
        title="Experience the Excellence of PREMIUM STRUCTURAL SOLUTIONS LLP"
        text="At PREMIUM STRUCTURAL SOLUTIONS LLP, we believe true durability lies in the details. We go beyond construction—creating structures that stand the test of time and protect your investment."
      />

      <AboutBlock
        image={placeholder}
        title="Expert RCC Structured Solutions"
        text="Our reinforced concrete solutions combine premium materials, intelligent engineering, and refined techniques to build solid foundations for residential and commercial projects."
        reverse={true}
      />

      <AboutBlock
        image={placeholder}
        title="Restoration & Waterproofing"
        text="From roof waterproofing to structural restoration, our solutions harmonize protection and function, creating environments that are safe, dry, and secure."
      />

      <AboutBlock
        image={placeholder}
        title="Turnkey Project Management"
        text="Our turnkey solutions blend efficiency with expertise, managing every aspect of your project to ensure timely delivery and superior quality."
        reverse={true}
      />
    </section>
  )
}
