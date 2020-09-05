import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RegisterModal from '../components/auth/RegisterModal'
import ProjectInfo from './ProjectInfo';

class WelcomeContainer extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                {isAuthenticated ? <ProjectInfo /> :
                    <Card>
                        <CardBody>
                            <CardImg className="welcomeContainer" top width="20%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4DmfmVewn6grwsrTlQLRSp_mLySGj_ADwgSX_rfQmZSK7tUe6&usqp=CAU" alt="Card image cap" />
                            <br />
                            <CardTitle>İçeriğe ulaşmak ve yönetebilmek için lütfen giriş yapın.</CardTitle>
                            <CardTitle>Projeyi ilk kez çalıştırıyorsan; <RegisterModal />
                            </CardTitle>
                        </CardBody>
                    </Card>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(WelcomeContainer);