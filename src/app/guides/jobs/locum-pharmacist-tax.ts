import type { JobGuide } from "./types";

export const locumPharmacist: JobGuide = {
  slug: "locum-pharmacist-tax",
  title: "Tax for locum pharmacists",
  metaTitle: "Locum pharmacist tax: expenses and your return — Sorted",
  metaDescription:
    "Locum pharmacist tax made simple: GPhC renewal, indemnity, CPD, travel to pharmacies and what you can't claim, plus your Self Assessment tax return deadline.",
  intro:
    "Many locum pharmacists work as self-employed sole traders. If you do, you file a Self Assessment return and can take business costs off your income. This guide covers locum pharmacist tax: the expenses you can usually claim and the rules that trip people up.",
  canClaim: [
    {
      item: "GPhC renewal fee.",
      detail:
        "You have to renew your registration every year to keep practising, so the fee is a cost of your locum business.",
    },
    {
      item: "Professional indemnity insurance.",
      detail:
        "gov.uk lists professional indemnity insurance premiums as an allowable expense, along with other business insurance.",
    },
    {
      item: "Professional body membership.",
      detail:
        "Membership of a professional organisation related to your work, such as the Royal Pharmaceutical Society, and professional journals.",
    },
    {
      item: "CPD and training.",
      detail:
        "Courses, conferences and learning that keep the skills you already use up to date, including what you do for revalidation.",
    },
    {
      item: "Business mileage.",
      detail:
        "HMRC's flat rate is 55p a mile for the first 10,000 business miles in 2026/27 (45p before 6 April 2026), then 25p. Parking at pharmacies goes on top.",
    },
    {
      item: "Train, bus and hotel costs.",
      detail:
        "Fares for business trips, and a hotel and meals if a booking means staying away overnight.",
    },
    {
      item: "Phone.",
      detail: "The business share of your mobile, for bookings and calls with pharmacies and agencies.",
    },
    {
      item: "Agency and booking fees.",
      detail: "Fees you pay an agency or booking platform to find you shifts.",
    },
    {
      item: "Accountant's fees.",
      detail:
        "For business work such as your accounts. gov.uk says the cost of preparing and submitting your Self Assessment return itself can't be claimed.",
    },
  ],
  cantClaim: [
    "Everyday clothes you wear to the pharmacy, such as a shirt and smart trousers",
    "Your lunch on a normal working day",
    "Parking fines",
    "The personal share of your phone or car",
    "Training for a new line of work unrelated to pharmacy",
  ],
  sections: [
    {
      heading: "Is travel to pharmacies allowable?",
      paragraphs: [
        "gov.uk says travel between home and work can't be claimed. Many locums who cover a different pharmacy most days work from home as their business base, which can change the answer. If you work at the same pharmacy most weeks, it may count as your regular workplace.",
        "This depends on your pattern of work, so check with an accountant if you're unsure, and log every trip with the date, the pharmacy and the miles, so you have the evidence.",
      ],
    },
    {
      heading: "Locum or employee?",
      paragraphs: [
        "Calling yourself a locum doesn't settle your tax status. gov.uk says signs of self-employment include sending invoices, not being under direct supervision, paying your own tax and National Insurance, and not getting holiday or sick pay.",
        "If a pharmacy or agency pays you through payroll, you're taxed as an employee for that work and can't claim business expenses against it. HMRC's employment status tool gives its view for a particular role.",
      ],
    },
    {
      heading: "Your locum pharmacist tax return",
      paragraphs: [
        "Your 2025/26 return and any tax due must be in by 31 January 2027. Filing late costs £100 straight away, with more after 3 months. If you have a salaried job as well, put both on the same return.",
        "Locum fees arrive without tax taken off, so set some of each payment aside. If last year's bill was £1,000 or more, you may also owe payments on account towards next year, due 31 January and 31 July.",
        "Keep your invoices, booking confirmations, receipts and mileage log together as you go, and keep them for at least 5 years after the 31 January deadline for that year. Under the cash basis, the standard method for sole traders, you record a locum fee when the money reaches you, not when you send the invoice.",
      ],
    },
  ],
  faqs: [
    {
      q: "What expenses can a locum pharmacist claim?",
      a: "Usually your GPhC renewal fee, indemnity insurance, professional membership, CPD, business mileage and parking, and the business share of your phone. Everyday clothes and normal lunches can't be claimed.",
    },
    {
      q: "Do locum pharmacists need to do a tax return?",
      a: "Yes, if you're self-employed. You register for Self Assessment and file a return each year, by 31 January after the tax year ends.",
    },
    {
      q: "Can a locum pharmacist claim mileage?",
      a: "Yes for business trips, at 55p a mile for the first 10,000 miles in 2026/27. Whether driving from home to a pharmacy counts depends on whether home is your business base, so check with an accountant if you work at one pharmacy most weeks.",
    },
    {
      q: "Is the GPhC fee tax deductible?",
      a: "If you're a self-employed locum, it's a cost of your business that you can claim. Check the current fee on the GPhC website, as it can change.",
    },
    {
      q: "Can I be a locum pharmacist and an employee at the same time?",
      a: "Yes. Your salary is taxed through PAYE and your locum profit goes on your Self Assessment return. Business expenses can only be set against the self-employed part.",
    },
  ],
  sources: [
    {
      label: "GPhC: Renew your registration",
      url: "https://www.pharmacyregulation.org/pharmacists/revalidation-renewal/renew-your-registration",
    },
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
      label: "gov.uk: Employment status — self-employed and contractor",
      url: "https://www.gov.uk/employment-status/selfemployed-contractor",
    },
    {
      label: "gov.uk: Check employment status for tax",
      url: "https://www.gov.uk/guidance/check-employment-status-for-tax",
    },
    {
      label: "gov.uk: Self Assessment penalties",
      url: "https://www.gov.uk/self-assessment-tax-returns/penalties",
    },
    {
      label: "gov.uk: Cash basis — income and expenses",
      url: "https://www.gov.uk/simpler-income-tax-cash-basis/income-and-expenses-under-cash-basis",
    },
    {
      label: "gov.uk: Payments on account",
      url: "https://www.gov.uk/understand-self-assessment-bill/payments-on-account",
    },
    {
      label: "gov.uk: Business records if you're self-employed",
      url: "https://www.gov.uk/self-employed-records",
    },
  ],
};
