import React from 'react'

function WhiteBtn(props) {

    const btnStyle = {
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        label: props.label,
        // color: props.color || 'black',
        border: '1px solid black' ,
        cursor: 'pointer',
        // fontWeight: 'bold',
        marginTop: props.marginTop

    }
   
  return (
    <div>
       <button  style={btnStyle} onClick={props.onClick} className=' h-[45px] w-[150px] bg-transparent hover:bg-blackcolor hover:text-white '>{props.label}</button>

    </div>
  )
}

export default WhiteBtn