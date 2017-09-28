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
      <p>This is Transaction</p>
      <button className="btn btn-danger" onClick={this.props.closeModal}>close modal</button>
      </div>
    )
  }

}


function mapStateToProps(state) {
  /*
    You will need to create a similar mapStateToProps as the one used in the AccountDetail component.


  */
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);


/*The buttons in the modal window can hold a value... this can be helpful for withdrawing the money.*/
