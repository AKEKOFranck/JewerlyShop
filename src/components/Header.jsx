import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { TiHomeOutline } from "react-icons/ti";
import { IoDiamondOutline } from "react-icons/io5";
import { GiCard10Diamonds } from "react-icons/gi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

 export default function Header() {
      const [isopen, setIsopen] = useState(false);
     const toggleMenu = () => {
        setIsopen(!isopen)
    };
    return(
        <header>
            <button className='nav_bt' onClick={toggleMenu}>
                <MdOutlineMenu className='nav_bt_ico' />
            </button>
          <nav className={isopen ? 'open' : ''}>
              <Link to="/" className='nav_link'> 
            <TiHomeOutline className='nav_ico' />
             <p className='nav_text'>Accueil</p>
            </Link>

            <Link to="/pn" className='nav_link'> 
            <IoDiamondOutline className='nav_ico' />
             <p className='nav_text'> Bijoux </p>
            </Link>

            <Link to="/" className='nav_link'> 
            <GiCard10Diamonds className='nav_ico' />
             <p className='nav_text'> Perso </p>
            </Link>

            <Link to="/" className='nav_link'> 
            <FaRegQuestionCircle className='nav_ico' />
            <p className='nav_text'> Infos </p>
            </Link>
          </nav>
        </header>
    )
 }