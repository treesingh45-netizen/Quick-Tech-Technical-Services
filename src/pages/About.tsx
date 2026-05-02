import { motion } from "motion/react";
import { CheckCircle, Users, Award, Target } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Learn more about Quick Tech Technical Services and our commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                Your Trusted Technical Partner in Bahria Town Karachi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Quick Tech Technical Services was founded with a simple goal: to provide high-quality, reliable, and affordable technical solutions to the residents and businesses of Bahria Town Karachi. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From keeping our clients cool during the intense summer heat with our expert AC repair services, to handling comprehensive civil works and renovations, we approach every job with professionalism and dedication. Our team isn't just skilled; they are passionate about problem-solving.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-background p-6 rounded-2xl">
                  <h4 className="text-3xl font-heading font-extrabold text-accent mb-2">5+</h4>
                  <p className="text-sm font-semibold text-gray-700">Years Experience</p>
                </div>
                <div className="bg-background p-6 rounded-2xl">
                  <h4 className="text-3xl font-heading font-extrabold text-accent mb-2">1000+</h4>
                  <p className="text-sm font-semibold text-gray-700">Happy Customers</p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AC Technician" 
                className="rounded-2xl w-full h-64 object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop" 
                alt="Tools" 
                className="rounded-2xl w-full h-64 object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Mission & Vision</h2>
            <p className="text-gray-600 text-lg">
              Our core values drive us to deliver exceptional service every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To provide prompt, professional, and guaranteed technical services to our community. We aim to ensure that every AC runs efficiently and every property is perfectly maintained, maximizing our clients' comfort.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred technical services partner in Bahria Town Karachi, recognized for our absolute commitment to quality, affordability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
