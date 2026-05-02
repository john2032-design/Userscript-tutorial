import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  icon: ReactNode;
  variant?: "primary" | "warm" | "cool";
}

const variantClass = {
  primary: "clay",
  warm: "clay-warm",
  cool: "clay-cool",
};

const PageHeader = ({ eyebrow, title, description, icon, variant = "primary" }: PageHeaderProps) => (
  <section className="max-w-4xl mx-auto text-center mb-10 sm:mb-16 animate-fade-up px-1">
    <div className={`inline-flex w-16 h-16 sm:w-24 sm:h-24 ${variantClass[variant]} items-center justify-center mb-5 sm:mb-6 animate-float`}>
      {icon}
    </div>
    <p className="text-[11px] sm:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 sm:mb-3">
      {eyebrow}
    </p>
    <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 leading-[1.1] break-words">
      {title}
    </h1>
    <p className="text-sm sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
      {description}
    </p>
  </section>
);

export default PageHeader;
