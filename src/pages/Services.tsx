import { CheckCircle, Zap, ThermometerSnowflake, Droplet, Paintbrush, Wrench, PenTool, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    icon: ThermometerSnowflake,
    title: "Air Conditioning Installation",
    description: "Professional installation for split and window AC units. We ensure proper placement, secure mounting, and perfect cooling efficiency.",
  },
  {
    icon: Zap,
    title: "AC Repair & Troubleshooting",
    description: "Expert diagnosis and repair for non-cooling units, compressor issues, thermostat faults, and electrical problems.",
  },
  {
    icon: Droplet,
    title: "AC Maintenance & Servicing",
    description: "Routine servicing including deep filter cleaning, gas pressure checks, and coil washing to prolong your unit's life.",
  },
  {
    icon: Paintbrush,
    title: "Decoration",
    description: "Interior decoration services to enhance the aesthetics of your home or office space.",
  },
  {
    icon: LayoutGrid,
    title: "Renovation",
    description: "Complete room or office renovation services with quality materials and expert craftsmanship.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "General home and office maintenance plans covering electrical, plumbing, and structural upkeep.",
  },
  {
    icon: PenTool,
    title: "Repairing",
    description: "General repairing services for household fixtures, appliances, and general technical faults.",
  },
  {
    icon: CheckCircle,
    title: "Civil Work",
    description: "Professional civil works including masonry, tiling, and minor structural modifications.",
  }
];

export function Services() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive technical solutions for your everyday comfort and peace of mind.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Ready to Book a Service?</h2>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="accent" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+923096363938">Call Us Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
