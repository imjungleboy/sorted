import type { JobGuide } from "./types";

export const therapist: JobGuide = {
  slug: "therapist-self-employed-tax",
  title: "Tax for self-employed therapists and counsellors",
  metaTitle: "Self-employed therapist tax deductions UK — Sorted",
  metaDescription:
    "Self-employed therapist tax deductions explained: supervision, room hire, membership, insurance, training and platform fees for counsellors and therapists.",
  intro:
    "If you see clients in private practice, rent a room by the hour or work through an online platform, you're likely a self-employed sole trader. This guide covers self-employed therapist tax deductions: the costs counsellors, psychotherapists and massage therapists can usually claim.",
  canClaim: [
    {
      item: "Supervision.",
      detail:
        "What you pay a supervisor for supervision of your client work.",
    },
    {
      item: "Room hire.",
      detail:
        "Rent for a therapy room, whether by the hour, by the day or on a longer let, plus its bills if you pay them.",
    },
    {
      item: "Professional membership.",
      detail:
        "Membership of a professional body related to your work, such as BACP, UKCP or a massage therapy association, and professional journals.",
    },
    {
      item: "Insurance.",
      detail:
        "Professional indemnity insurance premiums, and public liability or other insurance for your practice.",
    },
    {
      item: "Training and CPD.",
      detail:
        "Courses, workshops and conferences that build on the skills you already use, or keep you up to date with changes in your field.",
    },
    {
      item: "Online platform and directory fees.",
      detail:
        "Listing fees for therapist directories, and the fees or commission an online platform takes for sessions.",
    },
    {
      item: "Video call and booking software.",
      detail:
        "Subscriptions for video sessions, booking, secure notes and card payments.",
    },
    {
      item: "Working from home.",
      detail:
        "If you see clients online from home for 25 hours or more a month, HMRC's flat rate is £10 to £26 a month. Or claim a fair share of your real bills.",
    },
    {
      item: "Travel between rooms or clients.",
      detail:
        "Mileage at HMRC's flat rate of 55p a mile for the first 10,000 business miles in 2026/27, or bus and train fares, for business trips.",
    },
  ],
  cantClaim: [
    "Everyday clothes you wear to see clients",
    "Training to move into a new area that isn't related to your practice",
    "The personal share of your phone, laptop or internet",
    "Travel from home to a room you rent at the same place every week, if it's your regular workplace",
  ],
  sections: [
    {
      heading: "Self-employed therapist tax deductions: training and supervision",
      paragraphs: [
        "gov.uk lets you claim training that improves skills you already use, keeps you up to date with your field, or helps you run your business. It doesn't let you claim training to start a new business or move into an area that isn't related to your work.",
        "So a short course in a new approach for the clients you already see is usually allowable. Training to qualify before you started practising is more likely to count as starting a new business, which can't be claimed. Where a course sits in between, check with an accountant.",
        "Supervision is part of how you run your practice, so it's usually treated as a business cost. Keep the invoices.",
      ],
    },
    {
      heading: "Counsellor self-employed tax: platforms and online work",
      paragraphs: [
        "If you work through an online platform, check whether it treats you as self-employed and pays you without taking off tax. If it does, the sessions are part of your business income, and the platform's fees are a business cost. Use its statements so the fee isn't counted twice.",
        "If you also have a salaried NHS or agency role, that pay is taxed through PAYE. Your private practice profit goes on your Self Assessment return, and business costs can only be set against that part.",
      ],
    },
    {
      heading: "Deadlines and setting tax aside",
      paragraphs: [
        "Your 2025/26 return and payment are due by 31 January 2027, and filing late costs £100 straight away. Client fees arrive without tax taken off, so set some of each payment aside. If last year's bill was £1,000 or more, you may also owe payments on account towards next year, due 31 January and 31 July.",
        "Keep invoices for supervision, room hire, insurance and courses, and a record of every client payment. You need to keep your records for at least 5 years after the 31 January deadline for that year's return. If your total income from self-employment is £1,000 or less in a tax year, the trading allowance means you usually don't need to tell HMRC, but you can't claim expenses as well if you use it.",
      ],
    },
  ],
  faqs: [
    {
      q: "What tax deductions can a self-employed therapist claim?",
      a: "Usually supervision, room hire, professional membership, indemnity insurance, relevant training and CPD, platform and directory fees, and the business share of your phone and internet.",
    },
    {
      q: "Can a self-employed counsellor claim supervision?",
      a: "Supervision you pay for as part of your practice is usually treated as a business cost. Keep the invoices with your records.",
    },
    {
      q: "Is BACP membership tax deductible?",
      a: "If you're self-employed, membership of a professional body related to your work is an allowable expense. Your professional indemnity insurance is too.",
    },
    {
      q: "What can a self-employed massage therapist claim?",
      a: "Your couch, oils, towels and other supplies, room hire, insurance, professional membership, relevant training and travel to clients if you're mobile.",
    },
    {
      q: "Can I claim my counselling training against tax?",
      a: "CPD that builds on the work you already do can usually be claimed. Training to qualify before you set up in practice is more likely to count as starting a new business, which gov.uk says can't be claimed. Check with an accountant if you're unsure.",
    },
  ],
  sources: [
    {
      label: "gov.uk: Expenses if you're self-employed (printable guide)",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/print",
    },
    {
      label: "gov.uk: Training courses if you're self-employed",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/training-courses",
    },
    {
      label: "gov.uk: Subscriptions if you're self-employed",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/subscriptions",
    },
    {
      label: "gov.uk: Simplified expenses — working from home",
      url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/working-from-home",
    },
    {
      label: "gov.uk: Simplified expenses — vehicles",
      url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/vehicles",
    },
    {
      label: "gov.uk: Self Assessment deadlines",
      url: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
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
    {
      label: "gov.uk: Tax-free allowances on property and trading income",
      url: "https://www.gov.uk/guidance/tax-free-allowances-on-property-and-trading-income",
    },
  ],
};
