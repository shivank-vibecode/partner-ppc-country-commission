import {
  Stack,
  Row,
  Grid,
  H1,
  H2,
  H3,
  Text,
  Stat,
  Table,
  Callout,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Pill,
  BarChart,
  Select,
  useCanvasState,
} from "cursor/canvas";

type Tab = "vietnam" | "ltv" | "priorities" | "league" | "patterns";

const DATA = {
  "kpis": {
    "affiliates": 58360,
    "countries": 168,
    "commission": 58889.95,
    "earners": 95,
    "earnerPct": 0.16,
    "active": 1311,
    "activePct": 2.25,
    "topCountry": "Vietnam",
    "topCountryComm": 58557.2,
    "topCountryShare": 99.43,
    "dateStart": "2025-05-15",
    "dateEnd": "2026-08-30"
  },
  "scale": [
    {
      "country": "Vietnam",
      "affiliates": 479,
      "earners": 83,
      "earnRate": 17.33,
      "commission": 58557.2,
      "clients": 257,
      "clientDep": 423408.11,
      "funded": 93,
      "score": 91.2,
      "action": "Scale",
      "commShare": 99.43,
      "activeRate": 20.67,
      "clientRate": 20.67,
      "fundedRate": 19.42,
      "commRate": 17.33
    },
    {
      "country": "Nigeria",
      "affiliates": 9362,
      "earners": 9,
      "earnRate": 0.1,
      "commission": 69.35,
      "clients": 516,
      "clientDep": 474.09,
      "funded": 9,
      "score": 25.2,
      "action": "Scale",
      "commShare": 0.12,
      "activeRate": 4.04,
      "clientRate": 4.04,
      "fundedRate": 0.1,
      "commRate": 0.1
    },
    {
      "country": "Congo - Kinshasa",
      "affiliates": 2742,
      "earners": 1,
      "earnRate": 0.04,
      "commission": 196.13,
      "clients": 96,
      "clientDep": 1218.51,
      "funded": 2,
      "score": 21.6,
      "action": "Scale",
      "commShare": 0.33,
      "activeRate": 2.52,
      "clientRate": 2.52,
      "fundedRate": 0.07,
      "commRate": 0.04
    },
    {
      "country": "Uganda",
      "affiliates": 2440,
      "earners": 1,
      "earnRate": 0.04,
      "commission": 23.77,
      "clients": 214,
      "clientDep": 98.94,
      "funded": 5,
      "score": 21.1,
      "action": "Scale",
      "commShare": 0.04,
      "activeRate": 4.75,
      "clientRate": 4.75,
      "fundedRate": 0.2,
      "commRate": 0.04
    },
    {
      "country": "Sri Lanka",
      "affiliates": 991,
      "earners": 1,
      "earnRate": 0.1,
      "commission": 43.5,
      "clients": 5,
      "clientDep": 396.89,
      "funded": 1,
      "score": 18.6,
      "action": "Scale",
      "commShare": 0.07,
      "activeRate": 0.5,
      "clientRate": 0.5,
      "fundedRate": 0.1,
      "commRate": 0.1
    }
  ],
  "test": [
    {
      "country": "Bangladesh",
      "affiliates": 5784,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 61,
      "clientDep": 0.0,
      "funded": 0,
      "score": 23.6,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 0.83,
      "clientRate": 0.83,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Philippines",
      "affiliates": 2924,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 4,
      "clientDep": 0.0,
      "funded": 0,
      "score": 21.6,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 0.14,
      "clientRate": 0.14,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Benin",
      "affiliates": 1971,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 102,
      "clientDep": 0.0,
      "funded": 0,
      "score": 20.4,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 3.4,
      "clientRate": 3.4,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Nepal",
      "affiliates": 1827,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 27,
      "clientDep": 0.0,
      "funded": 0,
      "score": 20.2,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 1.15,
      "clientRate": 1.15,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Mozambique",
      "affiliates": 1817,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 64,
      "clientDep": 0.0,
      "funded": 0,
      "score": 20.2,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 2.26,
      "clientRate": 2.26,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Algeria",
      "affiliates": 1716,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 14,
      "clientDep": 0.0,
      "funded": 0,
      "score": 20.0,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 0.7,
      "clientRate": 0.7,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Venezuela",
      "affiliates": 1653,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 21,
      "clientDep": 0.0,
      "funded": 0,
      "score": 19.9,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 1.21,
      "clientRate": 1.21,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Burkina Faso",
      "affiliates": 1633,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 40,
      "clientDep": 0.0,
      "funded": 0,
      "score": 19.8,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 1.78,
      "clientRate": 1.78,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Egypt",
      "affiliates": 1594,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 9,
      "clientDep": 0.0,
      "funded": 0,
      "score": 19.8,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 0.5,
      "clientRate": 0.5,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Togo",
      "affiliates": 1469,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 74,
      "clientDep": 0.0,
      "funded": 0,
      "score": 19.5,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 2.86,
      "clientRate": 2.86,
      "fundedRate": 0.0,
      "commRate": 0.0
    }
  ],
  "avoid": [
    {
      "country": "Mexico",
      "affiliates": 986,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 2,
      "clientDep": 0.0,
      "funded": 0,
      "score": 18.3,
      "action": "Avoid",
      "commShare": 0.0,
      "activeRate": 0.2,
      "clientRate": 0.2,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Tunisia",
      "affiliates": 787,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 2,
      "clientDep": 0.0,
      "funded": 0,
      "score": 17.7,
      "action": "Avoid",
      "commShare": 0.0,
      "activeRate": 0.25,
      "clientRate": 0.25,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Cameroon",
      "affiliates": 721,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 8,
      "clientDep": 0.0,
      "funded": 0,
      "score": 17.4,
      "action": "Avoid",
      "commShare": 0.0,
      "activeRate": 0.69,
      "clientRate": 0.69,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Jamaica",
      "affiliates": 625,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 8,
      "clientDep": 0.0,
      "funded": 0,
      "score": 17.0,
      "action": "Avoid",
      "commShare": 0.0,
      "activeRate": 0.8,
      "clientRate": 0.8,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Morocco",
      "affiliates": 504,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 1,
      "clientDep": 0.0,
      "funded": 0,
      "score": 16.4,
      "action": "Avoid",
      "commShare": 0.0,
      "activeRate": 0.2,
      "clientRate": 0.2,
      "fundedRate": 0.0,
      "commRate": 0.0
    }
  ],
  "league": [
    {
      "country": "Vietnam",
      "affiliates": 479,
      "earners": 83,
      "earnRate": 17.33,
      "commission": 58557.2,
      "clients": 257,
      "clientDep": 423408.11,
      "funded": 93,
      "score": 91.2,
      "action": "Scale",
      "commShare": 99.43,
      "activeRate": 20.67,
      "clientRate": 20.67,
      "fundedRate": 19.42,
      "commRate": 17.33
    },
    {
      "country": "Nigeria",
      "affiliates": 9362,
      "earners": 9,
      "earnRate": 0.1,
      "commission": 69.35,
      "clients": 516,
      "clientDep": 474.09,
      "funded": 9,
      "score": 25.2,
      "action": "Scale",
      "commShare": 0.12,
      "activeRate": 4.04,
      "clientRate": 4.04,
      "fundedRate": 0.1,
      "commRate": 0.1
    },
    {
      "country": "Bangladesh",
      "affiliates": 5784,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 61,
      "clientDep": 0.0,
      "funded": 0,
      "score": 23.6,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 0.83,
      "clientRate": 0.83,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Congo - Kinshasa",
      "affiliates": 2742,
      "earners": 1,
      "earnRate": 0.04,
      "commission": 196.13,
      "clients": 96,
      "clientDep": 1218.51,
      "funded": 2,
      "score": 21.6,
      "action": "Scale",
      "commShare": 0.33,
      "activeRate": 2.52,
      "clientRate": 2.52,
      "fundedRate": 0.07,
      "commRate": 0.04
    },
    {
      "country": "Philippines",
      "affiliates": 2924,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 4,
      "clientDep": 0.0,
      "funded": 0,
      "score": 21.6,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 0.14,
      "clientRate": 0.14,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Uganda",
      "affiliates": 2440,
      "earners": 1,
      "earnRate": 0.04,
      "commission": 23.77,
      "clients": 214,
      "clientDep": 98.94,
      "funded": 5,
      "score": 21.1,
      "action": "Scale",
      "commShare": 0.04,
      "activeRate": 4.75,
      "clientRate": 4.75,
      "fundedRate": 0.2,
      "commRate": 0.04
    },
    {
      "country": "Benin",
      "affiliates": 1971,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 102,
      "clientDep": 0.0,
      "funded": 0,
      "score": 20.4,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 3.4,
      "clientRate": 3.4,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Nepal",
      "affiliates": 1827,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 27,
      "clientDep": 0.0,
      "funded": 0,
      "score": 20.2,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 1.15,
      "clientRate": 1.15,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Mozambique",
      "affiliates": 1817,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 64,
      "clientDep": 0.0,
      "funded": 0,
      "score": 20.2,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 2.26,
      "clientRate": 2.26,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Algeria",
      "affiliates": 1716,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 14,
      "clientDep": 0.0,
      "funded": 0,
      "score": 20.0,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 0.7,
      "clientRate": 0.7,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Venezuela",
      "affiliates": 1653,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 21,
      "clientDep": 0.0,
      "funded": 0,
      "score": 19.9,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 1.21,
      "clientRate": 1.21,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Burkina Faso",
      "affiliates": 1633,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 40,
      "clientDep": 0.0,
      "funded": 0,
      "score": 19.8,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 1.78,
      "clientRate": 1.78,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Egypt",
      "affiliates": 1594,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 9,
      "clientDep": 0.0,
      "funded": 0,
      "score": 19.8,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 0.5,
      "clientRate": 0.5,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Togo",
      "affiliates": 1469,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 74,
      "clientDep": 0.0,
      "funded": 0,
      "score": 19.5,
      "action": "Test",
      "commShare": 0.0,
      "activeRate": 2.86,
      "clientRate": 2.86,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Angola",
      "affiliates": 1442,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 87,
      "clientDep": 0.0,
      "funded": 0,
      "score": 19.5,
      "action": "",
      "commShare": 0.0,
      "activeRate": 4.65,
      "clientRate": 4.65,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Ethiopia",
      "affiliates": 1351,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 55,
      "clientDep": 0.0,
      "funded": 6,
      "score": 19.3,
      "action": "",
      "commShare": 0.0,
      "activeRate": 3.7,
      "clientRate": 3.7,
      "fundedRate": 0.44,
      "commRate": 0.0
    },
    {
      "country": "Zambia",
      "affiliates": 1182,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 41,
      "clientDep": 0.0,
      "funded": 0,
      "score": 18.9,
      "action": "",
      "commShare": 0.0,
      "activeRate": 2.62,
      "clientRate": 2.62,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "C\u00f4te d'Ivoire / Ivory Coast",
      "affiliates": 1169,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 14,
      "clientDep": 0.0,
      "funded": 0,
      "score": 18.8,
      "action": "",
      "commShare": 0.0,
      "activeRate": 1.11,
      "clientRate": 1.11,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Sri Lanka",
      "affiliates": 991,
      "earners": 1,
      "earnRate": 0.1,
      "commission": 43.5,
      "clients": 5,
      "clientDep": 396.89,
      "funded": 1,
      "score": 18.6,
      "action": "Scale",
      "commShare": 0.07,
      "activeRate": 0.5,
      "clientRate": 0.5,
      "fundedRate": 0.1,
      "commRate": 0.1
    },
    {
      "country": "Mexico",
      "affiliates": 986,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 2,
      "clientDep": 0.0,
      "funded": 0,
      "score": 18.3,
      "action": "",
      "commShare": 0.0,
      "activeRate": 0.2,
      "clientRate": 0.2,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Tunisia",
      "affiliates": 787,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 2,
      "clientDep": 0.0,
      "funded": 0,
      "score": 17.7,
      "action": "",
      "commShare": 0.0,
      "activeRate": 0.25,
      "clientRate": 0.25,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Mali",
      "affiliates": 767,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 35,
      "clientDep": 0.0,
      "funded": 0,
      "score": 17.6,
      "action": "",
      "commShare": 0.0,
      "activeRate": 3.52,
      "clientRate": 3.52,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Cameroon",
      "affiliates": 721,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 8,
      "clientDep": 0.0,
      "funded": 0,
      "score": 17.4,
      "action": "",
      "commShare": 0.0,
      "activeRate": 0.69,
      "clientRate": 0.69,
      "fundedRate": 0.0,
      "commRate": 0.0
    },
    {
      "country": "Zimbabwe",
      "affiliates": 664,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 31,
      "clientDep": 274.53,
      "funded": 1,
      "score": 17.2,
      "action": "",
      "commShare": 0.0,
      "activeRate": 2.71,
      "clientRate": 2.71,
      "fundedRate": 0.15,
      "commRate": 0.0
    },
    {
      "country": "Jamaica",
      "affiliates": 625,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clients": 8,
      "clientDep": 0.0,
      "funded": 0,
      "score": 17.0,
      "action": "",
      "commShare": 0.0,
      "activeRate": 0.8,
      "clientRate": 0.8,
      "fundedRate": 0.0,
      "commRate": 0.0
    }
  ],
  "funnel": [
    {
      "country": "Vietnam",
      "affiliates": 479,
      "activeRate": 20.67,
      "clientRate": 20.67,
      "fundedRate": 19.42,
      "commRate": 17.33,
      "bucket": "Scale"
    },
    {
      "country": "Nigeria",
      "affiliates": 9362,
      "activeRate": 4.04,
      "clientRate": 4.04,
      "fundedRate": 0.1,
      "commRate": 0.1,
      "bucket": "Scale"
    },
    {
      "country": "Congo - Kinshasa",
      "affiliates": 2742,
      "activeRate": 2.52,
      "clientRate": 2.52,
      "fundedRate": 0.07,
      "commRate": 0.04,
      "bucket": "Scale"
    },
    {
      "country": "Uganda",
      "affiliates": 2440,
      "activeRate": 4.75,
      "clientRate": 4.75,
      "fundedRate": 0.2,
      "commRate": 0.04,
      "bucket": "Scale"
    },
    {
      "country": "Sri Lanka",
      "affiliates": 991,
      "activeRate": 0.5,
      "clientRate": 0.5,
      "fundedRate": 0.1,
      "commRate": 0.1,
      "bucket": "Scale"
    },
    {
      "country": "Bangladesh",
      "affiliates": 5784,
      "activeRate": 0.83,
      "clientRate": 0.83,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    },
    {
      "country": "Philippines",
      "affiliates": 2924,
      "activeRate": 0.14,
      "clientRate": 0.14,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    },
    {
      "country": "Benin",
      "affiliates": 1971,
      "activeRate": 3.4,
      "clientRate": 3.4,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    },
    {
      "country": "Nepal",
      "affiliates": 1827,
      "activeRate": 1.15,
      "clientRate": 1.15,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    },
    {
      "country": "Mozambique",
      "affiliates": 1817,
      "activeRate": 2.26,
      "clientRate": 2.26,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    },
    {
      "country": "Algeria",
      "affiliates": 1716,
      "activeRate": 0.7,
      "clientRate": 0.7,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    },
    {
      "country": "Venezuela",
      "affiliates": 1653,
      "activeRate": 1.21,
      "clientRate": 1.21,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    },
    {
      "country": "Burkina Faso",
      "affiliates": 1633,
      "activeRate": 1.78,
      "clientRate": 1.78,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    },
    {
      "country": "Egypt",
      "affiliates": 1594,
      "activeRate": 0.5,
      "clientRate": 0.5,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    },
    {
      "country": "Togo",
      "affiliates": 1469,
      "activeRate": 2.86,
      "clientRate": 2.86,
      "fundedRate": 0.0,
      "commRate": 0.0,
      "bucket": "Test"
    }
  ],
  "channelMix": {
    "earningCountrySources": [
      {
        "label": "Google",
        "count": 8307,
        "pct": 51.9
      },
      {
        "label": "Meta",
        "count": 7298,
        "pct": 45.6
      },
      {
        "label": "Taboola",
        "count": 231,
        "pct": 1.4
      },
      {
        "label": "Unattributed",
        "count": 151,
        "pct": 0.9
      },
      {
        "label": "Bing",
        "count": 15,
        "pct": 0.1
      },
      {
        "label": "DGen",
        "count": 8,
        "pct": 0.0
      }
    ],
    "nonEarningCountrySources": [
      {
        "label": "Meta",
        "count": 29649,
        "pct": 70.0
      },
      {
        "label": "Google",
        "count": 12326,
        "pct": 29.1
      },
      {
        "label": "Unattributed",
        "count": 114,
        "pct": 0.3
      },
      {
        "label": "Taboola",
        "count": 113,
        "pct": 0.3
      },
      {
        "label": "DGen",
        "count": 80,
        "pct": 0.2
      },
      {
        "label": "Bing",
        "count": 53,
        "pct": 0.1
      }
    ],
    "earningCountryMediums": [
      {
        "label": "search",
        "count": 8475,
        "pct": 52.9
      },
      {
        "label": "social",
        "count": 7298,
        "pct": 45.6
      },
      {
        "label": "native",
        "count": 231,
        "pct": 1.4
      },
      {
        "label": "display",
        "count": 8,
        "pct": 0.0
      },
      {
        "label": "branding",
        "count": 2,
        "pct": 0.0
      }
    ],
    "nonEarningCountryMediums": [
      {
        "label": "social",
        "count": 29643,
        "pct": 70.0
      },
      {
        "label": "search",
        "count": 12492,
        "pct": 29.5
      },
      {
        "label": "native",
        "count": 114,
        "pct": 0.3
      },
      {
        "label": "display",
        "count": 80,
        "pct": 0.2
      },
      {
        "label": "branding",
        "count": 17,
        "pct": 0.0
      }
    ]
  },
  "topCampaigns": [
    {
      "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
      "commission": 38489.38,
      "earners": 29,
      "affiliates": 153,
      "topCountry": "Vietnam"
    },
    {
      "campaign": "asia_sea-vn-prosp-brand_keyword-0925-vi-google",
      "commission": 7334.25,
      "earners": 9,
      "affiliates": 157,
      "topCountry": "Vietnam"
    },
    {
      "campaign": "asia_sea-vn-prosp-usp-0725-vi-fb",
      "commission": 5561.53,
      "earners": 33,
      "affiliates": 192,
      "topCountry": "Vietnam"
    },
    {
      "campaign": "asia_sea-prosp-usp-0626-en-taboola",
      "commission": 4326.99,
      "earners": 9,
      "affiliates": 24,
      "topCountry": "Vietnam"
    },
    {
      "campaign": "asia_sea-prosp-brand_keyword-0925-en-google",
      "commission": 1550.44,
      "earners": 1,
      "affiliates": 696,
      "topCountry": "Vietnam"
    },
    {
      "campaign": "asia_sea-prosp-did_you_know-0426-en-dgen",
      "commission": 1051.93,
      "earners": 1,
      "affiliates": 88,
      "topCountry": "Vietnam"
    },
    {
      "campaign": "asia_sea-prosp-did_you_know-0226-en-fb",
      "commission": 242.68,
      "earners": 1,
      "affiliates": 10,
      "topCountry": "Vietnam"
    },
    {
      "campaign": "africa_french-rtg-usp-0725-fr-fb",
      "commission": 196.13,
      "earners": 1,
      "affiliates": 3921,
      "topCountry": "Congo - Kinshasa"
    },
    {
      "campaign": "africa_west-prosp-brand_keyword-0925-en-google",
      "commission": 64.08,
      "earners": 6,
      "affiliates": 3647,
      "topCountry": "Nigeria"
    },
    {
      "campaign": "asia_isc-prosp-brand_keyword-0925-en-google",
      "commission": 43.5,
      "earners": 1,
      "affiliates": 1665,
      "topCountry": "Sri Lanka"
    }
  ],
  "speedSignals": {
    "earnersMedDaysAffDep": 57.5,
    "nonEarnersMedDaysAffDep": 34.0,
    "earnersMedDaysFirstClient": 16.0,
    "nonEarnersMedDaysFirstClient": 1.0,
    "nEarnersAff": 18,
    "nNonAff": 227,
    "nEarnersCli": 95,
    "nNonCli": 507
  },
  "correlations": [
    {
      "pair": "Client deposits \u2194 commission",
      "r": 0.75,
      "note": "Strongest payout driver"
    },
    {
      "pair": "Clients acquired \u2194 commission",
      "r": 0.241,
      "note": "Moderate \u2014 clients alone aren't enough"
    },
    {
      "pair": "Affiliate self-deposits \u2194 commission",
      "r": 0.001,
      "note": "Near zero \u2014 self-funding \u2260 earning"
    },
    {
      "pair": "Sub-affiliates \u2194 commission",
      "r": -0.0,
      "note": "No relationship"
    },
    {
      "pair": "Country volume \u2194 country commission",
      "r": 0.012,
      "note": "Volume does not predict commission"
    }
  ],
  "ltv": {
    "summary": {
      "alphaPrimary": 0.45,
      "alphaNote": "Uses max Options revenue share (45%) from deriv.com/partners \u2014 conservative lower-bound on Deriv gross LTV. Lower actual share \u21d2 higher Deriv LTV for same commission.",
      "totalCommission": 58889.95,
      "totalDerivGross45": 130866.56,
      "totalDerivNet45": 71976.61,
      "blendedLtvSignup": 2.24,
      "blendedNetSignup": 1.23,
      "vietnam": {
        "ltvPerSignup": 271.66,
        "netPerSignup": 149.42,
        "ltvPerEarner": 1567.8,
        "earnRate": 17.33,
        "earnerCommP50": 389.51,
        "earnerCommP75": 1087.62,
        "earnerCommP90": 1550.44,
        "earnerLtvP50": 865.58,
        "earnerLtvP75": 2416.93,
        "earnerLtvP90": 3445.42
      },
      "cpaFormula": "Suggested CPA \u2264 Deriv net keep per signup \u00d7 target payback share. Net keep = Commission \u00d7 (1\u2212\u03b1)/\u03b1 with \u03b1=0.45 \u2192 net = 1.222 \u00d7 commission.",
      "models": [
        {
          "name": "Options revenue share",
          "detail": "Affiliate earns up to 45% of Deriv revenue; Deriv gross \u2248 Comm/\u03b1"
        },
        {
          "name": "Options turnover",
          "detail": "Up to 1.5% of Digital Options stakes / up to 40% of Deriv commissions on Multipliers etc. \u2014 not inverted here"
        },
        {
          "name": "CFD turnover",
          "detail": "Up to $50 per $100k client turnover (daily). Commission\u2260% of revenue; RS inversion is approximate for CFD-heavy partners"
        },
        {
          "name": "Tier bonuses",
          "detail": "Silver/Gold/Platinum add 4\u20138% monthly bonus on commission \u2014 slight understatement of affiliate cost if ignored"
        }
      ]
    },
    "scaleLtv": [
      {
        "country": "Vietnam",
        "affiliates": 479,
        "earners": 83,
        "earnRate": 17.33,
        "commission": 58557.2,
        "clientDep": 423408.11,
        "derivGross45": 130127.11,
        "derivNet45": 71569.91,
        "ltvPerSignup": 271.66,
        "netPerSignup": 149.42,
        "ltvPerEarner": 1567.8,
        "cpaPayback100": 149.42,
        "cpaPayback50": 74.71,
        "cpaPayback30": 44.82,
        "ltvSignup_45": 271.66,
        "ltvSignup_35": 349.28,
        "ltvSignup_25": 489.0
      },
      {
        "country": "Congo - Kinshasa",
        "affiliates": 2742,
        "earners": 1,
        "earnRate": 0.04,
        "commission": 196.13,
        "clientDep": 1218.51,
        "derivGross45": 435.84,
        "derivNet45": 239.71,
        "ltvPerSignup": 0.16,
        "netPerSignup": 0.09,
        "ltvPerEarner": 435.84,
        "cpaPayback100": 0.09,
        "cpaPayback50": 0.04,
        "cpaPayback30": 0.03,
        "ltvSignup_45": 0.16,
        "ltvSignup_35": 0.2,
        "ltvSignup_25": 0.29
      },
      {
        "country": "Sri Lanka",
        "affiliates": 991,
        "earners": 1,
        "earnRate": 0.1,
        "commission": 43.5,
        "clientDep": 396.89,
        "derivGross45": 96.67,
        "derivNet45": 53.17,
        "ltvPerSignup": 0.1,
        "netPerSignup": 0.05,
        "ltvPerEarner": 96.67,
        "cpaPayback100": 0.05,
        "cpaPayback50": 0.03,
        "cpaPayback30": 0.02,
        "ltvSignup_45": 0.1,
        "ltvSignup_35": 0.13,
        "ltvSignup_25": 0.18
      },
      {
        "country": "Nigeria",
        "affiliates": 9362,
        "earners": 9,
        "earnRate": 0.1,
        "commission": 69.35,
        "clientDep": 474.09,
        "derivGross45": 154.11,
        "derivNet45": 84.76,
        "ltvPerSignup": 0.02,
        "netPerSignup": 0.01,
        "ltvPerEarner": 17.12,
        "cpaPayback100": 0.01,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.02,
        "ltvSignup_35": 0.02,
        "ltvSignup_25": 0.03
      },
      {
        "country": "Uganda",
        "affiliates": 2440,
        "earners": 1,
        "earnRate": 0.04,
        "commission": 23.77,
        "clientDep": 98.94,
        "derivGross45": 52.82,
        "derivNet45": 29.05,
        "ltvPerSignup": 0.02,
        "netPerSignup": 0.01,
        "ltvPerEarner": 52.82,
        "cpaPayback100": 0.01,
        "cpaPayback50": 0.01,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.02,
        "ltvSignup_35": 0.03,
        "ltvSignup_25": 0.04
      }
    ],
    "testLtv": [
      {
        "country": "Bangladesh",
        "affiliates": 5784,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 0.83,
        "priorLtvGross": 2.73,
        "priorNet": 1.5,
        "cpaTestSuggest": 0.45
      },
      {
        "country": "Philippines",
        "affiliates": 2924,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 0.14,
        "priorLtvGross": 0.45,
        "priorNet": 0.25,
        "cpaTestSuggest": 0.07
      },
      {
        "country": "Benin",
        "affiliates": 1971,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 3.4,
        "priorLtvGross": 11.17,
        "priorNet": 6.14,
        "cpaTestSuggest": 1.84
      },
      {
        "country": "Nepal",
        "affiliates": 1827,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 1.15,
        "priorLtvGross": 3.78,
        "priorNet": 2.08,
        "cpaTestSuggest": 0.62
      },
      {
        "country": "Mozambique",
        "affiliates": 1817,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 2.26,
        "priorLtvGross": 7.42,
        "priorNet": 4.08,
        "cpaTestSuggest": 1.22
      },
      {
        "country": "Algeria",
        "affiliates": 1716,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 0.7,
        "priorLtvGross": 2.3,
        "priorNet": 1.26,
        "cpaTestSuggest": 0.38
      },
      {
        "country": "Venezuela",
        "affiliates": 1653,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 1.21,
        "priorLtvGross": 3.98,
        "priorNet": 2.19,
        "cpaTestSuggest": 0.66
      },
      {
        "country": "Burkina Faso",
        "affiliates": 1633,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 1.78,
        "priorLtvGross": 5.84,
        "priorNet": 3.21,
        "cpaTestSuggest": 0.96
      },
      {
        "country": "Egypt",
        "affiliates": 1594,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 0.5,
        "priorLtvGross": 1.65,
        "priorNet": 0.91,
        "cpaTestSuggest": 0.27
      },
      {
        "country": "Togo",
        "affiliates": 1469,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0,
        "clientRate": 2.86,
        "priorLtvGross": 9.4,
        "priorNet": 5.17,
        "cpaTestSuggest": 1.55
      }
    ],
    "topLtv": [
      {
        "country": "Vietnam",
        "affiliates": 479,
        "earners": 83,
        "earnRate": 17.33,
        "commission": 58557.2,
        "clientDep": 423408.11,
        "derivGross45": 130127.11,
        "derivNet45": 71569.91,
        "ltvPerSignup": 271.66,
        "netPerSignup": 149.42,
        "ltvPerEarner": 1567.8,
        "cpaPayback100": 149.42,
        "cpaPayback50": 74.71,
        "cpaPayback30": 44.82,
        "ltvSignup_45": 271.66,
        "ltvSignup_35": 349.28,
        "ltvSignup_25": 489.0
      },
      {
        "country": "Congo - Kinshasa",
        "affiliates": 2742,
        "earners": 1,
        "earnRate": 0.04,
        "commission": 196.13,
        "clientDep": 1218.51,
        "derivGross45": 435.84,
        "derivNet45": 239.71,
        "ltvPerSignup": 0.16,
        "netPerSignup": 0.09,
        "ltvPerEarner": 435.84,
        "cpaPayback100": 0.09,
        "cpaPayback50": 0.04,
        "cpaPayback30": 0.03,
        "ltvSignup_45": 0.16,
        "ltvSignup_35": 0.2,
        "ltvSignup_25": 0.29
      },
      {
        "country": "Sri Lanka",
        "affiliates": 991,
        "earners": 1,
        "earnRate": 0.1,
        "commission": 43.5,
        "clientDep": 396.89,
        "derivGross45": 96.67,
        "derivNet45": 53.17,
        "ltvPerSignup": 0.1,
        "netPerSignup": 0.05,
        "ltvPerEarner": 96.67,
        "cpaPayback100": 0.05,
        "cpaPayback50": 0.03,
        "cpaPayback30": 0.02,
        "ltvSignup_45": 0.1,
        "ltvSignup_35": 0.13,
        "ltvSignup_25": 0.18
      },
      {
        "country": "Nigeria",
        "affiliates": 9362,
        "earners": 9,
        "earnRate": 0.1,
        "commission": 69.35,
        "clientDep": 474.09,
        "derivGross45": 154.11,
        "derivNet45": 84.76,
        "ltvPerSignup": 0.02,
        "netPerSignup": 0.01,
        "ltvPerEarner": 17.12,
        "cpaPayback100": 0.01,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.02,
        "ltvSignup_35": 0.02,
        "ltvSignup_25": 0.03
      },
      {
        "country": "Uganda",
        "affiliates": 2440,
        "earners": 1,
        "earnRate": 0.04,
        "commission": 23.77,
        "clientDep": 98.94,
        "derivGross45": 52.82,
        "derivNet45": 29.05,
        "ltvPerSignup": 0.02,
        "netPerSignup": 0.01,
        "ltvPerEarner": 52.82,
        "cpaPayback100": 0.01,
        "cpaPayback50": 0.01,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.02,
        "ltvSignup_35": 0.03,
        "ltvSignup_25": 0.04
      }
    ],
    "zeroLtvHighVolume": [
      {
        "country": "Bangladesh",
        "affiliates": 5784,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      },
      {
        "country": "Philippines",
        "affiliates": 2924,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      },
      {
        "country": "Benin",
        "affiliates": 1971,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      },
      {
        "country": "Nepal",
        "affiliates": 1827,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      },
      {
        "country": "Mozambique",
        "affiliates": 1817,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      },
      {
        "country": "Algeria",
        "affiliates": 1716,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      },
      {
        "country": "Venezuela",
        "affiliates": 1653,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      },
      {
        "country": "Burkina Faso",
        "affiliates": 1633,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      },
      {
        "country": "Egypt",
        "affiliates": 1594,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      },
      {
        "country": "Togo",
        "affiliates": 1469,
        "earners": 0,
        "earnRate": 0.0,
        "commission": 0.0,
        "clientDep": 0.0,
        "derivGross45": 0.0,
        "derivNet45": 0.0,
        "ltvPerSignup": 0.0,
        "netPerSignup": 0.0,
        "ltvPerEarner": 0,
        "cpaPayback100": 0.0,
        "cpaPayback50": 0.0,
        "cpaPayback30": 0.0,
        "ltvSignup_45": 0.0,
        "ltvSignup_35": 0.0,
        "ltvSignup_25": 0.0
      }
    ],
    "recommendations": [
      {
        "country": "Vietnam",
        "ltvGross": 271.66,
        "ltvNet": 149.42,
        "cpaAggressive": 149.42,
        "cpaBase": 74.71,
        "cpaConservative": 44.82,
        "note": "Primary scale market"
      },
      {
        "country": "Congo - Kinshasa",
        "ltvGross": 0.16,
        "ltvNet": 0.09,
        "cpaAggressive": 0.09,
        "cpaBase": 0.04,
        "cpaConservative": 0.03,
        "note": "Micro-earner \u2014 keep CPA near $0 unless targeting quality subset"
      },
      {
        "country": "Sri Lanka",
        "ltvGross": 0.1,
        "ltvNet": 0.05,
        "cpaAggressive": 0.05,
        "cpaBase": 0.03,
        "cpaConservative": 0.02,
        "note": "Micro-earner \u2014 keep CPA near $0 unless targeting quality subset"
      },
      {
        "country": "Nigeria",
        "ltvGross": 0.02,
        "ltvNet": 0.01,
        "cpaAggressive": 0.01,
        "cpaBase": 0.0,
        "cpaConservative": 0.0,
        "note": "Micro-earner \u2014 keep CPA near $0 unless targeting quality subset"
      },
      {
        "country": "Uganda",
        "ltvGross": 0.02,
        "ltvNet": 0.01,
        "cpaAggressive": 0.01,
        "cpaBase": 0.01,
        "cpaConservative": 0.0,
        "note": "Micro-earner \u2014 keep CPA near $0 unless targeting quality subset"
      }
    ],
    "testPriors": [
      {
        "country": "Bangladesh",
        "affiliates": 5784,
        "clientRate": 0.83,
        "observedLtv": 0.0,
        "priorLtvGross": 2.73,
        "priorNet": 1.5,
        "cpaTestSuggest": 0.45
      },
      {
        "country": "Philippines",
        "affiliates": 2924,
        "clientRate": 0.14,
        "observedLtv": 0.0,
        "priorLtvGross": 0.45,
        "priorNet": 0.25,
        "cpaTestSuggest": 0.07
      },
      {
        "country": "Benin",
        "affiliates": 1971,
        "clientRate": 3.4,
        "observedLtv": 0.0,
        "priorLtvGross": 11.17,
        "priorNet": 6.14,
        "cpaTestSuggest": 1.84
      },
      {
        "country": "Nepal",
        "affiliates": 1827,
        "clientRate": 1.15,
        "observedLtv": 0.0,
        "priorLtvGross": 3.78,
        "priorNet": 2.08,
        "cpaTestSuggest": 0.62
      },
      {
        "country": "Mozambique",
        "affiliates": 1817,
        "clientRate": 2.26,
        "observedLtv": 0.0,
        "priorLtvGross": 7.42,
        "priorNet": 4.08,
        "cpaTestSuggest": 1.22
      },
      {
        "country": "Algeria",
        "affiliates": 1716,
        "clientRate": 0.7,
        "observedLtv": 0.0,
        "priorLtvGross": 2.3,
        "priorNet": 1.26,
        "cpaTestSuggest": 0.38
      },
      {
        "country": "Venezuela",
        "affiliates": 1653,
        "clientRate": 1.21,
        "observedLtv": 0.0,
        "priorLtvGross": 3.98,
        "priorNet": 2.19,
        "cpaTestSuggest": 0.66
      },
      {
        "country": "Burkina Faso",
        "affiliates": 1633,
        "clientRate": 1.78,
        "observedLtv": 0.0,
        "priorLtvGross": 5.84,
        "priorNet": 3.21,
        "cpaTestSuggest": 0.96
      },
      {
        "country": "Egypt",
        "affiliates": 1594,
        "clientRate": 0.5,
        "observedLtv": 0.0,
        "priorLtvGross": 1.65,
        "priorNet": 0.91,
        "cpaTestSuggest": 0.27
      },
      {
        "country": "Togo",
        "affiliates": 1469,
        "clientRate": 2.86,
        "observedLtv": 0.0,
        "priorLtvGross": 9.4,
        "priorNet": 5.17,
        "cpaTestSuggest": 1.55
      }
    ]
  },
  "vietnam": {
    "alpha": 0.45,
    "n": 479,
    "kpis": {
      "affiliates": 479,
      "active": 99,
      "activeRate": 20.67,
      "ownDeposit": 14,
      "withClients": 99,
      "clientRate": 20.67,
      "funded": 93,
      "fundedRate": 19.42,
      "earners": 83,
      "earnRate": 17.33,
      "commission": 58557.2,
      "clientDep": 423408.11,
      "clientPnl": 108984.88,
      "affDep": 45.54,
      "affPnl": 49.65,
      "clientsTotal": 257,
      "subAffiliates": 0,
      "derivGross": 130127.11,
      "derivNet": 71569.91,
      "ltvSignup": 271.66,
      "netSignup": 149.42,
      "ltvEarner": 1567.8,
      "netEarner": 862.29,
      "commPerEarner": 705.51,
      "cdepPerEarner": 5032.29,
      "clientsPerEarner": 2.82,
      "commToCdep": 13.83,
      "pFundedGivenClients": 93.9,
      "pEarnGivenClients": 83.8,
      "pEarnGivenFunded": 89.2,
      "sameDayOnboardPct": 97.5,
      "adGroupUnspecifiedPct": 100
    },
    "earnerDist": {
      "commP25": 75.4,
      "commP50": 389.51,
      "commP75": 1087.62,
      "commP90": 1550.44,
      "commMax": 3646.43,
      "ltvP25": 167.56,
      "ltvP50": 865.58,
      "ltvP75": 2416.93,
      "ltvP90": 3445.42,
      "ltvMax": 8103.18,
      "cdepP50": 3180.38,
      "cdepMean": 5032.29,
      "daysClientP50": 16.0,
      "daysClientP75": 23.0,
      "daysAffP50": 71.5,
      "nDaysAff": 14,
      "nDaysClient": 83
    },
    "correlations": [
      {
        "pair": "Client deposits \u2194 commission",
        "r": 0.728,
        "note": "Strongest \u2014 funded client capital drives payout"
      },
      {
        "pair": "Client PnL \u2194 commission",
        "r": 0.648,
        "note": "Strong \u2014 trading activity accompanies commission"
      },
      {
        "pair": "Clients acquired \u2194 commission",
        "r": 0.618,
        "note": "Strong \u2014 more clients, more commission"
      },
      {
        "pair": "Affiliate self-deposits \u2194 commission",
        "r": -0.013,
        "note": "None \u2014 earners do not self-fund"
      },
      {
        "pair": "Sub-affiliates \u2194 commission",
        "r": null,
        "note": "Zero sub-affiliates in Vietnam sample"
      }
    ],
    "funnel": [
      {
        "step": "Onboarded",
        "n": 479,
        "rate": 100
      },
      {
        "step": "Active",
        "n": 99,
        "rate": 20.7
      },
      {
        "step": "Own deposit",
        "n": 14,
        "rate": 2.9
      },
      {
        "step": "Clients > 0",
        "n": 99,
        "rate": 20.7
      },
      {
        "step": "Funded client",
        "n": 93,
        "rate": 19.4
      },
      {
        "step": "Commission > 0",
        "n": 83,
        "rate": 17.3
      }
    ],
    "stageEcon": [
      {
        "stage": "All signups",
        "n": 479,
        "commission": 58557.2,
        "ltv": 271.66,
        "net": 149.42,
        "cpa30": 44.82,
        "cpa50": 74.71,
        "cpa100": 149.42
      },
      {
        "stage": "Active",
        "n": 99,
        "commission": 58557.2,
        "ltv": 1314.42,
        "net": 722.93,
        "cpa30": 216.88,
        "cpa50": 361.46,
        "cpa100": 722.93
      },
      {
        "stage": "Clients>0",
        "n": 99,
        "commission": 58557.2,
        "ltv": 1314.42,
        "net": 722.93,
        "cpa30": 216.88,
        "cpa50": 361.46,
        "cpa100": 722.93
      },
      {
        "stage": "Funded",
        "n": 93,
        "commission": 58557.2,
        "ltv": 1399.22,
        "net": 769.57,
        "cpa30": 230.87,
        "cpa50": 384.78,
        "cpa100": 769.57
      },
      {
        "stage": "Earners",
        "n": 83,
        "commission": 58557.2,
        "ltv": 1567.8,
        "net": 862.29,
        "cpa30": 258.69,
        "cpa50": 431.14,
        "cpa100": 862.29
      }
    ],
    "campaigns": [
      {
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "n": 44,
        "earners": 29,
        "earnRate": 65.9,
        "active": 29,
        "clients": 119,
        "funded": 29,
        "commission": 38489.38,
        "clientDep": 198224.12,
        "clientPnl": 48936.98,
        "ltvSignup": 1943.91,
        "netSignup": 1069.15,
        "cpa50": 534.57,
        "medium": "social"
      },
      {
        "campaign": "asia_sea-vn-prosp-brand_keyword-0925-vi-google",
        "n": 154,
        "earners": 9,
        "earnRate": 5.8,
        "active": 9,
        "clients": 25,
        "funded": 9,
        "commission": 7334.25,
        "clientDep": 55679.38,
        "clientPnl": -756.52,
        "ltvSignup": 105.83,
        "netSignup": 58.21,
        "cpa50": 29.1,
        "medium": "search"
      },
      {
        "campaign": "asia_sea-vn-prosp-usp-0725-vi-fb",
        "n": 191,
        "earners": 33,
        "earnRate": 17.3,
        "active": 44,
        "clients": 81,
        "funded": 39,
        "commission": 5561.53,
        "clientDep": 137261.85,
        "clientPnl": 51737.96,
        "ltvSignup": 64.71,
        "netSignup": 35.59,
        "cpa50": 17.79,
        "medium": "social"
      },
      {
        "campaign": "asia_sea-prosp-usp-0626-en-taboola",
        "n": 19,
        "earners": 9,
        "earnRate": 47.4,
        "active": 13,
        "clients": 18,
        "funded": 13,
        "commission": 4326.99,
        "clientDep": 19449.39,
        "clientPnl": 3040.11,
        "ltvSignup": 506.08,
        "netSignup": 278.34,
        "cpa50": 139.17,
        "medium": "native"
      },
      {
        "campaign": "asia_sea-prosp-brand_keyword-0925-en-google",
        "n": 9,
        "earners": 1,
        "earnRate": 11.1,
        "active": 1,
        "clients": 4,
        "funded": 1,
        "commission": 1550.44,
        "clientDep": 4996.94,
        "clientPnl": 4130.6,
        "ltvSignup": 382.82,
        "netSignup": 210.55,
        "cpa50": 105.28,
        "medium": "search"
      },
      {
        "campaign": "asia_sea-prosp-did_you_know-0426-en-dgen",
        "n": 8,
        "earners": 1,
        "earnRate": 12.5,
        "active": 1,
        "clients": 2,
        "funded": 1,
        "commission": 1051.93,
        "clientDep": 4796.43,
        "clientPnl": 2378.05,
        "ltvSignup": 292.2,
        "netSignup": 160.71,
        "cpa50": 80.36,
        "medium": "display"
      },
      {
        "campaign": "asia_sea-prosp-did_you_know-0226-en-fb",
        "n": 1,
        "earners": 1,
        "earnRate": 100.0,
        "active": 1,
        "clients": 7,
        "funded": 1,
        "commission": 242.68,
        "clientDep": 3000.0,
        "clientPnl": -482.3,
        "ltvSignup": 539.29,
        "netSignup": 296.61,
        "cpa50": 148.3,
        "medium": "social"
      },
      {
        "campaign": "asia_sea-vn-prosp-brand_awareness-0925-vi-google",
        "n": 1,
        "earners": 0,
        "earnRate": 0.0,
        "active": 0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "clientPnl": 0.0,
        "ltvSignup": 0.0,
        "netSignup": 0.0,
        "cpa50": 0.0,
        "medium": "search"
      },
      {
        "campaign": "asia_sea-prosp-brand_awareness-0925-en-google",
        "n": 7,
        "earners": 0,
        "earnRate": 0.0,
        "active": 1,
        "clients": 1,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "clientPnl": 0.0,
        "ltvSignup": 0.0,
        "netSignup": 0.0,
        "cpa50": 0.0,
        "medium": "search"
      },
      {
        "campaign": "asia_sea-prosp-affiliate_ebook-1025-en-fb",
        "n": 28,
        "earners": 0,
        "earnRate": 0.0,
        "active": 0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "clientPnl": 0.0,
        "ltvSignup": 0.0,
        "netSignup": 0.0,
        "cpa50": 0.0,
        "medium": "social"
      },
      {
        "campaign": "asia_sea-rtg-usp-0925-en-fb",
        "n": 13,
        "earners": 0,
        "earnRate": 0.0,
        "active": 0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "clientPnl": 0.0,
        "ltvSignup": 0.0,
        "netSignup": 0.0,
        "cpa50": 0.0,
        "medium": "social"
      },
      {
        "campaign": "asia_sea-prosp-affiliate_ebook-1125-en-google",
        "n": 1,
        "earners": 0,
        "earnRate": 0.0,
        "active": 0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "clientPnl": 0.0,
        "ltvSignup": 0.0,
        "netSignup": 0.0,
        "cpa50": 0.0,
        "medium": "search"
      },
      {
        "campaign": "cis-uz-prosp-affiliate_ebook-1125-en-fb",
        "n": 1,
        "earners": 0,
        "earnRate": 0.0,
        "active": 0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "clientPnl": 0.0,
        "ltvSignup": 0.0,
        "netSignup": 0.0,
        "cpa50": 0.0,
        "medium": "social"
      },
      {
        "campaign": "africa_east-prosp-affiliate_ebook-1125-en-google",
        "n": 1,
        "earners": 0,
        "earnRate": 0.0,
        "active": 0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "clientPnl": 0.0,
        "ltvSignup": 0.0,
        "netSignup": 0.0,
        "cpa50": 0.0,
        "medium": "search"
      },
      {
        "campaign": "africa_west-prosp-brand_keyword-0925-en-google",
        "n": 1,
        "earners": 0,
        "earnRate": 0.0,
        "active": 0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "clientPnl": 0.0,
        "ltvSignup": 0.0,
        "netSignup": 0.0,
        "cpa50": 0.0,
        "medium": "search"
      }
    ],
    "sources": [
      {
        "source": "Meta",
        "n": 278,
        "earners": 63,
        "earnRate": 22.7,
        "active": 74,
        "clients": 207,
        "funded": 69,
        "commission": 44293.59,
        "clientDep": 338485.97,
        "ltvSignup": 354.07,
        "netSignup": 194.74,
        "cpa50": 97.37
      },
      {
        "source": "google",
        "n": 31,
        "earners": 7,
        "earnRate": 22.6,
        "active": 8,
        "clients": 22,
        "funded": 7,
        "commission": 5859.29,
        "clientDep": 39959.81,
        "ltvSignup": 420.02,
        "netSignup": 231.01,
        "cpa50": 115.51
      },
      {
        "source": "taboola",
        "n": 19,
        "earners": 9,
        "earnRate": 47.4,
        "active": 13,
        "clients": 18,
        "funded": 13,
        "commission": 4326.99,
        "clientDep": 19449.39,
        "ltvSignup": 506.08,
        "netSignup": 278.34,
        "cpa50": 139.17
      },
      {
        "source": "Unattributed",
        "n": 142,
        "earners": 3,
        "earnRate": 2.1,
        "active": 3,
        "clients": 8,
        "funded": 3,
        "commission": 3025.4,
        "clientDep": 20716.51,
        "ltvSignup": 47.35,
        "netSignup": 26.04,
        "cpa50": 13.02
      },
      {
        "source": "dgen",
        "n": 8,
        "earners": 1,
        "earnRate": 12.5,
        "active": 1,
        "clients": 2,
        "funded": 1,
        "commission": 1051.93,
        "clientDep": 4796.43,
        "ltvSignup": 292.2,
        "netSignup": 160.71,
        "cpa50": 80.36
      },
      {
        "source": "Other affiliate",
        "n": 1,
        "earners": 0,
        "earnRate": 0.0,
        "active": 0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "ltvSignup": 0.0,
        "netSignup": 0.0,
        "cpa50": 0.0
      }
    ],
    "mediums": [
      {
        "medium": "social",
        "n": 278,
        "earners": 63,
        "earnRate": 22.7,
        "commission": 44293.59,
        "clientDep": 338485.97,
        "ltvSignup": 354.07,
        "netSignup": 194.74,
        "cpa50": 97.37
      },
      {
        "medium": "search",
        "n": 174,
        "earners": 10,
        "earnRate": 5.7,
        "commission": 8884.69,
        "clientDep": 60676.32,
        "ltvSignup": 113.47,
        "netSignup": 62.41,
        "cpa50": 31.2
      },
      {
        "medium": "native",
        "n": 19,
        "earners": 9,
        "earnRate": 47.4,
        "commission": 4326.99,
        "clientDep": 19449.39,
        "ltvSignup": 506.08,
        "netSignup": 278.34,
        "cpa50": 139.17
      },
      {
        "medium": "display",
        "n": 8,
        "earners": 1,
        "earnRate": 12.5,
        "commission": 1051.93,
        "clientDep": 4796.43,
        "ltvSignup": 292.2,
        "netSignup": 160.71,
        "cpa50": 80.36
      }
    ],
    "monthly": [
      {
        "month": "2025-08",
        "n": 61,
        "earners": 24,
        "earnRate": 39.3,
        "clients": 57,
        "funded": 28,
        "commission": 3933.23,
        "clientDep": 107159.86,
        "ltvSignup": 143.29
      },
      {
        "month": "2025-09",
        "n": 35,
        "earners": 9,
        "earnRate": 25.7,
        "clients": 24,
        "funded": 11,
        "commission": 1628.3,
        "clientDep": 30101.99,
        "ltvSignup": 103.38
      },
      {
        "month": "2025-10",
        "n": 43,
        "earners": 0,
        "earnRate": 0.0,
        "clients": 1,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "ltvSignup": 0.0
      },
      {
        "month": "2025-11",
        "n": 39,
        "earners": 0,
        "earnRate": 0.0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "ltvSignup": 0.0
      },
      {
        "month": "2025-12",
        "n": 36,
        "earners": 0,
        "earnRate": 0.0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "ltvSignup": 0.0
      },
      {
        "month": "2026-01",
        "n": 48,
        "earners": 0,
        "earnRate": 0.0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "ltvSignup": 0.0
      },
      {
        "month": "2026-02",
        "n": 86,
        "earners": 30,
        "earnRate": 34.9,
        "clients": 123,
        "funded": 30,
        "commission": 40039.82,
        "clientDep": 203221.06,
        "ltvSignup": 1034.62
      },
      {
        "month": "2026-03",
        "n": 27,
        "earners": 4,
        "earnRate": 14.8,
        "clients": 15,
        "funded": 4,
        "commission": 3268.08,
        "clientDep": 23716.51,
        "ltvSignup": 268.98
      },
      {
        "month": "2026-04",
        "n": 57,
        "earners": 0,
        "earnRate": 0.0,
        "clients": 0,
        "funded": 0,
        "commission": 0.0,
        "clientDep": 0.0,
        "ltvSignup": 0.0
      },
      {
        "month": "2026-05",
        "n": 11,
        "earners": 7,
        "earnRate": 63.6,
        "clients": 19,
        "funded": 7,
        "commission": 5360.78,
        "clientDep": 39759.3,
        "ltvSignup": 1082.99
      },
      {
        "month": "2026-07",
        "n": 8,
        "earners": 3,
        "earnRate": 37.5,
        "clients": 10,
        "funded": 5,
        "commission": 2098.52,
        "clientDep": 9557.41,
        "ltvSignup": 582.92
      },
      {
        "month": "2026-08",
        "n": 28,
        "earners": 6,
        "earnRate": 21.4,
        "clients": 8,
        "funded": 8,
        "commission": 2228.47,
        "clientDep": 9891.98,
        "ltvSignup": 176.86
      }
    ],
    "ageBuckets": [
      {
        "bucket": "0-59d",
        "n": 35,
        "earners": 9,
        "earnRate": 25.7,
        "ltvSignup": 274.73,
        "commission": 4326.99
      },
      {
        "bucket": "60-119d",
        "n": 7,
        "earners": 3,
        "earnRate": 42.9,
        "ltvSignup": 845.08,
        "commission": 2662.01
      },
      {
        "bucket": "120-179d",
        "n": 79,
        "earners": 5,
        "earnRate": 6.3,
        "ltvSignup": 80.22,
        "commission": 2851.74
      },
      {
        "bucket": "180-269d",
        "n": 172,
        "earners": 33,
        "earnRate": 19.2,
        "ltvSignup": 557.56,
        "commission": 43154.93
      },
      {
        "bucket": "270d+",
        "n": 186,
        "earners": 33,
        "earnRate": 17.7,
        "ltvSignup": 66.45,
        "commission": 5561.53
      }
    ],
    "topEarners": [
      {
        "id": "019e9b13",
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "source": "Meta",
        "medium": "social",
        "active": "Active",
        "clients": 3,
        "clientDep": 14463.29,
        "clientPnl": 12154.76,
        "commission": 3646.43,
        "derivLtv": 8103.18,
        "daysToClient": 15.0,
        "funded": "2026-02-21"
      },
      {
        "id": "019ed0d1",
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "source": "Meta",
        "medium": "social",
        "active": "Active",
        "clients": 3,
        "clientDep": 13073.47,
        "clientPnl": 8309.97,
        "commission": 3543.83,
        "derivLtv": 7875.18,
        "daysToClient": 16.0,
        "funded": "2026-02-22"
      },
      {
        "id": "019e97f1",
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "source": "Meta",
        "medium": "social",
        "active": "Active",
        "clients": 2,
        "clientDep": 18663.52,
        "clientPnl": 9819.97,
        "commission": 3422.12,
        "derivLtv": 7604.71,
        "daysToClient": 18.0,
        "funded": "2026-02-25"
      },
      {
        "id": "019ecb8c",
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "source": "Meta",
        "medium": "social",
        "active": "Active",
        "clients": 3,
        "clientDep": 5994.06,
        "clientPnl": 7265.66,
        "commission": 2637.59,
        "derivLtv": 5861.31,
        "daysToClient": 9.0,
        "funded": "2026-03-02"
      },
      {
        "id": "019ecb92",
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "source": "Meta",
        "medium": "social",
        "active": "Active",
        "clients": 2,
        "clientDep": 4797.66,
        "clientPnl": 6957.8,
        "commission": 2431.5,
        "derivLtv": 5403.33,
        "daysToClient": 9.0,
        "funded": "2026-03-02"
      },
      {
        "id": "01a0137a",
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "source": "Meta",
        "medium": "social",
        "active": "Active",
        "clients": 2,
        "clientDep": 17248.87,
        "clientPnl": 1956.25,
        "commission": 2263.72,
        "derivLtv": 5030.49,
        "daysToClient": 16.0,
        "funded": "2026-02-22"
      },
      {
        "id": "019e97f1",
        "campaign": "asia_sea-vn-prosp-brand_keyword-0925-vi-...",
        "source": "Unattributed",
        "medium": "search",
        "active": "Active",
        "clients": 3,
        "clientDep": 7635.87,
        "clientPnl": 5359.98,
        "commission": 1690.69,
        "derivLtv": 3757.09,
        "daysToClient": 20.0,
        "funded": "2026-03-24"
      },
      {
        "id": "019df203",
        "campaign": "asia_sea-vn-prosp-brand_keyword-0925-vi-...",
        "source": "google",
        "medium": "search",
        "active": "Active",
        "clients": 3,
        "clientDep": 4942.15,
        "clientPnl": 4929.65,
        "commission": 1607.08,
        "derivLtv": 3571.29,
        "daysToClient": 22.0,
        "funded": "2026-05-26"
      },
      {
        "id": "019ecaa8",
        "campaign": "asia_sea-prosp-brand_keyword-0925-en-goo...",
        "source": "google",
        "medium": "search",
        "active": "Active",
        "clients": 4,
        "clientDep": 4996.94,
        "clientPnl": 4130.6,
        "commission": 1550.44,
        "derivLtv": 3445.42,
        "daysToClient": 12.0,
        "funded": "2026-03-06"
      },
      {
        "id": "019ea6d0",
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "source": "Meta",
        "medium": "social",
        "active": "Active",
        "clients": 4,
        "clientDep": 2300.0,
        "clientPnl": 3813.86,
        "commission": 1518.84,
        "derivLtv": 3375.2,
        "daysToClient": 14.0,
        "funded": "2026-02-26"
      },
      {
        "id": "019ed0d2",
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "source": "Meta",
        "medium": "social",
        "active": "Active",
        "clients": 6,
        "clientDep": 4998.87,
        "clientPnl": 3373.26,
        "commission": 1433.6,
        "derivLtv": 3185.78,
        "daysToClient": 15.0,
        "funded": "2026-02-24"
      },
      {
        "id": "019efe52",
        "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
        "source": "Meta",
        "medium": "social",
        "active": "Active",
        "clients": 4,
        "clientDep": 6937.5,
        "clientPnl": 2832.7,
        "commission": 1431.09,
        "derivLtv": 3180.2,
        "daysToClient": 39.0,
        "funded": "2026-03-19"
      }
    ],
    "concentration": [
      {
        "topN": 1,
        "share": 0.4
      },
      {
        "topN": 3,
        "share": 1.5
      },
      {
        "topN": 5,
        "share": 3.3
      },
      {
        "topN": 10,
        "share": 7.4
      },
      {
        "topN": 20,
        "share": 22.1
      }
    ],
    "cpaPolicy": {
      "blended30": 44.82,
      "blended50": 74.71,
      "blended100": 149.42,
      "active50": 361.46,
      "clients50": 361.46,
      "funded50": 384.78,
      "earner50": 431.14,
      "surveyCpa50": 534.57,
      "taboolaCpa50": 139.17,
      "googleBrandCpa50": 29.1,
      "viFbCpa50": 17.79
    },
    "insights": [
      "Vietnam is 99.4% of program commission from only 479 affiliates (0.8% of signups).",
      "Master/sub-affiliate path is unused here (0 direct sub-affiliates) \u2014 value is 100% from client referrals.",
      "Affiliate self-trading is irrelevant (1 affiliate deposited $46; earners deposited $0).",
      "FB Survey campaign: 66% earn rate, $38489 commission \u2014 best CPA headroom.",
      "Taboola native: 47% earn rate, highest LTV/signup ($506) despite small n=19.",
      "Google VN brand keyword: high volume (154) but only 6% earn rate \u2014 LTV/signup $105; quality filter needed.",
      "97.5% join and onboard same day \u2014 pre-affiliate lag is not a lever.",
      "All Ad Groups are Unspecified \u2014 no ad-group level optimization signal in this export.",
      "Oct 2025\u2013Jan 2026 cohorts show $0 commission despite volume \u2014 maturity and/or creative mix issue.",
      "Top 10 earners = majority of commission; LTV distribution is heavy-tailed.",
      "Median earner: ~$390 commission \u2192 ~$866 Deriv gross LTV; ~2 clients; ~$3180 client deposits; first client in ~16 days.",
      "Commission \u2248 9% median of client deposits among earners (mean ~17%) \u2014 consistent with RS on trading revenue, not deposit share."
    ]
  }
} as const;

