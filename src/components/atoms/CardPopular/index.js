import React, { Component } from 'react';
import IconTime from '../../../assets/img/icon/access_time.png';

class CardPopular extends Component{

    render(){
        return(
            <div>
            <div className="card-donate-recent-wrapper">
                <div className="card-donate-recent">
                    <div className="card-recent-wrapper col col-md-2">
                        <div className="img-recent-donate col col-md-2"  >
                            <img src={this.props.data.urlToImage} alt="img-donate"/>
                        </div>
                        <div>
                            <h3>{this.props.data.title}</h3>
                            <p>{this.props.data.description}
                                <span>
                                    <img src={IconTime} alt="icon-time"/>
                                    {this.props.data.publishedAt}
                                </span>
                            </p>
                            <div className="badge-wrapper">
                                <p>Donasi:Rp. 5.000.000</p>
                            </div>
                        </div>
                    </div>
                </div>
               <p className="load-link">Selengkapnya</p>
            </div>
            </div>
        )
    }
}

export default CardPopular;