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
      Waffe: null,
      cloths: null,
      Umhang: null,
      Ruestung: null,
      Schild: null,
      Rucksack: null,
      Schuhe: null,
      Handschuhe: null
    },
    talismans: [

    ],
    artifacts: [

    ],
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
        items: [
          {
            name: 'Absolute Dunkelheit',
            desc: 'schlechte Sicht',
            size: '',
            slot: 'Passiv',
            condition: 'Absolute Dunkelheit',
            modifiers: {
              attack:
              {
                war: {
                  label:
                  'Krigeswaffen',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                finesse: {
                  label:
                  'Finessewaffen',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                range: {
                  label:
                   'Fernkampf',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                thrown: {
                  label:
                  'Schleuderwaffen',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                unarmed: {
                  label:
                  'Unbewaffnet',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                }
              },
              defense: {
                dodge: {
                  label:
                  'Ausweichen',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                block: {
                  label:
                  'Blocken',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                parry: {
                  label:
                  'Parieren',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                }
              },
              caster: {
                MP: {
                  label:
                'Manipulation',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                PJ: {
                  label:
                  'Projektion',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                PT: {
                  label:
                   'Protektion',
                  mod: -10,
                  multi: 0,
                  condition: '',
                  active: 0
                }
              }
            },
            active: true
          },
          {
            name: 'Daemmerlicht',
            desc: 'verminderte Sicht',
            size: '',
            slot: 'Passiv',
            condition: 'Daemmerlicht',
            modifiers: {
              attack:
              {
                war: {
                  label:
                  'Krigeswaffen',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                finesse: {
                  label:
                  'Finessewaffen',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                range: {
                  label:
                   'Fernkampf',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                thrown: {
                  label:
                  'Schleuderwaffen',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                unarmed: {
                  label:
                  'Unbewaffnet',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                }
              },
              defense: {
                dodge: {
                  label:
                  'Ausweichen',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                block: {
                  label:
                  'Blocken',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                parry: {
                  label:
                  'Parieren',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                }
              },
              caster: {
                MP: {
                  label:
                'Manipulation',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                PJ: {
                  label:
                  'Projektion',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                },
                PT: {
                  label:
                   'Protektion',
                  mod: -3,
                  multi: 0,
                  condition: '',
                  active: 0
                }
              }
            },
            active: true
          },
          {
            name: 'Medizin',
            desc: 'Stufe 1',
            size: '',
            slot: 'Passiv',
            modifiers: {
              hp: {
                TP: {
                  label: 'Trefferpunkte',
                  mod: 0,
                  multi: 0.05,
                  condition: '',
                  active: 0
                },
                LP: {
                  label: 'Lebenspunkte',
                  mod: 0,
                  multi: 0.05,
                  condition: '',
                  active: 0
                }
              }
            },
            active: true,
            condition: ''
          }
        ]
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
