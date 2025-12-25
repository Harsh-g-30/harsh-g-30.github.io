import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, FileText, Sparkles, Shield } from "lucide-react";

const projects = [
  {
    title: "HR Intelligence Engine",
    subtitle: "AI-Powered Resume Screening Platform",
    description:
      "An explainable AI system that revolutionizes resume screening with transparent, bias-aware evaluation. Built to help recruiters make faster, fairer hiring decisions.",
    features: [
      { icon: FileText, text: "PDF Parsing & Text Extraction" },
      { icon: Brain, text: "LLM-Powered Analysis" },
      { icon: Sparkles, text: "Explainable Scoring System" },
      { icon: Shield, text: "Bias-Aware Evaluation" },
    ],
    tech: ["Python", "FastAPI", "LangChain", "OpenAI", "CLI"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Data Analytics Dashboard",
    subtitle: "Real-time Business Intelligence",
    description:
      "Interactive dashboard for visualizing key business metrics with real-time data updates and customizable views.",
    features: [
      { icon: Brain, text: "Real-time Data Processing" },
      { icon: Sparkles, text: "Interactive Visualizations" },
    ],
    tech: ["Python", "Pandas", "Plotly", "SQL"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Automation Framework",
    subtitle: "Enterprise Workflow Automation",
    description:
      "Scalable automation framework for repetitive tasks, reducing manual effort and improving accuracy across workflows.",
    features: [
      { icon: Brain, text: "Task Scheduling" },
      { icon: Shield, text: "Error Handling & Logging" },
    ],
    tech: ["Python", "Selenium", "REST APIs", "Azure"],
    github: "#",
    demo: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI, data analytics, and software development.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Featured Project */}
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 hover-lift relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Featured Project
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground mb-8 max-w-2xl">{project.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="hero" asChild>
                      <a href={project.demo}>
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="heroOutline" asChild>
                      <a href={project.github}>
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Other Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover-lift"
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github}>
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo}>
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