const LTV_GEO = {
  "alpha": 0.45,
  "defaultId": "Vietnam",
  "options": [
    {
      "id": "All countries",
      "kind": "program",
      "label": "All countries",
      "n": 58360,
      "commission": 58889.95,
      "earnRate": 0.16
    },
    {
      "id": "Southeast Asia",
      "kind": "region",
      "label": "Southeast Asia",
      "n": 3480,
      "commission": 58557.2,
      "earnRate": 2.39
    },
    {
      "id": "Central Africa",
      "kind": "region",
      "label": "Central Africa",
      "n": 3638,
      "commission": 196.13,
      "earnRate": 0.03
    },
    {
      "id": "West Africa",
      "kind": "region",
      "label": "West Africa",
      "n": 16722,
      "commission": 69.35,
      "earnRate": 0.05
    },
    {
      "id": "South Asia",
      "kind": "region",
      "label": "South Asia",
      "n": 8772,
      "commission": 43.5,
      "earnRate": 0.01
    },
    {
      "id": "East Africa",
      "kind": "region",
      "label": "East Africa",
      "n": 3816,
      "commission": 23.77,
      "earnRate": 0.03
    },
    {
      "id": "Southern Africa",
      "kind": "region",
      "label": "Southern Africa",
      "n": 5690,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Other",
      "kind": "region",
      "label": "Other",
      "n": 7219,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Latin America",
      "kind": "region",
      "label": "Latin America",
      "n": 3612,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Caribbean",
      "kind": "region",
      "label": "Caribbean",
      "n": 625,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "North Africa & MENA",
      "kind": "region",
      "label": "North Africa & MENA",
      "n": 4673,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Vietnam",
      "kind": "country",
      "label": "Vietnam",
      "n": 479,
      "commission": 58557.2,
      "earnRate": 17.33
    },
    {
      "id": "Congo - Kinshasa",
      "kind": "country",
      "label": "Congo - Kinshasa",
      "n": 2742,
      "commission": 196.13,
      "earnRate": 0.04
    },
    {
      "id": "Nigeria",
      "kind": "country",
      "label": "Nigeria",
      "n": 9362,
      "commission": 69.35,
      "earnRate": 0.1
    },
    {
      "id": "Sri Lanka",
      "kind": "country",
      "label": "Sri Lanka",
      "n": 991,
      "commission": 43.5,
      "earnRate": 0.1
    },
    {
      "id": "Uganda",
      "kind": "country",
      "label": "Uganda",
      "n": 2440,
      "commission": 23.77,
      "earnRate": 0.04
    },
    {
      "id": "Bangladesh",
      "kind": "country",
      "label": "Bangladesh",
      "n": 5784,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Philippines",
      "kind": "country",
      "label": "Philippines",
      "n": 2924,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Benin",
      "kind": "country",
      "label": "Benin",
      "n": 1971,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Nepal",
      "kind": "country",
      "label": "Nepal",
      "n": 1827,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Mozambique",
      "kind": "country",
      "label": "Mozambique",
      "n": 1817,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Algeria",
      "kind": "country",
      "label": "Algeria",
      "n": 1716,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Venezuela",
      "kind": "country",
      "label": "Venezuela",
      "n": 1653,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Burkina Faso",
      "kind": "country",
      "label": "Burkina Faso",
      "n": 1633,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Egypt",
      "kind": "country",
      "label": "Egypt",
      "n": 1594,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Togo",
      "kind": "country",
      "label": "Togo",
      "n": 1469,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Angola",
      "kind": "country",
      "label": "Angola",
      "n": 1442,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Ethiopia",
      "kind": "country",
      "label": "Ethiopia",
      "n": 1351,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Zambia",
      "kind": "country",
      "label": "Zambia",
      "n": 1182,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "C\u00f4te d'Ivoire / Ivory Coast",
      "kind": "country",
      "label": "C\u00f4te d'Ivoire / Ivory Coast",
      "n": 1169,
      "commission": 0.0,
      "earnRate": 0.0
    },
    {
      "id": "Mexico",
      "kind": "country",
      "label": "Mexico",
      "n": 986,
      "commission": 0.0,
      "earnRate": 0.0
    }
  ],
  "entities": {
    "All countries": {
      "id": "All countries",
      "kind": "program",
      "n": 58360,
      "earners": 95,
      "earnRate": 0.16,
      "commission": 58889.95,
      "clientDep": 425871.07,
      "derivGross": 130866.56,
      "derivNet": 71976.61,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 58360,
          "commission": 58889.95,
          "ltv": 2.24,
          "net": 1.23,
          "cpa30": 0.37,
          "cpa50": 0.62,
          "cpa100": 1.23
        },
        {
          "stage": "Active",
          "n": 1311,
          "commission": 58889.95,
          "ltv": 99.82,
          "net": 54.9,
          "cpa30": 16.47,
          "cpa50": 27.45,
          "cpa100": 54.9
        },
        {
          "stage": "Clients>0",
          "n": 1311,
          "commission": 58889.95,
          "ltv": 99.82,
          "net": 54.9,
          "cpa30": 16.47,
          "cpa50": 27.45,
          "cpa100": 54.9
        },
        {
          "stage": "Funded",
          "n": 119,
          "commission": 58886.01,
          "ltv": 1099.65,
          "net": 604.8,
          "cpa30": 181.44,
          "cpa50": 302.4,
          "cpa100": 604.8
        },
        {
          "stage": "Earners",
          "n": 95,
          "commission": 58889.95,
          "ltv": 1377.54,
          "net": 757.65,
          "cpa30": 227.29,
          "cpa50": 378.82,
          "cpa100": 757.65
        }
      ],
      "campaigns": [
        {
          "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
          "n": 153,
          "earners": 29,
          "earnRate": 19.0,
          "commission": 38489.38,
          "ltvSignup": 559.03,
          "cpa50": 153.73
        },
        {
          "campaign": "asia_sea-vn-prosp-brand_keyword-0925-vi-google",
          "n": 157,
          "earners": 9,
          "earnRate": 5.7,
          "commission": 7334.25,
          "ltvSignup": 103.81,
          "cpa50": 28.55
        },
        {
          "campaign": "asia_sea-vn-prosp-usp-0725-vi-fb",
          "n": 192,
          "earners": 33,
          "earnRate": 17.2,
          "commission": 5561.53,
          "ltvSignup": 64.37,
          "cpa50": 17.7
        },
        {
          "campaign": "asia_sea-prosp-usp-0626-en-taboola",
          "n": 24,
          "earners": 9,
          "earnRate": 37.5,
          "commission": 4326.99,
          "ltvSignup": 400.65,
          "cpa50": 110.18
        },
        {
          "campaign": "asia_sea-prosp-brand_keyword-0925-en-google",
          "n": 696,
          "earners": 1,
          "earnRate": 0.1,
          "commission": 1550.44,
          "ltvSignup": 4.95,
          "cpa50": 1.36
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 36947,
          "earners": 65,
          "earnRate": 0.2,
          "cpa50": 0.74,
          "ltvSignup": 2.68
        },
        {
          "source": "google",
          "n": 20633,
          "earners": 17,
          "earnRate": 0.1,
          "cpa50": 0.18,
          "ltvSignup": 0.65
        },
        {
          "source": "taboola",
          "n": 344,
          "earners": 9,
          "earnRate": 2.6,
          "cpa50": 7.69,
          "ltvSignup": 27.95
        },
        {
          "source": "Unattributed",
          "n": 265,
          "earners": 3,
          "earnRate": 1.1,
          "cpa50": 6.98,
          "ltvSignup": 25.37
        }
      ],
      "layerA": {
        "netSignup": 1.23,
        "cpa30": 0.37,
        "cpa50": 0.62,
        "cpa100": 1.23,
        "ltvSignup": 2.24
      },
      "layerB": {
        "activeCpa50": 27.45,
        "clientsCpa50": 27.45,
        "fundedCpa50": 302.4,
        "earnerCpa50": 378.82,
        "activeN": 1311,
        "clientsN": 1311,
        "fundedN": 119,
        "earnerN": 95
      }
    },
    "Southeast Asia": {
      "id": "Southeast Asia",
      "kind": "region",
      "n": 3480,
      "earners": 83,
      "earnRate": 2.39,
      "commission": 58557.2,
      "clientDep": 423408.11,
      "derivGross": 130127.11,
      "derivNet": 71569.91,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 3480,
          "commission": 58557.2,
          "ltv": 37.39,
          "net": 20.57,
          "cpa30": 6.17,
          "cpa50": 10.28,
          "cpa100": 20.57
        },
        {
          "stage": "Active",
          "n": 103,
          "commission": 58557.2,
          "ltv": 1263.37,
          "net": 694.85,
          "cpa30": 208.46,
          "cpa50": 347.43,
          "cpa100": 694.85
        },
        {
          "stage": "Clients>0",
          "n": 103,
          "commission": 58557.2,
          "ltv": 1263.37,
          "net": 694.85,
          "cpa30": 208.46,
          "cpa50": 347.43,
          "cpa100": 694.85
        },
        {
          "stage": "Funded",
          "n": 93,
          "commission": 58557.2,
          "ltv": 1399.22,
          "net": 769.57,
          "cpa30": 230.87,
          "cpa50": 384.78,
          "cpa100": 769.57
        },
        {
          "stage": "Earners",
          "n": 83,
          "commission": 58557.2,
          "ltv": 1567.8,
          "net": 862.29,
          "cpa30": 258.69,
          "cpa50": 431.14,
          "cpa100": 862.29
        }
      ],
      "campaigns": [
        {
          "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
          "n": 135,
          "earners": 29,
          "earnRate": 21.5,
          "commission": 38489.38,
          "ltvSignup": 633.57,
          "cpa50": 174.23
        },
        {
          "campaign": "asia_sea-vn-prosp-brand_keyword-0925-vi-google",
          "n": 154,
          "earners": 9,
          "earnRate": 5.8,
          "commission": 7334.25,
          "ltvSignup": 105.83,
          "cpa50": 29.1
        },
        {
          "campaign": "asia_sea-vn-prosp-usp-0725-vi-fb",
          "n": 191,
          "earners": 33,
          "earnRate": 17.3,
          "commission": 5561.53,
          "ltvSignup": 64.71,
          "cpa50": 17.79
        },
        {
          "campaign": "asia_sea-prosp-usp-0626-en-taboola",
          "n": 20,
          "earners": 9,
          "earnRate": 45.0,
          "commission": 4326.99,
          "ltvSignup": 480.78,
          "cpa50": 132.21
        },
        {
          "campaign": "asia_sea-prosp-brand_keyword-0925-en-google",
          "n": 684,
          "earners": 1,
          "earnRate": 0.1,
          "commission": 1550.44,
          "ltvSignup": 5.04,
          "cpa50": 1.39
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 2197,
          "earners": 63,
          "earnRate": 2.9,
          "cpa50": 12.32,
          "ltvSignup": 44.8
        },
        {
          "source": "google",
          "n": 1053,
          "earners": 7,
          "earnRate": 0.7,
          "cpa50": 3.4,
          "ltvSignup": 12.37
        },
        {
          "source": "taboola",
          "n": 20,
          "earners": 9,
          "earnRate": 45.0,
          "cpa50": 132.21,
          "ltvSignup": 480.78
        },
        {
          "source": "Unattributed",
          "n": 150,
          "earners": 3,
          "earnRate": 2.0,
          "cpa50": 12.33,
          "ltvSignup": 44.82
        }
      ],
      "layerA": {
        "netSignup": 20.57,
        "cpa30": 6.17,
        "cpa50": 10.28,
        "cpa100": 20.57,
        "ltvSignup": 37.39
      },
      "layerB": {
        "activeCpa50": 347.43,
        "clientsCpa50": 347.43,
        "fundedCpa50": 384.78,
        "earnerCpa50": 431.14,
        "activeN": 103,
        "clientsN": 103,
        "fundedN": 93,
        "earnerN": 83
      }
    },
    "Central Africa": {
      "id": "Central Africa",
      "kind": "region",
      "n": 3638,
      "earners": 1,
      "earnRate": 0.03,
      "commission": 196.13,
      "clientDep": 1218.51,
      "derivGross": 435.84,
      "derivNet": 239.71,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 3638,
          "commission": 196.13,
          "ltv": 0.12,
          "net": 0.07,
          "cpa30": 0.02,
          "cpa50": 0.03,
          "cpa100": 0.07
        },
        {
          "stage": "Active",
          "n": 96,
          "commission": 196.13,
          "ltv": 4.54,
          "net": 2.5,
          "cpa30": 0.75,
          "cpa50": 1.25,
          "cpa100": 2.5
        },
        {
          "stage": "Clients>0",
          "n": 96,
          "commission": 196.13,
          "ltv": 4.54,
          "net": 2.5,
          "cpa30": 0.75,
          "cpa50": 1.25,
          "cpa100": 2.5
        },
        {
          "stage": "Funded",
          "n": 2,
          "commission": 196.13,
          "ltv": 217.92,
          "net": 119.86,
          "cpa30": 35.96,
          "cpa50": 59.93,
          "cpa100": 119.86
        },
        {
          "stage": "Earners",
          "n": 1,
          "commission": 196.13,
          "ltv": 435.84,
          "net": 239.71,
          "cpa30": 71.91,
          "cpa50": 119.86,
          "cpa100": 239.71
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_french-rtg-usp-0725-fr-fb",
          "n": 1226,
          "earners": 1,
          "earnRate": 0.1,
          "commission": 196.13,
          "ltvSignup": 0.36,
          "cpa50": 0.1
        },
        {
          "campaign": "africa_french-prosp-usp-0725-fr-fb",
          "n": 1461,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-did_you_know-0426-fr-fb",
          "n": 138,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-affiliate_ebook-1125-fr-g...",
          "n": 223,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-brand_keyword-0925-fr-google",
          "n": 286,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 3112,
          "earners": 1,
          "earnRate": 0.0,
          "cpa50": 0.04,
          "ltvSignup": 0.14
        },
        {
          "source": "google",
          "n": 523,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 2,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "taboola",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.07,
        "cpa30": 0.02,
        "cpa50": 0.03,
        "cpa100": 0.07,
        "ltvSignup": 0.12
      },
      "layerB": {
        "activeCpa50": 1.25,
        "clientsCpa50": 1.25,
        "fundedCpa50": 59.93,
        "earnerCpa50": 119.86,
        "activeN": 96,
        "clientsN": 96,
        "fundedN": 2,
        "earnerN": 1
      }
    },
    "West Africa": {
      "id": "West Africa",
      "kind": "region",
      "n": 16722,
      "earners": 9,
      "earnRate": 0.05,
      "commission": 69.35,
      "clientDep": 474.09,
      "derivGross": 154.11,
      "derivNet": 84.76,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 16722,
          "commission": 69.35,
          "ltv": 0.01,
          "net": 0.01,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.01
        },
        {
          "stage": "Active",
          "n": 583,
          "commission": 69.35,
          "ltv": 0.26,
          "net": 0.15,
          "cpa30": 0.04,
          "cpa50": 0.07,
          "cpa100": 0.15
        },
        {
          "stage": "Clients>0",
          "n": 583,
          "commission": 69.35,
          "ltv": 0.26,
          "net": 0.15,
          "cpa30": 0.04,
          "cpa50": 0.07,
          "cpa100": 0.15
        },
        {
          "stage": "Funded",
          "n": 9,
          "commission": 65.41,
          "ltv": 16.15,
          "net": 8.88,
          "cpa30": 2.66,
          "cpa50": 4.44,
          "cpa100": 8.88
        },
        {
          "stage": "Earners",
          "n": 9,
          "commission": 69.35,
          "ltv": 17.12,
          "net": 9.42,
          "cpa30": 2.83,
          "cpa50": 4.71,
          "cpa100": 9.42
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_west-prosp-brand_keyword-0925-en-google",
          "n": 3607,
          "earners": 6,
          "earnRate": 0.2,
          "commission": 64.08,
          "ltvSignup": 0.04,
          "cpa50": 0.01
        },
        {
          "campaign": "africa_west-rtg-usp-0925-en-fb",
          "n": 731,
          "earners": 1,
          "earnRate": 0.1,
          "commission": 3.61,
          "ltvSignup": 0.01,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_west-prosp-affiliate_ebook-1125-en-google",
          "n": 1831,
          "earners": 2,
          "earnRate": 0.1,
          "commission": 1.66,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-brand_keyword-0925-fr-google",
          "n": 372,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-usp-0725-fr-fb",
          "n": 3283,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 6702,
          "earners": 8,
          "earnRate": 0.1,
          "cpa50": 0.01,
          "ltvSignup": 0.02
        },
        {
          "source": "Meta",
          "n": 9827,
          "earners": 1,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "dgen",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "taboola",
          "n": 161,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.01,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.01,
        "ltvSignup": 0.01
      },
      "layerB": {
        "activeCpa50": 0.07,
        "clientsCpa50": 0.07,
        "fundedCpa50": 4.44,
        "earnerCpa50": 4.71,
        "activeN": 583,
        "clientsN": 583,
        "fundedN": 9,
        "earnerN": 9
      }
    },
    "South Asia": {
      "id": "South Asia",
      "kind": "region",
      "n": 8772,
      "earners": 1,
      "earnRate": 0.01,
      "commission": 43.5,
      "clientDep": 396.89,
      "derivGross": 96.67,
      "derivNet": 53.17,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 8772,
          "commission": 43.5,
          "ltv": 0.01,
          "net": 0.01,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.01
        },
        {
          "stage": "Active",
          "n": 76,
          "commission": 43.5,
          "ltv": 1.27,
          "net": 0.7,
          "cpa30": 0.21,
          "cpa50": 0.35,
          "cpa100": 0.7
        },
        {
          "stage": "Clients>0",
          "n": 76,
          "commission": 43.5,
          "ltv": 1.27,
          "net": 0.7,
          "cpa30": 0.21,
          "cpa50": 0.35,
          "cpa100": 0.7
        },
        {
          "stage": "Funded",
          "n": 1,
          "commission": 43.5,
          "ltv": 96.67,
          "net": 53.17,
          "cpa30": 15.95,
          "cpa50": 26.58,
          "cpa100": 53.17
        },
        {
          "stage": "Earners",
          "n": 1,
          "commission": 43.5,
          "ltv": 96.67,
          "net": 53.17,
          "cpa30": 15.95,
          "cpa50": 26.58,
          "cpa100": 53.17
        }
      ],
      "campaigns": [
        {
          "campaign": "asia_isc-prosp-brand_keyword-0925-en-google",
          "n": 1623,
          "earners": 1,
          "earnRate": 0.1,
          "commission": 43.5,
          "ltvSignup": 0.06,
          "cpa50": 0.02
        },
        {
          "campaign": "asia_isc-prosp-affiliate_ebook-1125-en-google",
          "n": 1165,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-prosp-usp-0626-en-taboola",
          "n": 43,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-prosp-affiliate_ebook-1025-en-fb",
          "n": 726,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-rtg-usp-1225-en-fb-Survey",
          "n": 372,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 3335,
          "earners": 1,
          "earnRate": 0.0,
          "cpa50": 0.01,
          "ltvSignup": 0.03
        },
        {
          "source": "taboola",
          "n": 43,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 5383,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 10,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.01,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.01,
        "ltvSignup": 0.01
      },
      "layerB": {
        "activeCpa50": 0.35,
        "clientsCpa50": 0.35,
        "fundedCpa50": 26.58,
        "earnerCpa50": 26.58,
        "activeN": 76,
        "clientsN": 76,
        "fundedN": 1,
        "earnerN": 1
      }
    },
    "East Africa": {
      "id": "East Africa",
      "kind": "region",
      "n": 3816,
      "earners": 1,
      "earnRate": 0.03,
      "commission": 23.77,
      "clientDep": 98.94,
      "derivGross": 52.82,
      "derivNet": 29.05,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 3816,
          "commission": 23.77,
          "ltv": 0.01,
          "net": 0.01,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.01
        },
        {
          "stage": "Active",
          "n": 167,
          "commission": 23.77,
          "ltv": 0.32,
          "net": 0.17,
          "cpa30": 0.05,
          "cpa50": 0.09,
          "cpa100": 0.17
        },
        {
          "stage": "Clients>0",
          "n": 167,
          "commission": 23.77,
          "ltv": 0.32,
          "net": 0.17,
          "cpa30": 0.05,
          "cpa50": 0.09,
          "cpa100": 0.17
        },
        {
          "stage": "Funded",
          "n": 11,
          "commission": 23.77,
          "ltv": 4.8,
          "net": 2.64,
          "cpa30": 0.79,
          "cpa50": 1.32,
          "cpa100": 2.64
        },
        {
          "stage": "Earners",
          "n": 1,
          "commission": 23.77,
          "ltv": 52.82,
          "net": 29.05,
          "cpa30": 8.72,
          "cpa50": 14.53,
          "cpa100": 29.05
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_east-prosp-brand_keyword-1225-en-googl...",
          "n": 713,
          "earners": 1,
          "earnRate": 0.1,
          "commission": 23.77,
          "ltvSignup": 0.07,
          "cpa50": 0.02
        },
        {
          "campaign": "africa_east-prosp-usp-0626-en-taboola",
          "n": 25,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_east-prosp-affiliate_ebook-1125-en-google",
          "n": 1028,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_east-prosp-brand_keyword-0925-en-google",
          "n": 978,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_east-prosp-did_you_know-0226-en-fb",
          "n": 98,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 2752,
          "earners": 1,
          "earnRate": 0.0,
          "cpa50": 0.01,
          "ltvSignup": 0.02
        },
        {
          "source": "taboola",
          "n": 85,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 972,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 3,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.01,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.01,
        "ltvSignup": 0.01
      },
      "layerB": {
        "activeCpa50": 0.09,
        "clientsCpa50": 0.09,
        "fundedCpa50": 1.32,
        "earnerCpa50": 14.53,
        "activeN": 167,
        "clientsN": 167,
        "fundedN": 11,
        "earnerN": 1
      }
    },
    "Southern Africa": {
      "id": "Southern Africa",
      "kind": "region",
      "n": 5690,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 274.53,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 5690,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 168,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 168,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 3,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_port-prosp-usp-0925-pt-fb",
          "n": 1978,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-prosp-did_you_know-0426-pt-fb",
          "n": 29,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-prosp-affiliate_ebook-1125-pt-google",
          "n": 183,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-prosp-affiliate_ebook-1025-pt-fb",
          "n": 246,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-pt-prosp-brand_keyword-0925-pt-go...",
          "n": 590,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 3431,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 2200,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 34,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "chatgpt.com",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 168,
        "clientsN": 168,
        "fundedN": 3,
        "earnerN": 0
      }
    },
    "Other": {
      "id": "Other",
      "kind": "region",
      "n": 7219,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 7219,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 64,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 64,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_south-rtg-usp-1125-en-fb",
          "n": 27,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_south-prosp-brand_keyword-0925-en-google",
          "n": 135,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_south-prosp-affiliate_ebook-1125-en-go...",
          "n": 23,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 5106,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "taboola",
          "n": 13,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 2029,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google-play",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 64,
        "clientsN": 64,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Latin America": {
      "id": "Latin America",
      "kind": "region",
      "n": 3612,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 3612,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 26,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 26,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "latam_south-prosp-affiliate_ebook-1125-es-google",
          "n": 394,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_south-prosp-brand_keyword-0925-es-google",
          "n": 602,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "Unattributed",
          "n": 29,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_south-prosp-usp-0925-es-fb",
          "n": 692,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_south-rtg-usp-1125-es-fb",
          "n": 493,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 1088,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 2506,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 16,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 26,
        "clientsN": 26,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Caribbean": {
      "id": "Caribbean",
      "kind": "region",
      "n": 625,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 625,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 5,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 5,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "latam_caribbean-prosp-did_you_know-0226-en-fb",
          "n": 21,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_caribbean-prosp-brand_keyword-0925-en-g...",
          "n": 251,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_caribbean-prosp-brand_awareness-0925-en...",
          "n": 22,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_caribbean-prosp-affiliate_ebook-1125-en...",
          "n": 83,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_caribbean-prosp-affiliate_ebook-1025-en-fb",
          "n": 39,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 269,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 355,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 5,
        "clientsN": 5,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "North Africa & MENA": {
      "id": "North Africa & MENA",
      "kind": "region",
      "n": 4673,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 4673,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 23,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 23,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "mena_africa-prosp-did_you_know-0426-fr-fb",
          "n": 29,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "mena_africa-prosp-usp-0126-fr-fb",
          "n": 326,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "mena_africa-rtg-usp-1025-ar-fb",
          "n": 1332,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "mena_africa-prosp-brand_keyword-0925-ar-google",
          "n": 325,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "mena_africa-prosp-affiliate_ebook-1125-ar-fb",
          "n": 1167,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 4101,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 562,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 6,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "chatgpt.com",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 23,
        "clientsN": 23,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Vietnam": {
      "id": "Vietnam",
      "kind": "country",
      "n": 479,
      "earners": 83,
      "earnRate": 17.33,
      "commission": 58557.2,
      "clientDep": 423408.11,
      "derivGross": 130127.11,
      "derivNet": 71569.91,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 479,
          "commission": 58557.2,
          "ltv": 271.66,
          "net": 149.42,
          "cpa30": 44.82,
          "cpa50": 74.71,
          "cpa100": 149.42
        },
        {
          "stage": "Active",
          "n": 99,
          "commission": 58557.2,
          "ltv": 1314.42,
          "net": 722.93,
          "cpa30": 216.88,
          "cpa50": 361.46,
          "cpa100": 722.93
        },
        {
          "stage": "Clients>0",
          "n": 99,
          "commission": 58557.2,
          "ltv": 1314.42,
          "net": 722.93,
          "cpa30": 216.88,
          "cpa50": 361.46,
          "cpa100": 722.93
        },
        {
          "stage": "Funded",
          "n": 93,
          "commission": 58557.2,
          "ltv": 1399.22,
          "net": 769.57,
          "cpa30": 230.87,
          "cpa50": 384.78,
          "cpa100": 769.57
        },
        {
          "stage": "Earners",
          "n": 83,
          "commission": 58557.2,
          "ltv": 1567.8,
          "net": 862.29,
          "cpa30": 258.69,
          "cpa50": 431.14,
          "cpa100": 862.29
        }
      ],
      "campaigns": [
        {
          "campaign": "asia_sea-prosp-usp-1225-en-fb-Survey",
          "n": 44,
          "earners": 29,
          "earnRate": 65.9,
          "commission": 38489.38,
          "ltvSignup": 1943.91,
          "cpa50": 534.57
        },
        {
          "campaign": "asia_sea-vn-prosp-brand_keyword-0925-vi-google",
          "n": 154,
          "earners": 9,
          "earnRate": 5.8,
          "commission": 7334.25,
          "ltvSignup": 105.83,
          "cpa50": 29.1
        },
        {
          "campaign": "asia_sea-vn-prosp-usp-0725-vi-fb",
          "n": 191,
          "earners": 33,
          "earnRate": 17.3,
          "commission": 5561.53,
          "ltvSignup": 64.71,
          "cpa50": 17.79
        },
        {
          "campaign": "asia_sea-prosp-usp-0626-en-taboola",
          "n": 19,
          "earners": 9,
          "earnRate": 47.4,
          "commission": 4326.99,
          "ltvSignup": 506.08,
          "cpa50": 139.17
        },
        {
          "campaign": "asia_sea-prosp-brand_keyword-0925-en-google",
          "n": 9,
          "earners": 1,
          "earnRate": 11.1,
          "commission": 1550.44,
          "ltvSignup": 382.82,
          "cpa50": 105.28
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 278,
          "earners": 63,
          "earnRate": 22.7,
          "cpa50": 97.37,
          "ltvSignup": 354.07
        },
        {
          "source": "google",
          "n": 31,
          "earners": 7,
          "earnRate": 22.6,
          "cpa50": 115.51,
          "ltvSignup": 420.02
        },
        {
          "source": "taboola",
          "n": 19,
          "earners": 9,
          "earnRate": 47.4,
          "cpa50": 139.17,
          "ltvSignup": 506.08
        },
        {
          "source": "Unattributed",
          "n": 142,
          "earners": 3,
          "earnRate": 2.1,
          "cpa50": 13.02,
          "ltvSignup": 47.35
        }
      ],
      "layerA": {
        "netSignup": 149.42,
        "cpa30": 44.82,
        "cpa50": 74.71,
        "cpa100": 149.42,
        "ltvSignup": 271.66
      },
      "layerB": {
        "activeCpa50": 361.46,
        "clientsCpa50": 361.46,
        "fundedCpa50": 384.78,
        "earnerCpa50": 431.14,
        "activeN": 99,
        "clientsN": 99,
        "fundedN": 93,
        "earnerN": 83
      }
    },
    "Congo - Kinshasa": {
      "id": "Congo - Kinshasa",
      "kind": "country",
      "n": 2742,
      "earners": 1,
      "earnRate": 0.04,
      "commission": 196.13,
      "clientDep": 1218.51,
      "derivGross": 435.84,
      "derivNet": 239.71,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 2742,
          "commission": 196.13,
          "ltv": 0.16,
          "net": 0.09,
          "cpa30": 0.03,
          "cpa50": 0.04,
          "cpa100": 0.09
        },
        {
          "stage": "Active",
          "n": 69,
          "commission": 196.13,
          "ltv": 6.32,
          "net": 3.47,
          "cpa30": 1.04,
          "cpa50": 1.74,
          "cpa100": 3.47
        },
        {
          "stage": "Clients>0",
          "n": 69,
          "commission": 196.13,
          "ltv": 6.32,
          "net": 3.47,
          "cpa30": 1.04,
          "cpa50": 1.74,
          "cpa100": 3.47
        },
        {
          "stage": "Funded",
          "n": 2,
          "commission": 196.13,
          "ltv": 217.92,
          "net": 119.86,
          "cpa30": 35.96,
          "cpa50": 59.93,
          "cpa100": 119.86
        },
        {
          "stage": "Earners",
          "n": 1,
          "commission": 196.13,
          "ltv": 435.84,
          "net": 239.71,
          "cpa30": 71.91,
          "cpa50": 119.86,
          "cpa100": 239.71
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_french-rtg-usp-0725-fr-fb",
          "n": 989,
          "earners": 1,
          "earnRate": 0.1,
          "commission": 196.13,
          "ltvSignup": 0.44,
          "cpa50": 0.12
        },
        {
          "campaign": "africa_french-prosp-usp-0725-fr-fb",
          "n": 1035,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-did_you_know-0426-fr-fb",
          "n": 95,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-affiliate_ebook-1125-fr-g...",
          "n": 176,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-brand_keyword-0925-fr-google",
          "n": 204,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 2354,
          "earners": 1,
          "earnRate": 0.0,
          "cpa50": 0.05,
          "ltvSignup": 0.19
        },
        {
          "source": "google",
          "n": 385,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 2,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "taboola",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.09,
        "cpa30": 0.03,
        "cpa50": 0.04,
        "cpa100": 0.09,
        "ltvSignup": 0.16
      },
      "layerB": {
        "activeCpa50": 1.74,
        "clientsCpa50": 1.74,
        "fundedCpa50": 59.93,
        "earnerCpa50": 119.86,
        "activeN": 69,
        "clientsN": 69,
        "fundedN": 2,
        "earnerN": 1
      }
    },
    "Nigeria": {
      "id": "Nigeria",
      "kind": "country",
      "n": 9362,
      "earners": 9,
      "earnRate": 0.1,
      "commission": 69.35,
      "clientDep": 474.09,
      "derivGross": 154.11,
      "derivNet": 84.76,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 9362,
          "commission": 69.35,
          "ltv": 0.02,
          "net": 0.01,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.01
        },
        {
          "stage": "Active",
          "n": 378,
          "commission": 69.35,
          "ltv": 0.41,
          "net": 0.22,
          "cpa30": 0.07,
          "cpa50": 0.11,
          "cpa100": 0.22
        },
        {
          "stage": "Clients>0",
          "n": 378,
          "commission": 69.35,
          "ltv": 0.41,
          "net": 0.22,
          "cpa30": 0.07,
          "cpa50": 0.11,
          "cpa100": 0.22
        },
        {
          "stage": "Funded",
          "n": 9,
          "commission": 65.41,
          "ltv": 16.15,
          "net": 8.88,
          "cpa30": 2.66,
          "cpa50": 4.44,
          "cpa100": 8.88
        },
        {
          "stage": "Earners",
          "n": 9,
          "commission": 69.35,
          "ltv": 17.12,
          "net": 9.42,
          "cpa30": 2.83,
          "cpa50": 4.71,
          "cpa100": 9.42
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_west-prosp-brand_keyword-0925-en-google",
          "n": 3517,
          "earners": 6,
          "earnRate": 0.2,
          "commission": 64.08,
          "ltvSignup": 0.04,
          "cpa50": 0.01
        },
        {
          "campaign": "africa_west-rtg-usp-0925-en-fb",
          "n": 649,
          "earners": 1,
          "earnRate": 0.2,
          "commission": 3.61,
          "ltvSignup": 0.01,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_west-prosp-affiliate_ebook-1125-en-google",
          "n": 1769,
          "earners": 2,
          "earnRate": 0.1,
          "commission": 1.66,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_west-prosp-usp-0626-en-taboola",
          "n": 151,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_west-prosp-usp-0925-en-fb",
          "n": 1587,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 5748,
          "earners": 8,
          "earnRate": 0.1,
          "cpa50": 0.01,
          "ltvSignup": 0.03
        },
        {
          "source": "Meta",
          "n": 3444,
          "earners": 1,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "taboola",
          "n": 151,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "chatgpt.com",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.01,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.01,
        "ltvSignup": 0.02
      },
      "layerB": {
        "activeCpa50": 0.11,
        "clientsCpa50": 0.11,
        "fundedCpa50": 4.44,
        "earnerCpa50": 4.71,
        "activeN": 378,
        "clientsN": 378,
        "fundedN": 9,
        "earnerN": 9
      }
    },
    "Sri Lanka": {
      "id": "Sri Lanka",
      "kind": "country",
      "n": 991,
      "earners": 1,
      "earnRate": 0.1,
      "commission": 43.5,
      "clientDep": 396.89,
      "derivGross": 96.67,
      "derivNet": 53.17,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 991,
          "commission": 43.5,
          "ltv": 0.1,
          "net": 0.05,
          "cpa30": 0.02,
          "cpa50": 0.03,
          "cpa100": 0.05
        },
        {
          "stage": "Active",
          "n": 5,
          "commission": 43.5,
          "ltv": 19.33,
          "net": 10.63,
          "cpa30": 3.19,
          "cpa50": 5.32,
          "cpa100": 10.63
        },
        {
          "stage": "Clients>0",
          "n": 5,
          "commission": 43.5,
          "ltv": 19.33,
          "net": 10.63,
          "cpa30": 3.19,
          "cpa50": 5.32,
          "cpa100": 10.63
        },
        {
          "stage": "Funded",
          "n": 1,
          "commission": 43.5,
          "ltv": 96.67,
          "net": 53.17,
          "cpa30": 15.95,
          "cpa50": 26.58,
          "cpa100": 53.17
        },
        {
          "stage": "Earners",
          "n": 1,
          "commission": 43.5,
          "ltv": 96.67,
          "net": 53.17,
          "cpa30": 15.95,
          "cpa50": 26.58,
          "cpa100": 53.17
        }
      ],
      "campaigns": [
        {
          "campaign": "asia_isc-prosp-brand_keyword-0925-en-google",
          "n": 79,
          "earners": 1,
          "earnRate": 1.3,
          "commission": 43.5,
          "ltvSignup": 1.22,
          "cpa50": 0.34
        },
        {
          "campaign": "asia_isc-prosp-affiliate_ebook-1125-en-google",
          "n": 30,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-lk-prosp-usp-1125-si-fb",
          "n": 636,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 124,
          "earners": 1,
          "earnRate": 0.8,
          "cpa50": 0.21,
          "ltvSignup": 0.78
        },
        {
          "source": "Meta",
          "n": 863,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "taboola",
          "n": 3,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.05,
        "cpa30": 0.02,
        "cpa50": 0.03,
        "cpa100": 0.05,
        "ltvSignup": 0.1
      },
      "layerB": {
        "activeCpa50": 5.32,
        "clientsCpa50": 5.32,
        "fundedCpa50": 26.58,
        "earnerCpa50": 26.58,
        "activeN": 5,
        "clientsN": 5,
        "fundedN": 1,
        "earnerN": 1
      }
    },
    "Uganda": {
      "id": "Uganda",
      "kind": "country",
      "n": 2440,
      "earners": 1,
      "earnRate": 0.04,
      "commission": 23.77,
      "clientDep": 98.94,
      "derivGross": 52.82,
      "derivNet": 29.05,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 2440,
          "commission": 23.77,
          "ltv": 0.02,
          "net": 0.01,
          "cpa30": 0.0,
          "cpa50": 0.01,
          "cpa100": 0.01
        },
        {
          "stage": "Active",
          "n": 116,
          "commission": 23.77,
          "ltv": 0.46,
          "net": 0.25,
          "cpa30": 0.08,
          "cpa50": 0.13,
          "cpa100": 0.25
        },
        {
          "stage": "Clients>0",
          "n": 116,
          "commission": 23.77,
          "ltv": 0.46,
          "net": 0.25,
          "cpa30": 0.08,
          "cpa50": 0.13,
          "cpa100": 0.25
        },
        {
          "stage": "Funded",
          "n": 5,
          "commission": 23.77,
          "ltv": 10.56,
          "net": 5.81,
          "cpa30": 1.74,
          "cpa50": 2.91,
          "cpa100": 5.81
        },
        {
          "stage": "Earners",
          "n": 1,
          "commission": 23.77,
          "ltv": 52.82,
          "net": 29.05,
          "cpa30": 8.72,
          "cpa50": 14.53,
          "cpa100": 29.05
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_east-prosp-brand_keyword-1225-en-googl...",
          "n": 656,
          "earners": 1,
          "earnRate": 0.2,
          "commission": 23.77,
          "ltvSignup": 0.08,
          "cpa50": 0.02
        },
        {
          "campaign": "africa_east-prosp-affiliate_ebook-1125-en-google",
          "n": 764,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_east-prosp-brand_keyword-0925-en-google",
          "n": 578,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_south-prosp-usp-0626-en-taboola",
          "n": 40,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 2019,
          "earners": 1,
          "earnRate": 0.0,
          "cpa50": 0.01,
          "ltvSignup": 0.03
        },
        {
          "source": "taboola",
          "n": 57,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 359,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 3,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.01,
        "cpa30": 0.0,
        "cpa50": 0.01,
        "cpa100": 0.01,
        "ltvSignup": 0.02
      },
      "layerB": {
        "activeCpa50": 0.13,
        "clientsCpa50": 0.13,
        "fundedCpa50": 2.91,
        "earnerCpa50": 14.53,
        "activeN": 116,
        "clientsN": 116,
        "fundedN": 5,
        "earnerN": 1
      }
    },
    "Bangladesh": {
      "id": "Bangladesh",
      "kind": "country",
      "n": 5784,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 5784,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 48,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 48,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "asia_isc-prosp-affiliate_ebook-1125-en-google",
          "n": 785,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-prosp-brand_keyword-0925-en-google",
          "n": 849,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-prosp-usp-0626-en-taboola",
          "n": 33,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-prosp-affiliate_ebook-1025-en-fb",
          "n": 657,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-rtg-usp-1225-en-fb-Survey",
          "n": 325,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 2042,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "taboola",
          "n": 33,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 3701,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 8,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 48,
        "clientsN": 48,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Philippines": {
      "id": "Philippines",
      "kind": "country",
      "n": 2924,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 2924,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 4,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 4,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "asia_sea-prosp-brand_keyword-0925-en-google",
          "n": 673,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_sea-prosp-affiliate_ebook-1025-en-fb",
          "n": 198,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_sea-rtg-usp-0925-en-fb",
          "n": 427,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "dgen",
          "n": 13,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 1886,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 1011,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 5,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 4,
        "clientsN": 4,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Benin": {
      "id": "Benin",
      "kind": "country",
      "n": 1971,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1971,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 67,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 67,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_french-prosp-did_you_know-0426-fr-fb",
          "n": 97,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-usp-0725-fr-fb",
          "n": 1118,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-rtg-usp-0725-fr-fb",
          "n": 373,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-affiliate_ebook-1125-fr-g...",
          "n": 112,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-brand_keyword-0925-fr-google",
          "n": 146,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 1701,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 264,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 3,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "youtube",
          "n": 2,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 67,
        "clientsN": 67,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Nepal": {
      "id": "Nepal",
      "kind": "country",
      "n": 1827,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1827,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 21,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 21,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "asia_isc-prosp-brand_keyword-0925-en-google",
          "n": 682,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-prosp-affiliate_ebook-1125-en-google",
          "n": 344,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "asia_isc-prosp-usp-0725-en-fb",
          "n": 363,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "taboola",
          "n": 7,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 1133,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 686,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 21,
        "clientsN": 21,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Mozambique": {
      "id": "Mozambique",
      "kind": "country",
      "n": 1817,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1817,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 41,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 41,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_port-prosp-usp-0925-pt-fb",
          "n": 888,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-prosp-affiliate_ebook-1125-pt-google",
          "n": 140,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-prosp-affiliate_ebook-1025-pt-fb",
          "n": 164,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-pt-prosp-brand_keyword-0925-pt-go...",
          "n": 371,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-rtg-usp-1125-pt-fb",
          "n": 189,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 1281,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 513,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 23,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 41,
        "clientsN": 41,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Algeria": {
      "id": "Algeria",
      "kind": "country",
      "n": 1716,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1716,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 12,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 12,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "mena_africa-prosp-usp-0126-fr-fb",
          "n": 241,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "mena_africa-prosp-brand_keyword-0925-ar-google",
          "n": 106,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "mena_africa-rtg-usp-1025-ar-fb",
          "n": 328,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 1550,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 163,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 3,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 12,
        "clientsN": 12,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Venezuela": {
      "id": "Venezuela",
      "kind": "country",
      "n": 1653,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1653,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 20,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 20,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "latam_south-prosp-affiliate_ebook-1125-es-google",
          "n": 292,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_south-prosp-brand_keyword-0925-es-google",
          "n": 420,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "Unattributed",
          "n": 22,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_south-prosp-usp-0925-es-fb",
          "n": 517,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_south-rtg-usp-1125-es-fb",
          "n": 233,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 741,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 909,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 2,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 20,
        "clientsN": 20,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Burkina Faso": {
      "id": "Burkina Faso",
      "kind": "country",
      "n": 1633,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1633,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 29,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 29,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_french-prosp-usp-0725-fr-fb",
          "n": 718,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-rtg-usp-0725-fr-fb",
          "n": 575,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-affiliate_ebook-1125-fr-g...",
          "n": 68,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-did_you_know-0426-fr-fb",
          "n": 26,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-brand_keyword-0925-fr-google",
          "n": 55,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 1507,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 125,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 29,
        "clientsN": 29,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Egypt": {
      "id": "Egypt",
      "kind": "country",
      "n": 1594,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1594,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 8,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 8,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "mena_africa-prosp-brand_keyword-0925-ar-google",
          "n": 126,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "mena_africa-rtg-usp-1025-ar-fb",
          "n": 592,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "mena_africa-prosp-affiliate_ebook-1125-ar-fb",
          "n": 457,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "mena_africa-prosp-affiliate_ebook-1125-ar-google",
          "n": 61,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 224,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 1366,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 3,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 8,
        "clientsN": 8,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Togo": {
      "id": "Togo",
      "kind": "country",
      "n": 1469,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1469,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 42,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 42,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_french-rtg-usp-0725-fr-fb",
          "n": 354,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-did_you_know-0426-fr-fb",
          "n": 31,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-usp-0725-fr-fb",
          "n": 744,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-affiliate_ebook-1125-fr-g...",
          "n": 127,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-brand_keyword-0925-fr-google",
          "n": 97,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 1240,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 227,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Unattributed",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 42,
        "clientsN": 42,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Angola": {
      "id": "Angola",
      "kind": "country",
      "n": 1442,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1442,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 67,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 67,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_port-pt-prosp-brand_keyword-0925-pt-go...",
          "n": 216,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-prosp-usp-0925-pt-fb",
          "n": 1066,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-prosp-did_you_know-0426-pt-fb",
          "n": 28,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_port-prosp-affiliate_ebook-1125-pt-google",
          "n": 35,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Unattributed",
          "n": 11,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 1183,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "chatgpt.com",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 247,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 67,
        "clientsN": 67,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Ethiopia": {
      "id": "Ethiopia",
      "kind": "country",
      "n": 1351,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1351,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 50,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 50,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 6,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_east-prosp-did_you_know-0226-en-fb",
          "n": 77,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_east-prosp-brand_keyword-0925-en-google",
          "n": 396,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "taboola",
          "n": 27,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 607,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 715,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 2,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 50,
        "clientsN": 50,
        "fundedN": 6,
        "earnerN": 0
      }
    },
    "Zambia": {
      "id": "Zambia",
      "kind": "country",
      "n": 1182,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1182,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 31,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 31,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_south-prosp-brand_keyword-0925-en-google",
          "n": 459,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_south-prosp-usp-1225-en-fb-Survey",
          "n": 135,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_south-prosp-affiliate_ebook-1125-en-go...",
          "n": 94,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 443,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 727,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "taboola",
          "n": 8,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "bing",
          "n": 4,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 31,
        "clientsN": 31,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "C\u00f4te d'Ivoire / Ivory Coast": {
      "id": "C\u00f4te d'Ivoire / Ivory Coast",
      "kind": "country",
      "n": 1169,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 1169,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 13,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 13,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "africa_french-prosp-usp-0725-fr-fb",
          "n": 412,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-rtg-usp-0725-fr-fb",
          "n": 384,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-affiliate_ebook-1125-fr-g...",
          "n": 108,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-affiliate_ebook-1025-fr-fb",
          "n": 111,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "africa_french-prosp-brand_keyword-0925-fr-google",
          "n": 148,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "Meta",
          "n": 909,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "google",
          "n": 259,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "chatgpt.com",
          "n": 1,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 13,
        "clientsN": 13,
        "fundedN": 0,
        "earnerN": 0
      }
    },
    "Mexico": {
      "id": "Mexico",
      "kind": "country",
      "n": 986,
      "earners": 0,
      "earnRate": 0.0,
      "commission": 0.0,
      "clientDep": 0.0,
      "derivGross": 0.0,
      "derivNet": 0.0,
      "stageEcon": [
        {
          "stage": "All signups",
          "n": 986,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Active",
          "n": 2,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Clients>0",
          "n": 2,
          "commission": 0.0,
          "ltv": 0.0,
          "net": 0.0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0.0
        },
        {
          "stage": "Funded",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        },
        {
          "stage": "Earners",
          "n": 0,
          "commission": 0,
          "ltv": 0,
          "net": 0,
          "cpa30": 0.0,
          "cpa50": 0.0,
          "cpa100": 0
        }
      ],
      "campaigns": [
        {
          "campaign": "latam_north-mx-prosp-lead_gen-0725-es-fb",
          "n": 732,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_north-rtg-usp-1125-es-fb",
          "n": 95,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_north-prosp-affiliate_ebook-1125-es-fb",
          "n": 43,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        },
        {
          "campaign": "latam_north-prosp-usp-1125-es-fb",
          "n": 94,
          "earners": 0,
          "earnRate": 0.0,
          "commission": 0.0,
          "ltvSignup": 0.0,
          "cpa50": 0.0
        }
      ],
      "sources": [
        {
          "source": "google",
          "n": 5,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        },
        {
          "source": "Meta",
          "n": 981,
          "earners": 0,
          "earnRate": 0.0,
          "cpa50": 0.0,
          "ltvSignup": 0.0
        }
      ],
      "layerA": {
        "netSignup": 0.0,
        "cpa30": 0.0,
        "cpa50": 0.0,
        "cpa100": 0.0,
        "ltvSignup": 0.0
      },
      "layerB": {
        "activeCpa50": 0.0,
        "clientsCpa50": 0.0,
        "fundedCpa50": 0.0,
        "earnerCpa50": 0.0,
        "activeN": 2,
        "clientsN": 2,
        "fundedN": 0,
        "earnerN": 0
      }
    }
  }
} as const;

