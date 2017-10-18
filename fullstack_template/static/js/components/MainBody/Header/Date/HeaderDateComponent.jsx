import React from "react"
import DateComponent from "./DateComponent"
import PropTypes from "prop-types"


export default class HeaderDateComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {actualDate: this.props.actualDate}
    this.props.uniqId
    this.props.allDates
    this.dropdownFunction = this.dropdownFunction.bind(this)
    this.sendStateToServer = this.sendStateToServer.bind(this)
    this.changeDate = this.changeDate.bind(this)
  }

  dropdownFunction() {
   document.getElementById(this.props.uniqId).classList.toggle("show");
  }

  sendStateToServer(date) {
    // Set the global variable
    let statenow = date
    var payload = {
      year: statenow
    }
    console.log('payload is ' + JSON.stringify(statenow));
    fetch('/year',
    {
      /* Options are only needed in POST methods */
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    }
    ).then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        response.json().then(data => {
          console.log('returned from server ' + JSON.stringify(data));;
        })
    })
  }

  changeDate(currentDate) {
    this.setState({actualDate: currentDate},
      ()=>{this.sendStateToServer(this.state.actualDate)})
  }

  render () {;;
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    return (
      <div className="dropdown" onClick={this.dropdownFunction}>
        <button  className="dropbtn">{this.state.actualDate}<span className="entypo-down-open"></span></button>
        <ul id={this.props.uniqId} className="dropdown-content">
          {this.props.allDates.map(theDate => {
            return <DateComponent key={theDate} id={theDate} onClick={this.changeDate} actualDate={theDate}/>
          })}
        </ul>

      </div>

    )

  }
}

HeaderDateComponent.propTypes = {
  uniqId: PropTypes.string,
  allDates: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.number)
  ])
};
