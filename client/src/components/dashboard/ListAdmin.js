import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Admins = props => (
  <tr>
    <td>{props.user.name} {props.user.surname} </td>
    <td>{props.user.email}</td>
    <td>
      <Link to={"/edit/" + props.user._id}>düzenle</Link>
    </td>
  </tr>
)

export default class ListAdmin extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this)

    this.state = { users: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <Admins user={currentuser}
        deleteUser={this.deleteUser}
        key={currentuser._id} />;
    })
  }

  render() {
    return (
      <div className="listAdmin">
        <h5> &nbsp;Sistemde Kayıtlı Adminler:</h5>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Ad-Soyad</th>
              <th>E-mail</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
            {this.userList()}
          </tbody>
        </table>
      </div>
    )
  }
}