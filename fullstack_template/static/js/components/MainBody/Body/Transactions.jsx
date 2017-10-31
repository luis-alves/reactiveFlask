import React from "react"
import {
    connect
} from "react-redux"
import Modal from "react-modal"


import { fetchTransactions, updateTransactions } from "../../../actions/transactionsActions"
import ColorModal from "./modal/ColorModal"

// var modalStyles = {
//   overlay : {
//     backgroundColor: 'none',
//   },
//   content : {
//     top: {event},
//     left: '340px',
//     height:'260px',
//     width: '180px',
//     padding: '0px 15px',
//     // margin: '0px',
//     // margin: '0.5rem',
//     // padding: '1rem',
//     // outline: 'none',
//     // overflow: 'auto',
//     // backgroundColor: 'white',
//     // boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.24), 0 16px 40px 0 rgba(0, 0, 0, 0.32)',
//   }
// }

@connect(store => {
    return {
        transactions: store.transactions.transactions
    }
})
export default class Transactions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isActive: false}
        this.changeColor = this.changeColor.bind(this)
        this.setRow = this.setRow.bind(this)
    }

    componentWillMount() {
        this.props.dispatch(fetchTransactions())
        Modal.setAppElement('#content')
    }

    changeColor(e) {
      this.props.dispatch(updateTransactions(e))
    }

    // toggleModal = () => {
    //   this.setState({isActive: !this.state.isActive})
    // }
    setRow (row, event) {
      this.setState({row: event})
    }

    handleclick = (e) => this.setState({pointerY: e.clientY});

    render() {
      if (this.props.transactions != null) {
          const rows = this.props.transactions.map((row) =>
              <div className="table-header handhover" key={row._id['$oid']} id={row._id['$oid']}>
                 <div className="checkboxOne handhover">
                   <input type="checkbox" name="" id="checkboxOneInput" value="1"/>
                   <label htmlFor="checkboxOneInput"></label>
                 </div>
                 <div className="boxing-info handhover">
                   <i className={"icon-info handhover " + row.flag}></i>
                 </div>
                 <div className="boxing-info handhover" onClick={(e) => this.handleclick(e)}>
                   <i className={"icon-bookmark handhover " + row.bookmark}
                      onClick={this.setRow.bind(null, row)}>

                    </i>
                 </div>
                 <h5 className="date handhover">{row.date}</h5>
                 <h5 className="payee handhover">{row.payee}</h5>
                 <h5 className="category handhover">{row.category}</h5>
                 <h5 className="memo handhover">{row.Memo}</h5>
                 <h5 className="outflow handhover">{row.outflow}</h5>
                 <h5 className="inflow handhover">{row.inflow}</h5>
                 <div className="boxing-reconcile handhover" id="parente">
                   <i
                     title="Reconcile account"
                     id="filho"
                     className={"icon-check handhover " + row.reconcile}
                     onClick={this.changeColor}></i>
                 </div>
               </div>
          )
          return (
              <div>
                <div className="article-row">{rows}</div>
                  <Modal isOpen={this.state.row != null}
                         onRequestClose={this.setRow.bind(null)}
                        //  style={modalStyles}
                        //  className='modal-content-color-container'
                        //  overlayClassName='modal-overlay-color-container'
                        style={
                          {
                            overlay : {
                              left: '400px',
                              width: '180px',
                              height: '260px',
                              background: 'red',
                              zIndex:'999',
                              position: 'relative',
                              // -moz-border-radius:    '10px'
                              // -webkit-border-radius: '10px'
                              borderRadius:         '10px',
                              // backgroundColor: 'none',
                            },
                            content : {
                              top: this.state.pointerY,
                              zIndex:'9999',
                              // left: '340px',
                              height:'260px',
                              width: '180px',
                              padding: '0px 15px',
                              // margin: '0px',
                              // margin: '0.5rem',
                              // padding: '1rem',
                              // outline: 'none',
                              // overflow: 'auto',
                              // backgroundColor: 'white',
                              // boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.24), 0 16px 40px 0 rgba(0, 0, 0, 0.32)',
                            }
                          }
                        }
                  >
                    <ColorModal />
                  </Modal>
              </div>
          )
      }
      return (
          <div>

    </div>
      )
    }
}
