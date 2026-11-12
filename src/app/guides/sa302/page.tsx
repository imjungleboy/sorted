import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../../components/GuideLayout";

const path = "/guides/sa302";
const title = "SA302 form for a mortgage: how to get it";
const intro =
  "An SA302 form is HMRC's calculation of your tax for a year, and it's the paperwork most self-employed people are asked for when they apply for a mortgage. Here's what it is, how to download it, and what lenders usually want with it.";

export const metadata: Metadata = {
  title: "SA302 form: how to download it for a mortgage — Sorted",
  description:
    "What the HMRC SA302 form and tax year overview are, how to download them from your online account, how many years you can get, and what mortgage lenders ask.",
  alternates: { canonical: path },
  openGraph: { title, description: intro, url: path, type: "article" },
};

export default function Sa302Page() {
  return (
    <GuideLayout
      path={path}
      title={title}
      intro={intro}
      sources={[
        {
          label: "gov.uk: Get your SA302 tax calculation",
          url: "https://www.gov.uk/sa302-tax-calculation",
        },
        {
          label: "gov.uk: Understand your Self Assessment bill — tax calculation (SA302)",
          url: "https://www.gov.uk/understand-self-assessment-bill/tax-calculation-sa302",
        },
        {
          label: "gov.uk: Mortgage providers and lenders who accept a SA302 tax calculation and a tax year overview",
          url: "https://www.gov.uk/government/publications/mortgage-providers-and-lenders-who-accept-a-sa302-tax-calculation-or-tax-year-overview",
        },
        {
          label: "gov.uk: Self Assessment tax returns — sending your return",
          url: "https://www.gov.uk/self-assessment-tax-returns/sending-return",
        },
        {
          label: "gov.uk: Business records if you're self-employed",
          url: "https://www.gov.uk/self-employed-records",
        },
      ]}
      faqs={[
        {
          q: "How do I get my SA302 from HMRC?",
          a: "Sign in to your HMRC online account, go to Self Assessment, then More details about your Self Assessment returns and payments. From there you can print your tax calculation and your tax year overview.",
        },
        {
          q: "How many years of SA302 can I download?",
          a: "Gov.uk says you can get your SA302 for the last 4 years, once you've sent the tax return for each year. You can get a tax year overview for any year.",
        },
        {
          q: "Why can't I see my SA302 after filing?",
          a: "You can't print your documents until 72 hours after you send your tax return. If it still isn't there after that, contact HMRC.",
        },
        {
          q: "Does HMRC still post the SA302?",
          a: "HMRC posts the calculation if you filed a paper return. If you filed online, you download and print it yourself from your HMRC online account.",
        },
        {
          q: "Will my mortgage lender accept an SA302 I printed myself?",
          a: "Many lenders do. Gov.uk says to check that your lender accepts documents you've printed yourself, so ask the lender or your broker before you apply.",
        },
        {
          q: "I used accounting software to file. Where is my SA302?",
          a: "Print the tax calculation from the software you used; it may be called a tax computation. You can still get the tax year overview from your HMRC online account.",
        },
      ]}
    >
      <p>
        If you&apos;re self-employed and applying for a mortgage, the lender
        can&apos;t check a payslip. Instead, they usually ask for proof of
        income from HMRC itself. That normally means your SA302 form and your
        tax year overview, for one or more recent tax years.
      </p>

      <h2>What is an SA302 form?</h2>
      <p>
        SA302 is HMRC&apos;s name for your Self Assessment tax calculation. It
        shows:
      </p>
      <ul>
        <li>your total income on which tax is due</li>
        <li>any allowances and reliefs you have</li>
        <li>the total amount you owe for the tax year</li>
        <li>how HMRC worked that amount out</li>
      </ul>
      <p>
        It doesn&apos;t include payments on account or other amounts you owe,
        such as penalties. It&apos;s a calculation, not a bill: HMRC sends a
        separate statement telling you how much to pay.
      </p>

      <h2>What is a tax year overview?</h2>
      <p>
        A tax year overview is a separate document you print from your HMRC
        online account, for any tax year. Lenders usually ask for it alongside the SA302,
        for the same tax years.
      </p>

      <h2>How to download your SA302 from HMRC</h2>
      <ol>
        <li>
          File your Self Assessment tax return. You can send it any time after
          the tax year ends on 5 April.
        </li>
        <li>
          Wait at least 72 hours. You can&apos;t print the documents before
          then.
        </li>
        <li>Sign in to your HMRC online account.</li>
        <li>
          Go to <strong>Self Assessment</strong>, then{" "}
          <strong>More details about your Self Assessment returns and payments</strong>
          .
        </li>
        <li>
          Print or save the tax calculation for each year you need, then do
          the same for the tax year overview.
        </li>
      </ol>
      <p>
        If you or your accountant filed through commercial software, print the
        tax calculation from that software instead. It may be called a
        &quot;tax computation&quot;. The tax year overview still comes from
        your HMRC online account.
      </p>
      <p className="callout">
        Applying soon after the tax year ends? Filing your return early means
        your latest SA302 is ready sooner. If a lender wants your most recent
        year, you can&apos;t download it until that return is in.
      </p>

      <h2>Does HMRC still post SA302s?</h2>
      <p>
        If you filed a paper return, HMRC sends your tax calculation by post.
        If you filed online, you download it yourself as above. If you have
        trouble getting the documents, gov.uk says to contact HMRC.
      </p>

      <h2>Using an SA302 for a mortgage</h2>
      <p>
        Every lender sets its own rules, so treat this as a general guide and
        check with your lender or mortgage broker:
      </p>
      <ul>
        <li>
          <strong>Which documents:</strong>{" "}
          usually the SA302 and the tax year overview for each
          year they want to see. Ask whether they need anything else.
        </li>
        <li>
          <strong>How many years:</strong>{" "}
          this varies by lender. You can download the SA302 for the last 4
          years, so you should be able to provide whatever they ask for, as
          long as you filed those returns.
        </li>
        <li>
          <strong>Self-printed copies:</strong>{" "}
          gov.uk says to check that your lender accepts documents you&apos;ve
          printed yourself. HMRC has published a list of lenders that accept
          them, but it was last updated in 2020, so ask the lender directly.
        </li>
      </ul>
      <p>
        The figures on your SA302 come from your tax return. If your return
        understates your profit, your SA302 will too, and that can affect how
        much a lender is willing to offer. If your return is wrong, speak to
        HMRC or an accountant about correcting it rather than relying on it.
      </p>

      <h2>Good records make this easier</h2>
      <p>
        An SA302 is only as reliable as the return behind it. Keeping your
        income and expense records up to date through the year makes the
        return quicker to finish and easier to stand behind if a lender asks
        questions. HMRC says to <mark>keep records for at least 5 years</mark> after the 31
        January deadline. For what you can and can&apos;t claim, see{" "}
        <Link href="/guides/sole-trader-allowable-expenses">
          the sole trader expenses list
        </Link>
        , and for dates see the{" "}
        <Link href="/guides/self-assessment-deadline">
          Self Assessment deadline guide
        </Link>
        .
      </p>

      <h2>How Sorted helps</h2>
      <p>
        Sorted keeps your receipts, income and mileage in one place through
        the year, and gives you a profit and loss report. With Sorted Pro you also get a
        year-end tax summary PDF and an accountant pack. That makes the return, and the paperwork
        that follows it, easier. Sorted doesn&apos;t file your return or
        produce your SA302: those come from HMRC.
      </p>
    </GuideLayout>
  );
}
