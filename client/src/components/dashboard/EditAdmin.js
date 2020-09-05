import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';


export default class EditAdmin extends Component {
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
      password: '',
      users: []
    }
  }

  refresh = () => {
    window.location = '/dashboard';
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          surname: response.data.surname,
          email: response.data.email,
          password: response.data.password
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.name),
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

    axios.post('http://localhost:5000/users/update/' + this.props.match.params.id, user)
      .then(res => console.log(res.data));

    window.location = '/dashboard';
  }

  render() {
    return (
      <div className="editAdmin">
        <form className="editForm" onSubmit={this.onSubmit}>
          <h6>Düzenle</h6>
          <div className="form-group">
            <label>Ad: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName} />
            {/* {
                this.state.users.map(function (user) {
                  return <option
                    key={user}
                    value={user}>{user}
                  </option>;
                })
              }
            </select> */}
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
              onChange={this.onChangeMail}
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