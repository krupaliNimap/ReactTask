import React from 'react'

const Parent12 = () => {
    const styles = {
        display: "flex",
        background: "pink",
        direction:"rtl",
        justifyContent: "space-between",
        height:"90px",
        alignItems:"center"
    }
  return (
    <div>
      Task12
      <p>CSS Task</p>
      <div style={styles}>
        <div>B</div>
        <div>A</div>
      </div>
    </div>
  )
}

export default Parent12
