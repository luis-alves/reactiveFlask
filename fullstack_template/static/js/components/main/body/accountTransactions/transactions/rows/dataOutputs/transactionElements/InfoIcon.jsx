import React from "react"


const InfoIcon = (props) => {
  const iconColor = props.iconColor
  return (
    <div className="boxing-info body-row-item trigger">
     <i className={"icon-info handhover " + iconColor}></i>
    </div>
  )
}

export default InfoIcon
