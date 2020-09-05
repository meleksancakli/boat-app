import React, { Component, Fragment } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoginModal from '../auth/LoginModal'
import LogoutModal from '../auth/LogoutModal'
import PleaseLogIn from '../auth/PleaseLogIn'


class DashNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;


        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        {user ? `Merhaba ${user.name}` : ' '}
                    </span>
                </NavItem>
                <NavItem>
                    <LogoutModal />
                </NavItem>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        );

        return (
            <div>
                {isAuthenticated ? null : <PleaseLogIn />}
                <Navbar color="light" light expand="md">
                    <Container>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Container>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(DashNavbar);