import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "debopomadebnath@gmail.com",
    href: "mailto:debopomadebnath@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9862866155",
    href: "tel:+919862866155",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/debopoma", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/debopoma", label: "LinkedIn" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
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
            Get In Touch
          </h2>
        </FadeInLeft>

        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Open to internships, projects, and learning opportunities.
          </motion.p>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4 mb-10">
            {contactInfo.map((info, index) => (
              <AnimatedCard
                key={info.label}
                index={index}
                hoverEffect="lift"
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 sm:flex-row flex-col text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-xs uppercase tracking-wider font-medium">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-semibold hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-semibold">{info.value}</span>
                    )}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
