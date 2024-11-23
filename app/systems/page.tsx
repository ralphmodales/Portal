"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Search, Filter, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Systems() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [api]);

  const systems = [
    {
      title: "Leave Monitoring",
      tagline: "Time off tracking, reimagined.",
      description: "Revolutionize how your team manages time off with intelligent workflows and real-time insights.",
      imageUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/11881f98-aa3a-4c5f-968c-109bfeab27f9.jpeg",
      category: "HR",
      features: ["Smart approvals", "Calendar sync", "Analytics hub"],
      link: "/systems/leave-monitoring"
    },
    {
      title: "Incident Report",
      tagline: "Safety first. Always.",
      description: "Transform workplace safety with instant reporting and intelligent incident prevention.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*bsCOdEWs1haIfrWe2e12Hg.png",
      category: "Safety",
      features: ["Live reporting", "Smart tracking", "Compliance made easy"],
      link: "/systems/incident-report"
    },
    {
      title: "IT Asset",
      tagline: "Your tech, under control.",
      description: "Take control of your technology ecosystem with powerful lifecycle management.",
      imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Berserk-1.jpg",
      category: "IT",
      features: ["Smart tracking", "Predictive maintenance", "Cost insights"],
      link: "/systems/asset-management"
    },
    {
      title: "Performance",
      tagline: "Growth through insight.",
      description: "Elevate your team's potential with data-driven performance insights and continuous feedback.",
      imageUrl: "https://wallpapers.com/images/hd/cowboy-bebop-spike-spiegel-manga-bjgw5ybqbmqerwce.jpg",
      category: "HR",
      features: ["360° insights", "Goal alignment", "Growth paths"],
      link: "/systems/performance-evaluation"
    },
    {
      title: "Document Hub",
      tagline: "Every file. Anywhere. Anytime.",
      description: "Your organization's knowledge, secured and accessible with intelligent search and versioning.",
      imageUrl: "https://wallpapers.com/images/hd/gojo-satoru-shining-eyes-vzqm510xmlaiwyx3.jpg",
      category: "Operations",
      features: ["Smart versioning", "Intelligent search", "Enterprise security"],
      link: "/systems/document-management"
    }
  ];

  const categories = ["all", ...new Set(systems.map(system => system.category))];

  const filteredSystems = systems.filter(system => {
    const matchesSearch = system.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         system.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || system.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1">
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
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

      <section className="py-6 w-full bg-gray-50">
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
                    <span className="text-sm font-semibold uppercase tracking-wider mb-2 bg-white/20 backdrop-blur-sm w-fit px-3 py-1 rounded-full">
                      {system.category}
                    </span>
                    <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
                      {system.title}
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl opacity-80 drop-shadow-md">
                      {system.description}
                    </p>
                    <div className="flex gap-4 items-center">
                      <Link href={system.link}>
                        <Button 
                          variant="outline" 
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all"
                        >
                          Explore System
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
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
                index === current - 1 ? "bg-black" : "bg-black/20"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-semibold mb-4">Enterprise Systems</h1>
            <p className="text-xl text-gray-500">Powerful tools. Seamless integration. Endless possibilities.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search systems..."
                className="pl-10 bg-gray-50 border-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSystems.map((system, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 flex flex-col h-full group">
                <div className="flex-grow">
                  <div className="text-sm font-medium text-gray-500 mb-2">{system.category}</div>
                  <h3 className="text-2xl font-semibold mb-2">{system.title}</h3>
                  <p className="text-lg font-medium text-gray-900 mb-4">{system.tagline}</p>
                  <p className="text-gray-600 mb-6">{system.description}</p>
                  <div className="space-y-3">
                    {system.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-black" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <Link href={system.link}>
                    <div className="flex items-center justify-between group cursor-pointer">
                      <span className="text-xs font-medium">
                        Visit System
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
