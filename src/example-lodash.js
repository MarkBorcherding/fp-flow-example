// @flow

import _ from 'lodash'
import fp from 'lodash/fp'

type Thing = { name: string, value: number }
const a  = () : boolean => {
  const things : Array<Thing> = [
    { name: 'a', value: 2}
  ]

  const findIt = fp.find( x=> x.name === 'hi')

  return !!findIt(things) 
}

export default a;
