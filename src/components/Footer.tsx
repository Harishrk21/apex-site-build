import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">🌿 Newlife Wellness Centre</h3>
            <p className="text-accent-foreground/80 mb-4">
              Transform your health with personalized Herbalife nutrition plans in Kolathur, Chennai.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/herbalife-story" className="hover:text-secondary transition-colors">Herbalife Story</Link></li>
              <li><Link to="/programs" className="hover:text-secondary transition-colors">Programs</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition-colors">Products</Link></li>
              <li><Link to="/transformations" className="hover:text-secondary transition-colors">Transformations</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/programs/weight-management" className="hover:text-secondary transition-colors">Weight Management</Link></li>
              <li><Link to="/programs/skin-care" className="hover:text-secondary transition-colors">Skin Care</Link></li>
              <li><Link to="/programs/healthy-breakfast" className="hover:text-secondary transition-colors">Healthy Breakfast</Link></li>
              <li><Link to="/programs/heart-health" className="hover:text-secondary transition-colors">Heart Health</Link></li>
              <li><Link to="/book-consultation" className="hover:text-secondary transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-accent-foreground/80">No.22, subramaniyapuram , 1st street , Kolathur, Chennai 600099, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+91+91 98849 88988" className="hover:text-secondary transition-colors">
                  +91 98849 88988
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@newlifewellness.com" className="hover:text-secondary transition-colors">
                  info@newlifewellness.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent-foreground/60 text-sm">
              © {currentYear} Newlife Wellness Centre. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">Terms of Use</Link>
              <Link to="/disclaimer" className="hover:text-secondary transition-colors">Disclaimer</Link>
            </div>
          </div>
          <p className="text-accent-foreground/60 text-sm mt-4 text-center">
            Built by <span className="font-semibold">Meister Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
