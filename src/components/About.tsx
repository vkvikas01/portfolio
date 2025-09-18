import { Code2, Database, Globe, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/profile-placeholder.jpg";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Vue.js, Tailwind CSS",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, Java, REST APIs, GraphQL",
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Kubernetes, CI/CD, Jenkins",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
    },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "AWS", "Docker", "MongoDB", "PostgreSQL", "Redis", "Git"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated to crafting exceptional digital experiences through innovative code
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About Content */}
          <div className="animate-fade-up order-2 lg:order-1">
            <div className="mb-8 text-center lg:text-left">
              <div className="relative inline-block">
                <img
                  src={profileImage}
                  alt="Alex Johnson Profile"
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover shadow-glow animate-float"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent" />
              </div>
            </div>
            
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                I'm a passionate Software Development Engineer II with over 3 years of experience 
                building scalable web applications. I specialize in full-stack development with 
                a focus on creating efficient, user-friendly solutions that make a real impact.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                My expertise spans across modern web technologies, cloud platforms, and 
                development best practices. I thrive on tackling complex problems and turning 
                innovative ideas into reality through clean, maintainable code.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center lg:text-left">
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 glass-effect text-primary rounded-full text-sm font-medium hover:shadow-glow transition-smooth animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="group glass-effect hover:shadow-card-hover transition-smooth border-glass animate-fade-up transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-xl bg-card-gradient group-hover:shadow-glow transition-smooth">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;