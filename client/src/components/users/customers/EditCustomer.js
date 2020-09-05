import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

export default class EditCustomer extends Component {
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

  refresh = () => {
    window.location = '/customers/search';
  }

  componentDidMount() {
    axios.get('http://localhost:5000/customers/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          surname: response.data.surname,
          email: response.data.email,
          phone: response.data.phone
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/customers/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            customers: response.data.map(customer => customer.name),
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

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const newCustomer = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      phone: this.state.phone
    }

    console.log(newCustomer);

    axios.post('http://localhost:5000/customers/update/' + this.props.match.params.id, newCustomer)
      .then(res => console.log(res.data));

    window.location = '/customers/add';
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
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
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