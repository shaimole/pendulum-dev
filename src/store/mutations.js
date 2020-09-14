
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
    for (const attribute in state.character[0].attributes) {
      state.character.attributes[attribute] = 10
    }
  },
  createCharacter: (state) => {
    console.log(state.newChar)
    state.character = state.newChar
  },
  saveCharacter: (state) => {
    const currentChar = state.character
    let oldChar = state.characters.find(element => element.name === currentChar.name)
    if (oldChar) {
      oldChar = currentChar
    } else {
      state.characters.push(currentChar)
    }
  }
}
