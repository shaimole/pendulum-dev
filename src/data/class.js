export default [
  {
    item: 'warrior',
    name: 'Krieger',
    desc: 'Offensiver wie defensiver Kämpfer, robust und Meister aller Waffen',
    pro: [
      { title: 'Gutes Durchhaltevermögen', desc: 'Können beliebig oft pro Rast die Aktion „Fokus“ durchführen, ohne Stress aufzubauen.Berechnung der Trefferpunkte (TP): 20 + (Konstitution x 6) + (Willenskraft x 3).' },
      { title: 'Robuste Physis', desc: 'Berechnung der Lebenspunke (LP): 60 + (Konstitution x 27).' },
      { title: 'Gerüstet', desc: 'Beginnt mit Rüstungsklasse 2.' },
      { title: 'Waffenmeister', desc: 'Erhält +2 Schaden für unbewaffnet, einhändige und Fernkampwaffen, +3 Schaden für zweihändige Waffen' },
      { title: 'Kampferfahren', desc: 'Erhält +1 auf Angriffswert (AW), Verteidigungswert (VW), Blockwert (BW).' }
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
  }, {
    item: 'priest',
    name: 'Priester',
    desc: 'Magiewirker, der seine Macht von Entitäten aus dem Äther bezieht. Er dient ihnen dafür als Sprachrohr und Priester.',
    pro: [
      { title: 'Mächte', desc: 'Kann Priestermächte wirken: Er erhält zu Beginn die Waffenklassen „Manipulation“ und „Projektion“.' },
      { title: 'Spirituell', desc: 'Erhält +1 Stressresistenz.' },
      { title: 'Begrenztes magisches Handwerk', desc: 'Kann Runen und Siegel schreiben und Talismane erschaffen.' }
    ],
    contra: []
  }, {
    item: 'worker',
    name: 'Handwerker',
    desc: 'Bauer, Handwerker, Kaufmann, Gelehrter oder Künstler, der sich vor allem auf bürgerliche Tugenden versteht.',
    pro: [
      { title: 'Arbeitskleidung', desc: 'Beginnt mit Rüstungsklasse 1.' },
      { title: 'Korrekturkonzept', desc: 'Darf einmal am Tag einen Alltagswurf (wie Überzeugung) oder zwei Kampfwürfe wiederholen.' },
      { title: 'Routine', desc: 'Kann täglich eine Tätigkeit ohne Tageszeitverlust durchführen.' },
      { title: 'Organisiert', desc: 'Erhält +1 Inventarplatz, wenn der Charakter einen mindestens mittelgroßen Rucksack trägt.' },
      { title: 'Pragmatisch', desc: 'Erhält +1 Handwerk (HW), Rhetorik (RH).' }
    ],
    contra: [
      { title: 'Zivilist', desc: 'Darf zu Beginn keine Waffenklasse auswählen.' }
    ]
  }, {
    item: 'rogue',
    name: 'Schurke',
    desc: 'Dieb, Einbrecher, Attentäter, Agent und Jäger, der sich im Kampf vor allem auf Täuschung und Finten verlässt.',
    pro: [
      { title: 'Waffe erster Wahl', desc: 'Darf zu Beginn eine Waffenklasse auswählen.' },
      { title: 'Diebeshandwerk', desc: 'Erhält +1 Diebstahl (DB), Infiltration (IF) und Organisation (OG)' },
      { title: 'Geschickt', desc: 'Erhält +1 Akrobatik (AK).' },
      { title: 'Erfolgsgarantie', desc: 'Erfolgsgarantie: Kann einmal pro Rast einen Wurf als eine 15 gelten lassen. Verfällt ungenutzt.' }],
    contra: [
    ]
  }, {
    item: 'mage',
    name: 'Magier',
    desc: 'Magiewirker, der das Mana mit Logik und komplexen Zauberformeln zu seinem Nutzen formt. Auch Hermetiker genannt.',
    pro: [
      { title: 'Magiebegabt', desc: 'Kann Zaubersprüche wirken: Er erhält zu Beginn die Waffenklassen „Manipulation“, „Projektion“ und „Protektion“.' },
      { title: 'Geschult', desc: 'Kann Lesen und Schreiben' },
      { title: 'Magisches Handwerk', desc: 'Kann Runen und Siegel schreiben, Schriftrollen erstellen und Talismane erschaffen.' }],
    contra: []
  }
]
