import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import Loading from './Loading';

Amplify.configure(awsconfig);

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signUp: false
        }
    }

    loadSignup = () => {
        this.props.loadSignup();
    }

    loadLogin = () => {
        this.props.loadLogin();
    }

    handleSignOut = () => {
        this.props.customerLogout();
    }

    render() {
        let {loadingValue} = this.props;

        const renderLoading = () => {
            if (loadingValue === true) {
                return ( 
                    <Loading />
                )
            }
        }
        if(this.props.loggedIn) {
            return (
                <div>
                    {renderLoading()}
                    <div className="customer-info">
                        <div className="f-right">Hello Damien!</div>


                        <div className="ptitle">Account Info</div>
                        <div className="em2">
                            <div className="prow"><div>First Name</div><div>Damien</div></div>
                            <div className="prow"><div>Last Name</div><div>Duran</div></div>
                            <div className="prow"><div>Email</div><div>durandamien1997@gmail.com</div></div>
                            <div className="prow"><div>Phone Number</div><div>(xxx)xxx-3413</div></div>
                        </div>


                        <div className="ptitle">Your Orders</div>
                        <div className="em2">
                            <div className="order-box">
                                <div className="order-header">
                                    Order #2523
                                </div>
                                <div className="order-info">
                                    <div className="prow"><div>Date of Purchase</div><div>09/10/21</div></div>
                                    <div className="prow"><div>Shipping</div><div>42 Arc St Loveland CO, 80538</div></div>
                                    <div className="prow"><div>Total</div><div>$129.37</div></div>
                                </div>
                            </div>
                            <div className="order-box">
                                <div className="order-header">
                                    Order #2523
                                </div>
                                <div className="order-info">
                                    <div className="prow"><div>Date of Purchase</div><div>09/10/21</div></div>
                                    <div className="prow"><div>Shipping</div><div>42 Arc St Loveland CO, 80538</div></div>
                                    <div className="prow"><div>Total</div><div>$129.37</div></div>
                                </div>
                            </div>
                            <div className="order-box">
                                <div className="order-header">
                                    Order #2523
                                </div>
                                <div className="order-info">
                                    <div className="prow"><div>Date of Purchase</div><div>09/10/21</div></div>
                                    <div className="prow"><div>Shipping</div><div>42 Arc St Loveland CO, 80538</div></div>
                                    <div className="prow"><div>Total</div><div>$129.37</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="sign-out-link" onClick={this.handleSignOut}>Sign Out</div>
                    </div>
                    
                </div>
            )
        }
        else {
            if(this.props.signUp) {
                return (
                    <div>
                        {renderLoading()}
                        <SignUp setSignup={this.props.setSignup} showConfirm={this.props.showConfirm} resendConfirmationCode={this.props.resendConfirmationCode} customerConfirm={this.props.customerConfirm} changeMessage={this.props.changeMessage} customerSignup={this.props.customerSignup} loadLogin={this.loadLogin} />
                    </div>
                )
            }
            else {
                return (
                    <div>
                        {renderLoading()}
                        <Login setSignup={this.props.setSignup} changeMessage={this.props.changeMessage} customerLogin={this.props.customerLogin} loadSignup={this.loadSignup} />
                    </div>
                )
            }
        }
    }
}

export default Profile;