import React, { useState, useEffect } from 'react';
import CardPopular from '../atoms/CardPopular';
import API from '../../services';

function SectionCardPopular() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        API.getPopular('covid').then((result) => {
            setPopular(result.articles) 
        });
        return () => {
        }
    }, []);

    return(
        <div className="section-card-post">
            
            <center><h2>Berita Terpopuler</h2></center>
            <div className="col">
                {
                    popular.map( (post,index) => {
                        return <CardPopular data={post} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default SectionCardPopular;