import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavItem {
  to: string;
  label: string;
}

interface StepNavProps {
  prev?: NavItem;
  next?: NavItem;
}

const StepNav = ({ prev, next }: StepNavProps) => (
  <>
    {/* Inline (desktop only) */}
    <nav
      aria-label="Tutorial navigation"
      className="hidden sm:grid max-w-3xl mx-auto mt-12 mb-12 grid-cols-2 gap-4"
    >
      {prev ? (
        <Link
          to={prev.to}
          className="glass p-5 flex items-center gap-3 group hover:-translate-y-0.5 transition-transform min-w-0"
        >
          <ArrowLeft className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
          <div className="min-w-0 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Previous</p>
            <p className="font-display font-bold text-base truncate">{prev.label}</p>
          </div>
        </Link>
      ) : (
        <span aria-hidden />
      )}

      {next ? (
        <Link
          to={next.to}
          className="clay p-5 flex items-center gap-3 justify-end text-right ml-auto w-full min-w-0"
        >
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider opacity-80">Next</p>
            <p className="font-display font-bold text-base truncate">{next.label}</p>
          </div>
          <ArrowRight className="w-5 h-5 flex-shrink-0" />
        </Link>
      ) : (
        <span aria-hidden />
      )}
    </nav>

    {/* Mobile spacer so sticky bar doesn't cover content */}
    <div aria-hidden className="sm:hidden h-24" />

    {/* Sticky mobile bar */}
    <div className="sm:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-md">
      <div className="glass-strong px-2 py-2 flex items-center gap-2">
        {prev ? (
          <Link
            to={prev.to}
            aria-label={`Previous: ${prev.label}`}
            className="flex-1 neu-sm px-3 py-2.5 flex items-center justify-center gap-2 min-w-0"
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs font-bold truncate">{prev.label}</span>
          </Link>
        ) : (
          <div className="flex-1 px-3 py-2.5 text-center text-xs font-semibold text-muted-foreground">
            Start
          </div>
        )}

        {next ? (
          <Link
            to={next.to}
            aria-label={`Next: ${next.label}`}
            className="flex-1 clay px-3 py-2.5 flex items-center justify-center gap-2 min-w-0 rounded-2xl"
          >
            <span className="text-xs font-bold truncate">{next.label}</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Link>
        ) : (
          <Link
            to="/"
            className="flex-1 clay-cool px-3 py-2.5 flex items-center justify-center gap-2 rounded-2xl"
          >
            <span className="text-xs font-bold">Done — Home</span>
          </Link>
        )}
      </div>
    </div>
  </>
);

export default StepNav;
