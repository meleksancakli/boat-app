import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class EditBoat extends Component {
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

  refresh = () => {
    window.location = '/boats/search';
  }

  componentDidMount() {
    axios.get('http://localhost:5000/boats/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          boatno: response.data.boatno,
          boatname: response.data.boatname,
          owner: response.data.owner,
          boattype: response.data.boattype,
          location: response.data.location,
          boatbrand: response.data.boatbrand,
          boatmodal: response.data.boatmodal
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/boats/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            boats: response.data.map(boat => boat.boatname),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
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

    const newboat = {
      boatno: this.state.boatno,
      boatname: this.state.boatname,
      owner: this.state.owner,
      location: this.state.location,
      boattype: this.state.boattype,
      boatbrand: this.state.boatbrand,
      boatmodal: this.state.boatmodal
    }

    console.log(newboat);

    axios.post('http://localhost:5000/boats/update/' + this.props.match.params.id, newboat)
      .then(res => console.log(res.data));

    window.location = '/boats/search';
  }

  render() {
    return (
      <div className="editBoat">
        <Form id="editBoardForm" className="editForm" onSubmit={this.onSubmit}>
          <br />
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="boatno">Tekne Numarası</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.boatno}
                  onChange={this.onChangeBoatNo} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="boattype">Tekne Adı</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.boatname}
                  onChange={this.onChangeBoatName} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="boattype">Tekne Sahibi</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.owner}
                  onChange={this.onChangeOwner} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="boattype">Tekne Türü</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.boattype}
                  onChange={this.onChangeBoatType} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="boatno">Ülke/Lokasyon</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.location}
                  onChange={this.onChangeLocation} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="boattype">Marka</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.boatbrand}
                  onChange={this.onChangeBoatBrand} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="boattype">Model</Label>
                <Input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.boatmodal}
                  onChange={this.onChangeBoatModal} />
              </FormGroup>
            </Col>
          </Row>
          <br /><br />

          <div className="form-group">
            <Button className="updateBtn" >
              Güncelle </Button>
            <Button onClick={this.refresh} className="cancelBtn" >
              İptal </Button>
          </div>
        </Form>
      </div>
    )
  }
}