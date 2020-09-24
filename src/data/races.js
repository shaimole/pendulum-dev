export default {
  human: {
    id: 'human',
    name: 'Mensch',
    attributes: {},
    desc: 'Mit dem Fall der Titanen vor etwa sechstausend Jahren begann das Zeitalter der Menschen. Ihre enorme Anpassungsfähigkeit und Vielseitigkeit macht sie heute zum mächtigsten Volk am Einstsee und vermutlich auf der ganzen Welt; ihr Gier und ihre Sturheit zu einem ernstzunehmenden Gegner. Als ein zahlenstarkes Volk treten die Menschen in allen Arten der Herrschaftsformen in Erscheinung, ob nun von Königen regiert, in demokratisch organisierten Republiken oder unter der Theokratie des Roten Kaisers.',
    pro: [
      { title: 'Verbreitet', desc: 'Menschen sind nahezu überall auf Assiah dominant und anzutreffen.' },
      { title: 'Anpassungsfähig', desc: 'Kann beliebig +1 auf drei Attribute oder bis zu +3 auf einen Attribut wählen.' },
      { title: 'Lernfähig', desc: 'Erhält jede 2. Stufe +1 Fertigkeitspunkt.' }
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
    desc: 'Die Elfen zählen zu den ältesten und edelsten Rassen Assiahs. Ihre Ältesten können sich noch an die Geburt der Titanen erinnern und bis heute stellen sie die mächtigsten Magier und Zauberwirker. Ihr großes Zeitalter ist jedoch vorüber: Zunehmend drängen sich die Elfen in menschliche Städte, wo sie meist sterblich und in niederen Ständen oder Gesindevierteln anzutreffen sind, während die Zahl der Hochelfen stetig sinkt. Bis heute heißt es, die Elfen hätten den Titanen und damit den Menschen die Magie beigebracht.',
    pro: [
      { title: 'Fokussiert', desc: 'Können beliebig oft pro Rast die Aktion „Fokus“ durchführen, ohne Stress aufzubauen.' },
      { title: 'Magische Affinität', desc: 'Tränke, Talismane, Artefakte o.ä. erzielen 50% mehr Effekt.' },
      { title: 'Dämmersicht', desc: 'Erleiden bei Dämmerlicht (Abenddämmerung) keinen Malus.' },
      { title: 'Keine Narbenbildung', desc: 'Tiefe Wunden verheilen stets, ohne Narben zu hinterlassen' }
    ],
    contra: [
      { title: 'Hyposexualität', desc: 'Niedrige Fruchtbarkeit, niedrige Libido.' }
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
    desc: 'Die Zwerge gelten auf der ganzen Welt als ein Volk aufrichtiger, trinkfester und fleißiger Arbeiter und Mineure. So bevorzugt das oft magieunbegabte Volk tatsächlich die Nähe zu Bergen, in deren Inneren es oft seine Städte errichten. Gewaltige Tunnelsysteme unter dem Einstsee, die bis ins Unterreich hinabreichen, zeugen noch heute von den großen Errungenschaften dieses Volkes. Im Gegensatz zu den Menschen beten sie meist nicht zu Göttern, sondern einer Reihe an eigenen und erhobenen Ahnen.',
    pro: [
      { title: 'Feingespür', desc: 'Erhalten bei allen Durchsuchungswürfen +5.' },
      { title: 'Selbstmotivierend', desc: 'Ist sein Stress unter der Hälfte seines Maximums, erhält er +2 auf alle Würfe.' },
      { title: 'Belastbar', desc: 'Verdoppelte Stressresistenz' }
    ],
    contra: [
      { title: 'Klein', desc: 'Geringe Körpergröße' }
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
    desc: 'Die in Nomaden und Stämme organisierten Bewohner der Kalten Ebenen zählen seit Jahrtausenden zu den größten Geißeln des Einstsees. Immer wieder fallen ihre Horden in die zivilisierten Reiche ein, um dort mit außerordentlicher Gewalt zu plündern und zu brandschatzen und niemand mehr vermag die Kriege zu zählen, die man gegen die Orks führte. Ihre Kraft und körperliche Robustheit machen sie zu gefürchteten Kämpfern und, die korrekte Züchtigung vorausgesetzt, zu beliebten Sklaven. ',
    pro: [
      { title: 'Regenerativ', desc: 'Erhält +100 % Lebenspunkt (LP)-Regeneration.' },
      { title: 'Unverwüstlich', desc: 'Organschäden werden meist vollständig regeneriert.' },
      { title: 'Robust', desc: 'Immun gegen Blutung, leichte Wunden schließen sich von selbst.' },
      { title: 'Überwältigend', desc: 'Erhalten +25% mehr Schaden, im Waffenkampf wie in Magie.' }
    ],
    contra: [
      { title: 'Vorurteilsbehaftet', desc: 'Sie gelten als aggressiv, gewalttätig und gefährlich.' }
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
    desc: 'Die Katzenmenschen, Schöpfungen der Blutelfen, kamen vor etwa viertausend Jahren zum ersten Mal aus ihren Reichen im Süden an den Einstsee. Für ihre enorme Geschicklichkeit bekannt, ihrer Anmutigkeit wegen begehrt und als verstohlen verschrien, ziehen sie meist in kleinen Gruppen oder als Einzelgänger durch die Reiche, wo sie sich als Händler, Hehler und Tagelöhner verdingen. Sie gelten zudem als exzellente und begeisterte Diebe wie auch Betrüger, weshalb man ihnen oft mit Misstrauen begegnet.',
    pro: [
      { title: 'Dunkelsicht', desc: 'Erleiden nur noch einen Malus in absoluter Finsternis.' },
      { title: 'Krallen', desc: '+4 auf alle Kletterwürfe.' },
      { title: 'Samtpfoten', desc: 'Erhalten barfuß +4 auf alle Schleichenwürfe.' },
      { title: 'Falldämpfung', desc: 'Können einen Fall bis aus 10 m Höhe unbeschadet überleben (GS gegen SG 25).' },
      { title: 'Warmes Fell', desc: 'Kein Stressaufbau durch leichte Witterungen (wie kalte Winde, Regen).' }
    ],
    contra: [
      { title: 'Spezielle Kopfform', desc: 'Helme sind nur als Sonderanfertigungen verfügbar.' },
      { title: 'Pfoten', desc: 'Schuhwerk ist nur als Sonderanfertigungen verfügbar.' },
      { title: 'Durstiges Fell', desc: 'Erleiden nass (auch nach starkem Regen) -2 bis -4 auf alle körperlichen Würfe.' }
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
    desc: 'Vor langer Zeit, vermutlich Jahrtausende vor der ersten titanischen Stadt, erschufen die Drachen die humanoiden Drakoniden als Diener und Unterhändler mit den jungen Völkern. Nach den Morgenröte-Kriegen, mit dem Untergang ihrer Schöpfer und Meister, verloren die Drakoniden ebenso die Quelle ihrer Unsterblichkeit, das Drachenfeuer zu reproduzieren. So, in Zahl und Macht schwindet, durchstreifen sie seit Jahrtausenden die sterbliche Welt, als Glücksritter, Beobachter, Berater, Diplomaten und hochangesehene Erinnerungen an vergangene Zeitalter.',
    pro: [
      { title: 'Drachenblut', desc: 'Immunität gegen starke Kälte und Hitze, sowie die allermeisten Krankheiten.' },
      { title: 'Drachenschuppen', desc: 'Erhalten von Natur aus +4 Rüstungswert (RW).' },
      { title: 'Harter Panzer', desc: 'Erleiden keinen Malus durch harten oder nassen Untergrund beim Schlaf.' },
      { title: 'Drachenkrallen', desc: 'Gewährt +5 auf jeden Kletterwurf.' },
      { title: 'Krallen und Gebiss', desc: 'Erhalten im unbewaffneten Nahkampf +2 AW und +50% Schaden.' },
      { title: 'Hohes Ansehen', desc: 'Werden selten mit schlechten Taten in Verbindung gebracht.' }
    ],
    contra: [
      { title: 'Spezielle Kopfform', desc: 'Helme sind nur als Sonderanfertigungen verfügbar.' },
      { title: 'Pfoten', desc: 'Schuhwerk ist nur als Sonderanfertigungen verfügbar.' },
      { title: 'Alchemisch wertvoll', desc: 'Werden oft ihres Urfeuers wegen und dessen hohen Wertes gejagt.' }
    ]
  }
}
