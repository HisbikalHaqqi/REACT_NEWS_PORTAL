import React, { Fragment, useState, useEffect } from 'react';
import CardArticle from '../atoms/CardArticle';
import API from '../../services';

function SectionCardArticle(){

    const [article, setArticle] = useState([])

    useEffect(() => {
        API.getPopular('covid').then((result) => {
            setArticle(result.articles) 
        });
        return () => {
        }
    }, []);

    return(
        <div className="section-card-feedback">
            <Fragment>
            <center><h2>Artikel</h2></center>
                <div className="card-wrapper-feedback col col-md-4">
                {
                    article.map( (post,index) => {
                        return <CardArticle data={post} key={index}/>
                    })
                }
                </div>
            </Fragment>
        </div>
    )
}

export default SectionCardArticle;
