import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class AddBoat extends Component {
  constructor(props) {
    super(props);
    this.onChangeBoatNo = this.onChangeBoatNo.bind(this);
    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeBoatType = this.onChangeBoatType.bind(this);
    this.onChangeBoatName = this.onChangeBoatName.bind(this);
    this.onChangeBoatBrand = this.onChangeBoatBrand.bind(this);
    this.onChangeBoatModal = this.onChangeBoatModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      boatno: '',
      boatname: '',
      owner: '',
      location: '',
      boattype: '',
      boatbrand: '',
      boatmodal: '',
      boats: []
    }
  }
  onChangeBoatName(e) {
    this.setState({
      boatname: e.target.value
    })
  }

  onChangeBoatNo(e) {
    this.setState({
      boatno: e.target.value
    })
  }

  onChangeOwner(e) {
    this.setState({
      owner: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onChangeBoatType(e) {
    this.setState({
      boattype: e.target.value
    })
  }

  onChangeBoatBrand(e) {
    this.setState({
      boatbrand: e.target.value
    })
  }

  onChangeBoatModal(e) {
    this.setState({
      boatmodal: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const boats = {
      boatname: this.state.boatname,
      boatno: this.state.boatno,
      owner: this.state.owner,
      location: this.state.location,
      boattype: this.state.boattype,
      boatbrand: this.state.boatbrand,
      boatmodal: this.state.boatmodal
    }
    console.log(boats);

    axios.post('http://localhost:5000/boats/add', boats)
      .then(res => console.log(res.data));
    window.location = '/boats/search';
  }

  render() {
    return (
      <div className="boatsearch">
        <Form className="form" onSubmit={this.onSubmit}>
          <h4> Tekne Ekle</h4>
          <br />
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="boatowner">Tekne Sahibi</Label>
                <Input type="text"
                  required
                  name="boatowner"
                  id="boatowner"
                  placeholder=""
                  value={this.state.owner}
                  onChange={this.onChangeOwner} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="boatname">Tekne Adı</Label>
                <Input type="text"
                  required
                  name="boatname"
                  id="boatname"
                  placeholder=""
                  value={this.state.boatname}
                  onChange={this.onChangeBoatName} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="boattype">Tekne Türü</Label>
                <Input type="text"
                  required
                  name="boattype"
                  id="boattype"
                  placeholder=""
                  value={this.state.boattype}
                  onChange={this.onChangeBoatType} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="boatno">Tekne Numarası</Label>
                <Input type="text"
                  required
                  name="boatno"
                  id="boatno"
                  placeholder=""
                  value={this.state.boatno}
                  onChange={this.onChangeBoatNo} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="location">Ülke/Lokasyon</Label>
                <Input type="text"
                  required
                  name="location"
                  id="location"
                  placeholder=""
                  value={this.state.location}
                  onChange={this.onChangeLocation} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="boatbrand">Tekne Markası</Label>
                <Input type="text"
                  required
                  name="boatbrand"
                  id="boatbrand"
                  placeholder=""
                  value={this.state.boatbrand}
                  onChange={this.onChangeBoatBrand} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="boatmodal">Tekne Model</Label>
                <Input type="text"
                  required
                  name="boatmodal"
                  id="boatmodal"
                  placeholder=""
                  value={this.state.boatmodal}
                  onChange={this.onChangeBoatModal} />
              </FormGroup>
            </Col>
          </Row><br />
          <Button className="formBtn" >Tekne Ekle</Button> <br /> <br />
        </Form><br />
      </div>

    )
  }
}
const mapStateToProps = state => ({
  boat: state.boat,
});

export default connect(mapStateToProps)(AddBoat);