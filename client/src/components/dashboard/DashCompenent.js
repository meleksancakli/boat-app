import React, { Component } from 'react'
import AddAdmin from './AddAdmin'
import ListAdmin from './ListAdmin'

export default class DashComponent extends Component {
    render() {
        return (
            <div className="Dashboard" >
                <AddAdmin />
                <ListAdmin />
            </div>
        )
    }
}
