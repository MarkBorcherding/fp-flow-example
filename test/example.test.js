import { expect } from 'chai'

import fp from 'lodash/fp'

describe('example', () => {
  it('is true', () => {
    const a = (x) => x + 1
    const b = (x) => x * 10
    const c = (x) => x + 3

    const f = fp.compose(a,b,c)
    expect(f(1)).to.eql(a(b(c(1))));
  })
})
