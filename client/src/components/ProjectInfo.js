import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle
} from 'reactstrap';

class WelcomeContainer extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Merhaba!</CardTitle>
                        <CardTitle>Bu proje, Node.js ve Express'i de kullanarak, React ve Redux yapısını öğrenmek ve bilgi birikimini arttırmak amacıyla geliştirildi. </CardTitle>
                        <b><CardTitle >Proje Nasıl İşliyor?</CardTitle></b>
                        <CardTitle>Dashboard (Admin İşlemleri), Tekne İşlemleri ve Kullanıcı İşlemleri olmak üzere 3 temel sayfa/component bulunuyor.</CardTitle>
                        <CardTitle>Admin: Sisteme giriş yapabilen, yeni admin ekleyebilen; kullanıcı, tekne ve tekne sahiplerini görüntüleyip düzenleyebilen, silebilen ya da güncelleyebilen kişi. Buradaki authorization işlemleri için Json Web Token kullanılıyor.</CardTitle>
                        <b><CardTitle>Kullanılan Teknolojiler/Kütüphaneler ve Yapılar:</CardTitle></b>
                        <CardTitle>ReactJS, React-Redux, Redux, Redux-Thunk, Node.js, ExpressJS, MongoDB, Json Web Token(TWT), ReactStrap, Axios ve tabi ki JavaScript. </CardTitle>
                        <CardTitle>Güncel repoya buradan ulaşabilirsin: <a href="https://github.com/meleksancakli/boatapp">Repo</a> </CardTitle>


                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default WelcomeContainer;