import { Award, Trophy, Briefcase, Star } from "lucide-react";
import { FadeInLeft, FadeInUp } from "@/components/animations/MotionWrapper";
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

const certifications = [
  "NPTEL – Privacy & Security in Online Social Media",
  "Infosys – Generative AI & No-Code AI Apps",
  "Infosys – ChatGPT-4 Prompt Engineering",
  "Coursera – Bits and Bytes of Computer Networking",
  "Infosys – Automata & Computational Theory",
];

const achievements = [
  {
    icon: Trophy,
    title: "Solved 100+ problems",
    detail: "HackerRank & CodeChef",
  },
  {
    icon: Star,
    title: "4-Star Python",
    detail: "HackerRank",
  },
  {
    icon: Trophy,
    title: "Silver badge in C",
    detail: "HackerRank",
  },
];

export const EducationCredentialsSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="section-number">04.</span>
            Education & Credentials
          </h2>
        </FadeInLeft>

        <div className="max-w-4xl space-y-12">
          {/* Training / Experience */}
          <FadeInUp delay={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Briefcase className="text-primary" size={24} />
                Training & Experience
              </h3>
              <div className="space-y-4">
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
                          <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
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
          </FadeInUp>

          {/* Certifications */}
          <FadeInUp delay={0.2}>
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Award className="text-secondary" size={24} />
                Certifications
              </h3>
              <AnimatedCard hoverEffect="lift" className="glass rounded-2xl p-6">
                <ul className="flex-1 text-muted-foreground text-sm leading-relaxed space-y-3">
                  {certifications.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </div>
          </FadeInUp>

          {/* Achievements */}
          <FadeInUp delay={0.3}>
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Trophy className="text-accent" size={24} />
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((item, index) => (
                  <AnimatedCard
                    key={item.title}
                    index={index}
                    hoverEffect="lift"
                    className="glass rounded-2xl p-5"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon className="text-accent" size={20} />
                      </div>
                      <span className="text-foreground font-semibold">{item.title}</span>
                      <span className="text-muted-foreground text-sm">{item.detail}</span>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
