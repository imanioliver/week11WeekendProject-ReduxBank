import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectUser, selectAccount }  from '../actions/index';

import { Link } from 'react-router-dom';



class AccountDetail extends Component{

    render(){
        console.log("all the props: ", this.props);
        return(


        <div>
            <div className="col-md-6">
              <div className= "card">
                <div className= "card-block">
                  <h4 className= "card-title">{this.props.account.accountType} Account Information</h4>
                  <h6 className= "card-subtitle mb-2 text-muted">{this.props.user.name}</h6>
                  <div className= "card-text">
                    <div>Balance: {this.props.account.balance}</div>
                  </div>
                </div>
                <Link className="btn btn-primary" to={`/users/${this.props.user._id}`} >Back to {this.props.user.name}'s Account</Link>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="withdrawModal" >Withdraw Funds</button>
              </div>
            </div>


        </div>
        )
    }
}


function mapStateToProps(state) {
    // const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
    // const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
    return {
        account: state.selectedAccount,
        user: state.selectedUser
    };
}


function mapDispatchToProps(state){

}


export default connect(mapStateToProps)(AccountDetail)
