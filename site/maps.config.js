module.exports = [
  {
    feature: 'all',
    element: 'labels',
    rules: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    feature: 'administrative',
    element: 'all',
    rules: [
      {
        visibility: 'on',
      },
      {
        hue: '#ff0000',
      },
      {
        weight: 0.4,
      },
      {
        color: '#ffffff',
      },
    ],
  },
  {
    feature: 'landscape',
    element: 'all',
    rules: [
      {
        visibility: 'simplified',
      },
      {
        color: '#2b3f57',
      },
      {
        weight: 0.1,
      },
    ],
  },
  {
    feature: 'poi',
    element: 'all',
    rules: [
      {
        color: '#6c5b7b',
      },
    ],
  },
  {
    feature: 'poi',
    element: 'labels',
    rules: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    feature: 'road.highway',
    element: 'geometry',
    rules: [
      {
        color: '#f55f77',
      },
      {
        weight: 3,
      },
    ],
  },
  {
    feature: 'road.highway',
    element: 'labels',
    rules: [
      {
        weight: 0.8,
      },
      {
        color: '#ffffff',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    feature: 'road.highway',
    element: 'labels.text',
    rules: [
      {
        weight: 1.3,
      },
      {
        color: '#FFFFFF',
      },
    ],
  },
  {
    feature: 'road.arterial',
    element: 'geometry',
    rules: [
      {
        color: '#f55f77',
      },
      {
        weight: 1.1,
      },
    ],
  },
  {
    feature: 'road.arterial',
    element: 'labels',
    rules: [
      {
        color: '#ffffff',
      },
      {
        weight: 0.7,
      },
    ],
  },
  {
    feature: 'road.local',
    element: 'geometry',
    rules: [
      {
        color: '#f55f77',
      },
      {
        weight: 0.4,
      },
    ],
  },
  {
    feature: 'road.local',
    element: 'labels',
    rules: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    feature: 'transit.line',
    element: 'all',
    rules: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    feature: 'water',
    element: 'all',
    rules: [
      {
        color: '#f3b191',
      },
    ],
  },
]
