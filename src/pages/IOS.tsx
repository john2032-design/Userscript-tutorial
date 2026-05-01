import { CheckCircle2, Settings, DownloadCloud } from "lucide-react";
import { FaApple, FaAppStoreIos, FaSafari } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import Step from "@/components/Step";
import StepNav from "@/components/StepNav";

const IOS = () => (
  <PageLayout>
    <PageHeader
      eyebrow="iOS Tutorial"
      title={<>Install on <span className="text-gradient">iPhone & iPad</span></>}
      description="Use the Stay extension to run the VortixWorld userscript directly inside Safari."
      icon={<FaApple className="w-10 h-10 sm:w-12 sm:h-12 text-white" />}
      variant="cool"
    />

    <section className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
      <Step number={1} variant="cool" title="Install Stay for Safari" icon={<FaAppStoreIos />}>
        <p>
          Open the App Store and download <strong>“Stay for Safari”</strong>.
          It's a free userscript manager built specifically for Safari on iOS.
        </p>
      </Step>

      <Step number={2} variant="cool" title="Enable the extension in Settings" icon={<Settings />}>
        <p>Open <strong>iOS Settings → Apps → Safari → Extensions</strong>.</p>
        <p>
          Tap <strong>Stay</strong>, toggle it <strong>On</strong>, and grant
          permission to run on <strong>All Websites</strong>.
        </p>
      </Step>

      <Step number={3} variant="cool" title="Get & install the userscript" icon={<FaSafari />}>
        <p>
          Run <code className="neu-inset px-2 py-0.5 rounded-md text-xs font-mono">!get-userscript</code> to
          receive an install link in your DMs from the bot.
        </p>
        <p>
          Open the link in Safari. You'll see an <strong>Install</strong> button
          in the bottom-right — tap it, then tap <strong>Open / Install</strong>.
          Stay will open and install the script automatically.
        </p>
      </Step>

      <Step number={4} variant="cool" title="You're done!" icon={<DownloadCloud />}>
        <p>
          Open any supported link in Safari and VortixWorld will handle the rest.
        </p>
      </Step>

      <div className="clay-cool p-6 sm:p-7 flex items-start gap-4 mt-8">
        <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
        <div className="min-w-0">
          <h3 className="font-display font-bold text-lg sm:text-xl mb-1">All set!</h3>
          <p className="text-sm sm:text-base opacity-95 break-words">
            VortixWorld now runs on Safari on your iPhone or iPad. Enjoy!
          </p>
        </div>
      </div>
    </section>

    <StepNav prev={{ to: "/", label: "Home" }} next={{ to: "/android", label: "Android" }} />
  </PageLayout>
);

export default IOS;
