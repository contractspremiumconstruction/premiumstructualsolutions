"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RestorationWaterproofing() {
  const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
    enquiryType: "Restoration & Waterproofing",
    name: "",
    number: "",
    email: "",
  })

  const nameInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        nameInputRef.current?.focus()
      }, 0)
    }
  }, [open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("New Restoration & Waterproofing Enquiry from Website")
    const body = encodeURIComponent(
      `Enquiry Type: ${formData.enquiryType}
        Name: ${formData.name}
        Phone: ${formData.number}
        Email: ${formData.email}`
    )

    window.location.href = `mailto:designstudio2929@gmail.com?subject=${subject}&body=${body}`
    setFormData({
      enquiryType: "Restoration & Waterproofing",
      name: "",
      number: "",
      email: "",
    })
    setOpen(false)
  }

  const placeholder = "/placeholder.png";

  return (
    <main className="pt-24">
      {/* 1️⃣ Hero */}
      <section className="relative h-[70vh]">
        <img src={placeholder} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl mb-4">
              Restoration & Waterproofing Experts
            </h1>
            <p className="text-2xl max-w-2xl">
              Protecting your structures from the elements.
            </p>
          </div>
        </div>
      </section>

      {/* 2️⃣ Intro */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-gray-600 text-2xl leading-relaxed">
          PREMIUM STRUCTURAL SOLUTIONS LLP provides advanced waterproofing and restoration services.
          We restore the integrity of your buildings and protect them against water damage, ensuring longevity and safety.
        </p>
      </section>

      {/* 3️⃣ Visual Proof */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 md:grid-rows-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
            <img key={i} src={placeholder} className="h-90 w-full object-cover hover:scale-110 transition duration-300" />
        ))}
      </section>

      {/* 4️⃣ Capabilities */}
      <section className="bg-gray-50 mt-20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-[#972727] mb-12 text-center">
            Complete Protection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-medium mb-3">
                Roof Waterproofing
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Specialized treatments for terrace and roof leaks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-medium mb-3">
                Basement Waterproofing
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Preventing seepage and dampness in underground structures.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-medium mb-3">
                Exterior Wall Coating
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Protective coatings to seal cracks and repel water.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-medium mb-3">
                Structural Restoration
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Repairing damaged concrete and masonry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ CTA */}
      <section className="pt-20 pb-12 px-6 text-center">
        <h1 className="text-5xl mb-4">
          Secure Your Property
        </h1>
        <p className="text-gray-600 text-2xl mb-6">
          Get a free consultation for your waterproofing needs.
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="px-8 py-3 bg-black text-xl text-white cursor-pointer hover:scale-110 transition hover:bg-[#242424]">
              Request a Consultation
            </button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md bg-white border border-gray-200 shadow-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                Get In Touch
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Fill out the form below and we’ll get back to you shortly.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Enquiry Type
                </Label>
                <Input
                  value={formData.enquiryType}
                  readOnly
                  className="bg-gray-100 border-gray-300 text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  ref={nameInputRef}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  placeholder="+91 0000000000"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <Input
                  type="email"
                  placeholder="john@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" className="w-full text-white cursor-pointer bg-[#972727] hover:bg-[#c52323]">
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  )
}
