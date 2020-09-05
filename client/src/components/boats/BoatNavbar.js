import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
class BoatNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Container>
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/boats/search">Tekne Ara</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/boats/add">Tekne Ekle </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default BoatNavbar;
