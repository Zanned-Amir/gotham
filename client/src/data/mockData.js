import { tokens } from "../theme";
export const mockLineData = [
  {
    id: "Burglary",
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
    "id": "Burglary",
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