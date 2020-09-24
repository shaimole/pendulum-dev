
export default {
  setAttribute: (state, {
    attribute,
    value
  }) => {
    state.character.attributes[attribute] = value
  },
  setRace: (state, race) => {
    state.character.race = race
  },
  resetAttributes: (state) => {
    for (const attribute in state.character.attributes) {
      state.character.attributes[attribute] = 10
    }
  },
  createCharacter: (state) => {
    state.character = JSON.parse(JSON.stringify(state.newChar))
  },
  saveCharacter: (state) => {
    const currentChar = state.character
    let oldChar = state.characters.find(element => element.name === currentChar.name)
    if (oldChar) {
      oldChar = currentChar
    } else {
      state.characters.push(currentChar)
    }
  },
  setCharValue (state, { key, value }) {
    state.character[key] = value
  },
  addTrait (state, { traitName }) {
    const oldTrait = state.character.traits.find(element => element === traitName)
    if (!oldTrait) {
      state.character.traits.push(traitName)
    }
  },
  removeTrait (state, { traitName }) {
    var index = state.character.traits.indexOf(traitName)
    if (index > -1) {
      state.character.traits.splice(index, 1)
    }
  },
  setChar (state, character) {
    state.character = character
  },
  addLevelUp (state) {
    state.character.levelUps++
  },
  addInventory (state, inv) {
    if (!inv.items) {
      inv.items = []
    }
    for (const index in state.character.inventory) {
      if (state.character.inventory[index].name === inv.name) {
        state.character.inventory[index] = inv
        return
      }
    }
    state.character.inventory.push(inv)
  }
}
