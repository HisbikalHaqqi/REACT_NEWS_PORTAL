import React, { Component, Fragment } from 'react'
import Footer from '../../../components/organisme/Footer';
import Header from '../../../components/organisme/Header';
import SectionBanner from '../../../components/molecul/SectionBanner';
import SectionCardTop from '../../../components/molecul/SectionCardTop';
import SectionCardPopular from '../../../components/molecul/SectionCardPopular';
import SectionCardArticle from '../../../components/molecul/SectionCardArticle';

class Home extends Component{
    
    render(){
        return(
            <Fragment>
                <Header {...this.props}/>
                <SectionBanner/>
                <SectionCardTop/>
                <SectionCardPopular/>
                <SectionCardArticle/>
                <Footer/>
            </Fragment>
        )
    }
}

export default Home;