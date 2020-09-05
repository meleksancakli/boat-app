import React, { Component } from 'react'
import CustomerNavbar from './CustomerNavbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCustomer from './AddCustomer'
import SearchCustomer from './SearchCustomer'
import AddBoatOwner from '../owners/AddBoatOwner'
import SearchBoatOwners from '../owners/SearchBoatOwners'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Welcome from '../../Welcome';

class CustomerComponent extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ?
                    <Router>
                        <CustomerNavbar />
                        <div>
                            <Route path="/customers/search" exact component={SearchCustomer} />
                            <Route path="/customers/add" component={AddCustomer} />
                            <Route path="/customers/boatowners" exact component={SearchBoatOwners} />
                            <Route path="/customers/boatowners/add" component={AddBoatOwner} />
                        </div>
                    </Router>
                    : <Welcome />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(CustomerComponent);
