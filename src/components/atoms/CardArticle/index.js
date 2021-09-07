import React, { Component } from 'react';

class CardArticle extends Component{
  
    render(){
        return(
            <div className="card-feedback" key={this.props.id}>
                <img src={this.props.data.urlToImage} alt="img-feedback"/>
                <p>{this.props.data.content}</p>
            </div>
        )
    }
}

export default CardArticle;