import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Typewriter() {
    const [text] = useTypewriter({
        words: ['Software Engineer','Web Developer', 'App Developer', 'Frontened Developer',],
        loop: {},
        
    })
  return (
    <div >
      <span style={{color: '#64ffda' }}>{text}</span>
      <Cursor cursorColor='#64ffda' />
    </div>
  )
}
export default Typewriter
