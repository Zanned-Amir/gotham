import { tokens } from "../theme";

export const mockBarData = [
  {
    "month": "January",
    "burglary": 127,
    "burglaryColor": "hsl(197, 70%, 50%)",
    "identitytheft": 86,
    "identitytheftColor": "hsl(159, 70%, 50%)",
    "shoplifting": 99,
    "shopliftingColor": "hsl(233, 70%, 50%)",
    "robbery": 177,
    "robberyColor": "hsl(90, 70%, 50%)",
    "other": 126,
    "otherColor": "hsl(46, 70%, 50%)",
    
  },
  {
    "month": "February",
    "burglary": 184,
    "burglaryColor": "hsl(184, 70%, 50%)",
    "identitytheft": 10,
    "identitytheftColor": "hsl(139, 70%, 50%)",
    "shoplifting": 155,
    "shopliftingColor": "hsl(131, 70%, 50%)",
    "robbery": 100,
    "robberyColor": "hsl(253, 70%, 50%)",
    "other": 122,
    "otherColor": "hsl(103, 70%, 50%)",
    
  },
  {
    "month": "March",
    "burglary": 189,
    "burglaryColor": "hsl(182, 70%, 50%)",
    "identitytheft": 102,
    "identitytheftColor": "hsl(330, 70%, 50%)",
    "shoplifting": 127,
    "shopliftingColor": "hsl(86, 70%, 50%)",
    "robbery": 111,
    "robberyColor": "hsl(252, 70%, 50%)",
    "other": 129,
    "otherColor": "hsl(5, 70%, 50%)",
   
  },
  {
    "month": "April",
    "burglary": 193,
    "burglaryColor": "hsl(309, 70%, 50%)",
    "identitytheft": 130,
    "identitytheftColor": "hsl(76, 70%, 50%)",
    "shoplifting": 179,
    "shopliftingColor": "hsl(45, 70%, 50%)",
    "robbery": 165,
    "robberyColor": "hsl(174, 70%, 50%)",
    "other": 189,
    "otherColor": "hsl(9, 70%, 50%)",
    
  },
  {
    "month": "May",
    "burglary": 71,
    "burglaryColor": "hsl(357, 70%, 50%)",
    "identitytheft": 40,
    "identitytheftColor": "hsl(4, 70%, 50%)",
    "shoplifting": 19,
    "shopliftingColor": "hsl(335, 70%, 50%)",
    "robbery": 21,
    "robberyColor": "hsl(45, 70%, 50%)",
    "other": 78,
    "otherColor": "hsl(66, 70%, 50%)",
    
  },
  {
    "month": "June",
    "burglary": 129,
    "burglaryColor": "hsl(141, 70%, 50%)",
    "identitytheft": 90,
    "identitytheftColor": "hsl(273, 70%, 50%)",
    "shoplifting": 158,
    "shopliftingColor": "hsl(149, 70%, 50%)",
    "robbery": 36,
    "robberyColor": "hsl(268, 70%, 50%)",
    "other": 140,
    "otherColor": "hsl(154, 70%, 50%)",
   
  },
  {
    "month": "July",
    "burglary": 51,
    "burglaryColor": "hsl(124, 70%, 50%)",
    "identitytheft": 70,
    "identitytheftColor": "hsl(196, 70%, 50%)",
    "shoplifting": 56,
    "shopliftingColor": "hsl(42, 70%, 50%)",
    "robbery": 6,
    "robberyColor": "hsl(94, 70%, 50%)",
    "other": 82,
    "otherColor": "hsl(327, 70%, 50%)",
    
  }
];

export const mockLineData = [
  {
    id: "burglary",
    color: tokens("dark").dun[500],
    data: [
      {
        x: "Friday",
        type: 4,
        y: 4,
      },
      {
        x: "Monday",
        type: 4,
        y: 2,
      },
      {
        x: "Saturday",
        type: 4,
        y: 1,
      },
      {
        x: "Sunday",
        type: 4,
        y: 6,
      },
      {
        x: "Thursday",
        type: 4,
        y: 4,
      },
      {
        x: "Tuesday",
        type: 4,
        y: 3,
      },
      {
        x: "Wednesday",
        type: 4,
        y: 10,
      },
    ],
  },
  {
    id: "Robbery",
    color: tokens("dark").primary[500],
    data: [
      {
        x: "Friday",
        type: 1,
        y: 5,
      },
      {
        x: "Monday",
        type: 1,
        y: 3,
      },
      {
        x: "Saturday",
        type: 1,
        y: 4,
      },
      {
        x: "Sunday",
        type: 1,
        y: 1,
      },
      {
        x: "Thursday",
        type: 1,
        y: 3,
      },
      {
        x: "Tuesday",
        type: 1,
        y: 2,
      },
      {
        x: "Wednesday",
        type: 1,
        y: 5,
      },
    ],
  },
  {
    id: "Shoplifting",
    color: tokens("dark").grey[500],
    data: [
      {
        x: "Friday",
        type: 2,
        y: 6,
      },
      {
        x: "Monday",
        type: 2,
        y: 4,
      },
      {
        x: "Saturday",
        type: 2,
        y: 3,
      },
      {
        x: "Sunday",
        type: 2,
        y: 4,
      },
      {
        x: "Thursday",
        type: 2,
        y: 5,
      },
      {
        x: "Tuesday",
        type: 2,
        y: 5,
      },
      {
        x: "Wednesday",
        type: 2,
        y: 2,
      },
    ],
  },
  {
    id: "Identity Theft",
    color: tokens("dark").primary[300],
    data: [
      {
        x: "Friday",
        type: 3,
        y: 4,
      },
      {
        x: "Monday",
        type: 3,
        y: 5,
      },
      {
        x: "Saturday",
        type: 3,
        y: 3,
      },
      {
        x: "Sunday",
        type: 3,
        y: 3,
      },
      {
        x: "Thursday",
        type: 3,
        y: 3,
      },
      {
        x: "Tuesday",
        type: 3,
        y: 3,
      },
      {
        x: "Wednesday",
        type: 3,
        y: 6,
      },
    ],
  },
];

export const mockPieData = [
  {
    "id": "burglary",
    "label": "Type 4",
    "value": 27,
    color: tokens("dark").dun[500],
  },
  {
    "id": "Robbery",
    "label": "Type 1",
    "value": 26,
    "color": "hsl(4, 70%, 50%)"
  },
  {
    "id": "Shoplifting",
    "label": "Type 2",
    "value": 26,
    "color": "hsl(2, 70%, 50%)"
  },
  {
    "id": "Identity Theft",
    "label": "Type 3",
    "value": 21,
    "color": "hsl(1, 70%, 50%)"
  }
]