import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/actions/authActions'
import { clearErrors } from '../redux/actions/errorActions'

class LoginModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle()
            }
        }
    }

    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const user = {
            email,
            password
        }
        this.props.login(user);
    };

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Giriş Yap
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}> Giriş Yap </ModalHeader>
                    <ModalBody>
                        {this.state.msg ?
                            <Alert color="danger"> {this.state.msg} </Alert> : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="email">E-mail:</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="e-mail adresinizi giriniz"
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Label for="password">Şifre:</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="şifrenizi giriniz"
                                    onChange={this.onChange}
                                />
                                <Button className="boBtn" color="dark" style={{ marginTop: '2rem' }} block>
                                    Giriş Yap
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);