import React from 'react';

import HomePageHeader from './HomePageHeader';
import HomePageBody from './HomePageBody';
import HomePageFooter from './HomePageFooter';

import './../../assets/css/main-style.css';


export default class HomePage extends React.Component {
    render() {

        return (
            <div>
                <HomePageHeader />
                <HomePageBody />
                <HomePageFooter />
                
            </div>
        );
    }
}