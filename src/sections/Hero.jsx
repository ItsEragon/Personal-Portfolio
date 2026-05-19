import { useRef, useState, useCallback } from "react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import Button from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Svelte", icon: SiSvelte },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Netlify", icon: SiNetlify },
  { name: "Vercel", icon: SiVercel },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: SiGit },
  { name: "Github", icon: SiGithub },
];

const Hero = () => {
  const skillsRef = useRef(null);
  const marqueeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startX = useRef(0);
  const startOffset = useRef(0);

  const handlePointerDown = useCallback((e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    startOffset.current = dragOffset;
    skillsRef.current?.setPointerCapture(e.pointerId);
  }, [dragOffset]);

  const handlePointerMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const delta = e.clientX - startX.current;
      setDragOffset(startOffset.current + delta);
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image  */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content  */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer
              </span>
            </div>

            {/* Headline  */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I am Amritpal Singh - a Full Stack Developer specialising in React, Svelte, Tailwind, JavaScript, MONGODB, Node.js and Express.js. I build scalable, performant web applications that users love.
              </p>
            </div>

            {/* CTA's  */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href="/Amritpal-resume.pdf" download>
                <Download className="w-5 h-5" /> Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links  */}
            <div className="flex items-center gap-4 animated-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                {
                  icon: <FaGithub size={24} />,
                  href: "https://github.com/ItsEragon",
                },
                {
                  icon: <FaLinkedin size={24} />,
                  href: "https://www.linkedin.com/in/itseragon",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column  */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image  */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.webp"
                  alt="Amritpal Singh"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge  */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge  */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-xs text-muted-foreground">
                    Months Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section  */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div
            ref={skillsRef}
            className={`relative overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none ${
              isDragging ? "" : "overflow-hidden"
            }`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div
              ref={marqueeRef}
              className={`flex ${isDragging ? "" : "animate-marquee"}`}
              style={
                isDragging
                  ? { transform: `translateX(${dragOffset}px)` }
                  : undefined
              }
            >
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="shrink-0 px-8 py-4 flex flex-col items-center gap-2"
                >
                  <skill.icon className="w-10 h-10 text-muted-foreground/50 hover:text-muted-foreground transition-colors" />
                  <span className="text-sm text-muted-foreground/50 hover:text-muted-foreground transition-colors mb-8">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
