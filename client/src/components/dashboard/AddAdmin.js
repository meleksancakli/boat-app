import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { register } from '../redux/actions/authActions'
import { clearErrors } from '../redux/actions/errorActions'

class AddAdmin extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      surname: '',
      email: '',
      password: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeSurname(e) {
    this.setState({
      surname: e.target.value
    })
  }
  onChangeMail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password
    }
    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
    window.location = '/dashboard';
  }
  render() {
    return (
      <div className="addAdmin">

        <Form className="form" onSubmit={this.onSubmit}>
          <h5> Admin Ekle</h5>
          <br />
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">İsim </Label>
                <Input type="text"
                  required
                  name="name"
                  id="name"
                  placeholder=""
                  value={this.state.name}
                  onChange={this.onChangeName} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="surname">Soyisim </Label>
                <Input type="text"
                  required
                  name="surname"
                  id="surname"
                  placeholder=""
                  value={this.state.surname}
                  onChange={this.onChangeSurname} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="email">E-mail</Label>
                <Input type="text"
                  required
                  name="email"
                  id="email"
                  placeholder=""
                  value={this.state.email}
                  onChange={this.onChangeMail} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Şifre</Label>
                <Input type="password"
                  required
                  name="password"
                  id="password"
                  placeholder=""
                  value={this.state.password}
                  onChange={this.onChangePassword} />
              </FormGroup>
            </Col>
          </Row>
          <Button className="formBtn">Ekle</Button> <br /> <br />
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default connect(mapStateToProps, { register, clearErrors })(AddAdmin);

