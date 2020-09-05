import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

export default class EditBoatOwners extends Component {
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

  refresh = () => {
    window.location = '/customers/boatowners';
  }

  componentDidMount() {
    axios.get('http://localhost:5000/boatowners/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          surname: response.data.surname,
          email: response.data.email,
          tcno: response.data.tcno,
          phone: response.data.phone,
          location: response.data.location
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/boatowners/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            boatowners: response.data.map(boatowner => boatowner.name),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

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

    const newBoatOwner = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      tcno: this.state.tcno,
      phone: this.state.phone,
      location: this.state.location,
    }

    console.log(newBoatOwner);

    axios.post('http://localhost:5000/boatowners/update/' + this.props.match.params.id, newBoatOwner)
      .then(res => console.log(res.data));

    window.location = '/customers/boatowners';
  }

  render() {
    return (
      <div className="editBoat">
        <form className="editForm" onSubmit={this.onSubmit}>
          <h6>Düzenle</h6>
          <div className="form-group">
            <label>Ad: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName} />
          </div>
          <div className="form-group">
            <label>Soyad: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.surname}
              onChange={this.onChangeSurname}
            />
          </div>
          <div className="form-group">
            <label>E-mail: </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>TCKN: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.tcno}
              onChange={this.onChangeTCKNN}
            />
          </div>
          <div className="form-group">
            <label>Telefon: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </div>
          <div className="form-group">
            <label>Lokasyon: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </div>

          <div className="form-group">
            <Button className="updateBtn" >
              Güncelle </Button>
            <Button onClick={this.refresh} className="cancelBtn" >
              İptal </Button>
          </div>
        </form>
      </div>
    )
  }
}