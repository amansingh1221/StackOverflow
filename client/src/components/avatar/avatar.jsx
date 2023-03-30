import React from 'react'

const avatar = ({children, backgroundColor,px,py,color,borderRadius,fontSize,textAlign,cursor}) => {
  const style={
    backgroundColor,
    padding: `${px} ${py}`,
    color: color||'black',
    borderRadius,
    fontSize,
    textAlign: 'center',
    cursor:cursor||null
  }
  return (
    <div style={style}>{children}</div>
  )
}

export default avatar;