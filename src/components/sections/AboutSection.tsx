import { FadeInUp, FadeInLeft } from "@/components/animations/MotionWrapper";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">01.</span>
            About Me
          </h2>
        </FadeInLeft>

        <div className="max-w-4xl">
          <FadeInUp delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              B.Tech CSE student at Lovely Professional University (2nd Year) with a strong foundation in DSA and problem solving.
              Interested in AI, web development, and system design—focused on building reliable software and practical, high-impact projects.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I’m actively seeking internship and placement opportunities where I can contribute to engineering teams and grow through real-world development.
              I value clean code, performance, and thoughtful product execution.
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
