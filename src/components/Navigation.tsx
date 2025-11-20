
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Story", href: "/herbalife-story" },
    {
      name: "Programs",
      href: "/programs",
      submenu: [
        { name: "Lose Weight", href: "/programs/lose-weight", icon: "⚖️" },
        { name: "Gain Weight", href: "/programs/gain-weight", icon: "📈" },
        { name: "Skin Care", href: "/programs/skin-care", icon: "✨" },
        { name: "Healthy Breakfast", href: "/programs/healthy-breakfast", icon: "🥗" },
        { name: "Active Lifestyle", href: "/programs/active-lifestyle", icon: "⚡" },
        { name: "Heart Health", href: "/programs/heart-health", icon: "❤️" },
        { name: "Bone & Joint Health", href: "/programs/bone-joint", icon: "💪" },
        { name: "View All Programs", href: "/programs", icon: "📋" },
      ]
    },
    { name: "Products", href: "/products" },
    { name: "Results", href: "/results" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href) => {
    navigate(href);
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-50"
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center space-x-2 md:space-x-3 group cursor-pointer flex-shrink-0"
            >
              <div className="relative">
                <img
                  src="/mylogo.png"
                  alt="New Life Wellness Centre Logo"
                  className="w-22 h-22 sm:w-26 sm:h-26 md:w-30 md:h-30 lg:w-36 lg:h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:flex flex-col justify-center">
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-emerald-600 whitespace-nowrap">
                  New Life
                </span>
                <span className="text-xs md:text-xs text-gray-600 font-semibold tracking-wider whitespace-nowrap">
                  WELLNESS CENTRE
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => !isMobile && item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => !isMobile && setActiveSubmenu(null)}
                >
                  <button
                    onClick={() => {
                      if (item.submenu) {
                        setActiveSubmenu(activeSubmenu === item.name ? null : item.name);
                      } else {
                        handleNavClick(item.href);
                      }
                    }}
                    className={`
                      px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                      flex items-center space-x-1 relative
                      ${
                        currentPath === item.href
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    <span>{item.name}</span>
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Desktop Dropdown */}
                  {item.submenu && (
                    <div className={`
                      absolute left-0 mt-1 w-64
                      transform transition-all duration-300 origin-top
                      ${activeSubmenu === item.name
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      }
                    `}>
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="bg-emerald-50 px-4 py-3 border-b border-gray-100">
                          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            Our Programs
                          </p>
                        </div>
                        <div className="divide-y divide-gray-100">
                          {item.submenu.map((subitem) => (
                            <button
                              key={subitem.name}
                              onClick={() => handleNavClick(subitem.href)}
                              className="w-full group/item flex items-center space-x-3 px-4 py-3 hover:bg-emerald-50 transition-all duration-200"
                            >
                              <span className="text-lg transform group-hover/item:scale-110 transition-transform duration-200">
                                {subitem.icon}
                              </span>
                              <span className="text-sm font-medium text-gray-700 group-hover/item:text-emerald-600 transition-colors">
                                {subitem.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="tel:+919884988988"
                className="flex items-center space-x-2 px-3 py-2 text-emerald-600 hover:text-emerald-700 transition-colors text-sm font-medium"
              >
                <Phone size={16} />
                <span>Call Us</span>
              </a>
              <button
                onClick={() => handleNavClick("/book-consultation")}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold text-sm shadow-sm hover:shadow-md"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - Fixed positioning */}
      <div className={`
        lg:hidden fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl
        transform transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center space-x-2"
            >
              <img
                src="/mylogo.png"
                alt="New Life Wellness Centre Logo"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-emerald-600">New Life</span>
                <span className="text-xs text-gray-600 font-semibold tracking-wider">
                  WELLNESS CENTRE
                </span>
              </div>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Mobile menu items */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {navigation.map((item, index) => (
              <div key={item.name}>
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setActiveSubmenu(activeSubmenu === item.name ? null : item.name);
                    } else {
                      handleNavClick(item.href);
                    }
                  }}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-lg
                    transition-all duration-200 font-medium text-base
                    ${
                      currentPath === item.href
                        ? "bg-emerald-50 text-emerald-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        activeSubmenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Submenu */}
                {item.submenu && (
                  <div className={`
                    overflow-hidden transition-all duration-300
                    ${activeSubmenu === item.name ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
                  `}>
                    <div className="ml-4 space-y-1 border-l-2 border-emerald-200 pl-4">
                      {item.submenu.map((subitem) => (
                        <button
                          key={subitem.name}
                          onClick={() => handleNavClick(subitem.href)}
                          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                        >
                          <span className="text-lg">{subitem.icon}</span>
                          <span>{subitem.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="p-4 space-y-3 border-t border-gray-100">
            <a
              href="tel:+919884988988"
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg bg-white border-2 border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => handleNavClick("/book-consultation")}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow-sm hover:bg-emerald-700 transition-all duration-300"
            >
              <span>Book Free Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
