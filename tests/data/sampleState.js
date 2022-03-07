export default {
  characters: [],
  character: {
    level: 1,
    title: '',
    currentTp: 0,
    currentLp: 0,
    currentStam: 0,
    currentStress: 0,
    currentXp: 0,
    levelUps: 0,
    gender: 'F',
    image: '',
    name: 'Dagmara',
    house: '',
    race: '',
    nation: '',
    class: '',
    age: null,
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
    talismans: [],
    artifacts: [],
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
  },
  races: {
    human: {
      id: 'human',
      name: 'Mensch',
      attributes: {},
      desc:
        'Mit dem Fall der Titanen vor etwa sechstausend Jahren begann das Zeitalter der Menschen. Ihre enorme Anpassungsfähigkeit und Vielseitigkeit macht sie heute zum mächtigsten Volk am Einstsee und vermutlich auf der ganzen Welt; ihr Gier und ihre Sturheit zu einem ernstzunehmenden Gegner. Als ein zahlenstarkes Volk treten die Menschen in allen Arten der Herrschaftsformen in Erscheinung, ob nun von Königen regiert, in demokratisch organisierten Republiken oder unter der Theokratie des Roten Kaisers.',
      pro: [
        {
          title: 'Verbreitet',
          desc:
            'Menschen sind nahezu überall auf Assiah dominant und anzutreffen.'
        },
        {
          title: 'Anpassungsfähig',
          desc:
            'Kann beliebig +1 auf drei Attribute oder bis zu +3 auf einen Attribut wählen.'
        },
        {
          title: 'Lernfähig',
          desc: 'Erhält jede 2. Stufe +1 Fertigkeitspunkt.'
        }
      ],
      contra: []
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
      },
      desc:
        'Die Elfen zählen zu den ältesten und edelsten Rassen Assiahs. Ihre Ältesten können sich noch an die Geburt der Titanen erinnern und bis heute stellen sie die mächtigsten Magier und Zauberwirker. Ihr großes Zeitalter ist jedoch vorüber: Zunehmend drängen sich die Elfen in menschliche Städte, wo sie meist sterblich und in niederen Ständen oder Gesindevierteln anzutreffen sind, während die Zahl der Hochelfen stetig sinkt. Bis heute heißt es, die Elfen hätten den Titanen und damit den Menschen die Magie beigebracht.',
      pro: [
        {
          title: 'Fokussiert',
          desc:
            'Können beliebig oft pro Rast die Aktion „Fokus“ durchführen, ohne Stress aufzubauen.'
        },
        {
          title: 'Magische Affinität',
          desc: 'Tränke, Talismane, Artefakte o.ä. erzielen 50% mehr Effekt.'
        },
        {
          title: 'Dämmersicht',
          desc: 'Erleiden bei Dämmerlicht (Abenddämmerung) keinen Malus.'
        },
        {
          title: 'Keine Narbenbildung',
          desc: 'Tiefe Wunden verheilen stets, ohne Narben zu hinterlassen'
        }
      ],
      contra: [
        {
          title: 'Hyposexualität',
          desc: 'Niedrige Fruchtbarkeit, niedrige Libido.'
        }
      ]
    },
    drawrf: {
      id: 'drawrf',
      name: 'Zwerg',
      attributes: {
        WN: -2,
        KN: 2,
        WK: 2
      },
      desc:
        'Die Zwerge gelten auf der ganzen Welt als ein Volk aufrichtiger, trinkfester und fleißiger Arbeiter und Mineure. So bevorzugt das oft magieunbegabte Volk tatsächlich die Nähe zu Bergen, in deren Inneren es oft seine Städte errichten. Gewaltige Tunnelsysteme unter dem Einstsee, die bis ins Unterreich hinabreichen, zeugen noch heute von den großen Errungenschaften dieses Volkes. Im Gegensatz zu den Menschen beten sie meist nicht zu Göttern, sondern einer Reihe an eigenen und erhobenen Ahnen.',
      pro: [
        {
          title: 'Feingespür',
          desc: 'Erhalten bei allen Durchsuchungswürfen +5.'
        },
        {
          title: 'Selbstmotivierend',
          desc:
            'Ist sein Stress unter der Hälfte seines Maximums, erhält er +2 auf alle Würfe.'
        },
        {
          title: 'Belastbar',
          desc: 'Verdoppelte Stressresistenz'
        }
      ],
      contra: [
        {
          title: 'Klein',
          desc: 'Geringe Körpergröße'
        }
      ]
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
      },
      desc:
        'Die in Nomaden und Stämme organisierten Bewohner der Kalten Ebenen zählen seit Jahrtausenden zu den größten Geißeln des Einstsees. Immer wieder fallen ihre Horden in die zivilisierten Reiche ein, um dort mit außerordentlicher Gewalt zu plündern und zu brandschatzen und niemand mehr vermag die Kriege zu zählen, die man gegen die Orks führte. Ihre Kraft und körperliche Robustheit machen sie zu gefürchteten Kämpfern und, die korrekte Züchtigung vorausgesetzt, zu beliebten Sklaven. ',
      pro: [
        {
          title: 'Regenerativ',
          desc: 'Erhält +100 % Lebenspunkt (LP)-Regeneration.'
        },
        {
          title: 'Unverwüstlich',
          desc: 'Organschäden werden meist vollständig regeneriert.'
        },
        {
          title: 'Robust',
          desc: 'Immun gegen Blutung, leichte Wunden schließen sich von selbst.'
        },
        {
          title: 'Überwältigend',
          desc: 'Erhalten +25% mehr Schaden, im Waffenkampf wie in Magie.'
        }
      ],
      contra: [
        {
          title: 'Vorurteilsbehaftet',
          desc: 'Sie gelten als aggressiv, gewalttätig und gefährlich.'
        }
      ]
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
      },
      desc:
        'Die Katzenmenschen, Schöpfungen der Blutelfen, kamen vor etwa viertausend Jahren zum ersten Mal aus ihren Reichen im Süden an den Einstsee. Für ihre enorme Geschicklichkeit bekannt, ihrer Anmutigkeit wegen begehrt und als verstohlen verschrien, ziehen sie meist in kleinen Gruppen oder als Einzelgänger durch die Reiche, wo sie sich als Händler, Hehler und Tagelöhner verdingen. Sie gelten zudem als exzellente und begeisterte Diebe wie auch Betrüger, weshalb man ihnen oft mit Misstrauen begegnet.',
      pro: [
        {
          title: 'Dunkelsicht',
          desc: 'Erleiden nur noch einen Malus in absoluter Finsternis.'
        },
        {
          title: 'Krallen',
          desc: '+4 auf alle Kletterwürfe.'
        },
        {
          title: 'Samtpfoten',
          desc: 'Erhalten barfuß +4 auf alle Schleichenwürfe.'
        },
        {
          title: 'Falldämpfung',
          desc:
            'Können einen Fall bis aus 10 m Höhe unbeschadet überleben (GS gegen SG 25).'
        },
        {
          title: 'Warmes Fell',
          desc:
            'Kein Stressaufbau durch leichte Witterungen (wie kalte Winde, Regen).'
        }
      ],
      contra: [
        {
          title: 'Spezielle Kopfform',
          desc: 'Helme sind nur als Sonderanfertigungen verfügbar.'
        },
        {
          title: 'Pfoten',
          desc: 'Schuhwerk ist nur als Sonderanfertigungen verfügbar.'
        },
        {
          title: 'Durstiges Fell',
          desc:
            'Erleiden nass (auch nach starkem Regen) -2 bis -4 auf alle körperlichen Würfe.'
        }
      ]
    },
    drakonoid: {
      id: 'drakonoid',
      name: 'Drakonide',
      attributes: {
        WS: 2,
        GS: -2,
        IN: 2,
        WN: -2
      },
      desc:
        'Vor langer Zeit, vermutlich Jahrtausende vor der ersten titanischen Stadt, erschufen die Drachen die humanoiden Drakoniden als Diener und Unterhändler mit den jungen Völkern. Nach den Morgenröte-Kriegen, mit dem Untergang ihrer Schöpfer und Meister, verloren die Drakoniden ebenso die Quelle ihrer Unsterblichkeit, das Drachenfeuer zu reproduzieren. So, in Zahl und Macht schwindet, durchstreifen sie seit Jahrtausenden die sterbliche Welt, als Glücksritter, Beobachter, Berater, Diplomaten und hochangesehene Erinnerungen an vergangene Zeitalter.',
      pro: [
        {
          title: 'Drachenblut',
          desc:
            'Immunität gegen starke Kälte und Hitze, sowie die allermeisten Krankheiten.'
        },
        {
          title: 'Drachenschuppen',
          desc: 'Erhalten von Natur aus +4 Rüstungswert (RW).'
        },
        {
          title: 'Harter Panzer',
          desc:
            'Erleiden keinen Malus durch harten oder nassen Untergrund beim Schlaf.'
        },
        {
          title: 'Drachenkrallen',
          desc: 'Gewährt +5 auf jeden Kletterwurf.'
        },
        {
          title: 'Krallen und Gebiss',
          desc: 'Erhalten im unbewaffneten Nahkampf +2 AW und +50% Schaden.'
        },
        {
          title: 'Hohes Ansehen',
          desc: 'Werden selten mit schlechten Taten in Verbindung gebracht.'
        }
      ],
      contra: [
        {
          title: 'Spezielle Kopfform',
          desc: 'Helme sind nur als Sonderanfertigungen verfügbar.'
        },
        {
          title: 'Pfoten',
          desc: 'Schuhwerk ist nur als Sonderanfertigungen verfügbar.'
        },
        {
          title: 'Alchemisch wertvoll',
          desc:
            'Werden oft ihres Urfeuers wegen und dessen hohen Wertes gejagt.'
        }
      ]
    }
  },
  attributes: [
    {
      type: 'number',
      label: 'Körperkraft (KK)',
      id: 'KK',
      value: 10
    },
    {
      type: 'number',
      label: 'Geschicklichkeit (GS)',
      id: 'GS',
      value: 10
    },
    {
      type: 'number',
      label: 'Konstitution (KN)',
      id: 'KN',
      value: 10
    },
    {
      type: 'number',
      label: 'Wahrnehmung (WN)',
      id: 'WN',
      value: 10
    },
    {
      type: 'number',
      label: 'Willenskraft (WK)',
      id: 'WK',
      value: 10
    },
    {
      type: 'number',
      label: 'Intelligenz (IN)',
      id: 'IN',
      value: 10
    },
    {
      type: 'number',
      label: 'Weisheit (WS)',
      id: 'WS',
      value: 10
    },
    {
      type: 'number',
      label: 'Charisma (CH)',
      id: 'CH',
      value: 10
    }
  ],
  pointbuy: {
    1: {
      cost: 1,
      description:
        'Schwer behindernd: Verursacht eine schwere Behinderung oder Einschränkung.'
    },
    2: {
      cost: 1,
      description:
        'Schwer behindernd: Verursacht eine schwere Behinderung oder Einschränkung.'
    },
    3: {
      cost: 1,
      description:
        'Behindernd: Zieht meist eine erste Behinderung oder Einschränkung nach sich.'
    },
    4: {
      cost: 1,
      description:
        'Behindernd: Zieht meist eine erste Behinderung oder Einschränkung nach sich.'
    },
    5: {
      cost: 1,
      description: 'Schwach / gering.'
    },
    6: {
      cost: 1,
      description: 'Schwach / gering.'
    },
    7: {
      cost: 1,
      description: 'Unterdurchschnittlich'
    },
    8: {
      cost: 1,
      description: 'Überdurchschnittlich.'
    },
    9: {
      cost: 1,
      description: 'Überdurchschnittlich'
    },
    10: {
      cost: 1,
      description: 'Absoluter Durchschnitt'
    },
    11: {
      cost: 1,
      description: 'Absoluter Durchschnitt'
    },
    12: {
      cost: 1,
      description: 'Überdurchschnittlich'
    },
    13: {
      cost: 2,
      description: 'Überdurchschnittlich'
    },
    14: {
      cost: 2,
      description: 'Gefördert / trainiert'
    },
    15: {
      cost: 4,
      description: 'Gut: Gewährt meist einen geringen Vorteil.'
    },
    16: {
      cost: 6,
      description: 'Gut: Gewährt meist einen geringen Vorteil.'
    },
    17: {
      cost: 9,
      description: 'Außerordentlich: Gewährt einen besseren Vorteil.'
    },
    18: {
      cost: 12,
      description: 'Exzellent'
    },
    19: {
      cost: 16,
      description: 'Exzellent'
    },
    20: {
      cost: 20,
      description: 'Heroisch: Gewährt einen großen Vorteil.'
    }
  },
  skills: [
    {
      id: 'AK',
      label: 'Akrobatik (AK)',
      mod: -4,
      parts: ['GS', 'WN'],
      value: 0
    },
    {
      id: 'AU',
      label: 'Autorität (AU)',
      mod: 0,
      parts: ['KK', 'CH'],
      value: 0
    },
    {
      id: 'AT',
      label: 'Athletik (AT)',
      mod: 0,
      parts: ['KK', 'KN'],
      value: 0
    },
    {
      id: 'BE',
      label: 'Bewusstein (BE)',
      mod: 0,
      parts: ['WN', 'WK'],
      value: 0
    },
    {
      id: 'DB',
      label: 'Diebstahl (DB)',
      mod: 0,
      parts: ['GS', 'CH'],
      value: 0
    },
    {
      id: 'FF',
      label: 'Fingerfertigkeit (FF)',
      mod: 0,
      parts: ['GS', 'WS'],
      value: 0
    },
    {
      id: 'HW',
      label: 'Handwerk (HW)',
      mod: 0,
      parts: ['KK', 'WS'],
      value: 0
    },
    {
      id: 'IF',
      label: 'Infiltration (IF)',
      mod: -4,
      parts: ['WN', 'WS'],
      value: 0
    },
    {
      id: 'KE',
      label: 'Konzentration (KE)',
      mod: 0,
      parts: ['WK', 'IN'],
      value: 0
    },
    {
      id: 'OG',
      label: 'Organisation (OG)',
      mod: 0,
      parts: ['WN', 'IN'],
      value: 0
    },
    {
      id: 'PY',
      label: 'Psyche (PY)',
      mod: 0,
      parts: ['WK', 'WS'],
      value: 0
    },
    {
      id: 'PS',
      label: 'Psychologie (PS)',
      mod: -4,
      parts: ['IN', 'CH'],
      value: 0
    },
    {
      id: 'RE',
      label: 'Reiterei (RE)',
      mod: 0,
      parts: ['KN', 'CH'],
      value: 0
    },
    {
      id: 'RH',
      label: 'Rhetorik (RH)',
      mod: 0,
      parts: ['CH', 'WS'],
      value: 0
    },
    {
      id: 'VS',
      label: 'Verständnis (VS)',
      mod: 0,
      parts: ['IN', 'WS'],
      value: 0
    },
    {
      id: 'WD',
      label: 'Widerstand (WD)',
      mod: 0,
      parts: ['KN', 'WN'],
      value: 0
    }
  ],
  attackStats: [
    {
      id: 'war',
      label: 'Kriegswaffen',
      mod: -4,
      parts: ['KK', 'GS'],
      value: 0
    },
    {
      id: 'finesse',
      label: 'Finessewaffen',
      mod: -4,
      parts: ['GS', 'WN'],
      value: 0
    },
    {
      id: 'range',
      label: 'Fernkampf',
      mod: -4,
      parts: ['GS', 'WN'],
      value: 0
    },
    {
      id: 'thrown',
      label: 'Schleuderwaffen',
      mod: -4,
      parts: ['GS', 'WN'],
      altparts: ['KK', 'GS'],
      value: 0
    },
    {
      id: 'unarmed',
      label: 'Unbewaffnet',
      mod: -4,
      parts: ['KK', 'GS'],
      value: 0
    }
  ],
  defenseStats: [
    {
      id: 'dodge',
      label: 'Ausweichen',
      mod: 1,
      parts: ['WN', 'GS'],
      value: 0
    },
    {
      id: 'block',
      label: 'Blocken',
      mod: 10,
      parts: ['KK', 'WN'],
      value: 0
    },
    {
      id: 'parry',
      label: 'Parieren',
      mod: 10,
      parts: ['GS', 'WN'],
      value: 0
    },
    {
      id: 'RW',
      label: 'Ruestungswert',
      mod: 0,
      parts: [],
      value: 0
    }
  ],
  casterStats: [
    {
      id: 'MP',
      label: 'Manipulation',
      mod: 0,
      parts: ['IN', 'WN'],
      value: 0
    },
    {
      id: 'PJ',
      label: 'Projektion',
      mod: 0,
      parts: ['GS', 'WN'],
      value: 0
    },
    {
      id: 'PT',
      label: 'Protektion',
      mod: 0,
      parts: ['WS', 'WN'],
      value: 0
    }
  ],
  damageStats: [
    {
      id: 'oneHanded',
      label: 'Einhandwaffen',
      mod: 0,
      parts: ['KK'],
      multi: [1],
      value: 0
    },
    {
      id: 'twoHanded',
      label: 'Zweinhandwaffen',
      mod: 0,
      parts: ['KK'],
      multi: [1.5],
      value: 0
    },
    {
      id: 'finesse',
      label: 'Finessewaffen',
      mod: 0,
      parts: ['IN'],
      multi: [0.5],
      value: 0
    },
    {
      id: 'whip',
      label: 'Peitschen',
      mod: 0,
      parts: ['KK'],
      multi: [0.5],
      value: 0
    },
    {
      id: 'unarmed',
      label: 'Unbewaffnet',
      mod: 0,
      parts: ['KK'],
      multi: [1],
      value: 0
    },
    {
      id: 'crossbow',
      label: 'Armbrüste',
      mod: 0,
      parts: ['IN'],
      multi: [1],
      value: 0
    },
    {
      id: 'bow',
      label: 'Bögen',
      mod: 0,
      parts: ['IN'],
      multi: [1],
      value: 0
    },
    {
      id: 'thrown',
      label: 'Wurfwaffen',
      mod: 0,
      parts: ['KK'],
      multi: [1],
      value: 0
    },
    {
      id: 'magicSingle',
      label: 'Einrundige Magie',
      mod: 0,
      parts: ['IN'],
      multi: [1],
      value: 0
    },
    {
      id: 'magicDouble',
      label: 'Zweirundige Magie',
      mod: 0,
      parts: ['IN'],
      multi: [2],
      value: 0
    },
    {
      id: 'powerSingle',
      label: 'Einrundige Mächte',
      mod: 0,
      parts: ['WK'],
      multi: [0.5],
      value: 0
    },
    {
      id: 'powerDouble',
      label: 'Zweirundige Mächte',
      mod: 0,
      parts: ['WK'],
      multi: [1],
      value: 0
    }
  ],
  externalStats: [
    {
      id: 'artifacts',
      label: 'Artefakt-Limit',
      mod: 0,
      parts: ['IN'],
      multi: [0.25],
      value: 0
    },
    {
      id: 'estus',
      label: 'Estus- /Seelen-Limit',
      mod: 0,
      parts: ['KN'],
      multi: [0.25],
      value: 0
    },
    {
      id: 'talisman',
      label: 'Talisman-Limit',
      mod: 0,
      parts: ['KN'],
      multi: [0.25],
      value: 0
    },
    {
      id: 'intus',
      label: 'Intus-Limit',
      mod: 0,
      parts: ['KN'],
      multi: [0.25],
      value: 0
    }
  ],
  hpStats: [
    {
      id: 'TP',
      label: 'Trefferpunkte',
      mod: 20,
      parts: ['KN', 'WK'],
      multi: [5, 2],
      value: 0
    },
    {
      id: 'LP',
      label: 'Lebenspunkte',
      mod: 60,
      parts: ['KN'],
      multi: [21],
      value: 0
    }
  ],
  limitStats: [
    {
      id: 'focus',
      label: 'Fokus Limit',
      mod: 0,
      parts: ['IN'],
      multi: [0.5],
      value: 0
    },
    {
      id: 'stamina',
      label: 'Energie',
      mod: 0,
      parts: ['KN', 'WK'],
      multi: [0.25, 0.25],
      value: 0
    },
    {
      id: 'stress',
      label: 'Stress Limit',
      mod: 0,
      parts: ['WK', 'WS'],
      value: 0
    }
  ],
  classes: [
    {
      item: 'warrior',
      name: 'Krieger',
      desc:
        'Offensiver wie defensiver Kämpfer, robust und Meister aller Waffen',
      pro: [
        {
          title: 'Gutes Durchhaltevermögen',
          desc:
            'Können beliebig oft pro Rast die Aktion „Fokus“ durchführen, ohne Stress aufzubauen.Berechnung der Trefferpunkte (TP): 20 + (Konstitution x 6) + (Willenskraft x 3).'
        },
        {
          title: 'Robuste Physis',
          desc: 'Berechnung der Lebenspunke (LP): 60 + (Konstitution x 27).'
        },
        {
          title: 'Gerüstet',
          desc: 'Beginnt mit Rüstungsklasse 2.'
        },
        {
          title: 'Waffenmeister',
          desc:
            'Erhält +2 Schaden für unbewaffnet, einhändige und Fernkampwaffen, +3 Schaden für zweihändige Waffen'
        },
        {
          title: 'Kampferfahren',
          desc:
            'Erhält +1 auf Angriffswert (AW), Verteidigungswert (VW), Blockwert (BW).'
        }
      ],
      contra: [],
      hpStats: [
        {
          id: 'TP',
          label: 'Trefferpunkte',
          mod: 20,
          parts: ['KN', 'WK'],
          multi: [6, 3],
          value: 0
        },
        {
          id: 'LP',
          label: 'Lebenspunkte',
          mod: 60,
          parts: ['KN'],
          multi: [27],
          value: 0
        }
      ]
    },
    {
      item: 'priest',
      name: 'Priester',
      desc:
        'Magiewirker, der seine Macht von Entitäten aus dem Äther bezieht. Er dient ihnen dafür als Sprachrohr und Priester.',
      pro: [
        {
          title: 'Mächte',
          desc:
            'Kann Priestermächte wirken: Er erhält zu Beginn die Waffenklassen „Manipulation“ und „Projektion“.'
        },
        {
          title: 'Spirituell',
          desc: 'Erhält +1 Stressresistenz.'
        },
        {
          title: 'Begrenztes magisches Handwerk',
          desc: 'Kann Runen und Siegel schreiben und Talismane erschaffen.'
        }
      ],
      contra: []
    },
    {
      item: 'worker',
      name: 'Handwerker',
      desc:
        'Bauer, Handwerker, Kaufmann, Gelehrter oder Künstler, der sich vor allem auf bürgerliche Tugenden versteht.',
      pro: [
        {
          title: 'Arbeitskleidung',
          desc: 'Beginnt mit Rüstungsklasse 1.'
        },
        {
          title: 'Korrekturkonzept',
          desc:
            'Darf einmal am Tag einen Alltagswurf (wie Überzeugung) oder zwei Kampfwürfe wiederholen.'
        },
        {
          title: 'Routine',
          desc: 'Kann täglich eine Tätigkeit ohne Tageszeitverlust durchführen.'
        },
        {
          title: 'Organisiert',
          desc:
            'Erhält +1 Inventarplatz, wenn der Charakter einen mindestens mittelgroßen Rucksack trägt.'
        },
        {
          title: 'Pragmatisch',
          desc: 'Erhält +1 Handwerk (HW), Rhetorik (RH).'
        }
      ],
      contra: [
        {
          title: 'Zivilist',
          desc: 'Darf zu Beginn keine Waffenklasse auswählen.'
        }
      ]
    },
    {
      item: 'rogue',
      name: 'Schurke',
      desc:
        'Dieb, Einbrecher, Attentäter, Agent und Jäger, der sich im Kampf vor allem auf Täuschung und Finten verlässt.',
      pro: [
        {
          title: 'Waffe erster Wahl',
          desc: 'Darf zu Beginn eine Waffenklasse auswählen.'
        },
        {
          title: 'Diebeshandwerk',
          desc:
            'Erhält +1 Diebstahl (DB), Infiltration (IF) und Organisation (OG)'
        },
        {
          title: 'Geschickt',
          desc: 'Erhält +1 Akrobatik (AK).'
        },
        {
          title: 'Erfolgsgarantie',
          desc:
            'Erfolgsgarantie: Kann einmal pro Rast einen Wurf als eine 15 gelten lassen. Verfällt ungenutzt.'
        }
      ],
      contra: []
    },
    {
      item: 'mage',
      name: 'Magier',
      desc:
        'Magiewirker, der das Mana mit Logik und komplexen Zauberformeln zu seinem Nutzen formt. Auch Hermetiker genannt.',
      pro: [
        {
          title: 'Magiebegabt',
          desc:
            'Kann Zaubersprüche wirken: Er erhält zu Beginn die Waffenklassen „Manipulation“, „Projektion“ und „Protektion“.'
        },
        {
          title: 'Geschult',
          desc: 'Kann Lesen und Schreiben'
        },
        {
          title: 'Magisches Handwerk',
          desc:
            'Kann Runen und Siegel schreiben, Schriftrollen erstellen und Talismane erschaffen.'
        }
      ],
      contra: []
    }
  ],
  newChar: {
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
    talismans: [],
    artifacts: [],
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
  },
  positiveTraits: [
    {
      name: 'Drachenblut',
      desc:
        'In den Adern des Charakters pulsiert das Drachenfeuer (nicht von Drakoniden wählbar):',
      pro: [
        {
          title: '',
          desc: 'Gewährt Immunität gegen Krankheiten und Korruption.'
        },
        {
          title: '',
          desc: 'Verleiht feste Haut, die natürlich +2 RW gewährt.'
        },
        {
          title: '',
          desc: 'Gilt vielerorts als Adelsbeweis, wird hoch angesehen.'
        }
      ],
      contra: [],
      cost: 4
    },
    {
      name: 'Bescheidenheit',
      desc:
        'Der Charakter ist an Enthaltsamkeit und Bescheidenheit gewohnt: Minderwertiges Essen oder schlechte Schlafunterlage verursachen keinen Stress.',
      cost: 2,
      pro: [
        {
          title: '',
          desc:
            'Minderwertiges Essen oder schlechte Schlafunterlage verursachen keinen Stress.'
        }
      ]
    },
    {
      name: 'Gesegnet',
      desc:
        'Ob durch göttlichen Segen oder reinen Zufall, der Charakter hat unnatürlich viel Glück:',
      cost: 8,
      pro: [
        {
          title: '',
          desc:
            'Eine W19 gilt bereits als Kritischer Erfolg oder Kritischer Treffer.'
        },
        {
          title: '',
          desc:
            'Glücksfälle widerfahren den Charakter häufiger, Unglück zuerst seine Verbündeten.'
        }
      ]
    },
    {
      name: 'Hellsichtig',
      desc: 'Der Charakter verfügt über hellseherische Fähigkeiten',
      pro: [
        {
          title: '',
          desc:
            'Gelegentlich können dem Charakter nützliche Visionen erreichen (Glückswurf)'
        },
        {
          title: '',
          desc:
            'Diese Visionen können auch forciert werden, bspw. durch Meditation oder Drogen.'
        }
      ],
      contra: [],
      cost: 5
    },
    {
      name: 'Feenblut',
      desc:
        'In den Adern des Charakters pulsiert das magische Blut eines Feenwesens',
      pro: [
        {
          title: '',
          desc:
            'Gewährt magische Affinität und erlaubt es, Magie zielsicher zu erspüren.'
        },
        {
          title: '',
          desc: 'Gewährt Wirkern +2 auf alle magischen Identifikationen.'
        },
        {
          title: '',
          desc:
            'Tiere müssen sich überwinden, bevor sie den Charakter attackieren (PY gegen SG 22).'
        }
      ],
      contra: [],
      cost: 3
    },
    {
      name: 'Naturbursche',
      desc: 'Sympathisches Verhältnis zu Wäldern und dichter Vegetation',
      pro: [
        {
          title: '',
          desc:
            'Sich in einem Wald aufzuhalten baut einmal pro Rast einen Stresspunkt ab.'
        }
      ],
      contra: [],
      cost: 3
    },
    {
      name: 'Neugier',
      desc: 'Die Freude am Erkunden, Entdecken und Kennenlernen',
      pro: [
        {
          title: '',
          desc:
            'Die Besichtigung neuer, interessanter Orte (wie ein Forum, eine neue Stadt, eine Kathedrale o.ä.) löst einen Stresspunkt.'
        },
        {
          title: '',
          desc:
            'Die Entdeckung ungewöhnlicher Orte (wie Ruinen u.ä.) lösen einen Stresspunkt.'
        }
      ],
      contra: [],
      cost: 3
    },
    {
      name: 'Masochismus',
      desc: 'Die Freude an oder Selbstbestätigung durch Schmerz',
      pro: [
        {
          title: '',
          desc: 'Ein verletzender Treffer kann Stress reduzieren (SG 15).'
        },
        {
          title: '',
          desc:
            'Ein K.O. oder immenser Schmerz können keinen Stress mehr verursachen.'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Der Charakter kann zu selbstverletzendem Verhalten neigen (BE gegen SG).'
        }
      ],
      cost: 3
    },
    {
      name: 'Philantropie',
      desc: 'Der Charakter ist ein Menschenfreund',
      pro: [
        {
          title: '',
          desc: 'Einer Person merklich zu helfen, löst einen Stresspunkt.'
        }
      ],
      contra: [],
      cost: 1
    },
    {
      name: 'Optimistisch',
      desc:
        'Eine grundlegend positive Einstellung (nicht kombinierbar mit Melancholie)',
      pro: [
        {
          title: '',
          desc: 'Mit jeder Rast wird automatisch ein Stresspunkt gelöst.'
        }
      ],
      contra: [],
      cost: 5
    },
    {
      name: 'Scharfer-Instinkt',
      desc:
        'Der Charakter verfügt über einen feinfühligen Instinkt bzw. ein gutes Bauchgefühl.',
      pro: [
        {
          title: '',
          desc:
            'Ermöglicht es, Hinterhalte, Fallen, Intrigen o.ä. vorauszuahnen (BE gegen SG).'
        },
        {
          title: '',
          desc:
            'Erlaubt es, andere Personen besser einzuschätzen: Gewährt +3 PY sowie die Fähigkeit, sogar bei Fehlschlägen oder ohne Würfe Gedanken zu erahnen.'
        }
      ],
      contra: [],
      cost: 4
    },
    {
      name: 'Tiefer-Schlaf',
      desc: 'Der Charakter ist ein Tiefschläfer und Schlafgenießer',
      pro: [
        {
          title: '',
          desc:
            'Ein voller, ungestörter Schlaf von acht Stunden löst einen Stresspunkt'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Wird der Schlaf dagegen gestört, erleidet der Charakter 2 Stresspunkte.'
        }
      ],
      cost: 3
    },
    {
      name: 'Photophilie',
      desc: 'Der Charakter liebt helles Licht',
      pro: [
        {
          title: '',
          desc:
            'Gewährt +2 auf alle Würfe bei Tageslicht oder vergleichbare Helligkeit.'
        }
      ],
      contra: [],
      cost: 2
    },
    {
      name: 'Tierfreund',
      desc: 'Tiefe Sympathie zu Tieren, insbesondere tierischen Begleitern',
      pro: [
        {
          title: '',
          desc:
            'Ist ein tierischer Begleiter vorhanden, löst sich pro Tag ein Stresspunkt.'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Stirbt jener Begleiter, erleidet der Charakter 10 Stress oder sogar ein Trauma'
        }
      ],
      cost: 1
    },
    {
      name: 'Titanenblut',
      desc: 'Der Charakter verfügt über das Blut eines Titanen',
      pro: [
        {
          title: '',
          desc: 'Titanische Maschinerie erkennt den Charakter als Titanen.'
        },
        {
          title: '',
          desc: 'Gewährt 3 auf alle Glückswürfe'
        }
      ],
      contra: [],
      cost: 5
    },
    {
      name: 'Unauffällig',
      desc:
        'Der Charakter hinterlässt nur selten und auch nur geringfügig Eindruck bei anderen',
      pro: [
        {
          title: '',
          desc: 'Es wird nur selten an ihn gedacht oder über ihn gesprochen.'
        },
        {
          title: '',
          desc:
            'Daher wird er nur selten mit Geschehnissen oder Verbrechen in Verbindung gebracht.'
        },
        {
          title: '',
          desc: 'Gewährt +2 Infiltration (IF).'
        }
      ],
      contra: [],
      cost: 2
    },
    {
      name: 'Vertrauenswürdig',
      desc: 'Der Charakter verfügt über eine vertrauenswürdige Ausstrahlung:',
      pro: [
        {
          title: '',
          desc:
            'Gewährt +3 Rhetorik (RH) für jede Überzeugung während des Ersteindrucks.'
        },
        {
          title: '',
          desc:
            'Der Charakter wird seltener mit Verbrechen in Verbindung gebracht.'
        }
      ],
      contra: [],
      cost: 3
    }
  ],
  neutralTraits: [
    {
      name: 'Atronachkörper',
      desc: 'Der Charakter verfügt über einen Magie abstoßenden Körper',
      pro: [
        {
          title: '',
          desc:
            'Physische Zauber (wie Feuerbälle) erzielen oft nur 50% des Effekts.'
        },
        {
          title: '',
          desc:
            'Arkane, rein magische Zauber, wie auch magische Runen oder Artefakte haben keinen Effekt und auch keine Wirkung. Ein magisches Schwert ist bspw. nur ein Schwert.'
        }
      ],
      contra: [
        {
          title: '',
          desc: 'Heilzauber funktionieren auf den Charakter nicht.'
        },
        {
          title: '',
          desc:
            'Tränke jeder Art haben oft nur 50% ihrer Wirkung auf den Charakter.'
        }
      ],
      cost: 0
    },
    {
      name: 'Auffällig',
      desc: 'Der Charakter bleibt rasch in Erinnerung, positiv wie negativ',
      cost: 0,
      pro: [
        {
          title: '',
          desc: 'Man denkt oft an und spricht häufig über ihn.'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Er wird jedoch auch rasch mit Geschehnissen oder Verbrechen in Verbindung gebracht'
        }
      ]
    },
    {
      name: 'Bipolar',
      desc:
        'Der Charakter durchlebt täglich schwerwiegende Stimmungsschwankungen',
      cost: 0,
      pro: [
        {
          title: '',
          desc:
            'Muss jeden Glück werfen, ob sich seine Laune hebt (und er einen Stresspunkt abbaut) oder senkt (und er einen Stresspunkt erleidet).'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Kann sich störend auf seine Begleiter auswirken (bei einem Kritischen Fehlschlag z.B.).'
        }
      ]
    },
    {
      name: 'Gottesfürchtig',
      desc: 'Der Charakter ist tiefgehend von seiner Religion überzeugt',
      pro: [
        {
          title: '',
          desc:
            'Gebet kann sich einmal am Tag stressreduzierend auswirken (SG 15).'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Ein Verstoß gegen seinen Glauben (auch von Gruppenmitgliedern oder anderen) kann leichten bis sogar immensen Stresszuwachs verursachen.'
        }
      ],
      cost: 0
    },
    {
      name: 'Gleichförmigkeit',
      desc: 'Bedachter Lebensstil aus Vorsicht und Zurückhaltung',
      pro: [
        {
          title: '',
          desc:
            'Eine W1 gilt nicht als Kritischer Fehlschlag, eine W20 nicht als Kritischer Treffer'
        }
      ],
      contra: [
        {
          title: '',
          desc: 'Eine W1 im Kampf beschädigt weiterhin die Waffe.'
        }
      ],
      cost: 0
    },
    {
      name: 'Kannibalismus',
      desc: 'Das krankhafte Interesse am Verzehr der eigenen Rasse',
      pro: [
        {
          title: '',
          desc: 'Das Fleisch der eigenen Rasse zu verzehren, löst Stress'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Kann sich zwanghaft entwickeln, so dass der Charakter Stress (in variabler Höhe) erleidet, wenn er niemanden verspeist.'
        }
      ],
      cost: 0
    },
    {
      name: 'Kleptomanie',
      desc: 'Die zwanghafte Lust auf Diebstahl',
      pro: [
        {
          title: '',
          desc: 'Gewährt aufgrund der Routine +2 Diebstahl (DB).'
        },
        {
          title: '',
          desc:
            'Ein erfolgreicher Diebstahl kann alle vier Stunden einen Stresspunkt abbauen (SG 20)'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Gelegentlich erfährt der Charakter das unglaubliche Bedürfnis, einen Gegenstand zu stehlen. Geht er diesem nicht nach, erleidet er mindestens 2 Stresspunkte.'
        }
      ],
      cost: 0
    },
    {
      name: 'Nekrophilie',
      desc: 'Das manchmal zwanghafte Vergnügen am Töten',
      pro: [
        {
          title: '',
          desc: 'Eine Tötung kann Stress abbauen (Tiere SG 22, Personen SG 10)'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Kann sich jedoch zwanghaft entwickeln, so dass der Charakter 4 Stresspunkte aufbaut, wenn er nichts tötet'
        }
      ],
      cost: 0
    },
    {
      name: 'Psychopathie',
      desc:
        'Die Unfähigkeit, sich in die Gefühle, Schmerzen und Ängste anderer hineinzuversetzen',
      pro: [
        {
          title: '',
          desc:
            'Der Charakter kann selbst die schlimmsten Sünden begehen (wie andere zu häuten, verstümmeln, betrügen oder ausliefern), ohne von Gewissensbissen gequält zu werden.'
        }
      ],
      contra: [],
      cost: 0
    },
    {
      name: 'Sadismus',
      desc: 'Die Lust, andere zu quälen, physisch wie psychisch',
      pro: [
        {
          title: '',
          desc:
            'Eine Person leiden zu sehen, kann einen Stresspunkt lösen (SG 20).'
        },
        {
          title: '',
          desc:
            'Eine Person zu quälen, kann bis zu drei Stresspunkte lösen (SG 10, 15, 20).'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Kann sich jedoch zwanghaft entwickeln, so dass der Charakter Stress (in variabler Höhe) erleidet, wenn er niemanden quält.'
        }
      ],
      cost: 0
    },
    {
      name: 'Schicksalsträchtig',
      desc:
        'Kritische Erfolge wie auch Kritische Fehlschläge verursachen bedeutend mehr Wirkung.',
      pro: [],
      contra: [],
      cost: 0
    },
    {
      name: 'Totenstimme',
      desc: 'Der Charakter spricht zu den Toten … und sie auch zu ihm',
      pro: [
        {
          title: '',
          desc:
            'Er ist in der Lage, die Seele eines Toten heranzubitten und mit ihr zu sprechen.'
        }
      ],
      contra: [
        {
          title: '',
          desc:
            'Im Gegenzug kann er auch von ihnen angesprochen oder sogar heimgesucht werden.'
        },
        {
          title: '',
          desc:
            'In der Nähe von Friedhöfen, Schlachtfeldern, Tragödien und anderen, potenziell von gequälten Seelen heimgesuchten Plätzen entscheidet ein Glückswurf über Besuche aus dem Jenseits.'
        },
        {
          title: '',
          desc:
            'Eine W5 oder darunter bedeutet in diesem Fall einen Geist, der Stress verursacht. Er ist jedoch nur selten gefährlich.'
        }
      ],
      cost: 0
    }
  ],
  negativeTraits: [
    {
      name: 'Ablutomanie',
      desc: 'Schwerer Wasch- und Sauberkeitszwang',
      pro: [
        {
          title: '',
          desc:
            'Gewährt +2 RH, wenn der Charakter und seine Kleider sauber sind.'
        }
      ],
      contra: [
        {
          title: '',
          desc: 'Schmutzig zu sein verursacht pro Rast einen Stresspunkt'
        },
        {
          title: '',
          desc:
            'Der Charakter muss sich und seine Kleidung täglich gründlich waschen (Tätigkeit)'
        }
      ],
      cost: -5
    },
    {
      name: 'Abhängigkeit',
      desc:
        'Der Charakter ist von einer leichten Droge abhängig, wie Alkohol oder Sumpfkraut',
      cost: -2,
      contra: [
        {
          title: '',
          desc:
            'Wird die Droge nicht täglich eingenommen, erleidet der Charakter ein Suchtzittern     und -3 auf alle Würfe sowie einen Stresspunkt pro Rast'
        },
        {
          title: '',
          desc: 'Alkohol baut keinen Stress mehr ab.'
        }
      ]
    },
    {
      name: 'Akrophobie',
      desc: 'Höhenangst',
      cost: -1,
      contra: [
        {
          title: '',
          desc: 'Verursacht Stress bei Aktivitäten in großer Höhe.'
        },
        {
          title: '',
          desc:
            'Kann zudem bereits bei geringer Höhe Stress auslösen (PY gegen SG)'
        }
      ]
    },
    {
      name: 'Alchuophobie',
      desc: 'Die Angst vor der Dunkelheit (und was darin lauert)',
      contra: [
        {
          title: '',
          desc:
            'Aktivitäten im Dämmerlicht verursachen 1 Stress, in Dunkelheit sogar 2'
        },
        {
          title: '',
          desc:
            'Auf Reisen muss das Lagerfeuer vor dem Sonnenuntergang entzündet sein'
        }
      ],
      pro: [],
      cost: -3
    },
    {
      name: 'Algophobie',
      desc: 'Die Angst vor Schmerzen',
      contra: [
        {
          title: '',
          desc:
            'Verursacht jede Rast Stress, solange sich der Charakter unter 100% seiner Lebenspunkte befindet.'
        }
      ],
      pro: [],
      cost: -5
    },
    {
      name: 'Alpträume',
      desc: 'Alpträume plagen den Charakter des Nachts',
      contra: [
        {
          title: '',
          desc:
            'Einen Glückswurf entscheidet jeden Schlaf, ob die Alpträume zurückkehren. Bei 10 und darunter erleidet der Charakter Stress, bei einem Kritischen Fehlschlag (W1) sogar 3.'
        }
      ],
      pro: [],
      cost: -2
    },
    {
      name: 'Aquaphobie',
      desc:
        'Ausgeprägte Angst vor Gewässern, nicht aber vor Wasser im Allgemeinen',
      contra: [
        {
          title: '',
          desc:
            'Die Überquerung eines Gewässers auf einer Brücke verursacht 1 Stress.'
        },
        {
          title: '',
          desc:
            'Die Überquerung eines Gewässers auf einem Boot oder Schiff verursacht 2 Stress.'
        },
        {
          title: '',
          desc:
            'In ein Wasser zu gehen, verursacht mindestens 2 bis 5 Stress (SG 20, 25, 30).'
        }
      ],
      pro: [],
      cost: -3
    },
    {
      name: 'Atychophobie',
      desc:
        'Ausgeprägte Angst davor, Fehler zu begehen, bis hin zu neurotischem Perfektionismus',
      contra: [
        {
          title: '',
          desc:
            'Jeder nicht bestandene Wurf verursacht außerhalb des Kampfes kann einen Stresspunkt verursachen (PY gegen SG 22).'
        },
        {
          title: '',
          desc: 'Ein K.O verursacht dagegen 5 (statt nur 3) Stresspunkte.'
        }
      ],
      pro: [],
      cost: -8
    },
    {
      name: 'Beschäftigungs-neurose',
      desc: 'Mittelschwere Aktivitätsneurose, innere Unruhe',
      contra: [
        {
          title: '',
          desc:
            'Schon kurze Phasen der Inaktivität (ab etwa 20 Minuten) können den Charakter nervös machen und einen Glückswurf fordern. Bei 11 und darüber erleidet lediglich der Charakter einen Stresspunkt, bei 10 und darunter die gesamte Gruppe.'
        }
      ],
      pro: [],
      cost: -3
    },
    {
      name: 'Bluterkrankheit',
      desc:
        'Leichte, aber dennoch Blutererkrankung, die Wunden langsamer schließen lässt.',
      contra: [
        {
          title: '',
          desc: 'Keine automatische Lebenspunkt (LP)-Regeneration.'
        },
        {
          title: '',
          desc:
            'Diese muss durch Regenerationstränke oder -zauber angeregt werden.'
        },
        {
          title: '',
          desc:
            'Chirurgische Eingriffe am Charakter erleiden einen Malus von -4.'
        }
      ],
      pro: [],
      cost: -8
    },
    {
      name: 'Dysmorphophobie',
      desc: 'Ausgeprägte Angst vor Entstellung',
      contra: [
        {
          title: '',
          desc:
            'Narben oder offen sichtbare Brüche können permanent Stress pro Rast verursachen.'
        },
        {
          title: '',
          desc: 'Jeder verletzende Treffer verursacht 1 Stress.'
        }
      ],
      pro: [],
      cost: -5
    },
    {
      name: 'Epilepsie',
      desc:
        'Jeder Stresszuwachs kann einen epileptischen Anfall auslösen. Hierzu muss der Spieler Glück werfen',
      pro: [],
      contra: [
        {
          title: '',
          desc:
            'W1 ist ein schwerer, epileptischer Anfall und gleichbedeutend mit einem K.O. (einschließlich Abzug aller Trefferpunkte).'
        },
        {
          title: '',
          desc:
            'W2 bis W10 ist ein leichter Anfall, der lediglich einen Stresspunkt verursacht.'
        },
        {
          title: '',
          desc: 'W11 und darüber ohne Wirkung.'
        },
        {
          title: '',
          desc:
            'Eine W20 bedeutet, bis zur nächsten Rast von Anfällen verschont zu bleiben.'
        }
      ],
      cost: -8
    },
    {
      name: 'Haematophobie',
      desc: 'Ausgeprägte Angst vor Blut',
      contra: [
        {
          title: '',
          desc: 'Verursacht einen Stresspunkt bei der Sicht von Blut.'
        },
        {
          title: '',
          desc: 'Verursacht 2 Stresspunkte bei der Sicht des eigenen Blutes.'
        }
      ],
      pro: [],
      cost: -5
    },
    {
      name: 'Hydrargyophobie',
      desc: 'Die Angst vor Medikamente und Einwirkung auf den eigenen Körper',
      contra: [
        {
          title: '',
          desc:
            'Verursacht einen Stresspunkt, wenn der Charakter einen Heiltrank einnimmt, einen Talisman verwendet oder ein Zauber auf ihn gewirkt wird.'
        }
      ],
      pro: [],
      cost: -4
    },
    {
      name: 'Hylophobie',
      desc:
        'Die Angst vor Wäldern und dichter Vegetation (nicht kombinierbar mit Naturbursche)',
      contra: [
        {
          title: '',
          desc:
            'Das Betreten eines Waldes verursacht täglich eine variable Menge an Stress.'
        }
      ],
      pro: [],
      cost: -3
    },
    {
      name: 'Insomnie',
      desc: 'Schlafstörungen bis hin zu Schlaflosigkeit',
      contra: [
        {
          title: '',
          desc:
            'Der Charakter regeneriert mit jeder Rast nur die Hälfte seines Staminas (EN).'
        }
      ],
      pro: [],
      cost: -2
    },
    {
      name: 'Klaustrophobie',
      desc: 'Die Angst vor engen Räumen, Isolation und Eingesperrtsein',
      contra: [
        {
          title: '',
          desc:
            'Sich in enge, gefährliche Korridore oder Räume zu begeben, sich sozusagen der Gefahr des Eingeschlossenwerdens auszusetzen, verursacht einen Stresspunkt.'
        },
        {
          title: '',
          desc:
            'Eingeschlossen zu werden, verursacht große Mengen Stress (2 oder mehr).'
        }
      ],
      pro: [
        {
          title: '',
          desc: 'Einfach nur ein Haus zu betreten, verursacht keinen Stress.'
        }
      ],
      cost: -3
    },
    {
      name: 'Korrumpiertes Blut',
      desc: 'Der Charakter ist unheilbar mit der Korruption infiziert',
      contra: [
        {
          title: '',
          desc: 'Jeden Tag steigt die Korruption des Charakters um 1%.'
        },
        {
          title: '',
          desc:
            'Gewährt Immunität gegen Gift, Krankheiten, Gedankenangriffe und weitere Korruption.'
        },
        {
          title: '',
          desc: 'Ab 50% ist das Betreten von geweihtem Boden schmerzhaft.'
        }
      ],
      pro: [],
      cost: -8
    },
    {
      name: 'Labil',
      desc:
        'Stark den Einflüssen gegenüber sensible Psyche, oft eine Künstlerseele',
      contra: [
        {
          title: '',
          desc: 'Verursacht -10 Psyche (PY).'
        },
        {
          title: '',
          desc: 'Verursacht +100% Stresszuwachs.'
        }
      ],
      pro: [
        {
          title: '',
          desc: 'Gewährt +10 Bewusstsein (BE).'
        }
      ],
      cost: -6
    },
    {
      name: 'Melancholie',
      desc:
        'Eine melancholische, pessimistische Grundhaltung, meist mit Depressionen',
      contra: [
        {
          title: '',
          desc: 'Der Charakter erleidet jeden Tag einen Stresspunkt.'
        }
      ],
      pro: [],
      cost: -5
    },
    {
      name: 'Nosophobie',
      desc: 'Angst vor Krankheiten und Infektionen',
      contra: [
        {
          title: '',
          desc:
            'Die Nähe zu Toten, Kadavern und Infektionsquellen verursacht Stress (variabel).'
        },
        {
          title: '',
          desc:
            'Das Durchsuchen von Leichen verursacht mindestens 2 oder mehr Stress.'
        }
      ],
      pro: [],
      cost: -3
    },
    {
      name: 'Nymphomanie',
      desc: 'Ausgeprägte Sexsucht',
      contra: [
        {
          title: '',
          desc:
            'Hatte der Charakter zwei Tage lang keinen Beischlaf, erleidet er jeden Tag 1 Stress.'
        }
      ],
      pro: [],
      cost: -2
    },
    {
      name: 'Pyrophobie',
      desc: 'Ausgeprägte Angst vor Feuer',
      contra: [
        {
          title: '',
          desc:
            'Die Nähe zu Feuer, sogar einem Lagerfeuer verursacht Stress (in variabler Menge)'
        },
        {
          title: '',
          desc:
            'Verletzung oder Beschuss durch Feuer verursacht 2 Stresspunkte.'
        }
      ],
      pro: [],
      cost: -3
    },
    {
      name: 'Thanatophobie',
      desc: 'Ausgeprägte Angst vor dem Tod',
      contra: [
        {
          title: '',
          desc:
            'Verursacht 1 Stress pro Rast, solange sich der Charakter unter 50% seiner Lebenspunkte (LP) befindet.'
        }
      ],
      pro: [],
      cost: -2
    },
    {
      name: 'Timoriaphobie',
      desc:
        'Die Angst vor schwerer Strafe, der Justiz und dem „Erwischt werden“',
      contra: [
        {
          title: '',
          desc:
            'Das Begehen von Verbrechen (ob durch den Charakter oder seine Verbündeten) verursacht Stress, wobei dieser mit der Schwere und Nachverfolgbarkeit variiert.'
        },
        {
          title: '',
          desc:
            'Ein Diebstahl in einer Stadt bspw. fordert einen Stresspunkt, ein Einbruch zwei, ein heimlicher Mord dagegen drei.'
        },
        {
          title: '',
          desc:
            'In Dörfern, Wäldern und abseits der gerichtlichen Verfolgbarkeit sinkt die Stress-Wahrscheinlichkeit.'
        }
      ],
      pro: [],
      cost: -6
    },
    {
      name: 'Verhext',
      desc: 'Der Charakter wird vom Pech verfolgt',
      contra: [
        {
          title: '',
          desc: 'Eine W2 gilt bereits als Kritischer Fehlschlag.'
        },
        {
          title: '',
          desc:
            'Rückschläge und Unglücksfälle (wie ein Hinterhalt) treffen den Charakter häufiger.'
        }
      ],
      pro: [],
      cost: -8
    },
    {
      name: 'Verwöhnt',
      desc:
        'Der Charakter stammt aus gutem Hause und / oder kennt keine Entbehrung',
      contra: [
        {
          title: '',
          desc:
            'Mittelmäßige oder schlechte Tagesrationen verursachen unabwendbar Stress.'
        },
        {
          title: '',
          desc:
            'Niedere Tätigkeiten (wie Handwerk oder Lageraufbau) verursachen Stress.'
        },
        {
          title: '',
          desc:
            'Eine mangelhafte Schlafunterlage (z.B. Matte und Schlafsack) verursachen Stress.'
        }
      ],
      pro: [],
      cost: -5
    }
  ],
  item: {
    name: '',
    desc: '',
    class: '',
    slot: '',
    size: '',
    modifiers: {
      damage: {
        oneHanded: {
          label: 'Einhandwaffen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        twoHanded: {
          label: 'Zweinhandwaffen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        finesse: {
          label: 'Finessewaffen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        whip: {
          label: 'Peitschen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        unarmed: {
          label: 'Unbewaffnet',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        crossbow: {
          label: 'Armbrüste',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        bow: {
          label: 'Bögen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        thrown: {
          label: 'Wurfwaffen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        magicSingle: {
          label: 'Einrundige Magie',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        magicDouble: {
          label: 'Zweirundige Magie',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        powerSingle: {
          label: 'Einrundige Mächte',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        powerDouble: {
          label: 'Zweirundige Mächte',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        }
      },
      skills: {
        AK: {
          label: 'Akrobatik',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        AU: {
          label: 'Autorität',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        At: {
          label: 'Athletik',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        BE: {
          label: 'Bewusstsein',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        DB: {
          label: 'Diebstahl',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        FF: {
          label: 'Fingerfertigkeit',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        HW: {
          label: 'Handwerk',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        IF: {
          label: 'Infilitration',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        KE: {
          label: 'Konzentration',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        OG: {
          label: 'Organisation',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        PY: {
          label: 'Psyche',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        PS: {
          label: 'Psychologie',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        RE: {
          label: 'Reiterei',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        RH: {
          label: 'Rhetorik',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        VS: {
          label: 'Verstaendnis',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        WH: {
          label: 'Wiederstand',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        }
      },
      external: {
        artifacts: {
          label: 'Artefakt-Limit',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        estus: {
          label: 'Estus -/Seelen-Limit',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        talisman: {
          label: 'Talisman-Limit',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        intus: {
          label: 'Intus-Limit',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        }
      },
      hp: {
        TP: {
          label: 'Trefferpunkte',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        LP: {
          label: 'Lebenspunkte',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        LPReg: {
          label: 'Lebenspunkt-Regeneration',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        }
      },
      attack: {
        war: {
          label: 'Krigeswaffen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        finesse: {
          label: 'Finessewaffen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        range: {
          label: 'Fernkampf',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        thrown: {
          label: 'Schleuderwaffen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        unarmed: {
          label: 'Unbewaffnet',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        }
      },
      defense: {
        dodge: {
          label: 'Ausweichen',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        block: {
          label: 'Blocken',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        parry: {
          label: 'Parieren',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        RW: {
          label: 'Ruestungswert',
          mod: 0,
          multi: 0,
          condition: ''
        }
      },
      limit: {
        focus: {
          label: 'Fokus Limit',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        stamina: {
          label: 'Energie',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        stress: {
          label: 'StressLimit',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        }
      },
      attributes: {
        KK: {
          label: 'Körperkraft',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        GS: {
          label: 'Geschicklichkeit',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        KN: {
          label: 'Konstitution',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        WN: {
          label: 'Wahrnehmnung',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        WK: {
          label: 'Willenskraft',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        VS: {
          label: 'Verstaendnis',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        IN: {
          label: 'Intelligenz',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        WS: {
          label: 'Weisheit',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        CH: {
          label: 'Charisma',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        }
      },
      caster: {
        MP: {
          label: 'Manipulation',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        PJ: {
          label: 'Projektion',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        },
        PT: {
          label: 'Protektion',
          mod: 0,
          multi: 0,
          condition: '',
          active: 0
        }
      }
    }
  },
  conditions: []
}
