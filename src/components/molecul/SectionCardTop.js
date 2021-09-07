import React, { Component } from 'react'
import CardTopHeadline from '../atoms/CardTopHeadline';
import API from '../../services';

class SectionCardTop extends Component{
    
    state = ({
        topHeadline:[],
    });

    getTopHeadline = () => {
        API.getTopHeadline('us','business').then((result) => {
            this.setState({
                topHeadline:result.articles
            })   
        })
    }

    componentDidMount(){
        this.getTopHeadline();
        
    }

    render(){
        return(
            <div className="section-donasi">
                <center><h3>Top Headline</h3></center>
                <div className="col col-md-3">
                {
                    this.state.topHeadline.map( (post,index) => {
                        return <CardTopHeadline data={post} key={index}/>
                    })
                }
                </div>
            </div> 
        )
    }
}

export default SectionCardTop;