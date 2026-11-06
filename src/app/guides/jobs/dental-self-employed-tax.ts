import type { JobGuide } from "./types";

export const dental: JobGuide = {
  slug: "dental-self-employed-tax",
  title: "Tax for self-employed dentists and hygienists",
  metaTitle: "Self-employed dentist tax return and expenses — Sorted",
  metaDescription:
    "Your self-employed dentist tax return made simple: GDC fees, indemnity, CPD, loupes and kit, lab costs and travel for associate dentists and dental hygienists.",
  intro:
    "Many associate dentists, hygienists and therapists work as self-employed sole traders and file a Self Assessment return. This guide covers the self-employed dentist tax return: the costs you can usually claim, and what to check in your associate agreement.",
  canClaim: [
    {
      item: "GDC annual retention fee.",
      detail:
        "You must pay it every year to stay on the register and practise, so it's a cost of your business. Dentists pay by 31 December and dental care professionals by 31 July.",
    },
    {
      item: "Indemnity.",
      detail:
        "gov.uk lists professional indemnity insurance premiums as an allowable expense, and the same goes for other insurance for your business.",
    },
    {
      item: "Professional membership.",
      detail:
        "Membership of a professional body related to your work, such as the BDA or BSDHT, and professional journals.",
    },
    {
      item: "CPD.",
      detail:
        "Courses, conferences and learning that keep the skills you already use up to date, or keep you current with new techniques and technology in dentistry.",
    },
    {
      item: "Loupes and kit.",
      detail:
        "Loupes, a headlight, instruments and other equipment you buy and keep for work. Under the cash basis, the standard method for sole traders, you claim them in the year you pay.",
    },
    {
      item: "Lab fees and materials you pay for.",
      detail:
        "If your associate agreement makes you pay a share of lab bills or materials, that share is a business cost. Costs the practice pays aren't yours to claim.",
    },
    {
      item: "Scrubs and tunics.",
      detail:
        "Clinical uniforms that aren't everyday clothing, plus the cost of cleaning them.",
    },
    {
      item: "Business mileage.",
      detail:
        "Trips between practices or to courses at HMRC's flat rate of 55p a mile for the first 10,000 business miles in 2026/27 (45p before 6 April 2026). Parking goes on top.",
    },
    {
      item: "Phone.",
      detail: "The business share of your mobile bill.",
    },
  ],
  cantClaim: [
    "Everyday clothes you wear to the practice",
    "Lab or material costs the practice pays and doesn't charge back to you",
    "Travel from home to the practice where you work most days",
    "Training to move into an area that isn't related to dentistry",
  ],
  sections: [
    {
      heading: "Your self-employed dentist tax return",
      paragraphs: [
        "As a self-employed associate, your income is what the practice pays you, usually a share of your fees, and you pay tax on your profit after allowable costs. Your 2025/26 return and payment are due by 31 January 2027, and filing late costs £100 straight away.",
        "If the practice pays you without taking off tax, it's up to you to set money aside. If last year's bill was £1,000 or more, you'll usually also make payments on account towards next year: half on 31 January and half on 31 July. That can make your first January bill bigger than you expect, so put some aside every month.",
        "If you also have an employed role, for example in hospital or community dentistry, that pay is taxed through PAYE. Put both on the same return, but set business costs only against the self-employed part.",
      ],
    },
    {
      heading: "Dental hygienist self-employed: are you really self-employed?",
      paragraphs: [
        "Calling yourself self-employed doesn't make it so. gov.uk says signs of self-employment include sending invoices, not being under direct supervision, paying your own tax and National Insurance, and not getting holiday or sick pay.",
        "Hygienists and therapists who work set hours under one practice's direction may be employees for tax. HMRC's employment status tool gives its view for a particular role, and an accountant can review your agreement.",
      ],
    },
    {
      heading: "Lab bills and your associate agreement",
      paragraphs: [
        "Associate agreements differ in who pays for lab work and materials. Check what yours says and keep the practice's statements. Where lab fees come off your share before you're paid, make sure they aren't counted twice, once as a deduction from your income and again as an expense.",
        "This can get complicated, so it's worth asking an accountant who knows dental associate agreements to look at your first year.",
      ],
    },
  ],
  faqs: [
    {
      q: "What can a self-employed dentist claim on their tax return?",
      a: "Usually your GDC retention fee, indemnity, professional membership, CPD, loupes and other kit, your share of lab and material costs if you pay them, and business mileage.",
    },
    {
      q: "Is the GDC annual retention fee tax deductible?",
      a: "If you're self-employed, yes, it's a cost of your business. Check the current fee on the GDC website, as it changes from year to year.",
    },
    {
      q: "Can a self-employed dental hygienist claim expenses?",
      a: "Yes. Your GDC fee, indemnity, membership, CPD, instruments, loupes and clinical uniforms are usually allowable, along with business travel.",
    },
    {
      q: "Can dentists claim loupes as an expense?",
      a: "Yes, if you're self-employed and use them for work. Under the cash basis you claim the full cost in the year you pay for them.",
    },
    {
      q: "When is the tax return deadline for associate dentists?",
      a: "The online return and any tax due for 2025/26 must reach HMRC by 31 January 2027.",
    },
  ],
  sources: [
    {
      label: "GDC: Annual Retention Fee",
      url: "https://www.gdc-uk.org/registration/annual-renewal-and-fees/annual-retention-fee",
    },
    {
      label: "gov.uk: Expenses if you're self-employed (printable guide)",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/print",
    },
    {
      label: "gov.uk: Cash basis — income and expenses",
      url: "https://www.gov.uk/simpler-income-tax-cash-basis/income-and-expenses-under-cash-basis",
    },
    {
      label: "gov.uk: Simplified expenses — vehicles",
      url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles",
    },
    {
      label: "gov.uk: Employment status — self-employed and contractor",
      url: "https://www.gov.uk/employment-status/selfemployed-contractor",
    },
    {
      label: "gov.uk: Check employment status for tax",
      url: "https://www.gov.uk/guidance/check-employment-status-for-tax",
    },
    {
      label: "gov.uk: Understand your Self Assessment bill — payments on account",
      url: "https://www.gov.uk/understand-self-assessment-bill/payments-on-account",
    },
    {
      label: "gov.uk: Self Assessment penalties",
      url: "https://www.gov.uk/self-assessment-tax-returns/penalties",
    },
    {
      label: "gov.uk: Self Assessment deadlines",
      url: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
    },
  ],
};
