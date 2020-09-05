import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import EditBoat from './EditBoat'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { iosSearchStrong } from 'react-icons-kit/ionicons/iosSearchStrong'

export default class SearchBoat extends Component {
    state = {
        filter: "",
        boats: [],
    };

    componentDidMount() {
        axios.get('http://localhost:5000/boats/')
            .then(response => {
                this.setState({ boats: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    deleteBoat(id) {
        axios.delete('http://localhost:5000/boats/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            boats: this.state.boats.filter(el => el._id !== id)
        })
    }

    handleChange = event => {
        this.setState({
            filter: event.target.value
        });
    };

    render() {
        const { filter, boats } = this.state;
        const lowercasedFilter = filter.toString().toLowerCase();
        const filteredData = boats.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div className="userSearch">
                <Router>
                    <Form className="form">
                        <h4> Tekne Arama </h4>
                        <br />
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="usersearch"> <Icon icon={iosSearchStrong} /> Tekne Ara</Label>
                                    <Input
                                        value={filter}
                                        onChange={this.handleChange}
                                        type="text"
                                        name="usersearch"
                                        id="usersearch"
                                        placeholder="Tekne numarası, tekne adı, tekne sahibi ya da lokasyon giriniz." />
                                </FormGroup>
                            </Col>
                        </Row>
                        <br /><br />
                    </Form> <br /><br />
                    <div>
                        <table className="table" >
                            {filteredData.length === 0 ?
                                <thead>
                                    <tr>
                                        <th className="noResult">kayıt bulunamadı.</th>
                                    </tr>
                                </thead> :
                                <thead className="thead-light">
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
                                <tbody style={{ background: 'white' }} key={item.boatno} >
                                    <tr>
                                        <td>{item.boatno}</td>
                                        <td>{item.boatname}</td>
                                        <td>{item.owner}</td>
                                        <td>{item.boattype}</td>
                                        <td>{item.location}</td>
                                        <td>
                                            <Link to={"/edit/" + item._id}>görüntüle </Link>| <a href="#" onClick={() => { this.deleteBoat(item._id) }}>sil</a>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                    <Route path="/edit/:id" component={EditBoat} />
                </Router>
            </div>
        )
    }
}
