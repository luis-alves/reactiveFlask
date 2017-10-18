import React from "react"
import HeaderDateComponent from "./HeaderDateComponent"

class HeaderDate extends React.Component {
  constructor(props){
    super(props)
    this.getMonth = this.getMonth.bind(this)
    this.getYear = this.getYear.bind(this)
  }

  getMonth() {
    let date = new Date()
    let month = date.getMonth()
    return month
  }

  getYear() {
    let date = new Date()
    let year = date.getFullYear()
    return year
  }

  render () {

    let allMonths = ['JAN', 'FEV', 'MAR', 'APR', 'MAI', 'JUN', 'JUL', 'AUG',
                    'SEP', 'OCT', 'NOV', 'DEC']
    let month = allMonths[this.getMonth()]

    let allYears = [2014, 2015, 2016, 2017]
    let year = this.getYear()

    return (
      <div className="headerdate">
        <div className='dropdown'>
          <HeaderDateComponent uniqId='month' actualDate={month} allDates={allMonths}/>

        </div>
        <div className='Dropdown'>
          <HeaderDateComponent uniqId='year' actualDate={year} allDates={allYears} />
        </div>
      </div>
    )
  }
}

export default HeaderDate
