import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/id6761042935";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.mysorted.sorted";
const SUPPORT_EMAIL = "support@mysorted.app";

export default function DownloadCta({
  heading = "Get Sorted on iPhone or Android",
  className = "",
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <section
      className={`bg-cloud border-t border-forest/5 py-12 md:py-16 ${className}`}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-[family-name:var(--font-nunito)] text-2xl md:text-3xl font-bold text-forest mb-5">
          {heading}
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            aria-label="Download Sorted on the App Store"
            className="inline-block cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <Image
              src="/images/app-store-badge.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              unoptimized
              className="h-12 md:h-14 w-auto"
            />
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener"
            aria-label="Get Sorted on Google Play"
            className="inline-block cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <Image
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              width={646}
              height={250}
              unoptimized
              className="h-[60px] md:h-[70px] w-auto -mx-1.5"
            />
          </a>
        </div>
        <p className="mt-5 text-sm text-smoke">
          Need help?{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-teal hover:underline cursor-pointer"
          >
            Email {SUPPORT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
