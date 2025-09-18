import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.johnson@example.com",
      href: "mailto:alex.johnson@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/alexjohnson",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alexjohnson",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/alexjohnson",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project or explore opportunities to work together
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-effect shadow-card-hover border-glass animate-fade-up order-2 lg:order-1">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="text-xl sm:text-2xl font-semibold">Send me a message</h3>
              </div>
              <p className="text-muted-foreground">
                I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="glass-effect border-glass focus:shadow-glow transition-smooth"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="glass-effect border-glass focus:shadow-glow transition-smooth"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="glass-effect border-glass focus:shadow-glow transition-smooth"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    rows={6}
                    className="glass-effect border-glass focus:shadow-glow transition-smooth resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark shadow-glow hover:shadow-card-hover transition-smooth transform hover:scale-[1.02]" 
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Contact Details */}
            <Card className="glass-effect shadow-card border-glass animate-fade-up">
              <CardHeader>
                <h3 className="text-xl sm:text-2xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-3 sm:p-4 rounded-xl glass-effect hover:shadow-glow transition-smooth group transform hover:scale-105"
                  >
                    <div className="p-3 rounded-xl bg-card-gradient group-hover:shadow-glow transition-smooth">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-smooth">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-effect shadow-card border-glass animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <h3 className="text-lg sm:text-xl font-semibold">Follow Me</h3>
                <p className="text-muted-foreground">
                  Connect with me on social media
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass-effect hover:shadow-glow text-primary hover:scale-110 transition-elastic group animate-float"
                      style={{ animationDelay: `${index * 0.5}s` }}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass-effect shadow-card border-glass animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-glow"></div>
                  <h4 className="font-semibold">Current Status</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Available for freelance projects and full-time opportunities. 
                  Typically respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;