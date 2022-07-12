import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar"> 
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={ closeMobileMenu }>
                        The Redmonds
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/details" className='nav-links' onClick={closeMobileMenu}>
                                Details
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Button buttonStyle='btn--outline' className='nav-links-mobile' onClick={closeMobileMenu}>RSVP</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
