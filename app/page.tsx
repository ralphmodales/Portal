import { Button } from "@/components/ui/button";
import * as React from "react"

const contents = [
  { name: '', path: "https://media.gettyimages.com/id/1961001965/video/4k-soft-wave-background-loopable.jpg?s=640x640&k=20&c=dC80tjikDexdp4tWiednddY93AXmpzl72Fzp0N3ZyT4=" },
  { name: '', path: "https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-white-abstract-wave-background-in-3d-rendering-with-a-rippled-cloth-image_3619171.jpg" },
  { name: '', path: "https://sukuna.co.uk/wp-content/uploads/2024/06/sukuna-manga-panel.jpg" },
]

const features = [
  { 
    title: 'Efficient Leave Management', 
    content: "Submit, review, and approve leave requests with ease.",
    imageSrc: "https://wallpaperaccess.com/full/8642986.gif",
    order: 1
  },
  { 
    title: 'Streamlined Incident Reporting', 
    content: "Quickly log and track incidents to ensure timely resolutions.",
    imageSrc: "https://media1.giphy.com/media/3ohs7J2aQBUeZmMtfG/200.gif?cid=6c09b952f6vxnshzdbmx4nb2j4rivgujnz9rtkorzchulon0&ep=v1_internal_gif_by_id&rid=200.gif&ct=g",
    order: 2
  },
  { 
    title: 'Centralized Asset Management', 
    content: "Monitor and manage all your assets from a platform.",
    imageSrc: "https://i.imgur.com/QS9fsMA.gif",
    order: 3
  },
  { 
    title: 'Convenient Food Ordering', 
    content: "Order meals directly from the platform for hassle-free dining solutions.",
    imageSrc: "https://i.pinimg.com/originals/cc/73/81/cc73813f50a02b766ea5ad4e07cd5433.gif",
    order: 4
  }
];


export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white overflow-hidden relative">
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col items-start space-y-4 text-left px-4">
            <div className="space-y-2 max-w-[700px]">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                Welcome to the Company Systems
              </h1>
              <p className="text-black md:text-md font-light">Effortlessly manage leave and streamline incident reporting with Popeyes' advanced system—simplifying tracking, approvals, and analysis for smooth operations.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/systems">
                <Button className="bg-black text-white hover:bg-black hover:text-white rounded-2xl" size="lg">Get Started</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 relatize z-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
              Simplify Your Workforce Management
            </h2>
            <p className="text-black text-md font-light">Take control of leave tracking and incident reporting with Popeyes' smart system. Designed to enhance efficiency and decision-making, it's your all-in-one tool for smooth operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            {contents.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full aspect-square">
                  <img src={item.path}
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full h-1/5 bg-transparent">
                      <div className="absolute bottom-0 w-full p-4 text-center">
                        <h3 className="text-2xl text-black font-bold">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 relative z-20">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            {features
              .sort((a, b) => a.order - b.order)
              .map((feature, index) => (
                <React.Fragment key={index}>
                  {index % 2 === 0 ? (
                    <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
                      <img 
                        src={feature.imageSrc}
                        className="rounded-lg w-full h-auto" 
                        alt="Feature" 
                        width="800" 
                        height="600" 
                      />
                    </div>
                  ) : null}
                  <div className="text-left space-y-4">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xl">{feature.content}</p>
                  </div>
                  {index % 2 === 1 ? (
                    <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
                      <img 
                        src={feature.imageSrc}
                        className="rounded-lg w-full h-auto" 
                        alt="Feature" 
                        width="800" 
                        height="600" 
                      />
                    </div>
                  ) : null}
                </React.Fragment>
              ))}
          </div>
        </div>
      </section> 
    </main>
  );
}
