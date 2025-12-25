import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "System Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "India",
    period: "Nov 2024 – Present",
    current: true,
    responsibilities: [
      "Developing and maintaining Python-based data processing pipelines for enterprise clients",
      "Building analytics dashboards and automated reporting solutions",
      "Implementing data quality checks and validation frameworks",
      "Collaborating with cross-functional teams to deliver data-driven solutions",
      "Optimizing existing workflows for improved performance and reliability",
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
