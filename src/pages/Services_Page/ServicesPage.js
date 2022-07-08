import React from 'react';

import ServicesPageHeader from './ServicesPageHeader';
import ServicesPageBody from './ServicesPageBody';
import ServicesPageFooter from './ServicesPageFooter';

import './../../assets/css/main-style.css';


export default class ServicesPage extends React.Component {
    render() {

        return (
            <div>
                <ServicesPageHeader />
                <ServicesPageBody />
                <ServicesPageFooter />
            </div>
        );
    }
}