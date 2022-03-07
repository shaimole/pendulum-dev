import attackStats from '@/data/attackStats'
import { expect } from 'chai'

describe('Get Attack Stats Definitions', () => {
  it('should be an array', () => {
    expect(attackStats).to.be.an('array')
  })
})
