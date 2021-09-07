import React, { Component } from 'react';
import Button from '../Button';

class CardTopHeadline extends Component{
   
    render(){
        return(
            <div className="card-wrapper-donasi">
                <div className="img-thumbnail">
                    <img src={this.props.data.urlToImage} alt="img-card"/>
                </div>
                <div className="card-description">
                    {this.props.data.title}
                    <p>{this.props.data.description},<br></br> 
                        <Button isEksternal type="link" href={"/donasi/3nsfdknenr4r24324"}>Selengkapnya</Button>
                    </p>
                </div>
            </div>
        )
    }
}

export default CardTopHeadline;