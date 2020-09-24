export default [
  {
    level: 1,
    title: '',
    currentTp: 65,
    currentLp: 270,
    currentStam: 5,
    currentStress: 2,
    currentXp: 650,
    levelUps: 0,
    gender: 'M',
    image: '0013',
    name: 'Basil',
    house: '',
    race: 'human',
    nation: '',
    class: 'warrior',
    age: 45,
    attributes: { KK: 15, GS: 12, KN: 10, WN: 12, WK: 10, WS: 6, IN: 10, CH: 9 },
    traits: ['Ablutomanie', 'Insomnie', 'Hydrargyophobie', 'Thanatophobie', 'Atronachkörper', 'Gesegnet', 'Bescheidenheit', 'Photophilie'],
    notes: 'Once upon a time',
    equipped: {
      weapon:
      {
        name: 'Lifebuff',
        desc: 'testitem',
        class: 'spear',
        slot: 'weapon',
        size: 1,
        modifiers: {
          hp: {
            TP: {
              label: 'Trefferpunkte',
              mod: 0,
              multi: 0.05,
              active: 1
            },
            LP: {
              label: 'Lebenspunkte',
              mod: 200,
              multi: 0.05,
              active: 1
            },
            LPReg: {
              label: 'Lebenspunkt-Regeneration',
              mod: 0,
              multi: 1,
              active: 1
            }

          }
        }
      },
      cloths: null,
      cloak: null,
      armor: null
    },
    inventory: [
      {
        name: 'Der Boden',
        desc: 'In der Umgebung abgelegt',
        capacity: 0,
        type: 'Ort',
        items: []
      },
      {
        name: 'Passives',
        desc: 'Ein pseudo Inventar fuer alle sonstigen Modifikatoren',
        type: 'Ort',
        capacity: 0,
        items: []
      }
    ]
  },
  {
    level: 1,
    title: '',
    gender: 'M',
    image: '0036',
    name: 'Shovak',
    house: '',
    race: 'orc',
    nation: '',
    class: 'warrior',
    age: null,
    attributes: { KK: 16, GS: 10, KN: 14, WN: 10, WK: 14, WS: 6, IN: 6, CH: 8 },
    traits: ['Abhängigkeit', 'Kannibalismus', 'Nekrophilie', 'Sadismus']
  }
]
