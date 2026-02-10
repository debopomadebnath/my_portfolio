import { Briefcase } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const trainingItems = [
  {
    title: "NexGen Networking – Summer Internship",
    organization: "Centre for Professional Enhancement",
    duration: "Jun 2025 – Jul 2025",
    points: [
      "Computer networking fundamentals",
      "IP addressing & routing",
      "Cisco Packet Tracer simulations",
      "Practical network configuration experience",
    ],
  },
];

export const TrainingSection = () => {
  return (
    <section id="training" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">03.</span>
            Training / Experience
          </h2>
        </FadeInLeft>

        <div className="max-w-4xl">
          {trainingItems.map((item, index) => (
            <AnimatedCard
              key={item.title}
              index={index}
              hoverEffect="lift"
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-primary" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <span className="text-muted-foreground/80 text-xs">{item.duration}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{item.organization}</p>

                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
