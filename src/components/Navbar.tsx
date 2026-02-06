"use client"

import type React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const [formData, setFormData] = useState({
    enquiryType: "General",
    name: "",
    number: "",
    email: "",
  })

  const navItemClass = "cursor-pointer transition-transform hover:scale-110"
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
    const subject = encodeURIComponent("New General Enquiry from Website")
    const body = encodeURIComponent(
      `Enquiry Type: ${formData.enquiryType}
        Name: ${formData.name}
        Phone: ${formData.number}
        Email: ${formData.email}`
    )

    window.location.href = `mailto:contracts.premiumconst@gmail.com?subject=${subject}&body=${body}`
    setFormData({
      enquiryType: "Bedroom",
      name: "",
      number: "",
      email: "",
    })
    setOpen(false)
  }
  
  /* 
    Desktop Navigation: Groups services under a "Services" dropdown.
    - Hover interaction for dropdown
    - Dark background for contrast against white navbar
  */
  const DesktopNavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <button
        className={navItemClass}
        onClick={() => {
          navigate("/")
          onClick?.()
        }}
      >
        Home
      </button>

      {/* Services Dropdown */}
      <div className="relative group h-full flex items-center">
        <button className={`${navItemClass} flex items-center gap-1`}>
          Services
        </button>
        
        {/* Dropdown Content */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#2e2e2e] text-white shadow-xl rounded-md overflow-hidden transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto border border-gray-700">
          <div className="py-2 flex flex-col items-start">
            <button
              className="w-full text-left px-6 py-3 hover:bg-[#3e3e3e] text-lg transition-colors cursor-pointer"
              onClick={() => {
                navigate("/rcc")
                onClick?.()
              }}
            >
              RCC
            </button>
            <button
              className="w-full text-left px-6 py-3 hover:bg-[#3e3e3e] text-lg transition-colors cursor-pointer"
              onClick={() => {
                navigate("/interiors")
                onClick?.()
              }}
            >
              Interiors
            </button>
            <button
              className="w-full text-left px-6 py-3 hover:bg-[#3e3e3e] text-lg transition-colors cursor-pointer"
              onClick={() => {
                navigate("/turnkey-projects")
                onClick?.()
              }}
            >
              Turnkey Projects
            </button>
            <button
              className="w-full text-left px-6 py-3 hover:bg-[#3e3e3e] text-lg transition-colors cursor-pointer"
              onClick={() => {
                navigate("/restoration-waterproofing")
                onClick?.()
              }}
            >
              Restoration & Waterproofing
            </button>
          </div>
        </div>
      </div>

      <button
        className={navItemClass}
        onClick={() => {
          navigate("/about")
          onClick?.()
        }}
      >
        About Us
      </button>

      <button
        className={navItemClass}
        onClick={() => {
          setOpen(true)
          onClick?.()
        }}
      >
        Contact Us
      </button>
    </>
  )

  /* 
    Mobile Navigation: Keeps all links as a flat list for easy access.
  */
  const MobileNavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <button
        className={navItemClass}
        onClick={() => {
          navigate("/")
          onClick?.()
        }}
      >
        Home
      </button>
      
      {/* Flat list for mobile, no dropdowns */}
      <button
        className={navItemClass}
        onClick={() => {
          navigate("/rcc")
          onClick?.()
        }}
      >
        RCC
      </button>

      <button
        className={navItemClass}
        onClick={() => {
          navigate("/interiors")
          onClick?.()
        }}
      >
        Interiors
      </button>

      <button
        className={navItemClass}
        onClick={() => {
          navigate("/turnkey-projects")
          onClick?.()
        }}
      >
        Turnkey Projects
      </button>

      <button
        className={navItemClass}
        onClick={() => {
          navigate("/restoration-waterproofing")
          onClick?.()
        }}
      >
        Restoration & Waterproofing
      </button>

      <button
        className={navItemClass}
        onClick={() => {
          navigate("/about")
          onClick?.()
        }}
      >
        About Us
      </button>

      <button
        className={navItemClass}
        onClick={() => {
          setOpen(true)
          onClick?.()
        }}
      >
        Contact Us
      </button>
    </>
  )


  return (
    <div className="fixed top-0 w-full bg-white shadow h-24 flex items-center px-6 z-50">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src="/logoFull.png"
            alt="PREMIUM STRUCTURAL SOLUTIONS LLP Logo"
            className="h-20"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-2xl">
          <DesktopNavLinks />
      </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button>
                <Menu className="h-8 w-8" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 bg-white">
              <nav className="flex flex-col gap-6 mt-12 text-xl">
                <MobileNavLinks onClick={() => setMobileOpen(false)} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Contact Dialog (shared) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-white border border-gray-200 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              Get In Touch
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill out the form below and we'll get back to you shortly.
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
    </div>
  )
}
