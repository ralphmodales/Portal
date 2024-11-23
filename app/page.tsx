'use client'

import { Button } from "@/components/ui/button";
import * as React from "react"
import { motion } from "framer-motion"

const contents = [
  { name: '', path: "https://media.gettyimages.com/id/1961001965/video/4k-soft-wave-background-loopable.jpg?s=640x640&k=20&c=dC80tjikDexdp4tWiednddY93AXmpzl72Fzp0N3ZyT4=" },
  { name: '', path: "https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-white-abstract-wave-background-in-3d-rendering-with-a-rippled-cloth-image_3619171.jpg" },
  { name: '', path: "/wave.jpg" },
]

const features = [
  { 
    title: 'Comprehensive Leave Management', 
    content: "Access and manage employee leave requests across all Popeyes Philippines locations.",
    imageSrc: "https://wallpaperaccess.com/full/8642986.gif",
    order: 1
  },
  { 
    title: 'Integrated Incident Reporting', 
    content: "Centralize incident logging and tracking for all Popeyes Philippines branches.",
    imageSrc: "https://media1.giphy.com/media/3ohs7J2aQBUeZmMtfG/200.gif?cid=6c09b952f6vxnshzdbmx4nb2j4rivgujnz9rtkorzchulon0&ep=v1_internal_gif_by_id&rid=200.gif&ct=g",
    order: 2
  },
  { 
    title: 'Unified Asset Management', 
    content: "Monitor and manage assets across all Popeyes Philippines systems from a single platform.",
    imageSrc: "https://i.imgur.com/QS9fsMA.gif",
    order: 3
  },
  { 
    title: 'Streamlined Food Ordering', 
    content: "Coordinate food orders across all Popeyes Philippines locations through our integrated system.",
    imageSrc: "https://i.pinimg.com/originals/cc/73/81/cc73813f50a02b766ea5ad4e07cd5433.gif",
    order: 4
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.2 } }
};

const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

export default function Home() {
  return (
    <motion.main 
      className="flex-1"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <motion.section 
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto relative z-20">
          <motion.div 
            className="flex flex-col items-start space-y-4 text-left px-4"
            variants={staggerChildren}
          >
            <motion.div className="space-y-2 max-w-[700px]" variants={fadeInUp}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                Popeyes Philippines Systems Portal
              </h1>
              <p className="text-black md:text-md font-light">Your gateway to all Popeyes Philippines management systems—streamlining operations, enhancing efficiency, and unifying our processes across all locations.</p>
            </motion.div>
            <motion.div className="flex space-x-4" variants={fadeInUp}>
              <a href="/systems">
                <Button className="bg-black text-white hover:bg-black hover:text-white rounded-2xl" size="lg">Access Systems</Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section 
        className="w-full py-12 md:py-24 lg:py-32 relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        variants={fadeInUp}
      >
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-12"
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black"
              variants={fadeInUp}
            >
              Unified Management Systems
            </motion.h2>
            <motion.p 
              className="text-black text-md font-light"
              variants={fadeInUp}
            >
              Access all Popeyes Philippines management tools in one place. From leave tracking to incident reporting, our integrated portal enhances efficiency and decision-making across all locations.
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-2"
            variants={staggerChildren}
          >
            {contents.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeInUp}
                {...hoverScale}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <motion.section 
        className="w-full py-12 md:py-24 lg:py-32 relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        variants={fadeInUp}
      >
        <div className="container px-4 md:px-6 mx-auto">
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black mb-12 text-center"
            variants={fadeInUp}
          >
            Integrated Systems
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
            variants={staggerChildren}
          >
            {features
              .sort((a, b) => a.order - b.order)
              .map((feature, index) => (
                <React.Fragment key={index}>
                  {index % 2 === 0 ? (
                    <motion.div 
                      className="relative w-full rounded-lg shadow-lg overflow-hidden"
                      variants={fadeInUp}
                      {...hoverScale}
                      whileInView={{
                        y: [50, 0],
                        opacity: [0, 1],
                        transition: { duration: 1.2, ease: "easeOut" }
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <img 
                        src={feature.imageSrc}
                        className="rounded-lg w-full h-auto" 
                        alt="Feature" 
                        width="800" 
                        height="600" 
                      />
                    </motion.div>
                  ) : null}
                  <motion.div 
                    className="text-left space-y-4"
                    variants={fadeInUp}
                  >
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xl">{feature.content}</p>
                  </motion.div>
                  {index % 2 === 1 ? (
                    <motion.div 
                      className="relative w-full rounded-lg shadow-lg overflow-hidden"
                      variants={fadeInUp}
                      {...hoverScale}
                      whileInView={{
                        y: [50, 0],
                        opacity: [0, 1],
                        transition: { duration: 1.2, ease: "easeOut" }
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <img 
                        src={feature.imageSrc}
                        className="rounded-lg w-full h-auto" 
                        alt="Feature" 
                        width="800" 
                        height="600" 
                      />
                    </motion.div>
                  ) : null}
                </React.Fragment>
              ))}
          </motion.div>
        </div>
      </motion.section> 
    </motion.main>
  );
}


