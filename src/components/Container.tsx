import React from 'react'

type containerProps = {
    style:React.CSSProperties
}

const Container = (props:containerProps) => {
  return (
    <div style={props.style}></div>
  )
}

export default Container