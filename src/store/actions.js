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
  }
}
