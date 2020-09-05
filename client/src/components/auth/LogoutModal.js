import React, { Component, Fragment } from 'react'
import { logout } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { NavLink } from 'reactstrap'
import PropTypes from 'prop-types'

export class LogoutModal extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="http://localhost:3000">
                    Çıkış
                </NavLink>
            </Fragment>
        )
    }
}
export default connect(null, { logout })(LogoutModal)