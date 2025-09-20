import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
   
    {
      title: "Software Developer",
      company: "Pocketful",
      location: "Delhi",
      period: "July 2023 - Present",
      description: [
        "Designed and developed the Option Chain module with real-time updates",
        "Built a complex Order Window handling multiple order types and workflows",
        "Integrated live market data streams using WebSockets for fast execution",
        "Optimized React components to improve performance and reduce re-renders",
        "Collaborated with backend teams to streamline API usage and data flow",
        "Enhanced user interface responsiveness and improved trading experience",
      ],
      technologies: ["React", "TypeScript", "JavaScript", "jest", "Vite", "RTL"],
    },
    {
      title: "Software Engineer Intern",
      company: "Pace Stock Broking",
      location: "Delhi",
      period: "Jan 2023 - June 2023",
      description: [
        "Built and optimized landing pages with modern web technologies",
        "Developed interactive and user-friendly UI components",
        "Created and maintained a Chrome extension for custom needs",
        "Worked on SEO optimization to improve site performance",
        "Implemented server-side rendering and routing with Next.js",
        "Integrated Google Sheets APIs for dynamic data handling",
      ],
      technologies: ["JavaScript", "Next.js", "CSS3", "HTML5"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in software development
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-glow"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-up`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10 animate-glow"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="group glass-effect hover:shadow-card-hover transition-smooth border-glass transform hover:scale-105">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-smooth">
                              {exp.title}
                            </h3>
                            <div className="flex items-center text-xs sm:text-sm text-muted-foreground glass-effect px-2 py-1 rounded-lg">
                              <Calendar className="w-3 h-3 mr-1" />
                              {exp.period}
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <div className="flex items-center">
                              <Building2 className="w-4 h-4 mr-2 text-primary" />
                              <p className="text-base sm:text-lg font-medium text-primary">{exp.company}</p>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0 space-y-4">
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground leading-relaxed text-sm sm:text-base flex items-start gap-2">
                              <span className="text-primary mt-1.5 text-xs">●</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="text-xs glass-effect hover:shadow-glow transition-smooth"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;