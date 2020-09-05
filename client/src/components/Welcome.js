import React, { Component } from 'react'
import DashNavbar from './dashboard/DashNavbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterModal from '../components/auth/RegisterModal'
import WelcomeContainer from './WelcomeContainer'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <Router>
                    <DashNavbar />
                    <WelcomeContainer />
                    <div>
                        <Route path="/api/users" component={RegisterModal} />
                    </div>
                </Router>
            </div>
        )
    }
}
