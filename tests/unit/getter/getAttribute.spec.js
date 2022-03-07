import getters from '../../../src/store/getters'
import sampleState from '../../data/sampleState'
import { expect } from 'chai'

describe('Get Remaining Attribute Points', () => {
  it('should fail if no race is set', () => {
    expect(() => getters.getTotalAttributesCost(sampleState)).to.throw()
  })
  it('should be 80 points for every race by default', () => {
    for (const race of Object.keys(sampleState.races)) {
      sampleState.character.race = race
      expect(getters.getTotalAttributesCost(sampleState)).to.eql(80, race)
    }
  })
})
