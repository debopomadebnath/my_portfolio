import { Award } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const certifications = [
  "NPTEL – Privacy & Security in Online Social Media",
  "Infosys – Generative AI & No-Code AI Apps",
  "Infosys – ChatGPT-4 Prompt Engineering",
  "Coursera – Bits and Bytes of Computer Networking",
  "Infosys – Automata & Computational Theory",
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, hsl(0 0% 10% / 0.3) 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">05.</span>
            Certifications
          </h2>
        </FadeInLeft>

        <div className="max-w-4xl">
          <AnimatedCard hoverEffect="lift" className="glass rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Award className="text-secondary" size={24} />
              </div>

              <ul className="flex-1 text-muted-foreground text-sm leading-relaxed space-y-3">
                {certifications.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
