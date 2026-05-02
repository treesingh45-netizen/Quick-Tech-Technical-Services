import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle, Shield, Clock, PhoneCall, Star, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
            alt="AC Technician working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/50 text-sm font-semibold tracking-wider uppercase mb-2">
              Your Comfort, Our Priority
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Fast & Reliable AC Repair Services in <span className="text-accent">Bahria Town Karachi</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Expert solutions for air conditioning, maintenance, and civil works. Affordable service, trusted by homeowners & businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg" asChild>
                <a href="tel:+923096363938" className="flex flex-row items-center justify-center gap-2">
                  <PhoneCall className="h-5 w-5 shrink-0" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button size="lg" variant="accent" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Affordable Rates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive technical solutions to keep your home and office comfortable and functional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">AC Installation & Repair</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Expert installation and fast repair services for all types of air conditioners. We fix cooling issues, gas leaks, and electrical faults efficiently.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">AC Maintenance</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Regular servicing prevents breakdowns and improves efficiency. Our maintenance covers deep cleaning, filter changes, and performance checks.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">Civil Works & Renovation</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                Beyond cooling, we offer decoration, minor renovations, and general civil maintenance to keep your property in top condition.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                alt="Professional technician team" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              
              <div className="absolute bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs transform -translate-x-12">
                <div className="flex gap-4 items-center mb-3">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">100%</div>
                    <div className="text-sm text-gray-500">Satisfaction Guaranteed</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Expert AC Solutions You Can Trust</h2>
                <p className="text-gray-600 text-lg">
                  At Quick Tech Technical Services, we understand the importance of a comfortable environment. We bring years of experience to every job, ensuring long-lasting and reliable solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Experienced Professionals</h4>
                    <p className="text-gray-600">Our technicians are highly trained to handle all types of residential and commercial AC units.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                     <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Fast & On-Time Service</h4>
                    <p className="text-gray-600">We respect your time. Expect prompt responses and timely project completion in Bahria Town.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl shrink-0">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Affordable Pricing</h4>
                    <p className="text-gray-600">High-quality service doesn't have to break the bank. We offer competitive and transparent rates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here is feedback from our clients in Bahria Town Karachi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ali Raza", role: "Homeowner, P19", text: "Excellent AC repair service! The team arrived on time and fixed the cooling issue within an hour. Highly recommended in BTK." },
              { name: "Sara Usman", role: "Resident", text: "Got complete servicing done for 3 split units. They work very clean and the prices are very reasonable compared to others." },
              { name: "Ahmed Khan", role: "Business Owner", text: "Quick Tech handles all maintenance for our office. Very professional, responsive, and always reliable. Great partners to have." },
            ].map((t, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
               >
                 <div className="flex text-accent mb-4">
                   {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                 </div>
                 <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                 <div className="font-bold text-gray-900">{t.name}</div>
                 <div className="text-sm text-gray-500">{t.role}</div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-white/90">
            Our technical team is ready to solve your AC and maintenance problems. Get top-tier service today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="accent" className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl" asChild>
              <Link to="/contact">Book Your Service Today</Link>
            </Button>
            <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-white text-primary hover:bg-gray-100 shadow-xl" asChild>
              <a href="tel:+923096363938" className="flex flex-row items-center justify-center gap-2">
                <PhoneCall className="h-5 w-5 shrink-0" />
                <span>0309-6363938</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
