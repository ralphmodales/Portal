"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Facebook, Github, Twitter } from 'lucide-react'
import type { TeamMember } from "@/types/team-member"

const teamMembers: TeamMember[] = [
  {
    name: "Ralph Roland Modales",
    role: "Systems Architect & Software Engineer",
    image: "/ralphmodales.jpg",
    description: "Creator of core systems and asset management modifications",
    social: {
      github: "https://github.com/ralphmodales",
      twitter: "https://twitter.com/ralphmodales",
      facebook: "https://facebook.com/ralphmodales"
    }
  },
  {
    name: "Sim Jose",
    role: "Team Lead",
    image: "/simjose.jpg",
    description: "Guiding the team in developing innovative solutions and ensuring project success",
    social: {
      github: "https://github.com/simjose",
    }
  }
]

export default function About() {
  return (
    <main className="flex-1">
      <section className="w-full bg-white py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
                About us
              </h1>
            </div>
            <div className="md:flex md:items-center md:justify-end">
              <h2 className="text-2xl md:text-2xl font-semibold tracking-tight text-black">
                Learn more 
                <br />
                about the makers.
              </h2>
            </div>
          </div>

          <div className="py-12 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-none shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-zinc-600 mb-2">{member.role}</p>
                    <p className="text-sm text-zinc-500 mb-4 flex-grow line-clamp-3 sm:line-clamp-4">{member.description}</p>
                    {member.social && (
                      <div className="flex gap-2 mt-auto">
                        {member.social.github && (
                          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                            <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              <span className="sr-only">GitHub</span>
                            </a>
                          </Button>
                        )}
                        {member.social.twitter && (
                          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                              <Twitter className="h-4 w-4" />
                              <span className="sr-only">Twitter</span>
                            </a>
                          </Button>
                        )}
                        {member.social.facebook && (
                          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                              <Facebook className="h-4 w-4" />
                              <span className="sr-only">Facebook</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}


