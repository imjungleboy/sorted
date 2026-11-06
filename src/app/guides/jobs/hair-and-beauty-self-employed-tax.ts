import type { JobGuide } from "./types";

export const hairAndBeauty: JobGuide = {
  slug: "hair-and-beauty-self-employed-tax",
  title: "Tax for self-employed hairdressers, beauty and massage therapists",
  metaTitle: "Self-employed hairdresser tax return and expenses — Sorted",
  metaDescription:
    "Your self-employed hairdresser tax return made simple: chair rent, products, kit, training, insurance and mobile travel for hair, beauty and massage pros.",
  intro:
    "If you rent a chair, run your own room or travel to clients, you're likely self-employed and file a Self Assessment return each year. This guide covers the self-employed hairdresser tax return, and the costs beauty therapists, massage therapists and makeup artists can usually claim.",
  canClaim: [
    {
      item: "Chair or room rent.",
      detail:
        "Rent you pay a salon owner for a chair, room or station is rent for business premises, along with any business rates and utility bills you pay for that space.",
    },
    {
      item: "Products you use on clients.",
      detail:
        "Colour, developer, treatments, waxes, oils and lotions count as materials. Products you buy to sell on to clients count as stock.",
    },
    {
      item: "Kit and tools.",
      detail:
        "Scissors, clippers, dryers, straighteners, a massage couch or a makeup kit. Under the cash basis, the standard method for sole traders, you claim them in the year you pay.",
    },
    {
      item: "Tunics and aprons.",
      detail:
        "Uniforms that aren't everyday clothing, and aprons you use only for work, including the cost of cleaning them.",
    },
    {
      item: "Training courses.",
      detail:
        "Courses that improve skills you already use or keep you up to date, such as a new colour or lash technique for the work you already do.",
    },
    {
      item: "Insurance.",
      detail:
        "Public liability and treatment or professional indemnity insurance for your business.",
    },
    {
      item: "Travel between clients.",
      detail:
        "If you're mobile, fuel, parking and train or bus fares between clients. For a car or van you can use HMRC's flat rate of 55p a mile for the first 10,000 business miles in 2026/27 (45p before 6 April 2026) instead of the real costs.",
    },
    {
      item: "Booking, card and marketing costs.",
      detail:
        "Booking software, card reader and bank charges, your website, and advertising.",
    },
    {
      item: "Phone.",
      detail: "The business share of your mobile bill, for bookings and client messages.",
    },
  ],
  cantClaim: [
    "Everyday clothes you wear to work, even all-black salon wear",
    "Products or treatments you use on yourself, family or friends",
    "Your lunch on a normal working day",
    "Parking fines",
    "Travel from home to a salon you work at regularly",
  ],
  sections: [
    {
      heading: "Your self-employed hairdresser tax return",
      paragraphs: [
        "Your return shows your takings for the tax year (6 April to 5 April) and your allowable costs. You pay income tax and National Insurance on what's left, your profit. The 2025/26 return is due online, with any tax, by 31 January 2027. If you file late, there's a £100 penalty straight away.",
        "Record every payment you take, whether it's cash, card or bank transfer. Keep receipts for what you claim, and keep your records for at least 5 years after the 31 January deadline.",
        "Salon and client payments arrive without tax taken off, so set some aside each week. If last year's bill was £1,000 or more, you'll usually also make payments on account towards next year: half on 31 January and half on 31 July.",
      ],
    },
    {
      heading: "Renting a chair: are you self-employed?",
      paragraphs: [
        "Your job title doesn't decide this, the way you work does. gov.uk says signs of self-employment include sending invoices, paying your own tax and National Insurance, not being supervised, and not getting holiday or sick pay.",
        "If the salon sets your hours, takes your money and pays you a wage, you may be an employee instead. HMRC's employment status tool gives its view for your situation, and an accountant can help if the answer isn't clear.",
      ],
    },
    {
      heading: "Mobile beauty and makeup artists: travel",
      paragraphs: [
        "gov.uk says travel between home and work can't be claimed. If you're mobile and your home is your business base, trips out to different clients are usually business travel. Travel to a salon where you work most days is more likely to count as commuting.",
        "This depends on how you work, so check with an accountant if you're unsure. Either way, log each trip with the date, where you went and why, so you have the evidence. Parking at a client's home goes on top of the mileage rate.",
      ],
    },
  ],
  faqs: [
    {
      q: "What can a self-employed hairdresser claim on their tax return?",
      a: "Chair rent, products you use on clients, scissors and other tools, training, insurance, the business share of your phone, and travel between clients if you're mobile.",
    },
    {
      q: "What can a self-employed beauty therapist claim?",
      a: "Room or chair rent, products and consumables, equipment such as a couch or lamp, insurance, training that improves the skills you use, and uniforms that aren't everyday clothing.",
    },
    {
      q: "What tax deductions can a self-employed massage therapist claim?",
      a: "Your couch, oils, towels and other supplies, room hire, insurance, professional membership, relevant training, and travel to clients if you work as a mobile therapist.",
    },
    {
      q: "Can a self-employed makeup artist claim makeup?",
      a: "Yes, for makeup and brushes in your work kit that you use on clients. Makeup you use on yourself is personal, so it can't be claimed.",
    },
    {
      q: "When do I need to register as a self-employed hairdresser?",
      a: "If your income from self-employment is more than £1,000 in a tax year, register for Self Assessment by 5 October after that tax year ends. For 2025/26 that date was 5 October 2026, so register now if you've missed it.",
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
      label: "gov.uk: Clothing expenses if you're self-employed",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/clothing",
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
      label: "gov.uk: Self Assessment deadlines",
      url: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
    },
    {
      label: "gov.uk: Cash basis — income and expenses",
      url: "https://www.gov.uk/simpler-income-tax-cash-basis/income-and-expenses-under-cash-basis",
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
    {
      label: "gov.uk: Business records if you're self-employed",
      url: "https://www.gov.uk/self-employed-records",
    },
  ],
};
