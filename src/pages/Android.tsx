import { CheckCircle2 } from "lucide-react";
import { FaAndroid, FaGooglePlay, FaChrome, FaPuzzlePiece } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import Step from "@/components/Step";
import StepNav from "@/components/StepNav";

const Android = () => (
  <PageLayout>
    <PageHeader
      eyebrow="Android Tutorial"
      title={<>Install on <span className="text-gradient">Android</span></>}
      description="On Android you can run Chrome extensions (including Tampermonkey) using Kiwi Browser — a free, Chromium-based browser that supports full desktop extensions."
      icon={<FaAndroid className="w-10 h-10 sm:w-12 sm:h-12 text-white" />}
      variant="warm"
    />

    <section className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
      <Step number={1} variant="warm" title="Install Kiwi Browser from Play Store" icon={<FaGooglePlay />}>
        <p>Get <strong>Kiwi Browser</strong> from the Google Play Store. It's free and supports Chrome extensions.</p>
      </Step>

      <Step number={2} variant="warm" title="Install Tampermonkey in Kiwi" icon={<FaChrome />}>
        <p>
          Open Kiwi → visit the <strong>Chrome Web Store</strong> → search for
          <strong> “Tampermonkey” </strong> → tap <strong>Add to Chrome</strong>.
        </p>
      </Step>

      <Step number={3} variant="warm" title="Install the VortixWorld userscript" icon={<FaPuzzlePiece />}>
        <p>
          Tap <strong>Install Userscript</strong> below → Tampermonkey opens →
          tap <strong>Install</strong>.
        </p>
      </Step>

      <Step number={4} variant="warm" title="Done! Works like the desktop version" icon={<FaAndroid />}>
        <p>Browse to any supported site and the script handles it automatically.</p>
      </Step>

      <div className="clay-warm p-6 sm:p-7 flex items-start gap-4 mt-8">
        <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
        <div className="min-w-0">
          <h3 className="font-display font-bold text-lg sm:text-xl mb-1">You're done!</h3>
          <p className="text-sm sm:text-base opacity-95 break-words">
            VortixWorld now runs on Android just like it does on desktop.
          </p>
        </div>
      </div>
    </section>

    <StepNav prev={{ to: "/ios", label: "iOS" }} next={{ to: "/pc", label: "PC" }} />
  </PageLayout>
);

export default Android;
