import React from 'react'
import { Welcome } from './welcome'

const Greetings = () => {
  return (
    <div>
        <Welcome firstName="John"
         lastName="Doe"/>
        <Welcome firstName="Jane" 
        lastName="White" textColor="blue"/>
    </div>
  )
}

export default Greetings