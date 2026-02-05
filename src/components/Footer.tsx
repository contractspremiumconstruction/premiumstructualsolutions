import { useNavigate } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#141414] text-white min-h-52 pb-5">
      <div className="w-full bg-[#141414] flex justify-center items-center min-h-52 mb-5">
        <div className="flex justify-around gap-16 h-48 mt-6">
          <div className="hidden lg:flex flex-col gap-3">
            <h1 className="text-2xl relative inline-block">
              PREMIUM STRUCTURAL SOLUTIONS LLP
            </h1>
            <Separator className="bg-gray-200"/>

            <p className="text-m text-gray-300 leading-relaxed">
              Premium structural and waterproofing solutions for <br />
              modern buildings. We specialize in RCC, <br /> 
              Interiors, Restoration & Waterproofing, and <br />
              Turnkey Projects with precision and quality. <br />
            </p>
          </div>


          <div className="hidden lg:flex flex-col gap-3">
            <h1 className="text-2xl relative inline-block">
              Quick Links
            </h1>
            <Separator className="bg-gray-200"/>

            <div className="text-gray-300 flex flex-col items-start gap-1">
              <button
                onClick={() => navigate("/about")}
                className="cursor-pointer hover:text-white transition"
              >
                About Us
              </button>

              <button
                onClick={() => navigate("/rcc")}
                className="cursor-pointer hover:text-white transition"
              >
                RCC
              </button>

              <button
                onClick={() => navigate("/interiors")}
                className="cursor-pointer hover:text-white transition"
              >
                Interiors
              </button>

              <button
                onClick={() => navigate("/restoration-waterproofing")}
                className="cursor-pointer hover:text-white transition"
              >
                Restoration & Waterproofing
              </button>

              <button
                onClick={() => navigate("/turnkey-projects")}
                className="cursor-pointer hover:text-white transition"
              >
                Turnkey Projects
              </button>
            </div>
          </div>


          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-4">
              <h1 className="text-2xl relative inline-block">
                Contact Us
              </h1>
            </div>
            <Separator className="bg-gray-200"/>

            <div className="flex flex-col gap-2">
              <p className="text-m text-gray-300 leading-relaxed">
                A-59, Level 1, Dewan Center, <br />
                S.V. Road, Jogeshwari (West), <br />
                MUMBAI - 400102
              </p>
              <h3>📞 +022 49768302</h3>
              <h3>✉️ contracts.premiumconst@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14
          rounded-full
          bg-[#25D366]
          flex items-center justify-center
          shadow-lg
          transition-transform duration-200
          hover:scale-110
        "
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>


      {/* Bottom copyright bar */}
      <div className="bg-[#141414] text-center text-m h-8 py-4 pt-10 flex justify-center items-center">
        © {year} PREMIUM STRUCTURAL SOLUTIONS LLP Modular System
      </div>
    </footer>
  )
}
