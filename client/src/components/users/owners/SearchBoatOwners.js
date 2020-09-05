import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditBoatOwners from './EditBoatOwners'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { iosSearchStrong } from 'react-icons-kit/ionicons/iosSearchStrong'

export default class SearchBoatOwners extends Component {
    state = {
        filter: "",
        boatowners: []
    };

    componentDidMount() {
        axios.get('http://localhost:5000/boatowners/')
            .then(response => {
                this.setState({ boatowners: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    deleteOwner(id) {
        axios.delete('http://localhost:5000/boatowners/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            boatowners: this.state.boatowners.filter(el => el._id !== id)
        })
    }
    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { filter, boatowners } = this.state;
        const lowercasedFilter = filter.toString().toLowerCase();
        const filteredData = boatowners.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div className="listBoatOwners">
                <Router>
                    <Form className="form">
                        <h4> Tekne Sahipleri</h4>
                        <br />
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="usersearch"> <Icon icon={iosSearchStrong} /> Tekne Sahibi Ara</Label>
                                    <Input type="text"
                                        value={filter}
                                        onChange={this.handleChange}
                                        name="usersearch"
                                        id="usersearch"
                                        placeholder="İsim, telefon ya da e-mail adresi giriniz" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <br />
                        {/*
                        <Button className="formBtn" >Ara</Button> <br /> <br /> */}
                    </Form> <br /> <br />
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
                                            <Link to={"/edit/" + item._id}>düzenle </Link>| <a href="#" onClick={() => { this.deleteOwner(item._id) }}>sil</a>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                    <Route path="/edit/:id" component={EditBoatOwners} />
                </Router>
            </div>
        )
    }
}
