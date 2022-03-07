export default {
  getCharacters: state => {
    return state.characters
  },
  getCharAttributes: state => {
    return state.character.attributes
  },
  getChar: state => {
    return state.character
  },
  getCharName: state => {
    return state.character.name
  },
  getCharLevel: state => {
    return state.character.level
  },
  getRaces: state => {
    return state.races
  },
  getClasses: state => {
    return state.classes
  },
  getAttributes: state => {
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

    const charTraitNames = state.character.traits
    for (const index in charTraitNames) {
      const trait = state.positiveTraits.find(
        element => element.name === charTraitNames[index]
      )
      if (trait) {
        total += trait.cost
      }
    }

    for (const index in charTraitNames) {
      const trait = state.neutralTraits.find(
        element => element.name === charTraitNames[index]
      )
      if (trait) {
        total += trait.cost
      }
    }

    for (const index in charTraitNames) {
      const trait = state.negativeTraits.find(
        element => element.name === charTraitNames[index]
      )
      if (trait) {
        total += trait.cost
      }
    }
    return total
  },
  getAttributeCosts (state) {
    return state.pointbuy
  },
  getSkills (state) {
    const skills = state.skills
    const attributes = state.character.attributes
    return floorValues(
      alterStats(state, getStats(skills, attributes), 'skills')
    )
  },
  getAttackStats (state) {
    const skills = state.attackStats
    const attributes = state.character.attributes
    return floorValues(
      alterStats(state, getStats(skills, attributes), 'attack')
    )
  },
  getDefenseStats (state) {
    const skills = state.defenseStats
    const attributes = state.character.attributes
    return floorValues(
      alterStats(state, getStats(skills, attributes), 'defense')
    )
  },
  getCasterStats (state) {
    const skills = state.casterStats
    const attributes = state.character.attributes
    return floorValues(
      alterStats(state, getStats(skills, attributes), 'caster')
    )
  },
  getDamageStats (state) {
    const skills = state.damageStats
    const attributes = state.character.attributes
    return floorValues(
      alterStats(state, getStats(skills, attributes), 'damage')
    )
  },
  getExternalStats (state) {
    const skills = state.externalStats
    const attributes = state.character.attributes
    return floorValues(
      alterStats(state, getStats(skills, attributes), 'external')
    )
  },
  getHpStats (state) {
    let skills = []
    if (state.character.class === 'warrior') {
      skills = state.classes[0].hpStats
    } else {
      skills = state.hpStats
    }
    const attributes = state.character.attributes
    let stats = getStats(skills, attributes)
    stats = alterStats(state, stats, 'hp')
    let lpReg = [
      {
        id: 'LPReg',
        index: 2,
        label: 'Lebenspunkt-Regeneration',
        value: stats[1].value * 0.05
      }
    ]
    lpReg = alterStats(state, lpReg, 'hp')
    const lpRegOld = stats.find(element => element.id === 'LPReg')
    if (!lpRegOld) {
      stats.push(lpReg[0])
    } else {
      stats.splice(stats.indexOf(lpRegOld), 1, lpReg[0])
    }
    return floorValues(stats)
  },
  getLimitStats (state) {
    const skills = state.limitStats
    const attributes = state.character.attributes
    return floorValues(alterStats(state, getStats(skills, attributes)), 'limit')
  },
  checkName (state) {
    if (!state.character.name) {
      return false
    }
  },
  getTraits (state) {
    return {
      positive: state.positiveTraits,
      neutral: state.neutralTraits,
      negative: state.negativeTraits
    }
  },
  getCharTraits (state) {
    const charTraits = {
      positive: [],
      neutral: [],
      negative: []
    }
    const charTraitNames = state.character.traits
    for (const index in charTraitNames) {
      const trait = state.positiveTraits.find(
        element => element.name === charTraitNames[index]
      )
      if (trait) {
        charTraits.positive.push(trait)
      }
    }

    for (const index in charTraitNames) {
      const trait = state.neutralTraits.find(
        element => element.name === charTraitNames[index]
      )
      if (trait) {
        charTraits.neutral.push(trait)
      }
    }

    for (const index in charTraitNames) {
      const trait = state.negativeTraits.find(
        element => element.name === charTraitNames[index]
      )
      if (trait) {
        charTraits.negative.push(trait)
      }
    }
    return charTraits
  },
  getAttributePoints (state) {
    const distanceToPoint = state.character.level % 3
    return Math.floor((state.character.levelUps + distanceToPoint) / 3)
  },
  getNotes (state) {
    return state.character.notes
  },
  getItem (state) {
    return state.item
  },
  getAllConditions (state) {
    return getConditions(state)
  }
}
function getConditions (state) {
  const passiveItems = state.character.inventory.find(
    element => element.name === 'Passives'
  ).items
  const itemsContainers = [state.character.equipped, passiveItems]
  for (const index in itemsContainers) {
    for (const index2 in itemsContainers[index]) {
      const item = itemsContainers[index][index2]
      if (!item) {
        continue
      }
      if (
        item.condition &&
        !state.conditions.find(element => element.id === item.condition)
      ) {
        state.conditions.push({ id: item.condition, active: false })
      }
    }
  }
  return state.conditions
}

