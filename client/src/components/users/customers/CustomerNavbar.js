import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

class CustomerNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Container>
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/customers/search">Kullanıcı Ara</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/customers/add">Kullanıcı Ekle </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/customers/boatowners">Tekne Sahipleri</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/customers/boatowners/add">Tekne Sahibi Ekle</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default CustomerNavbar;
