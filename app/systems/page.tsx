"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

export default function Systems() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    const autoplayInterval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(autoplayInterval)
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    api.scrollTo(0)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

    const systems = [
    {
      title: "Leave Monitoring System",
      description: "Streamline employee absence tracking and management",
      imageUrl: "https://www.culturefrontier.com/wp-content/uploads/2023/08/The-Fallen-Angel-Cover.jpg",
      link: "/systems/adaptive-intelligence"
    },
    {
      title: "Incident Report System",
      description: "Efficiently document and analyze workplace incidents for improved safety",
      imageUrl: "https://wallpapercat.com/w/full/9/d/1/195709-3840x2160-desktop-4k-lana-del-rey-background.jpg",
      link: "/systems/quantum-dynamics"
    },
    {
      title: "IT Asset Management",
      description: "Track and optimize your organization's technology resources",
      imageUrl: "/placeholder.svg?height=900&width=1600", 
      link: "/systems/neural-networks"
    }
  ]

  return (
    <main className="flex-1">
      <section className="w-full bg-white py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
                Systems
              </h1>
            </div>
            <div className="md:flex md:items-center md:justify-end">
              <h2 className="text-2xl md:text-2xl font-semibold tracking-tight text-black">
                What is impossible for you
                <br />
                is not impossible for me.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 w-full">
        <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {systems.map((system, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[80vh] overflow-hidden">
                  <img 
                    src={system.imageUrl} 
                    alt={system.title} 
                    className="absolute inset-0 w-full h-full object-cover brightness-50 rounded-xl"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-16 text-white">
                    <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
                      {system.title}
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl opacity-80 drop-shadow-md">
                      {system.description}
                    </p>
                    <Link href={system.link}>
                      <Button 
                        variant="outline" 
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all"
                      >
                        Explore System
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
        </Carousel>
        <div className="py-2 flex justify-center space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === current - 1 ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  )
}


