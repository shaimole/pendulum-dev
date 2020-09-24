export default [
  {
    name: 'Drachenblut',
    desc: 'In den Adern des Charakters pulsiert das Drachenfeuer (nicht von Drakoniden wählbar):',
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
    desc: 'Der Charakter ist an Enthaltsamkeit und Bescheidenheit gewohnt: Minderwertiges Essen oder schlechte Schlafunterlage verursachen keinen Stress.',
    cost: 2,
    pro: [
      {
        title: '',
        desc: 'Minderwertiges Essen oder schlechte Schlafunterlage verursachen keinen Stress.'
      }
    ]
  },
  {
    name: 'Gesegnet',
    desc: 'Ob durch göttlichen Segen oder reinen Zufall, der Charakter hat unnatürlich viel Glück:',
    cost: 8,
    pro: [
      {
        title: '',
        desc: 'Eine W19 gilt bereits als Kritischer Erfolg oder Kritischer Treffer.'
      },
      {
        title: '',
        desc: 'Glücksfälle widerfahren den Charakter häufiger, Unglück zuerst seine Verbündeten.'
      }
    ]
  },
  {
    name: 'Hellsichtig',
    desc: 'Der Charakter verfügt über hellseherische Fähigkeiten',
    pro: [
      {
        title: '',
        desc: 'Gelegentlich können dem Charakter nützliche Visionen erreichen (Glückswurf)'
      },
      {
        title: '',
        desc: 'Diese Visionen können auch forciert werden, bspw. durch Meditation oder Drogen.'
      }
    ],
    contra: [],
    cost: 5
  },
  {
    name: 'Feenblut',
    desc: 'In den Adern des Charakters pulsiert das magische Blut eines Feenwesens',
    pro: [
      {
        title: '',
        desc: 'Gewährt magische Affinität und erlaubt es, Magie zielsicher zu erspüren.'
      },
      {
        title: '',
        desc: 'Gewährt Wirkern +2 auf alle magischen Identifikationen.'
      },
      {
        title: '',
        desc: 'Tiere müssen sich überwinden, bevor sie den Charakter attackieren (PY gegen SG 22).'
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
        desc: 'Sich in einem Wald aufzuhalten baut einmal pro Rast einen Stresspunkt ab.'
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
        desc: 'Die Besichtigung neuer, interessanter Orte (wie ein Forum, eine neue Stadt, eine Kathedrale o.ä.) löst einen Stresspunkt.'
      },
      {
        title: '',
        desc: 'Die Entdeckung ungewöhnlicher Orte (wie Ruinen u.ä.) lösen einen Stresspunkt.'
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
        desc: 'Ein K.O. oder immenser Schmerz können keinen Stress mehr verursachen.'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Der Charakter kann zu selbstverletzendem Verhalten neigen (BE gegen SG).'
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
    desc: 'Eine grundlegend positive Einstellung (nicht kombinierbar mit Melancholie)',
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
    desc: 'Der Charakter verfügt über einen feinfühligen Instinkt bzw. ein gutes Bauchgefühl.',
    pro: [
      {
        title: '',
        desc: 'Ermöglicht es, Hinterhalte, Fallen, Intrigen o.ä. vorauszuahnen (BE gegen SG).'
      },
      {
        title: '',
        desc: 'Erlaubt es, andere Personen besser einzuschätzen: Gewährt +3 PY sowie die Fähigkeit, sogar bei Fehlschlägen oder ohne Würfe Gedanken zu erahnen.'
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
        desc: 'Ein voller, ungestörter Schlaf von acht Stunden löst einen Stresspunkt'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Wird der Schlaf dagegen gestört, erleidet der Charakter 2 Stresspunkte.'
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
        desc: 'Gewährt +2 auf alle Würfe bei Tageslicht oder vergleichbare Helligkeit.'
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
        desc: 'Ist ein tierischer Begleiter vorhanden, löst sich pro Tag ein Stresspunkt.'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Stirbt jener Begleiter, erleidet der Charakter 10 Stress oder sogar ein Trauma'
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
    desc: 'Der Charakter hinterlässt nur selten und auch nur geringfügig Eindruck bei anderen',
    pro: [
      {
        title: '',
        desc: 'Es wird nur selten an ihn gedacht oder über ihn gesprochen.'
      },
      {
        title: '',
        desc: 'Daher wird er nur selten mit Geschehnissen oder Verbrechen in Verbindung gebracht.'
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
        desc: 'Gewährt +3 Rhetorik (RH) für jede Überzeugung während des Ersteindrucks.'
      },
      {
        title: '',
        desc: 'Der Charakter wird seltener mit Verbrechen in Verbindung gebracht.'
      }
    ],
    contra: [],
    cost: 3
  }

]
