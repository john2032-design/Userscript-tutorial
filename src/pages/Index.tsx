import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import { FaApple, FaAndroid, FaWindows } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";

function detectPlatform(): { path: string; label: string } {
  if (typeof navigator === "undefined") return { path: "/pc", label: "Get Started" };
  const ua = navigator.userAgent || "";
  const platform = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform || "";

  // iOS (incl. iPadOS reporting as Mac with touch)
  if (/iPhone|iPad|iPod/i.test(ua) || (/Mac/i.test(platform) && navigator.maxTouchPoints > 1)) {
    return { path: "/ios", label: "Get Started — iOS" };
  }
  if (/Android/i.test(ua)) {
    return { path: "/android", label: "Get Started — Android" };
  }
  return { path: "/pc", label: "Get Started — PC" };
}

const platforms = [
  {
    to: "/ios",
    title: "iOS",
    description: "Install via the Stay browser extension on Safari.",
    icon: FaApple,
    clay: "clay-cool",
    badge: "Safari + Stay",
  },
  {
    to: "/android",
    title: "Android",
    description: "Run desktop extensions using Kiwi Browser.",
    icon: FaAndroid,
    clay: "clay-warm",
    badge: "Kiwi + Tampermonkey",
  },
  {
    to: "/pc",
    title: "PC",
    description: "Use Tampermonkey on Chrome, Firefox or Edge.",
    icon: FaWindows,
    clay: "clay",
    badge: "Tampermonkey",
  },
];

const features = [
  { icon: Zap, label: "Fast Setup", desc: "Install in under 3 minutes." },
  { icon: Shield, label: "Safe & Trusted", desc: "Uses official extension stores." },
  { icon: Sparkles, label: "All Devices", desc: "iOS, Android & desktop covered." },
];

const Index = () => {
  const cta = useMemo(() => detectPlatform(), []);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center pt-4 sm:pt-8 pb-16 sm:pb-24">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 mb-6 text-xs sm:text-sm font-semibold animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-gradient-fusion" />
          The official VortixWorld install guide
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-5 sm:mb-6 animate-fade-up break-words">
          <span className="text-gradient">VortixWorld</span>
          <br />
          Userscript Tutorial
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-up leading-relaxed">
          Install the VortixWorld userscript on any device in minutes.
          Pick your platform below and follow the guided steps.
        </p>

        <div className="flex flex-wrap justify-center gap-3 animate-fade-up">
          <Link to={cta.path} className="clay px-6 py-3 font-semibold inline-flex items-center gap-2">
            {cta.label} <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#platforms" className="neu px-6 py-3 font-semibold inline-flex items-center gap-2 neu-pressable">
            View Platforms
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-20">
        {features.map((f) => (
          <div key={f.label} className="neu p-5 sm:p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-fusion flex items-center justify-center">
              <f.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-lg mb-1">{f.label}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* PLATFORMS */}
      <section id="platforms" className="max-w-6xl mx-auto pb-12 scroll-mt-32">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Choose your device
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Pick Your <span className="text-gradient">Platform</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {platforms.map((p) => (
            <Link
              to={p.to}
              key={p.to}
              className="group glass-strong p-6 sm:p-7 flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 ${p.clay} flex items-center justify-center mb-5`}>
                <p.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                {p.badge}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm sm:text-base text-foreground/70 mb-5 flex-1">
                {p.description}
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all">
                Read tutorial <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
