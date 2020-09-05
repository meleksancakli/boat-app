import React, { Component } from 'react'
import DashNavbar from './DashNavbar'
import DashCompenent from './DashCompenent'
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterModal from '../auth/RegisterModal'
import EditUser from './EditAdmin';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Welcome from '../Welcome';

class Dashboard extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ?
                    <Router>
                        <DashNavbar />
                        <DashCompenent />
                        <div>
                            <Route path="/api/users" component={RegisterModal} />
                            <Route path="/edit/:id" component={EditUser} />
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

export default connect(mapStateToProps)(Dashboard);