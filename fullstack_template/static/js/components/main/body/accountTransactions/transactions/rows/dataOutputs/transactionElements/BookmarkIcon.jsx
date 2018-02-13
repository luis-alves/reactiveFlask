import React from 'react'

const BookmarkIcon = (props) => {
  const bookmarkIconColor = props.allDataFromRow.bookmark
  const dbIdNumber = props.allDataFromRow._id['$oid']

  const handleBookmarkClick = (e) => props.changeBookmarkColor(e)

  return (
    <div className='boxing-info body-row-item trigger'>
      <i className={'icon-bookmark handhover ' + bookmarkIconColor}
        onClick={(e) => handleBookmarkClick(e)}
        data-_id={dbIdNumber} />
    </div>
  )
}

export default BookmarkIcon
