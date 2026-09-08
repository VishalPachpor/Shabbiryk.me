export type TimelineDateConfidence =
  | "verified"
  | "verified-year"
  | "undated";

export interface LifeTimelineMilestone {
  id: string;
  year: number;
  dateLabel: string;
  organization: string;
  role?: string;
  description: string;
  secondary?: string;
  href?: string;
  dateConfidence: TimelineDateConfidence;
  sourceNotes: string[];
}

export interface LifeTimelineIntroNote {
  label: string;
  title: string;
  description: string;
  dateConfidence: "undated";
  sourceNotes: string[];
}

// Maintenance metadata intentionally stays in this file and is not rendered.
export const lifeTimelineIntro: LifeTimelineIntroNote = {
  label: "At 14",
  title: "Started writing about institutional finance",
  description:
    "Reading the news became a habit of researching whatever the news didn’t explain.",
  dateConfidence: "undated",
  sourceNotes: [
    "Age is supplied in the portfolio biography.",
    "Calendar year is not stated in the CV, website copy, or LinkedIn profile and needs confirmation.",
  ],
};

export const lifeTimelineMilestones: LifeTimelineMilestone[] = [
  {
    id: "kuwait-dubai",
    year: 2008,
    dateLabel: "2008",
    organization: "Kuwait to Dubai",
    role: "Personal milestone",
    description:
      "We were living in Kuwait when the financial crisis hit us. My family moved to Dubai around that time. I didn’t understand all of it then, but I wanted to.",
    dateConfidence: "verified-year",
    sourceNotes: [
      "Year and wording supplied by Shabbir for this timeline.",
      "The biography corroborates the move around the 2008 financial crisis.",
    ],
  },
  {
    id: "symbiosis-faculty",
    year: 2021,
    dateLabel: "Jan - Apr 2021",
    organization: "Symbiosis University",
    role: "Blockchain and Hyperledger faculty",
    description:
      "Taught final-year engineering students distributed systems, Hyperledger Fabric and blockchain.",
    href: "https://www.siu.edu.in/",
    dateConfidence: "verified",
    sourceNotes: [
      "CV: Blockchain & Hyperledger Faculty, Jan 2021 to Apr 2021.",
      "LinkedIn headline also identifies this as a previous role.",
    ],
  },
  {
    id: "state-street",
    year: 2021,
    dateLabel: "May 2021 - Dec 2022",
    organization: "State Street",
    role: "Senior Associate, Digital Assets",
    description:
      "Writing and research within a small team of seven. My first close look at the institutions I had spent years reading about.",
    href: "https://www.statestreet.com/us/en/solutions/digital-assets",
    dateConfidence: "verified",
    sourceNotes: [
      "CV and LinkedIn: Senior Associate at State Street, May 2021 to Dec 2022.",
      "CV states he was among the first seven on the Digital Asset Solutions team.",
    ],
  },
  {
    id: "kauffman-fellows",
    year: 2022,
    dateLabel: "From Jun 2022",
    organization: "Kauffman Fellows",
    role: "Kauffman Fellow, Class 27",
    description:
      "A venture fellowship that began while I was still at State Street.",
    href: "https://www.kauffmanfellows.org/",
    dateConfidence: "verified",
    sourceNotes: [
      "LinkedIn: Kauffman Fellow, Class 27, from Jun 2022.",
      "The overlap with State Street follows directly from the verified date ranges.",
    ],
  },
  {
    id: "coinswitch",
    year: 2023,
    dateLabel: "Jan 2023 - Mar 2024",
    organization: "CoinSwitch Ventures",
    role: "Investment lead",
    description:
      "Evaluating founders, writing investment theses and helping teams work towards their first institutional capital.",
    href: "https://coinswitch.co/ventures",
    dateConfidence: "verified",
    sourceNotes: [
      "CV and LinkedIn: Investment Lead, Jan 2023 to Mar 2024.",
    ],
  },
  {
    id: "eak-ventures",
    year: 2024,
    dateLabel: "Apr 2024 - Aug 2025",
    organization: "EAK Ventures",
    role: "Partner",
    description:
      "For our first fund we diligenced more than 80 projects and allocated to 4. This was a good turning point in my life. I learned bet sizing and developed an eye for the right founders.",
    href: "https://www.eak.ventures/",
    dateConfidence: "verified",
    sourceNotes: [
      "CV and LinkedIn: Partner, Apr 2024 to Aug 2025.",
      "Fund diligence and allocation figures supplied by Shabbir for this timeline.",
    ],
  },
  {
    id: "private-office",
    year: 2025,
    dateLabel: "From 2025",
    organization: "Private Office",
    role: "Principal advisor",
    description:
      "What began as an anchor LP relationship grew into an ongoing conversation about where to invest, who to back and when to leave things alone.",
    href: "https://www.yusufalthani.com/",
    dateConfidence: "verified-year",
    sourceNotes: [
      "LinkedIn lists a May 2025 start; the linked CV lists Aug 2025.",
      "The year is verified, but the exact start month needs confirmation.",
    ],
  },
  {
    id: "bluegreen-ventures",
    year: 2026,
    dateLabel: "From Mar 2026",
    organization: "BlueGreen Ventures",
    role: "Partner",
    description: "An India-focused venture and pre-IPO investment platform.",
    href: "https://bluegreen.vc",
    dateConfidence: "verified",
    sourceNotes: [
      "LinkedIn: Partner at BlueGreen Ventures from Mar 2026.",
      "The role does not appear in the linked CV, which predates this entry.",
    ],
  },
  {
    id: "recallr-ai",
    year: 2026,
    dateLabel: "From May 2026",
    organization: "Recallr AI",
    role: "Founder",
    description:
      "After spending years asking founders questions, I now get to answer a few myself.",
    secondary:
      "Turning years of proprietary data, research and institutional knowledge into something people can actually use.",
    href: "https://recallrai.com/",
    dateConfidence: "verified",
    sourceNotes: [
      "LinkedIn: Founder at Recallr AI from May 2026.",
      "Description is supplied by Shabbir and matches the portfolio biography.",
    ],
  },
];
