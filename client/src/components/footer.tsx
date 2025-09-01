import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:shabina.khan@example.com", label: "Email" }
  ];

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2" data-testid="footer-name">
              Shabina Khan
            </h3>
            <p className="text-muted-foreground" data-testid="footer-tagline">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
                data-testid={`footer-social-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p data-testid="copyright">
              &copy; {currentYear} Shabina Khan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