const fmtUSD = (v: number) => {
  if (v == null || Number.isNaN(v)) return "—";
  if (Math.abs(v) >= 1000) return `$${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}k`;
  return `$${v.toFixed(2)}`;
};
const fmtPct = (v: number, digits = 1) => `${v.toFixed(digits)}%`;
const fmtN = (v: number) => v.toLocaleString("en-US");

function countryRows(
  rows: readonly {
    country: string;
    affiliates: number;
    earners: number;
    earnRate: number;
    commission: number;
    clients: number;
    clientDep: number;
    score: number;
    action: string;
  }[]
) {
  return rows.map((r) => [
    r.country,
    fmtN(r.affiliates),
    String(r.earners),
    fmtPct(r.earnRate, r.earnRate >= 1 ? 1 : 2),
    fmtUSD(r.commission),
    fmtN(r.clients),
    fmtUSD(r.clientDep),
    r.score.toFixed(1),
    r.action,
  ]);
}

export default function CountryCommissionAffiliateAcquisition() {
  const [tab, setTab] = useCanvasState<Tab>("tab", "ltv");
  const { kpis } = DATA;

  return (
    <Stack gap={24} style={{ padding: 24, maxWidth: 1180 }}>
      <Stack gap={6}>
        <H1>Country vs Commission — Affiliate Acquisition</H1>
        <Text tone="secondary">
          Source: PPC partners export · onboarded {kpis.dateStart} → {kpis.dateEnd} · LTV from Deriv
          partner revenue share (deriv.com/partners)
        </Text>
      </Stack>

      <Callout tone="warning" title="Commission is extremely concentrated">
        {kpis.topCountry} alone is {fmtPct(kpis.topCountryShare)} of all commission (
        {fmtUSD(kpis.topCountryComm)} of {fmtUSD(kpis.commission)}). Only {fmtN(kpis.earners)} of{" "}
        {fmtN(kpis.affiliates)} affiliates ({fmtPct(kpis.earnerPct, 2)}) ever earned.
      </Callout>

      <Grid columns={3} gap={12}>
        <Stat value={fmtN(kpis.affiliates)} label="Affiliates" />
        <Stat value={String(kpis.countries)} label="Countries" />
        <Stat value={fmtUSD(kpis.commission)} label="Total commission" tone="success" />
        <Stat
          value={`${fmtN(kpis.earners)} (${fmtPct(kpis.earnerPct, 2)})`}
          label="Earners"
          tone="warning"
        />
        <Stat value={fmtPct(kpis.activePct)} label="Active rate" />
        <Stat
          value={fmtPct(kpis.topCountryShare)}
          label={`${kpis.topCountry} commission share`}
          tone="danger"
        />
      </Grid>

      <Row gap={8} wrap>
        <Pill active={tab === "vietnam"} onClick={() => setTab("vietnam")}>
          Vietnam deep dive
        </Pill>
        <Pill active={tab === "ltv"} onClick={() => setTab("ltv")}>
          LTV & CPA (all countries)
        </Pill>
        <Pill active={tab === "priorities"} onClick={() => setTab("priorities")}>
          Scale & Test
        </Pill>
        <Pill active={tab === "league"} onClick={() => setTab("league")}>
          Country league
        </Pill>
        <Pill active={tab === "patterns"} onClick={() => setTab("patterns")}>
          Patterns & correlations
        </Pill>
      </Row>

      {tab === "vietnam" && <VietnamTab />}
      {tab === "ltv" && <LtvTab />}
      {tab === "priorities" && <PrioritiesTab />}
      {tab === "league" && <LeagueTab />}
      {tab === "patterns" && <PatternsTab />}
    </Stack>
  );
}

