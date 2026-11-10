// The eight features, each on a torn receipt that straightens and lifts on hover.

type IconProps = { className?: string; stroke?: string };

const icon = (paths: React.ReactNode) =>
  function Icon({ className = "h-[26px] w-[26px]" }: IconProps) {
    return (
      <svg aria-hidden className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        {paths}
      </svg>
    );
  };

const ScanIcon = icon(<><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M7 12h10" /></>);
const SendIcon = icon(<><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>);
const PoundIcon = icon(<><circle cx="12" cy="12" r="10" /><path d="M15 8.5a2.5 2.5 0 0 0-5 0V16M8.5 12.5h5M8.5 16h7" /></>);
const RouteIcon = icon(<><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></>);
const AtIcon = icon(<><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" /></>);
const CalendarIcon = icon(<><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>);
const ChartIcon = icon(<><path d="M3 20h18" /><path d="M6 20v-4M12 20V10M18 20V4" /></>);
const LockIcon = icon(<><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>);

type Tone = "paper" | "forest" | "sage";

const features: { Icon: (p: IconProps) => React.ReactElement; title: string; description: string; tag?: string; tone: Tone; rot: string }[] = [
  { Icon: ScanIcon, title: "Scan receipts in seconds", description: "Snap a photo. Sorted reads the shop, date and amount, and picks a category.", tone: "paper", rot: "-2deg" },
  { Icon: SendIcon, title: "Invoices clients pay by card", description: "Every invoice gets a payment link. When your client pays, Sorted marks it paid.", tone: "paper", rot: "1.5deg" },
  { Icon: PoundIcon, title: "Know what to put aside", description: "A live self-employed tax estimate from your income, expenses and mileage. An estimate to plan with.", tone: "forest", rot: "-1deg" },
  { Icon: RouteIcon, title: "Mileage at HMRC rates", description: "Log trips yourself, or let GPS record them in the background (beta).", tone: "paper", rot: "2deg" },
  { Icon: AtIcon, title: "Email receipts straight in", description: "Forward online receipts to your own Sorted address and they land in your account. On Pro.", tag: "PRO", tone: "paper", rot: "1deg" },
  { Icon: CalendarIcon, title: "UK tax year, done right", description: "Uses the receipt date (6 Apr–5 Apr), not today.", tone: "sage", rot: "-2.5deg" },
  { Icon: ChartIcon, title: "Reports for your accountant", description: "Profit & loss any time. On Pro, a tax summary PDF emailed in one tap.", tone: "paper", rot: "1.5deg" },
  { Icon: LockIcon, title: "Every receipt, kept", description: "Photos and details in your Vault, easy to search when you need them.", tone: "paper", rot: "-1.5deg" },
];

const toneClass: Record<Tone, { box: string; title: string; body: string; num: string }> = {
  paper: { box: "bg-paper text-forest", title: "text-forest", body: "text-smoke", num: "text-smoke" },
  forest: { box: "bg-forest text-warm", title: "text-warm", body: "text-mint", num: "text-sage" },
  sage: { box: "bg-sage text-forest", title: "text-forest", body: "text-forest", num: "text-forest" },
};

export default function Features() {
  return (
    <section id="features" className="bg-mint py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[1152px] px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[.12em] text-forest">( 08 FEATURES )</span>
            <h2 className="max-w-[820px] font-display text-5xl uppercase leading-[.92] text-forest md:text-[76px]">
              Everything a sole trader needs to stay sorted
            </h2>
          </div>
          <p className="pb-1.5 font-mono text-xs uppercase tracking-wide text-forest">
            No jargon. No spreadsheets.
            <br />
            No accountant required.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, description, tag, tone, rot }, i) => {
            const t = toneClass[tone];
            return (
              <div key={title} className="feat" style={{ "--rot": rot } as React.CSSProperties}>
                <div className={`torn flex h-full min-h-[196px] flex-col gap-2.5 px-5 py-[22px] ${t.box}`}>
                  <div className="flex items-center justify-between">
                    <Icon />
                    <span className={`font-mono text-[11px] ${t.num}`}>
                      {String(i + 1).padStart(2, "0")}
                      {tag ? ` · ${tag}` : ""}
                    </span>
                  </div>
                  <h3 className={`font-sans text-lg font-black leading-tight ${t.title}`}>{title}</h3>
                  <p className={`text-sm leading-normal ${t.body}`}>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p aria-hidden className="mt-10 hidden font-mono text-xs tracking-widest text-forest md:block">HOVER A RECEIPT TO PICK IT UP</p>
      </div>
    </section>
  );
}
