import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Find Projects", href: "/projects" },
      { name: "My Projects", href: "/my-projects" },
      { name: "Create Project", href: "/create-project" },
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@projectcollab.com", label: "Email" },
  ];

  return (
    <footer className="theme-bg-surface border-t theme-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-slate-900 dark:text-blue-400">
                ProjectCollab
              </span>
            </div>
            <p className="theme-text-secondary mb-6 leading-relaxed">
              Connecting campus developers for amazing projects. Find your team, build together, create something extraordinary.
            </p>
            <div className="flex items-center gap-3 md:gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg theme-bg-surface-secondary theme-border flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 theme-text-secondary group-hover:theme-text transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="theme-text font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="theme-text-secondary hover:theme-text transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t theme-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 theme-text-secondary text-sm">
            <span>© {currentYear} ProjectCollab. Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for campus developers</span>
          </div>

          <div className="flex items-center gap-6 text-sm theme-text-secondary">
            <span>Status: <span className="text-green-400">All systems operational</span></span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
