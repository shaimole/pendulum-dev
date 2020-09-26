export default {
  level: 1,
  title: '',
  currentTp: 0,
  currentLp: 0,
  currentStam: 0,
  currentStress: 0,
  currentXp: 0,
  levelUps: 0,
  gender: 'M',
  image: '0001',
  name: '',
  house: '',
  race: 'human',
  nation: '',
  class: 'warrior',
  age: 18,
  attributes: {
    KK: 10,
    GS: 10,
    KN: 10,
    WN: 10,
    WK: 10,
    WS: 10,
    IN: 10,
    CH: 10
  },
  traits: [],
  notes: 'Es war einmal....',
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
  inventory: [{
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
    items: [{
      name: 'Absolute Dunkelheit',
      desc: 'schlechte Sicht',
      size: '',
      slot: 'Passiv',
      condition: 'Absolute Dunkelheit',
      modifiers: {
        attack: {
          war: {
            label: 'Krigeswaffen',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          },
          finesse: {
            label: 'Finessewaffen',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          },
          range: {
            label: 'Fernkampf',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          },
          thrown: {
            label: 'Schleuderwaffen',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          },
          unarmed: {
            label: 'Unbewaffnet',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          }
        },
        defense: {
          dodge: {
            label: 'Ausweichen',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          },
          block: {
            label: 'Blocken',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          },
          parry: {
            label: 'Parieren',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          }
        },
        caster: {
          MP: {
            label: 'Manipulation',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          },
          PJ: {
            label: 'Projektion',
            mod: -10,
            multi: 0,
            condition: '',
            active: 0
          },
          PT: {
            label: 'Protektion',
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
        attack: {
          war: {
            label: 'Krigeswaffen',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          },
          finesse: {
            label: 'Finessewaffen',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          },
          range: {
            label: 'Fernkampf',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          },
          thrown: {
            label: 'Schleuderwaffen',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          },
          unarmed: {
            label: 'Unbewaffnet',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          }
        },
        defense: {
          dodge: {
            label: 'Ausweichen',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          },
          block: {
            label: 'Blocken',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          },
          parry: {
            label: 'Parieren',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          }
        },
        caster: {
          MP: {
            label: 'Manipulation',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          },
          PJ: {
            label: 'Projektion',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          },
          PT: {
            label: 'Protektion',
            mod: -3,
            multi: 0,
            condition: '',
            active: 0
          }
        }
      },
      active: true
    }
    ]
  }
  ]
}