function VietnamTab() {
  const v = DATA.vietnam;
  const k = v.kpis;
  const e = v.earnerDist;
  const cpa = v.cpaPolicy;

  return (
    <Stack gap={24}>
      <Stack gap={6}>
        <H2>Vietnam — LTV & CPA deep dive</H2>
        <Text tone="secondary">
          Every column in the export, applied to Vietnam only ({fmtN(k.affiliates)} affiliates). This is
          the only country that currently supports a meaningful affiliate CPA.
        </Text>
      </Stack>

      <Callout tone="info" title="LTV definition (Deriv’s side)">
        On deriv.com/partners, Options revenue share pays the affiliate up to 45% of Deriv revenue from
        referred clients’ trading. Therefore Deriv gross revenue ≈ Commission ÷ 0.45, and Deriv net keep
        ≈ gross × 55% (= Commission × 1.222). Using α = 45% (published max) is a conservative lower bound
        on Deriv LTV — if actual share is lower, or CFD turnover pricing applies, true Deriv LTV is higher
        for the same commission. Lifetime client value on the partner page means commissions continue with
        no time cap; figures here are observed-to-date in the export, not fully aged.
      </Callout>

      <H3>1. What the raw columns say</H3>
      <Grid columns={4} gap={10}>
        <Stat value={fmtN(k.affiliates)} label="Affiliates onboarded" />
        <Stat value={fmtPct(k.activeRate)} label="Active (= clients>0 here)" />
        <Stat value={fmtN(k.ownDeposit)} label="Affiliate own first deposit" />
        <Stat value={fmtN(k.withClients)} label="With clients acquired" tone="info" />
        <Stat value={fmtN(k.funded)} label="Funded (client first deposit)" />
        <Stat value={`${fmtN(k.earners)} (${fmtPct(k.earnRate)})`} label="Commission > 0" tone="success" />
        <Stat value={fmtN(k.clientsTotal)} label="Clients acquired (sum)" />
        <Stat value={String(k.subAffiliates)} label="Direct sub-affiliates" tone="warning" />
        <Stat value={fmtUSD(k.commission)} label="Commissions USD" tone="success" />
        <Stat value={fmtUSD(k.clientDep)} label="Client deposits USD" />
        <Stat value={fmtUSD(k.clientPnl)} label="Client PnL USD" />
        <Stat value={fmtUSD(k.affDep)} label="Affiliate deposits USD" />
      </Grid>
      <Text tone="secondary" size="small">
        Ad Group is Unspecified for 100% of rows — no creative/ad-set split. User Joined → Onboarded is
        same-day for {fmtPct(k.sameDayOnboardPct)} — pre-affiliate lag is not a lever. Affiliate PnL
        total is {fmtUSD(k.affPnl)} (essentially one self-trader). Sub-affiliates = 0, so Master Partner
        (20% of sub-partner commission) contributes nothing in this Vietnam sample — LTV is 100% from
        client referrals.
      </Text>

      <H3>2. Funnel (column-driven)</H3>
      <Text tone="secondary" size="small">
        Counts from Active, Affiliate Own First Deposit, Clients Acquired, Funded (Client First Deposit),
        Commissions USD. Once an affiliate gets a client, conversion to funded (93.9%) and to commission
        (83.8%) is high — the hard step is getting the first client.
      </Text>
      <BarChart
        categories={v.funnel.map((f) => f.step)}
        series={[{ name: "Affiliates", data: v.funnel.map((f) => f.n), tone: "info" }]}
        height={220}
      />
      <Table
        headers={["Step", "Count", "% of onboarded", "Conditional note"]}
        rows={[
          ["Onboarded", fmtN(k.affiliates), "100%", "Onboarded (Affiliate Joined)"],
          ["Active", fmtN(k.active), fmtPct(k.activeRate), "Matches clients>0 in this extract"],
          ["Own deposit", fmtN(k.ownDeposit), fmtPct(100 * k.ownDeposit / k.affiliates), "Affiliate Own First Deposit — rare"],
          ["Clients > 0", fmtN(k.withClients), fmtPct(k.clientRate), "Clients Acquired"],
          [
            "Funded client",
            fmtN(k.funded),
            fmtPct(k.fundedRate),
            `P(funded|clients)=${fmtPct(k.pFundedGivenClients)}`,
          ],
          [
            "Commission > 0",
            fmtN(k.earners),
            fmtPct(k.earnRate),
            `P(earn|funded)=${fmtPct(k.pEarnGivenFunded)} · P(earn|clients)=${fmtPct(k.pEarnGivenClients)}`,
          ],
        ]}
        columnAlign={["left", "right", "right", "left"]}
      />

      <H3>3. Backing out Deriv LTV from commission</H3>
      <Grid columns={3} gap={12}>
        <Stat value={fmtUSD(k.derivGross)} label="Deriv gross LTV (Comm ÷ 0.45)" tone="success" />
        <Stat value={fmtUSD(k.derivNet)} label="Deriv net keep (55% of gross)" />
        <Stat value={fmtPct(k.commToCdep)} label="Commission / client deposits" />
        <Stat value={fmtUSD(k.ltvSignup)} label="LTV / blended signup" tone="info" />
        <Stat value={fmtUSD(k.netSignup)} label="Net keep / blended signup" />
        <Stat value={fmtUSD(k.ltvEarner)} label="LTV / earning affiliate" tone="success" />
      </Grid>
      <Text tone="secondary" size="small">
        Among earners, commission is {fmtPct(k.commToCdep)} of client deposits overall (median earner
        ~9% of their clients’ deposits). That ratio is not the revenue-share rate — deposits are capital,
        not Deriv revenue. Revenue share applies to Deriv’s trading revenue; we invert from paid
        commission because that is the observable in this file.
      </Text>

      <Card>
        <CardHeader>CPA math — three layers</CardHeader>
        <CardBody>
          <Stack gap={12}>
            <Text>
              Layer A — Blended signup CPA: pay for any Vietnam onboard. Expected Deriv net keep =
              {fmtUSD(k.netSignup)}. Base CPA (50% payback) = {fmtUSD(cpa.blended50)}; conservative
              (30%) = {fmtUSD(cpa.blended30)}; ceiling (100%) = {fmtUSD(cpa.blended100)}.
            </Text>
            <Text>
              Layer B — Stage-gated CPA: if you only pay when a quality event fires, value jumps because
              almost all commission sits in the Active/Clients/Funded set. Net keep / Active affiliate ≈
              {fmtUSD(v.stageEcon[1].net)} → CPA50 ≈ {fmtUSD(cpa.active50)}. Same for Clients&gt;0. Funded
              CPA50 ≈ {fmtUSD(cpa.funded50)}. Earner CPA50 ≈ {fmtUSD(cpa.earner50)}.
            </Text>
            <Text>
              Layer C — Channel/campaign CPA: buy the mix that historically produces earners. FB Survey
              blended CPA50 ≈ {fmtUSD(cpa.surveyCpa50 ?? 0)}; Taboola ≈ {fmtUSD(cpa.taboolaCpa50 ?? 0)};
              VN Google brand ≈ {fmtUSD(cpa.googleBrandCpa50 ?? 0)}; VI FB USP ≈{" "}
              {fmtUSD(cpa.viFbCpa50 ?? 0)}. High Survey/Taboola caps reflect high earn rates, not a blank
              check — validate live CAC against these caps.
            </Text>
            <Table
              headers={["If you acquire…", "n", "Deriv LTV", "Net keep", "CPA 30%", "CPA 50%", "CPA 100%"]}
              rows={v.stageEcon.map((s) => [
                s.stage,
                fmtN(s.n),
                fmtUSD(s.ltv),
                fmtUSD(s.net),
                fmtUSD(s.cpa30),
                fmtUSD(s.cpa50),
                fmtUSD(s.cpa100),
              ])}
              columnAlign={["left", "right", "right", "right", "right", "right", "right"]}
            />
          </Stack>
        </CardBody>
      </Card>

      <H3>4. Earner value distribution (heavy tail)</H3>
      <Grid columns={4} gap={10}>
        <Stat value={fmtUSD(e.ltvP25)} label="Deriv LTV p25 earner" />
        <Stat value={fmtUSD(e.ltvP50)} label="Deriv LTV median earner" tone="info" />
        <Stat value={fmtUSD(e.ltvP75)} label="Deriv LTV p75 earner" />
        <Stat value={fmtUSD(e.ltvP90)} label="Deriv LTV p90 earner" tone="success" />
      </Grid>
      <BarChart
        categories={["p25", "p50", "p75", "p90", "Max"]}
        series={[
          {
            name: "Deriv gross LTV per earner (USD)",
            data: [e.ltvP25, e.ltvP50, e.ltvP75, e.ltvP90, e.ltvMax],
            tone: "success",
          },
        ]}
        height={200}
        valuePrefix="$"
      />
      <Text tone="secondary" size="small">
        Median earner: {fmtUSD(e.commP50)} commission → {fmtUSD(e.ltvP50)} Deriv LTV; median{" "}
        {fmtUSD(e.cdepP50)} client deposits; ~{k.clientsPerEarner} clients; first client in{" "}
        {e.daysClientP50}d (p75 {e.daysClientP75}d). Top 10 earners ={" "}
        {fmtPct(v.concentration.find((c) => c.topN === 10)?.share ?? 0)} of Vietnam commission — CPA
        models that assume average earner understate upside from whales and overstate if you miss them.
      </Text>
      <Table
        headers={["Top N earners", "% of VN commission"]}
        rows={v.concentration.map((c) => [String(c.topN), fmtPct(c.share)])}
        columnAlign={["left", "right"]}
      />

      <H3>5. Timing columns</H3>
      <Grid columns={2} gap={12}>
        <Stat
          value={e.daysClientP50 != null ? `${e.daysClientP50}d` : "—"}
          label={`Median days to first client (earners, n=${e.nDaysClient})`}
          tone="success"
        />
        <Stat
          value={e.daysAffP50 != null ? `${e.daysAffP50}d` : "—"}
          label={`Median days to affiliate own deposit (n=${e.nDaysAff})`}
        />
      </Grid>
      <Text tone="secondary" size="small">
        Days To Recorded First Client is the useful speed metric (83 earners). Days To Affiliate Deposit
        is sparse (14 affiliates) and earners mostly never self-deposit — do not gate CPA on affiliate
        own-deposit. Funded (Client First Deposit) dates cluster weeks after onboard for top earners.
      </Text>

      <H3>6. Correlations (Vietnam rows)</H3>
      <Table
        headers={["Columns", "r", "Meaning for CPA"]}
        rows={v.correlations.map((c) => [
          c.pair,
          c.r == null ? "n/a" : c.r.toFixed(3),
          c.note,
        ])}
        columnAlign={["left", "right", "left"]}
      />

      <H3>7. Source & medium (quality ≠ volume)</H3>
      <Table
        headers={[
          "Source",
          "Affiliates",
          "Earn %",
          "Commission",
          "Client dep.",
          "LTV / signup",
          "Net / signup",
          "CPA 50%",
        ]}
        rows={v.sources.map((s) => [
          s.source,
          fmtN(s.n),
          fmtPct(s.earnRate),
          fmtUSD(s.commission),
          fmtUSD(s.clientDep),
          fmtUSD(s.ltvSignup),
          fmtUSD(s.netSignup),
          fmtUSD(s.cpa50),
        ])}
        columnAlign={["left", "right", "right", "right", "right", "right", "right", "right"]}
      />
      <Table
        headers={["Medium", "Affiliates", "Earn %", "Commission", "LTV / signup", "CPA 50%"]}
        rows={v.mediums.map((m) => [
          m.medium,
          fmtN(m.n),
          fmtPct(m.earnRate),
          fmtUSD(m.commission),
          fmtUSD(m.ltvSignup),
          fmtUSD(m.cpa50),
        ])}
        columnAlign={["left", "right", "right", "right", "right", "right"]}
      />
      <Text tone="secondary" size="small">
        Meta/social carries most commission dollars (volume × decent earn rate). Taboola/native has the
        highest earn rate and LTV/signup but small n. Search looks weaker on blended earn % because
        Unattributed+brand keyword inflate volume — Google-attributed rows alone are much stronger
        (~23% earn rate).
      </Text>

      <H3>8. Campaign — where CPA should differ</H3>
      <Table
        headers={[
          "Campaign",
          "n",
          "Earn %",
          "Clients",
          "Funded",
          "Commission",
          "Client dep.",
          "LTV / sig",
          "CPA 50%",
        ]}
        rows={v.campaigns
          .filter((c) => c.n >= 1 && (c.commission > 0 || c.n >= 7))
          .map((c) => [
            c.campaign,
            fmtN(c.n),
            fmtPct(c.earnRate),
            fmtN(c.clients),
            String(c.funded),
            fmtUSD(c.commission),
            fmtUSD(c.clientDep),
            fmtUSD(c.ltvSignup),
            fmtUSD(c.cpa50),
          ])}
        columnAlign={["left", "right", "right", "right", "right", "right", "right", "right", "right"]}
      />
      <Callout tone="success" title="Campaign CPA implication">
        Scale FB Survey and Taboola-like USP creatives (high earn %). Treat ebook / brand-awareness /
        retargeting lines with $0 commission as learning budget only. VN Google brand keyword needs a
        quality filter (or lower CPA ~{fmtUSD(cpa.googleBrandCpa50 ?? 0)}) — volume without earn rate
        destroys blended LTV.
      </Callout>

      <H3>9. Cohorts & maturity (Onboarded date)</H3>
      <BarChart
        categories={v.monthly.map((m) => m.month.slice(2))}
        series={[
          { name: "Signups", data: v.monthly.map((m) => m.n) },
          { name: "Earners", data: v.monthly.map((m) => m.earners), tone: "success" },
        ]}
        height={220}
      />
      <Table
        headers={["Month", "Signups", "Earners", "Earn %", "Commission", "Client dep.", "LTV / signup"]}
        rows={v.monthly.map((m) => [
          m.month,
          fmtN(m.n),
          String(m.earners),
          fmtPct(m.earnRate),
          fmtUSD(m.commission),
          fmtUSD(m.clientDep),
          fmtUSD(m.ltvSignup),
        ])}
        columnAlign={["left", "right", "right", "right", "right", "right", "right"]}
      />
      <Table
        headers={["Age since onboard", "n", "Earn %", "Commission", "LTV / signup"]}
        rows={v.ageBuckets.map((a) => [
          a.bucket,
          fmtN(a.n),
          fmtPct(a.earnRate),
          fmtUSD(a.commission),
          fmtUSD(a.ltvSignup),
        ])}
        columnAlign={["left", "right", "right", "right", "right"]}
      />
      <Text tone="secondary" size="small">
        Oct 2025–Jan 2026 cohorts show $0 commission despite signups — either creative mix (ebook era)
        or incomplete maturity. Do not cut Vietnam CPA solely on recent flat months without checking
        campaign composition. Feb 2026 Survey wave dominates observed LTV.
      </Text>

      <H3>10. Top earners (profile of who creates LTV)</H3>
      <Table
        headers={[
          "ID",
          "Campaign",
          "Source",
          "Clients",
          "Client dep.",
          "Client PnL",
          "Commission",
          "Deriv LTV",
          "Days→client",
        ]}
        rows={v.topEarners.map((t) => [
          t.id,
          t.campaign,
          t.source,
          String(t.clients),
          fmtUSD(t.clientDep),
          fmtUSD(t.clientPnl),
          fmtUSD(t.commission),
          fmtUSD(t.derivLtv),
          t.daysToClient == null ? "—" : String(t.daysToClient),
        ])}
        columnAlign={["left", "left", "left", "right", "right", "right", "right", "right", "right"]}
      />
      <Text tone="secondary" size="small">
        Pattern: Active, 2–4 clients, thousands in client deposits, first client in ~9–22 days, Meta or
        Google, Survey/brand/USP campaigns, zero affiliate self-deposit, zero sub-affiliates. Client PnL
        is often positive (clients winning) while commission still accrues — consistent with spread /
        turnover-based Deriv revenue, not “client must lose.”
      </Text>

      <Divider />

      <Callout tone="info" title="Vietnam CPA policy (actionable)">
        1) Default blended Vietnam CPA cap: {fmtUSD(cpa.blended30)}–{fmtUSD(cpa.blended50)} (30–50% of
        net keep / signup). 2) If bidding only on Active/clients-acquired events, caps can rise toward{" "}
        {fmtUSD(cpa.active50)} at 50% payback — only with reliable postback. 3) Weight budget to Survey /
        Taboola-like USP; constrain ebook & zero-earn campaigns. 4) Do not use affiliate own-deposit or
        sub-affiliate columns as optimization targets here. 5) Recompute LTV as cohorts age; treat
        observed LTV as a floor for mature Survey cohorts and incomplete for brand-new months.
      </Callout>

      <Stack gap={4}>
        <H3>Key insights</H3>
        <Stack gap={4}>
          <Text tone="secondary" size="small">1. {v.insights[0]}</Text>
          <Text tone="secondary" size="small">2. {v.insights[1]}</Text>
          <Text tone="secondary" size="small">3. {v.insights[2]}</Text>
          <Text tone="secondary" size="small">4. {v.insights[3]}</Text>
          <Text tone="secondary" size="small">5. {v.insights[4]}</Text>
          <Text tone="secondary" size="small">6. {v.insights[5]}</Text>
          <Text tone="secondary" size="small">7. {v.insights[6]}</Text>
          <Text tone="secondary" size="small">8. {v.insights[7]}</Text>
          <Text tone="secondary" size="small">9. {v.insights[8]}</Text>
          <Text tone="secondary" size="small">10. {v.insights[9]}</Text>
          <Text tone="secondary" size="small">11. {v.insights[10]}</Text>
          <Text tone="secondary" size="small">12. {v.insights[11]}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

