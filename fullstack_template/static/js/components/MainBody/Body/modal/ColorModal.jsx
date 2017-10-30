import React from "react"

export default class ColorModal extends React.Component {
  render () {
    return (
      <div className="modal-content-color">

        <div className="modal-content-color-red handhover">
          <h3 className="modal-content-color-name">Red</h3>
        </div>
        <div className="modal-content-color-orange handhover">
          <h3 className="modal-content-color-name">Orange</h3>
        </div>
        <div className="modal-content-color-yellow handhover">
          <h3 className="modal-content-color-name">Yellow</h3>
        </div>
        <div className="modal-content-color-green handhover">
          <h3 className="modal-content-color-name">Green</h3>
        </div>
        <div className="modal-content-color-blue handhover">
          <h3 className="modal-content-color-name">Blue</h3>
        </div>
        <div className="modal-content-color-purple handhover">
          <h3 className="modal-content-color-name">Purple</h3>
        </div>

      </div>
    )
  }
}
