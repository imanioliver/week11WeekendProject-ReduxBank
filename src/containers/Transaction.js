import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser, selectAccount , withdrawFunds }  from '../actions/index';

import { Link } from 'react-router-dom';


class Transaction extends Component{
  render(){



    console.log("Transcation props: ", this.props);
    return(
      <div>

      <h3>Your current balance is ${this.props.account.balance}</h3>
      <button className="btn btn-success" onClick={this.props.closeModal}>Withdraw $5 </button>
      <button className="btn btn-info" onClick={() => this.props.withdrawFunds(10)}>Withdraw $10</button>
      <button className="btn btn-warning" onClick={this.props.closeModal}>Withdraw $20</button>
      <button className="btn btn-danger" onClick={this.props.closeModal}>Cancel</button>

      </div>
    )
  }

}


function mapStateToProps(state) {
  /*
    You will need to create a similar mapStateToProps as the one used in the AccountDetail component.


  */

  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);


/*The buttons in the modal window can hold a value... this can be helpful for withdrawing the money.*/