function LtvTab() {
  const s = DATA.ltv.summary;
  const [scopeKind, setScopeKind] = useCanvasState<"country" | "region" | "program">(
    "ltvScopeKind",
    "country"
  );
  const [geoId, setGeoId] = useCanvasState<string>("ltvGeoId", LTV_GEO.defaultId);

  const optionsForKind = LTV_GEO.options.filter((o) => o.kind === scopeKind);
  const selectedId =
    optionsForKind.some((o) => o.id === geoId) ? geoId : optionsForKind[0]?.id ?? LTV_GEO.defaultId;
  const ent = LTV_GEO.entities[selectedId as keyof typeof LTV_GEO.entities];
  const a = ent.layerA;
  const b = ent.layerB;
  const earnCamps = ent.campaigns.filter((c) => c.commission > 0);
  const zeroComm = ent.commission <= 0;

  const selectOptions = optionsForKind.map((o) => ({
    value: o.id,
    label:
      o.kind === "program"
        ? `${o.id} (${o.n.toLocaleString("en-US")} aff)`
        : `${o.id} · ${o.n.toLocaleString("en-US")} aff · $${o.commission >= 1000 ? `${(o.commission / 1000).toFixed(1)}k` : o.commission.toFixed(0)} comm`,
  }));

  const kindLabel =
    ent.kind === "program" ? "program-wide" : ent.kind === "region" ? "this region" : "this country";

  return (
    <Stack gap={24}>
      <Callout tone="info" title="How LTV is defined here">
        Options revenue share pays affiliates up to 45% of Deriv’s revenue. Deriv gross ≈ Commission ÷ α
        (α = 45%). Deriv net keep = gross × (1 − α). CPA caps below = net keep × payback share. Switch
        Switch country or region to recompute all three layers.
      </Callout>

      <Grid columns={3} gap={12}>
        <Stat value={fmtUSD(s.totalDerivGross45)} label="Program Deriv gross LTV (α=45%)" tone="success" />
        <Stat value={fmtUSD(s.totalDerivNet45)} label="Program Deriv net keep" />
        <Stat value={fmtUSD(s.blendedLtvSignup)} label="Blended LTV / affiliate signup" tone="warning" />
      </Grid>

      <Card>
        <CardHeader>CPA math — three layers</CardHeader>
        <CardBody>
          <Stack gap={16}>
            <Stack gap={8}>
              <Text weight="medium">Scope</Text>
              <Row gap={8} wrap align="center">
                <Pill
                  active={scopeKind === "country"}
                  onClick={() => {
                    setScopeKind("country");
                    setGeoId("Vietnam");
                  }}
                >
                  Countries
                </Pill>
                <Pill
                  active={scopeKind === "region"}
                  onClick={() => {
                    setScopeKind("region");
                    setGeoId("Southeast Asia");
                  }}
                >
                  Regions
                </Pill>
                <Pill
                  active={scopeKind === "program"}
                  onClick={() => {
                    setScopeKind("program");
                    setGeoId("All countries");
                  }}
                >
                  All countries
                </Pill>
              </Row>
              {scopeKind !== "program" && (
                <Select
                  value={selectedId}
                  onChange={setGeoId}
                  options={selectOptions}
                  placeholder="Choose…"
                />
              )}
              <Text tone="secondary" size="small">
                Selected: {ent.id} · {fmtN(ent.n)} affiliates · {fmtN(ent.earners)} earners (
                {fmtPct(ent.earnRate)}) · commission {fmtUSD(ent.commission)} · Deriv gross{" "}
                {fmtUSD(ent.derivGross)} · net keep {fmtUSD(ent.derivNet)}
              </Text>
            </Stack>

            {zeroComm ? (
              <Callout tone="warning" title="Observed commission is $0">
                Blended LTV and CPA caps are $0 for {ent.id}. Stage-gated rows stay $0 unless someone in
                that stage earned (rare outside Vietnam). Use exploratory test CPA only, or open Vietnam
                for a working benchmark.
              </Callout>
            ) : null}

            <Text>
              Layer A — Blended signup CPA: cost to acquire any onboard in {ent.id}. Expected Deriv net
              keep = {fmtUSD(a.netSignup)}. CPA tiers: {fmtUSD(a.cpa50)} (50% payback),{" "}
              {fmtUSD(a.cpa30)} (conservative 30%), {fmtUSD(a.cpa100)} (ceiling 100%). Gross LTV / signup
              = {fmtUSD(a.ltvSignup)}.
            </Text>
            <Text>
              Layer B — Stage-gated CPA: value jumps if you only pay on quality events. CPA50 for{" "}
              {kindLabel}: Active (n={fmtN(b.activeN)}) ≈ {fmtUSD(b.activeCpa50)}; Clients&gt;0 (n=
              {fmtN(b.clientsN)}) ≈ {fmtUSD(b.clientsCpa50)}; Funded (n={fmtN(b.fundedN)}) ≈{" "}
              {fmtUSD(b.fundedCpa50)}; Earner (n={fmtN(b.earnerN)}) ≈ {fmtUSD(b.earnerCpa50)}. Requires
              reliable postbacks — do not use these caps on raw signup bidding.
            </Text>
            <Text>
              Layer C — Channel/campaign CPA: weight budget to mixes that historically produce earners
              in {ent.id}.
              {earnCamps.length === 0
                ? " No campaign in this scope has paid commission yet — no campaign-level CPA headroom."
                : " Top earning lines (CPA50 = 50% of net keep / signup on that campaign): " +
                  earnCamps
                    .slice(0, 4)
                    .map(
                      (c) =>
                        `${c.campaign} ~${fmtUSD(c.cpa50)} (${fmtPct(c.earnRate)} earn, n=${c.n})`
                    )
                    .join("; ") +
                  "."}
            </Text>

            <Table
              headers={[
                "If you acquire…",
                "n",
                "Deriv LTV",
                "Net keep",
                "CPA 30%",
                "CPA 50%",
                "CPA 100%",
              ]}
              rows={ent.stageEcon.map((row) => [
                row.stage,
                fmtN(row.n),
                fmtUSD(row.ltv),
                fmtUSD(row.net),
                fmtUSD(row.cpa30),
                fmtUSD(row.cpa50),
                fmtUSD(row.cpa100),
              ])}
              columnAlign={["left", "right", "right", "right", "right", "right", "right"]}
            />

            {ent.campaigns.length > 0 ? (
              <Stack gap={8}>
                <H3>Campaign CPA detail — {ent.id}</H3>
                <Table
                  headers={["Campaign", "n", "Earn %", "Commission", "LTV / signup", "CPA 50%"]}
                  rows={ent.campaigns.map((c) => [
                    c.campaign,
                    fmtN(c.n),
                    fmtPct(c.earnRate),
                    fmtUSD(c.commission),
                    fmtUSD(c.ltvSignup),
                    fmtUSD(c.cpa50),
                  ])}
                  columnAlign={["left", "right", "right", "right", "right", "right"]}
                />
              </Stack>
            ) : null}

            {ent.sources.length > 0 ? (
              <Stack gap={8}>
                <H3>Source CPA detail — {ent.id}</H3>
                <Table
                  headers={["Source", "n", "Earn %", "LTV / signup", "CPA 50%"]}
                  rows={ent.sources.map((src) => [
                    src.source,
                    fmtN(src.n),
                    fmtPct(src.earnRate),
                    fmtUSD(src.ltvSignup),
                    fmtUSD(src.cpa50),
                  ])}
                  columnAlign={["left", "right", "right", "right", "right"]}
                />
              </Stack>
            ) : null}
          </Stack>
        </CardBody>
      </Card>

      <Stack gap={8}>
        <H2>CPA caps — Scale countries (observed)</H2>
        <Table
          headers={[
            "Country",
            "LTV / signup",
            "Net keep / signup",
            "CPA 100%",
            "CPA 50%",
            "CPA 30%",
            "Guidance",
          ]}
          rows={DATA.ltv.recommendations.map((r) => [
            r.country,
            fmtUSD(r.ltvGross),
            fmtUSD(r.ltvNet),
            fmtUSD(r.cpaAggressive),
            fmtUSD(r.cpaBase),
            fmtUSD(r.cpaConservative),
            r.note,
          ])}
          columnAlign={["left", "right", "right", "right", "right", "right", "left"]}
          rowTone={DATA.ltv.recommendations.map((r) =>
            r.country === "Vietnam" ? ("success" as const) : undefined
          )}
        />
      </Stack>

      <Stack gap={8}>
        <H2>Test countries — observed LTV is $0</H2>
        <Table
          headers={[
            "Country",
            "Affiliates",
            "Client rate",
            "Observed LTV",
            "Prior LTV",
            "Suggested test CPA",
          ]}
          rows={DATA.ltv.testPriors.map((r) => [
            r.country,
            fmtN(r.affiliates),
            fmtPct(r.clientRate),
            fmtUSD(r.observedLtv),
            fmtUSD(r.priorLtvGross),
            fmtUSD(r.cpaTestSuggest),
          ])}
          columnAlign={["left", "right", "right", "right", "right", "right"]}
        />
      </Stack>
    </Stack>
  );
}

