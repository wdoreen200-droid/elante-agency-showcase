import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { companyInfo, socialLinks } from "@/data/constants";
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone } from "lucide-react";

const iconMap = {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">{companyInfo.name}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {companyInfo.tagline}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                {companyInfo.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                {companyInfo.phone}
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Social Media Management</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Virtual Assistance</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">AI Agents</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Cold Calling</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">App Development</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#packages" className="text-muted-foreground hover:text-primary transition-colors">Packages</a></li>
              <li><a href="#partners" className="text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Stay Connected</h4>
            <p className="text-muted-foreground text-sm">
              Follow us on social media for updates and insights
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;