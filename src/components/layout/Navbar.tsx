import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://scontent.fkhi21-1.fna.fbcdn.net/v/t39.30808-6/255572881_1048561582609620_4969583825151041885_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=BaEmL5uc2JoQ7kNvwFa3aIq&_nc_oc=AdpC5_-Kfeo-Jg1hVsAYiRyQNBhhixdZqWXMdYcqzk45ec9Qdt1guxOcn9j9XXMDBg8&_nc_zt=23&_nc_ht=scontent.fkhi21-1.fna&_nc_gid=OyfoNVpg1gJtvRxMXzk9wg&_nc_ss=7b289&oh=00_Af7lG7_SAajqZaYHPXd9XVPFFTplcwp3sMi5_Sid9VfIzg&oe=69FC0C2E" alt="Quick Tech Logo" className="h-10 w-auto rounded-md object-contain" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl leading-none text-primary">Quick Tech</span>
            <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider">Technical Services</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href ? "text-primary font-bold" : "text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+923096363938" className="flex items-center gap-2 text-sm font-bold text-primary">
            <Phone className="h-4 w-4" />
            0309-6363938
          </a>
          <Button variant="accent" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-in slide-in-from-top-2">
          <nav className="flex flex-col py-4 px-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block text-base font-medium py-2 border-b border-gray-100 last:border-0",
                  location.pathname === link.href ? "text-primary font-bold" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:+923096363938" className="flex items-center justify-center gap-2 py-2 text-primary font-bold bg-primary/10 rounded-md">
                <Phone className="h-4 w-4" />
                Call: 0309-6363938
              </a>
              <Button variant="accent" className="w-full" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
