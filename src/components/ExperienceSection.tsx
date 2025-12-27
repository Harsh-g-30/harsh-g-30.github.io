import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer-AI",
    company: "Tata Consultancy Services (TCS)",
    location: "India",
    period: "Nov 2024 – Present",
    current: true,
    responsibilities: [
      "Developing an Agentic AI framework to automate data harmonization using custom AI agents and GenAI models, targeting 90% reduction in manual effort",
      "Designed Python-based harmonization systems for weekly multi-retailer data integration",
      "Built automated pipelines using Apache Airflow, MySQL, PuTTY, and WinSCP",
      "Collaborating with R&D and data engineering teams for production deployment",
      "Using Advanced Excel and SQL for validation, anomaly detection, and executive dashboards",
    ],
  },
  {
    title: "Research & Development Intern",
    company: "Rankplus",
    location: "Jaipur, India (Hybrid)",
    period: "May 2024 – Jun 2024",
    current: false,
    responsibilities: [
      "Conducted AR/VR research for EdTech learning enhancement",
      "Performed learner behavior and engagement analysis",
      "Generated insights leading to 25% improvement in pilot interaction",
    ],
  },
  {
    title: "GenAI Developer Intern",
    company: "Ailaysa",
    location: "Remote",
    period: "Mar 2024 – Apr 2024",
    current: false,
    responsibilities: [
      "Developed multilingual GenAI content and translation solutions",
      "Applied prompt engineering and ethical AI practices",
      "Recognized as top performer",
    ],
  },
  {
    title: "MERN Developer Intern",
    company: "ETHNUS",
    location: "Remote",
    period: "May 2023 – Jul 2023",
    current: false,
    responsibilities: [
      "Worked on MERN stack development",
      "Collaborated on full-stack project development",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-card border border-border rounded-2xl p-8 hover-lift"
              >
                {exp.current && (
                  <span className="absolute top-6 right-6 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    Current
                  </span>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-primary font-medium text-lg mb-3">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