function getActiveConditions (state) {
  const conditions = getConditions(state)
  const activeConditions = []
  for (const index in conditions) {
    if (conditions[index].active) {
      activeConditions.push(conditions[index].id)
    }
  }
  return activeConditions
}
function getStats (skills, attributes) {
  let i = 0
  for (const skill in skills) {
    let value = getValueForParts(skills[skill].parts, skills, skill, attributes)
    if (skills[skill].altparts) {
      const altValue = getValueForParts(
        skills[skill].altparts,
        skills,
        skill,
        attributes
      )
      if (altValue > value) {
        value = altValue
      }
    }
    skills[skill].index = i++
    skills[skill].value = value
    skills[skill].value += skills[skill].mod
    skills[skill].orgValue = Math.floor(skills[skill].value)
  }
  return skills
}
function getValueForParts (parts, skills, skill, attributes) {
  let value = 0
  if (!parts) {
    return value
  }
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
function alterStats (state, stats, type) {
  const conditions = getActiveConditions(state)
  for (const stat in stats) {
    let mod = 0
    let multi = 1
    let mods = []
    const passiveItems = state.character.inventory.find(
      element => element.name === 'Passives'
    ).items
    const itemsContainers = [state.character.equipped, passiveItems]

    for (const index in itemsContainers) {
      const modifiers = getItemStatModifiers(
        itemsContainers[index],
        stats[stat].id,
        type,
        mod,
        multi,
        mods,
        conditions
      )
      mods = modifiers.mods
      multi = modifiers.multi
      mod = modifiers.mod
    }
    stats[stat].mods = mods
    stats[stat].value += mod
    stats[stat].value *= multi
  }
  return stats
}

function getItemStatModifiers (
  items,
  statId,
  type,
  mod,
  multi,
  mods,
  conditions
) {
  for (const item in items) {
    if (!items[item]) {
      continue
    }
    if (!items[item].active) {
      continue
    }
    if (!items[item].modifiers) {
      continue
    }
    if (items[item].condition) {
      if (!conditions.find(element => element === items[item].condition)) {
        continue
      }
    }
    if (!items[item].modifiers[type]) {
      continue
    }
    if (!items[item].modifiers[type][statId]) {
      continue
    }
    const modItem = items[item].modifiers[type][statId]
    mod += modItem.mod
    multi += modItem.multi
    mods.push({
      item: items[item].name,
      mod: modItem.mod,
      multi: modItem.multi
    })
  }
  return { mod: mod, multi: multi, mods: mods }
}

function floorValues (stats) {
  for (const stat in stats) {
    stats[stat].value = Math.floor(stats[stat].value)
  }
  return stats
}
