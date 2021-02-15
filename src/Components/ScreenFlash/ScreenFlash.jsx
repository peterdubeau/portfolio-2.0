import React, {useState, useEffect} from 'react'
import './ScreenFlash.css'

export default function ScreenFlash(props) {

  const [color, setColor] = useState({ backgroundColor: 'blue' })
  const [Flicker, setFlicker] = useState(false)

  //slows down the loop to allow color to be rendered
  //guidance from https://flaviocopes.com/how-to-slow-loop-javascript/


  const colorChange = async () => {
      for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
          await props.slow(750)
          setColor({ backgroundColor: "grey" })
          await props.slow(750)
          setColor({ display: "none" })
          i = 0
        } else {
          await props.slow(750)
          setColor({ backgroundColor: "blue" })
        }
      }
    }

  useEffect(() => {
    colorChange()
    // props.flash()
  },[])
// const test = props.flash()
// console.log(props.flash())
  return (<>
    {/* {props.flash ? "" : */}
      <div className="flicker" style={color}></div>
    {/* } */}
  </>)
}

