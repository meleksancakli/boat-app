import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddCustomer extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      customers: []
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
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customers = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      phone: this.state.phone
    }
    console.log(customers);

    axios.post('http://localhost:5000/customers/add', customers)
      .then(res => console.log(res.data));
    window.location = '/customers/add';
  }
  render() {
    return (
      <div className="addUser">
        <Form className="form" onSubmit={this.onSubmit}>
          <h4> Kullanıcı Ekle</h4>
          <br />
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">İsim </Label>
                <Input type="text"
                  name="name"
                  required
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
                  name="surname"
                  required
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
                  name="email"
                  required
                  id="email"
                  placeholder=""
                  value={this.state.email}
                  onChange={this.onChangeEmail} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Telefon Numarası</Label>
                <Input type="text"
                  name="phone"
                  required
                  id="phone"
                  placeholder=""
                  value={this.state.phone}
                  onChange={this.onChangePhone} />
              </FormGroup>
            </Col>
          </Row>
          <Button className="formBtn">Ekle</Button> <br /> <br />
        </Form> <br />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  customer: state.customer,
});

export default connect(mapStateToProps)(AddCustomer);
