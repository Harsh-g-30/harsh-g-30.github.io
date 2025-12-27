import { Award } from "lucide-react";

const certifications = [
  {
    title: "Deloitte Australia – Technology Job Simulation",
    issuer: "Deloitte",
  },
  {
    title: "GenAI Job Simulation",
    issuer: "BCG",
  },
  {
    title: "Google Cloud Certified Generative AI Leader",
    issuer: "Google Cloud",
  },
  {
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <h3 className="font-semibold text-lg leading-tight mb-2">{cert.title}</h3>
                    <p className="text-primary text-sm font-medium">{cert.issuer}</p>
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
