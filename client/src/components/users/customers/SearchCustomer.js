import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import EditCustomer from './EditCustomer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { iosSearchStrong } from 'react-icons-kit/ionicons/iosSearchStrong'

export default class SearchCustomer extends Component {
    state = {
        filter: "",
        customers: [],
    };

    componentDidMount() {
        axios.get('http://localhost:5000/customers/')
            .then(response => {
                this.setState({ customers: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    deleteCustomer(id) {
        axios.delete('http://localhost:5000/customers/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            customers: this.state.customers.filter(el => el._id !== id)
        })
    }

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { filter, customers } = this.state;
        const lowercasedFilter = filter.toString().toLowerCase();
        const filteredData = customers.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div className="userSearch">
                <Router>
                    <Form className="form">
                        <h4> Kullanıcılar </h4>
                        <br />
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="usersearch"> <Icon icon={iosSearchStrong} /> Kullanıcı Ara</Label>
                                    <Input
                                        value={filter}
                                        onChange={this.handleChange}
                                        type="text"
                                        name="usersearch"
                                        id="usersearch"
                                        placeholder="İsim, telefon ya da e-mail adresi giriniz" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <br />
                        {/* <Button className="formBtn" >Ara</Button> <br /><br /> */}
                    </Form> <br /><br />
                    <div>
                        <table className="table" >
                            {filteredData.length === 0 ?
                                <thead>
                                    <tr>
                                        <th className="noResult">kayıt bulunamadı.</th>
                                    </tr>
                                </thead> : <thead className="thead-light">
                                    <tr>
                                        <th>Tekne No</th>
                                        <th>Tekne Adı</th>
                                        <th>Tekne Sahibi</th>
                                        <th>Tekne Tipi</th>
                                        <th>Lokasyon</th>
                                        <th></th>
                                    </tr>
                                </thead>
                            }
                            {filteredData.map(item => (
                                <tbody style={{ background: 'white' }} key={item.email}>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.surname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <Link to={"/edit/" + item._id}>düzenle </Link>| <a href="#" onClick={() => { this.deleteCustomer(item._id) }}>sil</a>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                    <Route path="/edit/:id" component={EditCustomer} />
                </Router>
            </div>
        )
    }
}
