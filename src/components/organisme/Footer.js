import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-wrapper ">
                    <div className="col col-md-2">
                        <div className="footer-identity">
                            <h3>PORTAL BERITA.COM</h3>
                            <p>
                                APL Tower Lantai 37 
                                <br></br>Jl. Letjen S. Parman Kav. 28 Jakarta 11470
                               <br></br> Telp: +62 21 29345 777 / Fax: +62 21 29345 700
                                <br></br>Email: contact@mii.co.id
                            </p>
                        </div>
                        <div className="footer-menu">
                            <ul className="footer-link  col col-md-4">
                                <li className="footer-link-menu"><a href="/" className="footer-link">Home</a></li>
                                <li className="footer-link-menu"><a href="/" className="footer-link">Aktivitas</a></li>
                                <li className="footer-link-menu"><a href="/" className="footer-link">Artikel</a></li>   
                                <li className="footer-link-menu"><a href="/" className="footer-link">Hubungi Kami</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>© 2018 PT Mitra Integrasi Informatika. All Rights Reserved.</p>
                </div>
                
            </div>
        )
    }
}
export default Footer;