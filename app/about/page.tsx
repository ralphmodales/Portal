"use client"

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
        </div>
      </section>
    </main>
  )
}
