import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

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
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="group hover:shadow-card-hover transition-smooth border-border/50 hover:border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <p className="text-lg font-medium text-primary">{exp.company}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <ul className="space-y-2 mb-6">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground leading-relaxed">
                              • {item}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
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