function PrioritiesTab() {
  const avoidNames = DATA.avoid.map((a) => `${a.country} (${fmtN(a.affiliates)})`).join(", ");

  return (
    <Stack gap={20}>
      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader trailing={<Pill tone="success" size="sm">Scale</Pill>}>
            Scale these
          </CardHeader>
          <CardBody>
            <Table
              headers={[
                "Country",
                "Affiliates",
                "Earners",
                "Earn %",
                "Commission",
                "Clients",
                "Client dep.",
                "Score",
                "Action",
              ]}
              rows={countryRows(DATA.scale)}
              columnAlign={[
                "left",
                "right",
                "right",
                "right",
                "right",
                "right",
                "right",
                "right",
                "left",
              ]}
              rowTone={DATA.scale.map((r) =>
                r.country === "Vietnam" ? ("success" as const) : undefined
              )}
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader trailing={<Pill tone="info" size="sm">Test</Pill>}>
            Test these
          </CardHeader>
          <CardBody>
            <Table
              headers={[
                "Country",
                "Affiliates",
                "Earners",
                "Earn %",
                "Commission",
                "Clients",
                "Client dep.",
                "Score",
                "Action",
              ]}
              rows={countryRows(DATA.test)}
              columnAlign={[
                "left",
                "right",
                "right",
                "right",
                "right",
                "right",
                "right",
                "right",
                "left",
              ]}
            />
          </CardBody>
        </Card>
      </Grid>

      <Callout tone="neutral" title="Deprioritize (high volume, weak funnel)">
        {avoidNames}
      </Callout>

      <H2>Funnel conversion — Scale & Test countries</H2>
      <BarChart
        categories={DATA.funnel.map((f) => f.country)}
        series={[
          { name: "Active %", data: DATA.funnel.map((f) => f.activeRate) },
          { name: "Client %", data: DATA.funnel.map((f) => f.clientRate) },
          { name: "Funded %", data: DATA.funnel.map((f) => f.fundedRate), tone: "warning" },
          { name: "Commission %", data: DATA.funnel.map((f) => f.commRate), tone: "success" },
        ]}
        height={280}
        valueSuffix="%"
      />
    </Stack>
  );
}

