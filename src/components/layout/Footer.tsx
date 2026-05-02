import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#1a202c] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="https://scontent.fkhi21-1.fna.fbcdn.net/v/t39.30808-6/255572881_1048561582609620_4969583825151041885_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=BaEmL5uc2JoQ7kNvwFa3aIq&_nc_oc=AdpC5_-Kfeo-Jg1hVsAYiRyQNBhhixdZqWXMdYcqzk45ec9Qdt1guxOcn9j9XXMDBg8&_nc_zt=23&_nc_ht=scontent.fkhi21-1.fna&_nc_gid=OyfoNVpg1gJtvRxMXzk9wg&_nc_ss=7b289&oh=00_Af7lG7_SAajqZaYHPXd9XVPFFTplcwp3sMi5_Sid9VfIzg&oe=69FC0C2E" alt="Quick Tech Logo" className="h-12 w-auto rounded-md object-contain bg-white p-1" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-white">Quick Tech</span>
                <span className="text-sm font-medium text-accent tracking-wider">Technical Services</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Bahria Town Karachi's most reliable and professional technical service provider. We offer fast, affordable, and expert AC repair, maintenance, and civil works.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/QuickTech-Technical-Services-Bahria-Town-Karachi/100032984096191/?sk=about" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Project Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact & Booking</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">AC Installation & Repair</li>
              <li className="text-gray-400 text-sm">AC Maintenance & Servicing</li>
              <li className="text-gray-400 text-sm">Decoration & Renovation</li>
              <li className="text-gray-400 text-sm">General Maintenance</li>
              <li className="text-gray-400 text-sm">Civil Works</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400 leading-snug">
                  Aq Super Market, Shop No. LG-57, Street 4, Bahria Town Karachi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+923096363938" className="text-sm text-gray-400 hover:text-white transition-colors">0309-6363938</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:quicktechbtk@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">quicktechbtk@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Quick Tech Technical Services. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Serving Bahria Town Karachi
          </p>
        </div>
      </div>
    </footer>
  );
}
