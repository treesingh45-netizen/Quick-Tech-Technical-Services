import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ContactFormData = {
  name: string;
  phone: string;
  address: string;
  service: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const text = `*New Service Request*
*Name:* ${data.name}
*Phone:* ${data.phone}
*Address:* ${data.address}
*Service Required:* ${data.service}
*Message:* ${data.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/923096363938?text=${encodedText}`, '_blank');
    
    reset();
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">Contact & Booking</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch for a free quote or to book our services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
            
            {/* Contact Info (Left Side) */}
            <div className="bg-primary text-white p-10 md:p-14 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
                <p className="text-primary-foreground/80 mb-10 text-lg">
                  Whether you need urgent AC repair or are planning a renovation, our team is ready to help. Reach out to us using the details below or fill out the form.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 text-lg">
                    <Phone className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+923096363938" className="text-primary-foreground/80 hover:text-white transition-colors">0309-6363938</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 text-lg">
                    <Mail className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:quicktechbtk@gmail.com" className="text-primary-foreground/80 hover:text-white transition-colors">quicktechbtk@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 text-lg">
                    <MapPin className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <span className="text-primary-foreground/80">
                        Aq Super Market, Shop No. LG-57, Street 4,
                        <br />Bahria Town Karachi, Precinct 19
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-10 mt-10 border-t border-primary-dark/50">
                <div className="font-semibold mb-3">Working Hours:</div>
                <div className="text-primary-foreground/80 space-y-1">
                  <p>Sunday – Thursday: 10:00 AM – 11:30 PM</p>
                  <p>Friday: 1:00 PM – 11:30 PM</p>
                  <p>Saturday: 10:00 AM – 11:30 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Side) */}
            <div className="p-10 md:p-14">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Send Us A Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    {...register("name", { required: true })}
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-gray-50"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    {...register("phone", { required: true })}
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-gray-50"
                    placeholder="0309-XXXXXXX"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address / Location</label>
                  <input
                    {...register("address", { required: true })}
                    id="address"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-gray-50"
                    placeholder="E.g., Precinct 19, Villa..."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    {...register("service", { required: true })}
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-gray-50"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="AC Repair">AC Repair & Troubleshooting</option>
                    <option value="AC Installation">AC Installation</option>
                    <option value="AC Maintenance">AC Maintenance & Servicing</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Civil Work">Civil Work</option>
                    <option value="Other">Other Technical Services</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    {...register("message", { required: true })}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-gray-50 resize-none"
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full h-14 text-lg">
                  Submit Request <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.593816694663!2d67.3195231!3d25.0543666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34add2dae6ba7%3A0x6bba847c23bc86cf!2sPrecinct%2019%2C%20Bahria%20Town%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps location of Quick Tech"
        ></iframe>
      </section>
    </div>
  );
}
