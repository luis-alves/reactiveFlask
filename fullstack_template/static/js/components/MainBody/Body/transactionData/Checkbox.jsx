import React from "react"

const Checkbox = (props) => {
  const checkboxStatus = props.checkboxStatus
  return (
    <div className="checkboxOne body-row-item trigger">
      <i className={"handhover checkbox icon-" + checkboxStatus} ></i>
    </div>
  )
  }

export default Checkbox
