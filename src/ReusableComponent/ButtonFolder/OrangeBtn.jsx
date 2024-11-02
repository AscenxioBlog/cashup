import React from 'react'
import CustomBtn from '../CustonBtn'

function OrangeBtn(props) {
    const btnStyle = {
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        label: props.label,
        // color: props.color || 'black',
        border: props.border || 'none',
        cursor: 'pointer',
        // fontWeight: 'bold',
        marginTop: props.marginTop

    }
  return (
    <div>
      <button style={btnStyle} onClick={props.onClick} className=' h-[40px] w-[140px] bg-btncolor hover:bg-btnactive text-white'>{props.label}</button>
    </div>
  )
}

export default OrangeBtn
