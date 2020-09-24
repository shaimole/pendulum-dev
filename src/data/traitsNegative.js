export default [
  {
    name: 'Ablutomanie',
    desc: 'Schwerer Wasch- und Sauberkeitszwang',
    pro: [
      {
        title: '',
        desc: 'Gewährt +2 RH, wenn der Charakter und seine Kleider sauber sind.'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Schmutzig zu sein verursacht pro Rast einen Stresspunkt'
      },
      {
        title: '',
        desc: 'Der Charakter muss sich und seine Kleidung täglich gründlich waschen (Tätigkeit)'
      }
    ],
    cost: -5
  },
  {
    name: 'Abhängigkeit',
    desc: 'Der Charakter ist von einer leichten Droge abhängig, wie Alkohol oder Sumpfkraut',
    cost: -2,
    contra: [
      {
        title: '',
        desc: 'Wird die Droge nicht täglich eingenommen, erleidet der Charakter ein Suchtzittern     und -3 auf alle Würfe sowie einen Stresspunkt pro Rast'
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
        desc: 'Kann zudem bereits bei geringer Höhe Stress auslösen (PY gegen SG)'
      }
    ]
  },
  {
    name: 'Alchuophobie',
    desc: 'Die Angst vor der Dunkelheit (und was darin lauert)',
    contra: [
      {
        title: '',
        desc: 'Aktivitäten im Dämmerlicht verursachen 1 Stress, in Dunkelheit sogar 2'
      },
      {
        title: '',
        desc: 'Auf Reisen muss das Lagerfeuer vor dem Sonnenuntergang entzündet sein'
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
        desc: 'Verursacht jede Rast Stress, solange sich der Charakter unter 100% seiner Lebenspunkte befindet.'
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
        desc: 'Einen Glückswurf entscheidet jeden Schlaf, ob die Alpträume zurückkehren. Bei 10 und darunter erleidet der Charakter Stress, bei einem Kritischen Fehlschlag (W1) sogar 3.'
      }
    ],
    pro: [],
    cost: -2
  },
  {
    name: 'Aquaphobie',
    desc: 'Ausgeprägte Angst vor Gewässern, nicht aber vor Wasser im Allgemeinen',
    contra: [
      {
        title: '',
        desc: 'Die Überquerung eines Gewässers auf einer Brücke verursacht 1 Stress.'
      },
      {
        title: '',
        desc: 'Die Überquerung eines Gewässers auf einem Boot oder Schiff verursacht 2 Stress.'
      },
      {
        title: '',
        desc: 'In ein Wasser zu gehen, verursacht mindestens 2 bis 5 Stress (SG 20, 25, 30).'
      }
    ],
    pro: [],
    cost: -3
  },
  {
    name: 'Atychophobie',
    desc: 'Ausgeprägte Angst davor, Fehler zu begehen, bis hin zu neurotischem Perfektionismus',
    contra: [
      {
        title: '',
        desc: 'Jeder nicht bestandene Wurf verursacht außerhalb des Kampfes kann einen Stresspunkt verursachen (PY gegen SG 22).'
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
        desc: 'Schon kurze Phasen der Inaktivität (ab etwa 20 Minuten) können den Charakter nervös machen und einen Glückswurf fordern. Bei 11 und darüber erleidet lediglich der Charakter einen Stresspunkt, bei 10 und darunter die gesamte Gruppe.'
      }
    ],
    pro: [],
    cost: -3
  },
  {
    name: 'Bluterkrankheit',
    desc: 'Leichte, aber dennoch Blutererkrankung, die Wunden langsamer schließen lässt.',
    contra: [
      {
        title: '',
        desc: 'Keine automatische Lebenspunkt (LP)-Regeneration.'
      },
      {
        title: '',
        desc: 'Diese muss durch Regenerationstränke oder -zauber angeregt werden.'
      },
      {
        title: '',
        desc: 'Chirurgische Eingriffe am Charakter erleiden einen Malus von -4.'
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
        desc: 'Narben oder offen sichtbare Brüche können permanent Stress pro Rast verursachen.'
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
    desc: 'Jeder Stresszuwachs kann einen epileptischen Anfall auslösen. Hierzu muss der Spieler Glück werfen',
    pro: [],
    contra: [
      {
        title: '',
        desc: 'W1 ist ein schwerer, epileptischer Anfall und gleichbedeutend mit einem K.O. (einschließlich Abzug aller Trefferpunkte).'
      },
      {
        title: '',
        desc: 'W2 bis W10 ist ein leichter Anfall, der lediglich einen Stresspunkt verursacht.'
      },
      {
        title: '',
        desc: 'W11 und darüber ohne Wirkung.'
      },
      {
        title: '',
        desc: 'Eine W20 bedeutet, bis zur nächsten Rast von Anfällen verschont zu bleiben.'
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
        desc: 'Verursacht einen Stresspunkt, wenn der Charakter einen Heiltrank einnimmt, einen Talisman verwendet oder ein Zauber auf ihn gewirkt wird.'
      }
    ],
    pro: [],
    cost: -4
  },
  {
    name: 'Hylophobie',
    desc: 'Die Angst vor Wäldern und dichter Vegetation (nicht kombinierbar mit Naturbursche)',
    contra: [
      {
        title: '',
        desc: 'Das Betreten eines Waldes verursacht täglich eine variable Menge an Stress.'
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
        desc: 'Der Charakter regeneriert mit jeder Rast nur die Hälfte seines Staminas (EN).'
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
        desc: 'Sich in enge, gefährliche Korridore oder Räume zu begeben, sich sozusagen der Gefahr des Eingeschlossenwerdens auszusetzen, verursacht einen Stresspunkt.'
      },
      {
        title: '',
        desc: 'Eingeschlossen zu werden, verursacht große Mengen Stress (2 oder mehr).'
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
        desc: 'Gewährt Immunität gegen Gift, Krankheiten, Gedankenangriffe und weitere Korruption.'
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
    desc: 'Stark den Einflüssen gegenüber sensible Psyche, oft eine Künstlerseele',
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
    desc: 'Eine melancholische, pessimistische Grundhaltung, meist mit Depressionen',
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
        desc: 'Die Nähe zu Toten, Kadavern und Infektionsquellen verursacht Stress (variabel).'
      },
      {
        title: '',
        desc: 'Das Durchsuchen von Leichen verursacht mindestens 2 oder mehr Stress.'
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
        desc: 'Hatte der Charakter zwei Tage lang keinen Beischlaf, erleidet er jeden Tag 1 Stress.'
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
        desc: 'Die Nähe zu Feuer, sogar einem Lagerfeuer verursacht Stress (in variabler Menge)'
      },
      {
        title: '',
        desc: 'Verletzung oder Beschuss durch Feuer verursacht 2 Stresspunkte.'
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
        desc: 'Verursacht 1 Stress pro Rast, solange sich der Charakter unter 50% seiner Lebenspunkte (LP) befindet.'
      }
    ],
    pro: [],
    cost: -2
  },
  {
    name: 'Timoriaphobie',
    desc: 'Die Angst vor schwerer Strafe, der Justiz und dem „Erwischt werden“',
    contra: [
      {
        title: '',
        desc: 'Das Begehen von Verbrechen (ob durch den Charakter oder seine Verbündeten) verursacht Stress, wobei dieser mit der Schwere und Nachverfolgbarkeit variiert.'
      },
      {
        title: '',
        desc: 'Ein Diebstahl in einer Stadt bspw. fordert einen Stresspunkt, ein Einbruch zwei, ein heimlicher Mord dagegen drei.'
      },
      {
        title: '',
        desc: 'In Dörfern, Wäldern und abseits der gerichtlichen Verfolgbarkeit sinkt die Stress-Wahrscheinlichkeit.'
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
        desc: 'Rückschläge und Unglücksfälle (wie ein Hinterhalt) treffen den Charakter häufiger.'
      }
    ],
    pro: [],
    cost: -8
  },
  {
    name: 'Verwöhnt',
    desc: 'Der Charakter stammt aus gutem Hause und / oder kennt keine Entbehrung',
    contra: [
      {
        title: '',
        desc: 'Mittelmäßige oder schlechte Tagesrationen verursachen unabwendbar Stress.'
      },
      {
        title: '',
        desc: 'Niedere Tätigkeiten (wie Handwerk oder Lageraufbau) verursachen Stress.'
      },
      {
        title: '',
        desc: 'Eine mangelhafte Schlafunterlage (z.B. Matte und Schlafsack) verursachen Stress.'
      }
    ],
    pro: [],
    cost: -5
  }

]
