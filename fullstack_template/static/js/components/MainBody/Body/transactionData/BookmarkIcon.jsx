import React from "react"

const BookmarkIcon = (props) => {
  const bookmarkIconColor = props.rowData.bookmark
  const TransactionId = props.rowData._id['$oid']

  const handleBookmarkClick = (e) => props.handleBookmarkClick(e)

  return (
    <div className="boxing-info body-row-item trigger">
      <i className={"icon-bookmark handhover " + bookmarkIconColor}
          onClick={(e) => handleBookmarkClick(e)}
          data-_id={TransactionId}></i>

    </div>
  )
}

export default BookmarkIcon
