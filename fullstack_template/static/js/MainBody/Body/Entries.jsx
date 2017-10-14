import React from "react"

export default class Article extends React.Component {
  render () {
    return (
      <div className="article-row">
        {
          this.props.newLines.map(
            list=>{
              return (
                <div>
                  <EachValue data={list} />
                </div>

              )
            }
          )
        }

      </div>
    )
  }
}
