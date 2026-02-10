import { motion } from "framer-motion";
import { Building2, Cpu, Github, ExternalLink } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const projects = [
  {
    icon: Building2,
    title: "AI Hotel Booking System",
    duration: "Feb 2025 – Apr 2025",
    description: [
      "Responsive hotel booking web application",
      "Helps users find affordable hotels by location",
      "Built using HTML, CSS, JavaScript",
      "Integrated Gemini API for intelligent recommendations",
      "Focus on performance optimization and usability",
    ],
    technologies: ["AI", "Web App", "JavaScript", "Gemini API"],
    github: "#",
    demo: "#",
  },
  {
    icon: Cpu,
    title: "Efficient Garbage Collector",
    duration: "Aug 2023 – Dec 2023",
    description: [
      "Memory optimization using efficient allocation & reclamation",
      "Dynamic memory management techniques",
      "Stress-tested collection algorithms",
      "Reduced fragmentation and improved system stability",
    ],
    technologies: ["C/C++", "Systems", "Memory Management"],
    github: "#",
    demo: "#",
  },
];

export const ProjectsSection = () => {
  const handleGithubClick = (githubUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (githubUrl && githubUrl !== "#") {
      window.open(githubUrl, "_blank");
    }
  };

  const handleDemoClick = (demoUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (demoUrl && demoUrl !== "#") {
      window.open(demoUrl, "_blank");
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, hsl(0 0% 10% / 0.3) 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">02.</span>
            Featured Projects
          </h2>
        </FadeInLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.title}
              index={index}
              hoverEffect="glow"
              className="glass rounded-2xl p-6 card-hover group"
            >
              {/* Icon */}
              <motion.div
                className="text-primary text-4xl mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <project.icon size={40} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>

              {project.duration && (
                <p className="text-muted-foreground/80 text-xs mb-4">{project.duration}</p>
              )}

              {/* Description */}
              {Array.isArray(project.description) ? (
                <ul className="text-muted-foreground text-sm leading-relaxed mb-6 space-y-2">
                  {project.description.map((point: string) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  onClick={(e) => handleGithubClick(project.github, e)}
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href={project.demo}
                  onClick={(e) => handleDemoClick(project.demo, e)}
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
