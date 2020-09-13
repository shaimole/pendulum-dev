export default {
  setAttribute: (state, {
    attribute,
    value
  }) => {
    state.character[0].attributes[attribute] = value
  },
  setRace: (state, race) => {
    state.character[0].race = race
  },
  resetAttributes: (state) => {
    for (const attribute in state.character[0].attributes) {
      state.character[0].attributes[attribute] = 10
    }
  }
}
