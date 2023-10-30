import React from 'react'
import { useSelector } from 'react-redux'

const Parent13 = () => {
    const {allSelectTask} = useSelector((state)=>state.selectTaskSlice)
    console.log("nzsdjcnjjerifjrijnhfdujscfnhduihfncrnfrufvnrsdjjkferjuijfijerifjrij",allSelectTask)
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default Parent13
