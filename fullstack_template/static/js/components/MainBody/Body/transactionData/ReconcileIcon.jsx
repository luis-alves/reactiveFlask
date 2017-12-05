import React from "react"

const ReconcileIcon = (props) => {
  const checkIconColor = props.row.reconcile

  const changeCheckIconColor = (e) => props.changeCheckIconColor(e)

  return (
    <div className="boxing-reconcile body-row-item trigger">
      <i
        className={"icon-check handhover " + checkIconColor}
        onClick={(e) => changeCheckIconColor(e)}
      ></i>
    </div>
  )
}

export default ReconcileIcon
