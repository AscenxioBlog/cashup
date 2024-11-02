import React from 'react'
import CustomBtn from '../CustonBtn'

function BlackBtn(props) {
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
       <button  style={btnStyle} onClick={props.onClick} className=' h-[45px] w-[150px] bg-blackcolor text-white hover:bg-[#FFFFFF] hover:text-blackcolor'>{props.label}</button>

    </div>
  )
}

export default BlackBtn