import { ReactNode } from "react";

interface StepProps {
  number: number | string;
  title: string;
  children: ReactNode;
  variant?: "primary" | "warm" | "cool";
  icon?: ReactNode;
}

const variantClass = {
  primary: "clay",
  warm: "clay-warm",
  cool: "clay-cool",
};

const Step = ({ number, title, children, variant = "primary", icon }: StepProps) => (
  <div className="flex gap-3 sm:gap-5 items-start animate-fade-up">
    <div
      className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 ${variantClass[variant]} flex items-center justify-center rounded-2xl sm:rounded-[1.75rem]`}
    >
      {icon ? (
        <span className="text-white [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">{icon}</span>
      ) : (
        <span className="font-display font-bold text-base sm:text-xl text-white">{number}</span>
      )}
      {icon && (
        <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full glass-strong text-[10px] sm:text-xs font-display font-bold flex items-center justify-center text-foreground">
          {number}
        </span>
      )}
    </div>
    <div className="flex-1 min-w-0 glass p-4 sm:p-6 break-words overflow-hidden">
      <h3 className="font-display font-bold text-base sm:text-xl mb-2 leading-snug break-words hyphens-auto">{title}</h3>
      <div className="text-sm sm:text-base text-foreground/80 leading-relaxed space-y-2 break-words [overflow-wrap:anywhere]">
        {children}
      </div>
    </div>
  </div>
);

export default Step;
