import Image from "next/image";

// The hero: Hedgie scanning a receipt, floating, with three example chips
// popping in round him, the same moment as the app's intro screens. The
// chips are examples, not anyone's real figures.

function ReceiptIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6M16 12h-6M13 16h-3" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

const chips = [
  { text: "Screwfix · £24.99", sub: "Read for you", Icon: ReceiptIcon, place: "top-[6%] -left-[6%] md:left-[0%]", delay: 0.35, bob: 0 },
  { text: "Paid by card", sub: "INV-001042", Icon: CardIcon, place: "top-[42%] -right-[8%] md:-right-[2%]", delay: 0.65, bob: 1.4 },
  { text: "Put aside £1,240", sub: "Tax estimate", Icon: WalletIcon, place: "bottom-[6%] -left-[2%] md:left-[4%]", delay: 0.95, bob: 2.6 },
];

export default function HeroHedgie() {
  return (
    <div className="relative w-64 md:w-[460px] aspect-square">
      <div className="absolute inset-[8%] rounded-full bg-mint/70 blur-2xl" aria-hidden />
      <div className="relative animate-float">
        <Image
          src="/images/hedgie-receipt-scan.png"
          alt="Hedgie the hedgehog scanning a receipt with his phone"
          width={768}
          height={768}
          priority
          sizes="(min-width: 768px) 460px, 256px"
          className="w-full h-auto"
        />
      </div>
      {chips.map(({ text, sub, Icon, place, delay, bob }) => (
        <div key={text} className={`absolute ${place} animate-pop`} style={{ animationDelay: `${delay}s` }} aria-hidden>
          <div className="animate-float-slow" style={{ animationDelay: `${bob}s` }}>
            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 md:px-4 md:py-2 shadow-lg shadow-forest/10">
              <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-teal/10 text-teal">
                <Icon />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] md:text-sm font-bold text-charcoal whitespace-nowrap">{text}</span>
                <span className="block text-[10px] md:text-xs text-smoke whitespace-nowrap">{sub}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
