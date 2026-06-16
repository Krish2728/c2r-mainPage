/**
 * Youth unemployment rates (age 15–29) by State/UT.
 * Source: Periodic Labour Force Survey (PLFS) 2023–24,
 * Ministry of Statistics & Programme Implementation, Govt. of India.
 */

export type StateUnemployment = {
  rank: number;
  state: string;
  male: number;
  female: number;
  total: number;
};

export const youthUnemploymentSummary = {
  dataPeriod: "PLFS 2023–24",
  lastReviewed: "June 2026",
  nationalRate: 10.2,
  nationalLabel: "National youth unemployment (age 15–29)",
  highestRate: 36.2,
  highestState: "Lakshadweep",
  lowestRate: 2.6,
  lowestState: "Madhya Pradesh",
  youthShareOfUnemployed: 83,
  youthShareLabel: "Of India's unemployed are youth",
  sources: [
    "Periodic Labour Force Survey (PLFS) 2023–24, Ministry of Statistics & Programme Implementation, Govt. of India",
    "ILO, 2024",
  ],
};

export const highestYouthUnemployment: StateUnemployment[] = [
  { rank: 1, state: "Lakshadweep", male: 26.2, female: 79.7, total: 36.2 },
  {
    rank: 2,
    state: "Andaman & Nicobar",
    male: 24.0,
    female: 49.5,
    total: 33.6,
  },
  { rank: 3, state: "Kerala", male: 19.3, female: 47.1, total: 29.9 },
  { rank: 4, state: "Nagaland", male: 27.9, female: 26.6, total: 27.4 },
  { rank: 5, state: "Manipur", male: 19.9, female: 27.5, total: 22.9 },
  { rank: 6, state: "Ladakh", male: 11.4, female: 38.3, total: 22.2 },
  {
    rank: 7,
    state: "Arunachal Pradesh",
    male: 21.9,
    female: 19.6,
    total: 20.9,
  },
  { rank: 8, state: "Goa", male: 13.2, female: 31.0, total: 19.1 },
  { rank: 9, state: "Punjab", male: 16.7, female: 24.5, total: 18.8 },
  { rank: 10, state: "Andhra Pradesh", male: 16.4, female: 19.7, total: 17.5 },
];

export const lowestYouthUnemployment: StateUnemployment[] = [
  { rank: 1, state: "Madhya Pradesh", male: 2.8, female: 2.1, total: 2.6 },
  { rank: 2, state: "Gujarat", male: 3.3, female: 2.7, total: 3.1 },
  { rank: 3, state: "Jharkhand", male: 4.8, female: 1.5, total: 3.6 },
  { rank: 4, state: "Delhi", male: 4.6, female: 4.8, total: 4.6 },
];

/** Max total % in highest list — used to scale bar widths */
export const maxYouthUnemploymentRate = 36.2;
