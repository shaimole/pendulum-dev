export default [
  {
    name: 'Atronachkörper',
    desc: 'Der Charakter verfügt über einen Magie abstoßenden Körper',
    pro: [
      {
        title: '',
        desc: 'Physische Zauber (wie Feuerbälle) erzielen oft nur 50% des Effekts.'
      },
      {
        title: '',
        desc: 'Arkane, rein magische Zauber, wie auch magische Runen oder Artefakte haben keinen Effekt und auch keine Wirkung. Ein magisches Schwert ist bspw. nur ein Schwert.'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Heilzauber funktionieren auf den Charakter nicht.'
      },
      {
        title: '',
        desc: 'Tränke jeder Art haben oft nur 50% ihrer Wirkung auf den Charakter.'
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
        desc: 'Er wird jedoch auch rasch mit Geschehnissen oder Verbrechen in Verbindung gebracht'
      }
    ]
  },
  {
    name: 'Bipolar',
    desc: 'Der Charakter durchlebt täglich schwerwiegende Stimmungsschwankungen',
    cost: 0,
    pro: [
      {
        title: '',
        desc: 'Muss jeden Glück werfen, ob sich seine Laune hebt (und er einen Stresspunkt abbaut) oder senkt (und er einen Stresspunkt erleidet).'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Kann sich störend auf seine Begleiter auswirken (bei einem Kritischen Fehlschlag z.B.).'
      }
    ]
  },
  {
    name: 'Gottesfürchtig',
    desc: 'Der Charakter ist tiefgehend von seiner Religion überzeugt',
    pro: [
      {
        title: '',
        desc: 'Gebet kann sich einmal am Tag stressreduzierend auswirken (SG 15).'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Ein Verstoß gegen seinen Glauben (auch von Gruppenmitgliedern oder anderen) kann leichten bis sogar immensen Stresszuwachs verursachen.'
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
        desc: 'Eine W1 gilt nicht als Kritischer Fehlschlag, eine W20 nicht als Kritischer Treffer'
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
        desc: 'Kann sich zwanghaft entwickeln, so dass der Charakter Stress (in variabler Höhe) erleidet, wenn er niemanden verspeist.'
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
        desc: 'Ein erfolgreicher Diebstahl kann alle vier Stunden einen Stresspunkt abbauen (SG 20)'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Gelegentlich erfährt der Charakter das unglaubliche Bedürfnis, einen Gegenstand zu stehlen. Geht er diesem nicht nach, erleidet er mindestens 2 Stresspunkte.'
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
        desc: 'Kann sich jedoch zwanghaft entwickeln, so dass der Charakter 4 Stresspunkte aufbaut, wenn er nichts tötet'
      }
    ],
    cost: 0
  },
  {
    name: 'Psychopathie',
    desc: 'Die Unfähigkeit, sich in die Gefühle, Schmerzen und Ängste anderer hineinzuversetzen',
    pro: [
      {
        title: '',
        desc: 'Der Charakter kann selbst die schlimmsten Sünden begehen (wie andere zu häuten, verstümmeln, betrügen oder ausliefern), ohne von Gewissensbissen gequält zu werden.'
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
        desc: 'Eine Person leiden zu sehen, kann einen Stresspunkt lösen (SG 20).'
      },
      {
        title: '',
        desc: 'Eine Person zu quälen, kann bis zu drei Stresspunkte lösen (SG 10, 15, 20).'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Kann sich jedoch zwanghaft entwickeln, so dass der Charakter Stress (in variabler Höhe) erleidet, wenn er niemanden quält.'
      }
    ],
    cost: 0
  },
  {
    name: 'Schicksalsträchtig',
    desc: 'Kritische Erfolge wie auch Kritische Fehlschläge verursachen bedeutend mehr Wirkung.',
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
        desc: 'Er ist in der Lage, die Seele eines Toten heranzubitten und mit ihr zu sprechen.'
      }
    ],
    contra: [
      {
        title: '',
        desc: 'Im Gegenzug kann er auch von ihnen angesprochen oder sogar heimgesucht werden.'
      },
      {
        title: '',
        desc: 'In der Nähe von Friedhöfen, Schlachtfeldern, Tragödien und anderen, potenziell von gequälten Seelen heimgesuchten Plätzen entscheidet ein Glückswurf über Besuche aus dem Jenseits.'
      },
      {
        title: '',
        desc: 'Eine W5 oder darunter bedeutet in diesem Fall einen Geist, der Stress verursacht. Er ist jedoch nur selten gefährlich.'
      }
    ],
    cost: 0
  }
]
