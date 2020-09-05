import React, { Component } from 'react'
import BoatNavbar from './BoatNavbar'
import SearchBoat from './SearchBoat'
import AddBoat from './AddBoat'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from '../Welcome';

class BoatComponent extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ?
                    <Router>
                        <BoatNavbar />
                        <div>
                            <Route path="/boats/search" exact component={SearchBoat} />
                            <Route path="/boats/add" component={AddBoat} />

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

export default connect(mapStateToProps)(BoatComponent);