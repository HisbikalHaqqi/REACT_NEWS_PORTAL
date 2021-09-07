import React, { Component } from 'react';
import ImageBanner from '../../assets/img/images/banner.jpg';
import Button from '../atoms/Button';

class SectionBanner extends Component{

    render(){
        return(
            <div className="section-banner">
                <div className="image-wrapper">
                    <img alt="img-banner" src={ImageBanner}></img>
                </div>
                <div className="banner-wrapper">
                    <h2>PORTAL BERITA</h2>
                    <h5>Dapatkan berita terbaru dan terupdate hanya di PORTAL BERITA DUNIA.COM</h5>
                    <center>
                            <Button 
                                className="btn btn-primary"
                                isEksternal
                                type="link">
                                    BACA SEKARANG
                            </Button>
                    </center>
                </div>
            </div>
        )
    }
}

export default SectionBanner;