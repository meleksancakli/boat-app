import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Menu from './Menu'

class Control extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    state = {
        modal: false,
        name: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        };

        this.props.addItem(newItem);
        this.toggle();
    };

    render() {
        return (
            <div>
                {this.props.isAuthenticated ?
                    <Menu />
                    :
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Control);