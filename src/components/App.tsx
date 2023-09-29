/* eslint-disable global-require */
import React from 'react'
import hand from '../assets/hand.png'

interface AppProps { num: number }

function App ({ num }: AppProps): React.ReactElement {
  return (
    <div>
      <img src={hand} alt="sss" />
      <img src={require('../assets/public/heart.svg')} alt="sss" />
      Hello world React! Num:
      {num}
    </div>
  )
}
export default App
