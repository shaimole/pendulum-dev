export default {
  getCharacters: (state) => {
    return state.characters
  },
  getCharAttributes: (state) => {
    return state.character.attributes
  },
  getChar: (state) => {
    return state.character
  },
  getCharName: (state) => {
    return state.character.name
  },
  getCharLevel: (state) => {
    return state.character.level
  },
  getRaces: (state) => {
    return state.races
  },
  getClasses: (state) => {
    return state.classes
  },
  getAttributes: (state) => {
    const attribs = state.attributes
    const charAttribs = state.character.attributes
    for (let i = 0; i < attribs.length; i++) {
      attribs[i].value = charAttribs[attribs[i].id]
    }
    return attribs
  },
  getRace (state) {
    return state.character.race
  },
  getTotalAttributesCost (state) {
    const race = state.character.race
    const raceModifiers = state.races[race].attributes
    const charAttribs = state.character.attributes
    let total = 0
    for (const attrib in charAttribs) {
      let step = charAttribs[attrib]
      if (raceModifiers[attrib]) {
        step -= raceModifiers[attrib]
      }
      do {
        if (step < 1) {
          step = 1
        }
        if (step > 20) {
          step = 20
        }
        total += state.pointbuy[step].cost
      } while (--step > 0)
    }
    return total
  },
  getAttributeCosts (state) {
    return state.pointbuy
  },
  getSkills (state) {
    const skills = state.skills
    const attributes = state.character.attributes
    return getStats(skills, attributes)
  },
  getAttackStats (state) {
    const skills = state.attackStats
    const attributes = state.character.attributes
    return getStats(skills, attributes)
  },
  getDefenseStats (state) {
    const skills = state.defenseStats
    const attributes = state.character.attributes
    return getStats(skills, attributes)
  },
  getCasterStats (state) {
    const skills = state.casterStats
    const attributes = state.character.attributes
    return getStats(skills, attributes)
  },
  getDamageStats (state) {
    const skills = state.damageStats
    const attributes = state.character.attributes
    return getStats(skills, attributes)
  },
  getExternalStats (state) {
    const skills = state.externalStats
    const attributes = state.character.attributes
    return getStats(skills, attributes)
  },
  getHpStats (state) {
    const skills = state.hpStats
    const attributes = state.character.attributes
    return getStats(skills, attributes)
  },
  getLimitStats (state) {
    const skills = state.limitStats
    const attributes = state.character.attributes
    return getStats(skills, attributes)
  }
}

function getStats (skills, attributes) {
  let i = 0
  for (const skill in skills) {
    let value = getValueForParts(skills[skill].parts, skills, skill, attributes)
    if (skills[skill].altparts) {
      const altValue = getValueForParts(skills[skill].altparts, skills, skill, attributes)
      if (altValue > value) {
        value = altValue
      }
    }
    skills[skill].index = i++
    skills[skill].value = value
    skills[skill].value += skills[skill].mod
  }
  return skills
}

function getValueForParts (parts, skills, skill, attributes) {
  let value = 0
  for (let index = 0; index < parts.length; index++) {
    let valuepart = attributes[skills[skill].parts[index]]
    if (!skills[skill].multi) {
      valuepart *= 0.5
    } else {
      valuepart *= skills[skill].multi[index]
    }
    value += valuepart
  }
  return value
}
