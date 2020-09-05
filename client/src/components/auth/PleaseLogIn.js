import React, { Component } from 'react'
import {
    NavbarBrand,
    Container
} from 'reactstrap'
export default class PleaseLogIn extends Component {
    render() {
        return (
            <div>
                <Container className="pleaseLogIn">
                    <NavbarBrand href="/" className="left"> BoatApp </NavbarBrand>
                    <hr />
                </Container>
            </div>
        )
    }
}