function LeagueTab() {
  return (
    <Stack gap={12}>
      <H2>Top 25 countries by composite score</H2>
      <Table
        headers={[
          "Country",
          "Score",
          "Affiliates",
          "Earners",
          "Earn %",
          "Commission",
          "Share",
          "Clients",
          "Funded",
          "Action",
        ]}
        rows={DATA.league.map((r) => [
          r.country,
          r.score.toFixed(1),
          fmtN(r.affiliates),
          String(r.earners),
          fmtPct(r.earnRate, r.earnRate >= 1 ? 1 : 2),
          fmtUSD(r.commission),
          fmtPct(r.commShare, r.commShare >= 1 ? 1 : 2),
          fmtN(r.clients),
          String(r.funded),
          r.action || "—",
        ])}
        columnAlign={[
          "left",
          "right",
          "right",
          "right",
          "right",
          "right",
          "right",
          "right",
          "right",
          "left",
        ]}
        rowTone={DATA.league.map((r) =>
          r.action === "Scale"
            ? ("success" as const)
            : r.action === "Test"
              ? ("info" as const)
              : undefined
        )}
      />
    </Stack>
  );
}

function PatternsTab() {
  const s = DATA.speedSignals;
  const earnSrc = DATA.channelMix.earningCountrySources;
  const nonSrc = DATA.channelMix.nonEarningCountrySources;

  return (
    <Stack gap={24}>
      <H2>Channel mix — earning vs non-earning countries</H2>
      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader>Earning countries — source mix</CardHeader>
          <CardBody>
            <BarChart
              horizontal
              categories={earnSrc.map((x) => x.label)}
              series={[{ name: "Share of signups", data: earnSrc.map((x) => x.pct), tone: "success" }]}
              height={200}
              valueSuffix="%"
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Non-earning countries — source mix</CardHeader>
          <CardBody>
            <BarChart
              horizontal
              categories={nonSrc.map((x) => x.label)}
              series={[{ name: "Share of signups", data: nonSrc.map((x) => x.pct), tone: "neutral" }]}
              height={200}
              valueSuffix="%"
            />
          </CardBody>
        </Card>
      </Grid>

      <H2>Top campaigns by commission</H2>
      <Table
        headers={["Campaign", "Commission", "Earners", "Affiliates", "Top country"]}
        rows={DATA.topCampaigns.map((c) => [
          c.campaign,
          fmtUSD(c.commission),
          String(c.earners),
          fmtN(c.affiliates),
          c.topCountry,
        ])}
        columnAlign={["left", "right", "right", "right", "left"]}
      />

      <H2>Speed signals</H2>
      <Grid columns={2} gap={12}>
        <Stat
          value={s.earnersMedDaysFirstClient != null ? `${s.earnersMedDaysFirstClient}d` : "—"}
          label={`Median days to first client (earners, n=${s.nEarnersCli})`}
          tone="success"
        />
        <Stat
          value={
            s.nonEarnersMedDaysFirstClient != null ? `${s.nonEarnersMedDaysFirstClient}d` : "—"
          }
          label={`Median days to first client (non-earners, n=${s.nNonCli})`}
        />
      </Grid>

      <H2>Correlations with commission</H2>
      <Table
        headers={["Relationship", "r", "Takeaway"]}
        rows={DATA.correlations.map((c) => [
          c.pair,
          c.r == null ? "—" : c.r.toFixed(3),
          c.note,
        ])}
        columnAlign={["left", "right", "left"]}
      />
    </Stack>
  );
}
