import Image from "next/image";

// Final call to action: download on the left, sign in for people who already
// use Sorted on the right. Hedgie wiggles while you hover the store badges.

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.mysorted.sorted";

export default function DownloadSignIn({ appStoreUrl, trialDays }: { appStoreUrl: string; trialDays: number }) {
  return (
    <section id="download" className="relative scroll-mt-20 overflow-hidden bg-night text-warm">
      <div className="relative z-10 mx-auto flex max-w-[1152px] flex-col gap-12 px-5 pb-40 pt-20 md:pt-28 lg:flex-row lg:items-center lg:justify-between">
        <div className="group flex max-w-[560px] flex-col items-start gap-[18px]">
          <span className="font-mono text-xs tracking-[.12em] text-sage">( DOWNLOAD )</span>
          <h2 className="font-display text-5xl leading-[.92] text-warm md:text-[84px]">YOUR TAXES WON&apos;T SORT THEMSELVES.</h2>
          <p className="text-xl text-sage">But it only takes 5 minutes to get started.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href={appStoreUrl} target="_blank" rel="noopener" aria-label="Download Sorted on the App Store" className="block transition-transform hover:scale-105">
              <Image src="/images/app-store-badge.svg" alt="Download on the App Store" width={120} height={40} unoptimized className="h-[54px] w-auto" />
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener" aria-label="Get Sorted on Google Play" className="block transition-transform hover:scale-105">
              <Image src="/images/google-play-badge.png" alt="Get it on Google Play" width={646} height={250} unoptimized className="-mx-1.5 h-[68px] w-auto" />
            </a>
            <span aria-hidden className="relative ml-2 hidden h-[150px] w-[150px] md:block">
              <span className="absolute inset-4 rounded-full bg-surface" />
              <Image src="/images/hedgie-pointing.png" alt="" width={768} height={768} sizes="150px" className="point-wiggle relative h-[150px] w-[150px] origin-bottom -scale-x-100 object-contain" />
            </span>
          </div>
          <p className="font-mono text-xs uppercase tracking-wide text-line">
            Free to start • {trialDays}-day Pro trial • Cancel anytime in the App Store or Google Play
          </p>
          <p className="text-sm text-line">
            Need help?{" "}
            <a href="mailto:support@mysorted.app" className="text-gold hover:underline">Email support@mysorted.app</a>
          </p>
        </div>

        <div className="flex w-full max-w-[320px] flex-col gap-3.5 rounded-3xl border border-elevated bg-surface px-[26px] py-7">
          <span className="font-mono text-xs tracking-[.12em] text-sage">( SIGN IN )</span>
          <span className="font-sans text-2xl font-black leading-tight text-warm">Already using Sorted?</span>
          <span className="text-[15px] leading-normal text-line">Sign in on the web at app.mysorted.app.</span>
          <a href="https://app.mysorted.app" target="_blank" rel="noopener" className="flex h-[52px] items-center justify-center rounded-[14px] bg-amber font-sans text-[17px] font-black text-night hover:bg-amber/90">
            Sign in →
          </a>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[180px] items-end justify-center overflow-hidden font-display text-[clamp(140px,24vw,300px)] leading-[.74] text-surface">
        SORTED
      </div>
    </section>
  );
}
