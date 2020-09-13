export default {
  human: {
    id: 'human',
    name: 'Mensch',
    attributes: {}
  },
  elf: {
    id: 'elf',
    name: 'Elf',
    attributes: {
      WN: 2,
      IN: 2,
      CH: 2,
      KK: -2,
      KN: -2
    }
  },
  drawrf: {
    id: 'drawrf',
    name: 'Zwerg',
    attributes: {
      WN: -2,
      KN: 2,
      WK: 2
    }
  },
  orc: {
    id: 'orc',
    name: 'Ork',
    attributes: {
      WS: -4,
      IN: -4,
      CH: -2,
      WK: 4,
      KK: 4,
      KN: 4
    }
  },
  co: {
    id: 'co',
    name: 'Katzenmensch (Co)',
    attributes: {
      WN: 4,
      GS: 4,
      KK: -2,
      KN: -2,
      WK: -2
    }
  },
  drakonoid: {
    id: 'drakonoid',
    name: 'Drakonide',
    attributes: {
      WS: 2,
      GS: -2,
      IN: 2,
      WN: -2
    }
  }
}
