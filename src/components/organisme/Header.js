import React from 'react'
import Button from '../atoms/Button';
import IconText from '../atoms/IconText';

export default function Header(props){

    const getNavLinkClass = (path) =>  {
        return props.location.pathname === path ? " active":"";
    }

    return(
        <header>
            <div className="container">
                <nav className="navbar navbar-bg-primary">
                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <IconText/>
                            <li>
                            <Button className="nav-link" type="link" href="/kontak">
                                Account
                            </Button>
                            </li>
                            <li>
                            <Button className="nav-link" type="link" href="/kontak">
                                Hubungi Kami
                            </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/bantuan")}`}>
                            <Button className="nav-link" type="link" href="/bantuan">
                                Bantuan
                            </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/artikel")}`}>
                            <Button className="nav-link" type="link" href="/artikel">
                                Artikel
                            </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/aktivitas")}`}>
                            <Button className="nav-link" type="link" href="/aktivitas">
                                Aktivitas
                            </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                            <Button className="nav-link" isMenu type="link" href="/">
                                Home
                            </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}