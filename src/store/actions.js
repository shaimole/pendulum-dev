export default {
  setAttribute: (context, payload) => {
    context.commit('setAttribute', payload)
  },
  setRace: (context, race) => {
    context.commit('setRace', race)
  },
  resetAttributes: (context) => {
    context.commit('resetAttributes')
  },
  createNewCharacter: (context) => {
    context.commit('createCharacter')
  },
  saveCharacter: (context) => {
    context.commit('saveCharacter')
  },
  setCharValue (context, payload) {
    context.commit('setCharValue', payload)
  },
  addTrait (context, payload) {
    context.commit('addTrait', payload)
  },
  removeTrait (context, payload) {
    context.commit('removeTrait', payload)
  },
  setCurrentCharacter (context, character) {
    context.commit('setChar', character)
  },
  addLevelUp (context) {
    context.commit('addLevelUp')
  },
  addInventory (context, inv) {
    context.commit('addInventory', inv)
  }
}
