import { Code2, Database, Globe, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/profile-placeholder.jpg";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Vue.js, HTML5, CSS3",
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
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to crafting exceptional digital experiences through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <div className="mb-8">
              <img
                src={profileImage}
                alt="Profile"
                className="w-48 h-48 rounded-2xl object-cover mx-auto lg:mx-0 mb-6 shadow-card"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate Software Development Engineer II with over 3 years of experience 
                building scalable web applications. I specialize in full-stack development with 
                a focus on creating efficient, user-friendly solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My expertise spans across modern web technologies, cloud platforms, and 
                development best practices. I enjoy tackling complex problems and turning 
                ideas into reality through clean, maintainable code.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-card-hover transition-smooth border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;