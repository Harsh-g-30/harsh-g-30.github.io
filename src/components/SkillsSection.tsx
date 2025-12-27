import { Code, Wrench, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "Java", "C++", "SQL", "HTML", "CSS"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["AI/ML", "Power BI", "Airflow", "SQL Server Studio", "MS Excel", "Hugging Face", "Pandas", "LLMs"],
  },
  {
    title: "Platforms",
    icon: Cloud,
    skills: ["AWS", "Linux/Unix", "Git", "Azure", "Kaggle", "GCP"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning programming languages, data technologies, and cloud platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover-lift"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gradient">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-secondary text-secondary-foreground text-sm rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
