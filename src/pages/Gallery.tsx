import { motion } from "motion/react";

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    category: "AC Repair",
    title: "Commercial AC Maintenance"
  },
  {
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    category: "Installation",
    title: "Split AC Installation"
  },
  {
    url: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop",
    category: "Tools & Equipment",
    title: "Professional Tooling"
  },
  {
    url: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2070&auto=format&fit=crop",
    category: "Renovation",
    title: "Interior Renovation"
  },
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    category: "Civil Work",
    title: "Masonry & Plastering"
  },
  {
    url: "https://in.mitsubishielectric.com/en/feature/partneringindia/images/stories/iocaaf-content1.jpg",
    category: "AC Maintenance",
    title: "Filter Cleaning"
  }
];

export function Gallery() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">Project Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a look at some of our recent technical and repair work across Bahria Town.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-200"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block">
                      {img.category}
                    </span>
                    <h3 className="text-white text-xl font-heading font-bold">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
