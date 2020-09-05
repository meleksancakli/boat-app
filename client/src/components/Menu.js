import React, { Component } from 'react'
import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { Icon } from 'react-icons-kit'
import { androidBoat } from 'react-icons-kit/ionicons/androidBoat'
import { iosPeople } from 'react-icons-kit/ionicons/iosPeople'
import { iosSettingsStrong } from 'react-icons-kit/ionicons/iosSettingsStrong'

class Menu extends Component {
    render() {
        return (
            <div>
                <Nav vertical >
                    <NavbarBrand href="/" className="left"> BoatApp </NavbarBrand>
                    <NavItem className="menuitem">
                        <NavLink style={{ color: '#333436' }} href="/dashboard">
                            <Icon style={{ color: '#979A9E' }} size={18} icon={iosSettingsStrong} />  Dashboard</NavLink>
                    </NavItem>
                    <NavItem className="menuitem">
                        <NavLink style={{ color: '#333436' }} href="/boats/search">
                            <Icon style={{ color: '#979A9E' }} size={20} icon={androidBoat} /> Tekne İşlemleri</NavLink>
                    </NavItem>
                    <NavItem className="menuitem">
                        <NavLink style={{ color: '#333436' }} href="/customers/search">
                            <Icon style={{ color: '#979A9E' }} size={22} icon={iosPeople} /> Kullanıcı İşlemleri</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Menu;
