import { GraduationCap, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">System Engineer at TCS</span> with 
                a strong foundation in software development and a growing expertise in 
                Data Analytics and Artificial Intelligence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech is driven by curiosity and a passion for solving 
                complex problems. I specialize in building scalable, intelligent solutions 
                that bridge the gap between data and actionable insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI research, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>
                    <p className="text-muted-foreground">VIT Bhopal University</p>
                    <p className="text-sm text-primary font-medium">CGPA: 8.6/10</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Focus Areas</h3>
                    <p className="text-muted-foreground">AI/ML, Data Analytics, Full-Stack Development</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Interests</h3>
                    <p className="text-muted-foreground">Problem Solving, Open Source, Tech Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
