import React from 'react';

import GalleryPageHeader from './GalleryPageHeader';
import GalleryPageBody from './GalleryPageBody';
import HomePageFooter from '../Home_Page/HomePageFooter';
import './../../assets/css/main-style.css';


export default class GalleryPage extends React.Component {
    render() {

        return (
            <div>
                <GalleryPageHeader />
                <GalleryPageBody />
                <HomePageFooter />
            </div>
        );
    }
}