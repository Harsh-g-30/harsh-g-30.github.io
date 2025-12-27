import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Available for Opportunities
            </span>
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Harsh Gaur</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            Software Engineer-AI | Data & GenAI/Agentic AI Enthusiast
          </p>
          
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Software Engineer with expertise in DSA, system design, and cloud computing, 
            along with hands-on experience in AI/ML, LLMs, and Generative AI applications. 
            I am skilled at building scalable backend systems, automation pipelines, and 
            intelligent solutions that improve efficiency and deliver measurable business impact.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div 
            className="flex items-center justify-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <a
              href="https://github.com/Harsh-g-30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-g30/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:harshg30.gaur@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
