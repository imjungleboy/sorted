import type { JobGuide } from "./types";

export const cleaner: JobGuide = {
  slug: "cleaner-self-employed-tax",
  title: "Tax for self-employed cleaners",
  metaTitle: "Self-employed cleaner tax: what you can claim — Sorted",
  metaDescription:
    "Self-employed cleaner tax explained: products, equipment, your van and mileage between jobs, insurance and what you can't claim, for home and window cleaners.",
  intro:
    "If you clean homes, offices or windows for your own customers, you're likely a self-employed sole trader. This guide covers self-employed cleaner tax: the costs you can take off your income, how to claim your van or car, and the deadlines to know.",
  canClaim: [
    {
      item: "Cleaning products.",
      detail:
        "Sprays, cloths, bin bags, gloves and anything else you use up on jobs, if you buy them yourself rather than using the customer's.",
    },
    {
      item: "Equipment.",
      detail:
        "Vacuums, steam cleaners, mops, ladders, a water-fed pole or a pressure washer. Under the cash basis, the standard method for sole traders, you claim them in the year you pay.",
    },
    {
      item: "Your van or car.",
      detail:
        "Either HMRC's flat mileage rate, or the business share of fuel, insurance, repairs, servicing and road tax. Not both for the same vehicle.",
    },
    {
      item: "Parking.",
      detail: "Parking at customers' homes or offices goes on top of the mileage rate. Parking fines don't.",
    },
    {
      item: "Insurance.",
      detail:
        "Public liability insurance and any other insurance policy for your business.",
    },
    {
      item: "Workwear.",
      detail:
        "Tabards, aprons, overalls and safety boots, and branded uniforms that aren't everyday clothing, plus the cost of cleaning them.",
    },
    {
      item: "Advertising.",
      detail: "Flyers, directory listings, your website, and signwriting on your van.",
    },
    {
      item: "Phone.",
      detail: "The business share of your mobile, for bookings and customer messages.",
    },
    {
      item: "Paying helpers.",
      detail: "What you pay a subcontractor or staff member to help you on jobs.",
    },
  ],
  cantClaim: [
    "Driving from home to a job you go to every day, if it's your regular workplace",
    "Everyday clothes you clean in, such as leggings and trainers",
    "Products you use at home for your own cleaning",
    "Parking and speeding fines",
  ],
  sections: [
    {
      heading: "Self-employed cleaner tax: claiming your van or car",
      paragraphs: [
        "You can use HMRC's flat rate for a car or van: 55p a mile for the first 10,000 business miles in 2026/27 (45p before 6 April 2026), then 25p. It covers fuel, insurance, repairs and the cost of the vehicle itself, so you keep a mileage log rather than every fuel receipt.",
        "Or you can claim the business share of your real running costs. Under the cash basis you can also claim the cost of buying a van as an expense, but then you can't use the flat rate for it. Once you use the flat rate for a vehicle, you have to stay with it while you use that vehicle for work. If you're not sure which suits you, an accountant can compare the two.",
      ],
    },
    {
      heading: "Travel between jobs",
      paragraphs: [
        "gov.uk says travel between home and work can't be claimed. Driving between customers during the day is business travel. If you run your business from home and go to different houses each day, trips from home to those jobs are usually business travel too. A single office you clean every day is more likely to be your regular workplace.",
        "This depends on how you work, so check with an accountant if you're unsure. Log each trip with the date, where you went and the miles.",
      ],
    },
    {
      heading: "Window cleaner self-employed: records and deadlines",
      paragraphs: [
        "If customers on your round pay in cash, it counts as income just like card or bank payments, so record every payment as it comes in. Keep your records for at least 5 years after the 31 January deadline for that year.",
        "Your 2025/26 return and payment are due by 31 January 2027, and filing late costs £100 straight away. No tax is taken off before you're paid, so set some aside each week. If last year's bill was £1,000 or more, you may also owe payments on account towards next year, due 31 January and 31 July.",
      ],
    },
  ],
  faqs: [
    {
      q: "What can a self-employed cleaner claim?",
      a: "Products and equipment you buy, your van or car mileage between jobs, parking, insurance, workwear that isn't everyday clothing, advertising and the business share of your phone.",
    },
    {
      q: "Do self-employed cleaners need to register with HMRC?",
      a: "Yes, if your income from self-employment is more than £1,000 in a tax year. Register for Self Assessment by 5 October after the end of the tax year you started.",
    },
    {
      q: "How do window cleaners pay tax?",
      a: "If you're a self-employed window cleaner, you file a Self Assessment return once a year and pay income tax and National Insurance on their profit. No tax is taken off cash rounds, so put some aside as you go.",
    },
    {
      q: "Can I claim mileage as a self-employed cleaner?",
      a: "Yes, for business journeys, at 55p a mile for the first 10,000 miles in 2026/27 and 25p after that. Keep a log of each trip.",
    },
    {
      q: "Can I claim my van if I'm a self-employed cleaner?",
      a: "Yes. Either use the flat mileage rate, or claim the business share of your real costs. You can't do both for the same van.",
    },
  ],
  sources: [
    {
      label: "gov.uk: Expenses if you're self-employed (printable guide)",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/print",
    },
    {
      label: "gov.uk: Travel expenses if you're self-employed",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/travel",
    },
    {
      label: "gov.uk: Simplified expenses — vehicles",
      url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles",
    },
    {
      label: "gov.uk: Cash basis — income and expenses",
      url: "https://www.gov.uk/simpler-income-tax-cash-basis/income-and-expenses-under-cash-basis",
    },
    {
      label: "gov.uk: Clothing expenses if you're self-employed",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/clothing",
    },
    {
      label: "gov.uk: Business records if you're self-employed",
      url: "https://www.gov.uk/self-employed-records",
    },
    {
      label: "gov.uk: Self Assessment deadlines",
      url: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
    },
    {
      label: "gov.uk: Tax-free allowances on property and trading income",
      url: "https://www.gov.uk/guidance/tax-free-allowances-on-property-and-trading-income",
    },
    {
      label: "gov.uk: Payments on account",
      url: "https://www.gov.uk/understand-self-assessment-bill/payments-on-account",
    },
    {
      label: "gov.uk: Self Assessment penalties",
      url: "https://www.gov.uk/self-assessment-tax-returns/penalties",
    },
  ],
};
