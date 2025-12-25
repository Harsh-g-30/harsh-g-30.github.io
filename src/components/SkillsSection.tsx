const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Data & AI",
    skills: [
      { name: "Data Analytics", level: 85 },
      { name: "Machine Learning", level: 75 },
      { name: "LLMs & AI", level: 80 },
      { name: "Pandas/NumPy", level: 85 },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "FastAPI", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Azure", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Linux", level: 75 },
      { name: "Automation", level: 85 },
    ],
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
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover-lift"
              >
                <h3 className="text-xl font-bold mb-6 text-gradient">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `slideIn 1s ease-out ${i * 0.1}s both`
                          }}
                        />
                      </div>
                    </div>
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
