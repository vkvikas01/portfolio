import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer II",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jan 2023 - Present",
      description: [
        "Lead development of microservices architecture serving 2M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted code reviews",
        "Optimized database queries improving application performance by 40%",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
      title: "Software Development Engineer I",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "Jun 2021 - Dec 2022",
      description: [
        "Developed and maintained full-stack web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver features on schedule",
        "Implemented responsive designs and improved user experience",
        "Built RESTful APIs and integrated third-party services",
      ],
      technologies: ["React", "TypeScript", "MongoDB", "Express.js", "Git"],
    },
    {
      title: "Junior Software Engineer",
      company: "Digital Innovations Inc",
      location: "Remote",
      period: "Jan 2021 - May 2021",
      description: [
        "Contributed to frontend development using modern JavaScript frameworks",
        "Participated in agile development processes and sprint planning",
        "Fixed bugs and implemented minor features",
        "Learned industry best practices for software development",
      ],
      technologies: ["JavaScript", "Vue.js", "CSS3", "HTML5", "Jenkins"],
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