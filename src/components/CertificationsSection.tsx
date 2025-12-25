import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    date: "2024",
    description: "Completed comprehensive training on Microsoft technologies and leadership",
    link: "#",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    description: "Cloud computing concepts, Azure services, and deployment models",
    link: "#",
  },
  {
    title: "AI & Machine Learning Fundamentals",
    issuer: "Various",
    date: "2024",
    description: "Core concepts in artificial intelligence and machine learning applications",
    link: "#",
  },
  {
    title: "Python for Data Science",
    issuer: "Online Platform",
    date: "2023",
    description: "Advanced Python programming for data analysis and visualization",
    link: "#",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & <span className="text-gradient">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development in cutting-edge technologies.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg leading-tight">{cert.title}</h3>
                      <a
                        href={cert.link}
                        className="text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-primary text-sm font-medium mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">{cert.description}</p>
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
