import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
      liveLink: "https://demo-ecommerce.com",
      githubLink: "https://github.com/username/ecommerce",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features. Supports multiple project methodologies.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Tailwind"],
      liveLink: "https://taskmanager-demo.com",
      githubLink: "https://github.com/username/taskmanager",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, historical data visualization, and severe weather alerts using multiple weather APIs.",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
      liveLink: "https://weather-app-demo.com",
      githubLink: "https://github.com/username/weather-app",
      featured: false,
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media performance tracking with automated reporting, engagement metrics, and competitor analysis.",
      technologies: ["Python", "Django", "React", "D3.js", "PostgreSQL"],
      liveLink: "https://analytics-demo.com",
      githubLink: "https://github.com/username/analytics",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group glass-effect overflow-hidden hover:shadow-card-hover transition-smooth border-glass animate-fade-up transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video bg-card-gradient overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-glow/10 to-transparent" />
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 glass-effect rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                      <Star className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-float" />
                    </div>
                    <p className="text-muted-foreground font-medium">Featured Project</p>
                  </div>
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: "3s" }} />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <Zap className="w-5 h-5 text-primary-glow animate-glow flex-shrink-0" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="text-xs glass-effect hover:shadow-glow transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 glass-effect hover:shadow-glow transition-smooth" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary-dark shadow-glow hover:shadow-card-hover transition-smooth" asChild>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="animate-fade-up">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            <span className="bg-gradient-to-r from-foreground/80 to-primary/80 bg-clip-text text-transparent">
              Other Notable Projects
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="group glass-effect hover:shadow-card-hover transition-smooth border-glass animate-fade-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <h4 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs glass-effect">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="hover:bg-muted/20 transition-smooth" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-muted/20 transition-smooth" asChild>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
