import { CheckCircle2 } from "lucide-react";
import { FaWindows, FaChrome, FaFirefox, FaEdge, FaGlobe, FaPuzzlePiece, FaDownload } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import Step from "@/components/Step";
import StepNav from "@/components/StepNav";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const browsers = [
  {
    name: "Chrome",
    icon: FaChrome,
    gradient: "from-yellow-400 via-red-500 to-blue-500",
    install: "Open the Chrome Web Store → search “Tampermonkey” → click Add to Chrome → confirm Add extension.",
    allow: "If Chrome warns about Developer mode extensions, dismiss the bar with ×. If asked Keep / Remove, click Keep. Pin the icon via the puzzle menu.",
  },
  {
    name: "Firefox",
    icon: FaFirefox,
    gradient: "from-orange-500 to-red-600",
    install: "Open addons.mozilla.org → search “Tampermonkey” → click Add to Firefox → click Add in the popup.",
    allow: "Firefox enables Tampermonkey immediately. No extra prompts — just confirm the install and you're done.",
  },
  {
    name: "Edge",
    icon: FaEdge,
    gradient: "from-cyan-500 to-blue-600",
    install: "Open the Edge Add-ons store → search “Tampermonkey” → click Get → confirm Add extension.",
    allow: "Edge may ask to allow extensions from other stores — click Allow once. Pin the icon from the … menu.",
  },
  {
    name: "All Browsers",
    icon: FaGlobe,
    gradient: "from-emerald-500 to-teal-500",
    install: "Visit tampermonkey.net and pick the install link matching your browser. Follow the prompts in your browser's extension store.",
    allow: "Tampermonkey only runs on URLs listed in each script's @match rules — it stays inactive on sites you don't install scripts for.",
  },
];

const PC = () => (
  <PageLayout>
    <PageHeader
      eyebrow="PC Tutorial"
      title={<>Install on <span className="text-gradient">Desktop</span></>}
      description="Set up Tampermonkey once, then install the VortixWorld userscript in seconds."
      icon={<FaWindows className="w-10 h-10 sm:w-12 sm:h-12 text-white" />}
      variant="primary"
    />

    <section className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-5 sm:space-y-6">
        <Step number={1} title="Install Tampermonkey" icon={<FaPuzzlePiece />}>
          <p>
            Tampermonkey is a free, trusted browser extension used by over
            10 million people. Hover any browser below to see its exact install
            and allow steps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {browsers.map((b) => (
              <Tooltip key={b.name} delayDuration={150}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    aria-label={`${b.name} — install and allow steps`}
                    className="neu-sm p-3 sm:p-4 flex items-center gap-3 text-left w-full neu-pressable hover:-translate-y-0.5 transition-transform"
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <b.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-sm">{b.name}</p>
                      <p className="text-xs text-muted-foreground">Hover for steps</p>
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs glass-strong border-0 text-foreground p-4 space-y-2">
                  <p className="font-display font-bold text-sm flex items-center gap-2">
                    <b.icon className="w-4 h-4" /> {b.name}
                  </p>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Install</p>
                    <p className="text-xs leading-relaxed">{b.install}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Allow</p>
                    <p className="text-xs leading-relaxed">{b.allow}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <div className="neu-inset p-4 mt-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Quick recap (same for all browsers)
            </p>
            <p><strong>A.</strong> Open your browser's extension store from the cards above.</p>
            <p><strong>B.</strong> Click <strong>Add to [Browser]</strong> → confirm <strong>Add extension</strong>.</p>
            <p><strong>C.</strong> The Tampermonkey icon appears in your toolbar — pin it for quick access.</p>
          </div>
        </Step>

        <Step number={2} variant="cool" title="Install the VortixWorld Userscript" icon={<FaDownload />}>
          <ol className="list-decimal list-inside space-y-2 pl-1">
            <li>Click the <strong>Install Userscript</strong> button. Tampermonkey intercepts the <code className="font-mono text-xs">.user.js</code> file and opens its install page.</li>
            <li>Review the script info — name, version, description, and matched sites.</li>
            <li>Click the green <strong>Install</strong> button at the top-right. Installs instantly.</li>
            <li>Verify it's active: click the Tampermonkey icon — you'll see <strong>VortixWorld</strong> with a green indicator.</li>
          </ol>
        </Step>
      </div>

      <div className="clay p-6 sm:p-7 flex items-start gap-4">
        <CheckCircle2 className="w-7 h-7 flex-shrink-0 mt-0.5" />
        <div className="min-w-0">
          <h3 className="font-display font-bold text-lg sm:text-xl mb-1">VortixWorld is ready!</h3>
          <p className="text-sm sm:text-base opacity-95 break-words">
            Visit any supported site and the script runs automatically.
          </p>
        </div>
      </div>
    </section>

    <StepNav prev={{ to: "/android", label: "Android" }} />
  </PageLayout>
);

export default PC;
