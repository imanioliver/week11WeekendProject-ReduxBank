import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser, selectAccount , withdrawFunds }  from '../actions/index';


class Transaction extends Component{

    constructor(props){
        super(props);

        this.doTheStuff = this.doTheStuff.bind(this);
    }
    doTheStuff(num) {

       this.props.withdrawFunds(num);
       this.props.closeModal();

    }

  render(){




    console.log("Transcation props: ", this.props);
    return(
      <div>

      <h3>Your current balance is ${this.props.account.balance}</h3>
      <button className="btn btn-success" onClick={() => this.doTheStuff(5)}>Withdraw $5 </button>
      <button className="btn btn-info" onClick={() => this.props.withdrawFunds(10)}>Withdraw $10</button>
      <button className="btn btn-warning" onClick={() => this.doTheStuff(20)}>Withdraw $20</button>
      <button className="btn btn-danger" onClick={this.props.closeModal}>Cancel</button>

      </div>
    )
  }

}


function mapStateToProps(state) {
  /*
    You will need to create a similar mapStateToProps as the one used in the AccountDetail component.


  */
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);

  return {
    user: state.selectedUser,
    account: state.users[userIdx].accounts[accountIdx],
  };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);


/*The buttons in the modal window can hold a value... this can be helpful for withdrawing the money.*/
