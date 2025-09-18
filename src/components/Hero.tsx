import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-hero-glow" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-8 animate-glow">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Available for hire</span>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl text-primary-glow mb-4 font-medium animate-fade-up">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-up">
              <span className="bg-gradient-to-r from-foreground via-primary-glow to-primary bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            <div className="relative mb-8 animate-fade-up">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Software Development Engineer II
                </span>
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up">
              Passionate about building scalable web applications and solving complex problems 
              with clean, efficient code. 3+ years of experience in full-stack development 
              with modern technologies and cloud platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-up">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary-dark text-primary-foreground transition-smooth px-8 py-4 text-lg font-semibold shadow-glow hover:shadow-card-hover transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="glass-effect hover:bg-primary/10 transition-smooth px-8 py-4 text-lg font-semibold transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16 animate-fade-up">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:alex@example.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 glass-effect rounded-full text-foreground/70 hover:text-primary transition-smooth hover:shadow-glow transform hover:scale-110 animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
                title={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/60 hover:text-primary transition-smooth group"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium">Scroll to explore</span>
                <ArrowDown size={24} className="group-hover:translate-y-1 transition-smooth" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;