import type { JobGuide } from "./types";

export const artistDesigner: JobGuide = {
  slug: "artist-designer-tax",
  title: "Tax for self-employed artists, designers and writers",
  metaTitle: "Self-employed artist taxes: what you can claim — Sorted",
  metaDescription:
    "Self-employed artist taxes in plain English: materials, software, computers, studio space and working from home for freelance artists, designers and writers.",
  intro:
    "Selling your art, taking design commissions or writing for clients usually makes you a self-employed sole trader. This guide explains self-employed artist taxes for UK creatives: what you can claim, what you can't, and how to handle the costs you share with home life.",
  canClaim: [
    {
      item: "Materials.",
      detail:
        "Paint, canvas, paper, clay, printing and framing for work you sell, plus postage and packaging to send it out.",
    },
    {
      item: "Software subscriptions.",
      detail:
        "Design, illustration, writing and font software you pay for regularly, such as a monthly or yearly licence.",
    },
    {
      item: "Computer, tablet and camera.",
      detail:
        "Under the cash basis, the standard method for sole traders, equipment you keep for your work is claimed as a normal expense in the year you pay. If you also use it personally, claim only the business share.",
    },
    {
      item: "Studio or desk rent.",
      detail:
        "Rent for a studio, shared workspace or desk you use for your business, plus its bills and insurance.",
    },
    {
      item: "Working from home.",
      detail:
        "HMRC's flat rate of £10 to £26 a month if you work 25 hours or more a month at home, or a fair share of your real bills.",
    },
    {
      item: "Selling and marketing costs.",
      detail:
        "Your website and domain, portfolio hosting, marketplace and payment fees, stall fees at fairs, and advertising.",
    },
    {
      item: "Training.",
      detail:
        "Courses that improve skills you already use in your work, or keep you up to date with the tools of your trade.",
    },
    {
      item: "Professional subscriptions.",
      detail:
        "Membership of a trade body or professional organisation related to your work, and trade or professional journals.",
    },
    {
      item: "Phone and internet.",
      detail: "The business share of your bills, worked out in a fair way.",
    },
  ],
  cantClaim: [
    "Art supplies, books or software you use for personal projects or hobbies",
    "The personal share of your computer, phone or internet",
    "Everyday clothes, even if you wear them to meet clients",
    "Training to move into a new area that isn't related to your work",
  ],
  sections: [
    {
      heading: "Self-employed artist taxes: income and profit",
      paragraphs: [
        "You pay tax on your profit: what you earn from sales, commissions, licensing and fees, minus your allowable costs. You file a Self Assessment return for each tax year (6 April to 5 April). The 2025/26 return is due online, and any tax paid, by 31 January 2027.",
        "Under the cash basis you record money when it actually reaches you, not when you send an invoice. Payment in kind counts as income too.",
        "If your total income from self-employment is £1,000 or less in a tax year, the trading allowance means you usually don't need to tell HMRC. Above that, you can take off the £1,000 allowance or claim your real costs, but not both.",
      ],
    },
    {
      heading: "Tax deductions for freelance graphic designers",
      paragraphs: [
        "Most of a designer's costs are software and hardware. Software you pay for on a regular licence is an everyday expense, even if you use the same program for years. A computer, monitor or drawing tablet you buy to keep is also claimed in full in the year you pay, under the cash basis.",
        "If you also use the same laptop for films and browsing in the evening, work out a fair business share, for example by the hours you use it for work, and claim that part. Keep a short note of how you worked it out.",
      ],
    },
    {
      heading: "Freelance writer tax: working from home",
      paragraphs: [
        "Writers and illustrators often work at the kitchen table. You can claim HMRC's flat rate: £10 a month for 25 to 50 hours, £18 for 51 to 100 hours and £26 for 101 hours or more. Phone and internet aren't included in the flat rate, so claim their business share separately.",
        "Or you can claim a share of your real heating, electricity, Council Tax and rent or mortgage interest, split in a reasonable way, such as by rooms and time. If you're not sure which suits you, an accountant can compare the two.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do artists pay tax on selling paintings in the UK?",
      a: "Yes, if you sell regularly to make a profit, you are trading and pay income tax and National Insurance on your profit. If your total trading income is £1,000 or less in a tax year, you usually don't need to tell HMRC.",
    },
    {
      q: "What tax deductions can a freelance graphic designer claim?",
      a: "Software subscriptions, your computer and drawing tablet, fonts and stock images for client work, your website, professional memberships and the business share of your phone and internet.",
    },
    {
      q: "Can a freelance writer claim books?",
      a: "Books and journals you buy for research on paid work usually count as a business cost. Books you read for pleasure don't. If a purchase is borderline, check with an accountant.",
    },
    {
      q: "Can I claim my studio as a self-employed artist?",
      a: "Yes. Rent, bills and insurance for a studio you use for your business are allowable. If you work at home instead, you can claim a share of your household bills or HMRC's flat rate.",
    },
    {
      q: "Can I claim my computer if I'm self-employed?",
      a: "Yes. Under the cash basis you claim it as an expense in the year you pay. If you also use it personally, claim only the business share.",
    },
  ],
  sources: [
    {
      label: "gov.uk: Expenses if you're self-employed (printable guide)",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/print",
    },
    {
      label: "gov.uk: Office, property and equipment expenses",
      url: "https://www.gov.uk/expenses-if-youre-self-employed/office-property",
    },
    {
      label: "gov.uk: Cash basis — income and expenses",
      url: "https://www.gov.uk/simpler-income-tax-cash-basis/income-and-expenses-under-cash-basis",
    },
    {
      label: "gov.uk: Simplified expenses — working from home",
      url: "https://www.gov.uk/simpler-income-tax-simplified-expenses/working-from-home",
    },
    {
      label: "gov.uk: Tax-free allowances on property and trading income",
      url: "https://www.gov.uk/guidance/tax-free-allowances-on-property-and-trading-income",
    },
    {
      label: "gov.uk: Working for yourself",
      url: "https://www.gov.uk/working-for-yourself",
    },
    {
      label: "gov.uk: Self Assessment deadlines",
      url: "https://www.gov.uk/self-assessment-tax-returns/deadlines",
    },
  ],
};
