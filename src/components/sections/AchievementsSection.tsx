import { Trophy, Star } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

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

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">06.</span>
            Achievements
          </h2>
        </FadeInLeft>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <AnimatedCard
              key={item.title}
              index={index}
              hoverEffect="lift"
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-accent" size={24} />
                </div>

                <div className="flex flex-col">
                  <span className="text-foreground font-semibold">{item.title}</span>
                  <span className="text-muted-foreground text-sm">{item.detail}</span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
