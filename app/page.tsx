import { Button } from "@/components/ui/button";

const contents = [
  { name: 'Monitor Leaves', path: "https://i.pinimg.com/originals/7a/88/2a/7a882ab5c4fba435f0c93f44ab461420.jpg" },
  { name: 'Report Incident', path: "https://i.redd.it/gch9nryt2gnd1.jpeg" },
  { name: 'Landing Page', path: "https://sukuna.co.uk/wp-content/uploads/2024/06/sukuna-manga-panel.jpg" },
]

const features = [
  { title: 'Efficient Leave Management', content: "" },
  { title: 'Efficient Leave Management', content: "" },
  { title: 'Efficient Leave Management', content: "" },
]


export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white overflow-hidden relative">
        <div
          className="absolute inset-0 z-0 top-10 rounded-3xl"
          style={{
            backgroundImage: "url('/wave.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col items-start space-y-4 text-left px-4">
            <div className="space-y-2 max-w-[700px]">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Welcome to the Popeyes Systems
              </h1>
              <p className="text-gray-100 md:text-md">Effortlessly manage leave and streamline incident reporting with Popeyes' advanced system—simplifying tracking, approvals, and analysis for smooth operations.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/systems">
                <Button className="bg-white text-black hover:bg-black hover:text-white rounded-2xl">Get Started</Button>
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
            <p className="text-gray-600 text-lg">Take control of leave tracking and incident reporting with Popeyes' smart system. Designed to enhance efficiency and decision-making, it's your all-in-one tool for smooth operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            {contents.map((item) => (
              <div className="bg-white rounder-lg shadow-lg overflow-hidden">
                <div className="relative w-full aspect-square">
                  <img src={item.path}
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full h-1/5 bg-gradient-to-t from-white/60 via-white/30 to- backdrop-blur-[10px]">
                      <div className="absolute bottom-0 w-full p-4">
                        <h3 className="text-2xl text-zinc-700 font-semibold">{item.name}</h3>
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
            <div className="relative w-full rounded-lg shadow-lg overflow-hidden md:order-1">
              <img src="https://wallpaperaccess.com/full/8642986.gif"
                className="rounded-lg w-full h-auto" alt="GIF" width="800" height="600" />
            </div>
            <div className="text-left space-y-4 md:order-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-black">Efficient Leave Management</h3>
              <p className="text-gray-600 text-xl">Submit, review, and approve leave requests with ease.</p>
            </div>
            <div className="text-left space-y-4 md:order-3">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-black">Efficient Leave Management</h3>
              <p className="text-gray-600 text-xl">Submit, review, and approve leave requests with ease.</p>
            </div>
            <div className="relative w-full rounded-lg shadow-lg overflow-hidden md:order-4">
              <img src="https://wallpaperaccess.com/full/8642986.gif"
                className="rounded-lg w-full h-auto" alt="GIF" width="800" height="600" />
            </div>
            <div className="relative w-full rounded-lg shadow-lg overflow-hidden md:order-5">
              <img src="https://wallpaperaccess.com/full/8642986.gif"
                className="rounded-lg w-full h-auto" alt="GIF" width="800" height="600" />
            </div>
            <div className="text-left space-y-4 md:order-6">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-black">Efficient Leave Management</h3>
              <p className="text-gray-600 text-xl">Submit, review, and approve leave requests with ease.</p>
            </div>
            <div className="text-left space-y-4 md:order-7">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-black">Efficient Leave Management</h3>
              <p className="text-gray-600 text-xl">Submit, review, and approve leave requests with ease.</p>
            </div>
            <div className="relative w-full rounded-lg shadow-lg overflow-hidden md:order-8">
              <img src="https://wallpaperaccess.com/full/8642986.gif"
                className="rounded-lg w-full h-auto" alt="GIF" width="800" height="600" />
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-white border-t border-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Popeyes Philippines. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
