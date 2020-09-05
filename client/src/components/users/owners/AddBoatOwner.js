import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddBoatOwner extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTCKNN = this.onChangeTCKNN.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      surname: '',
      email: '',
      tcno: '',
      phone: '',
      location: '',
      boatowners: []
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
  onChangeTCKNN(e) {
    this.setState({
      tcno: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const boatowners = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      tcno: this.state.tcno,
      phone: this.state.phone,
      location: this.state.location,
    }
    console.log(boatowners);

    axios.post('http://localhost:5000/boatowners/add', boatowners)
      .then(res => console.log(res.data));
    window.location = '/customers/boatowners/add';
  }
  render() {
    return (
      <div className="addBoatOwner">
        <Form className="form" onSubmit={this.onSubmit}>
          <h4> Tekne Sahibi Ekle</h4>
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
                <Label for="tckn">TCKN</Label>
                <Input type="text"
                  name="tcknn"
                  required
                  id="tckn"
                  placeholder=""
                  value={this.state.tcno}
                  onChange={this.onChangeTCKNN} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Telefon Numarası</Label>
                <Input type="text"
                  name="phone"
                  required
                  id="tckn"
                  placeholder=""
                  value={this.state.phone}
                  onChange={this.onChangePhone} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="location">Ülke/Lokasyon</Label>
                <Input type="text"
                  name="location"
                  required
                  id="location"
                  placeholder=""
                  value={this.state.location}
                  onChange={this.onChangeLocation} />
              </FormGroup>
            </Col>
          </Row>
          <Button className="formBtn">Ekle</Button><br /><br />
        </Form> <br />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  customer: state.customer,
});

export default connect(mapStateToProps)(AddBoatOwner);
