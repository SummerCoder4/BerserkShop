import vikingsLogo from '../assets/vikingsLogo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
<<<<<<< HEAD
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
=======
import { FcSearch} from 'react-icons/fc';
import { Link } from "react-router-dom"
>>>>>>> d9ae4d36f20b0a1a967e3729c672e40e314013df

import './Header.css'
import react from "react";

const Header = () => {
    return (
        <div className="headerContainer">
            <Link to='/'>
            <div className="holderLogo">
                <img className="logo" src={vikingsLogo} alt="Logo" />
            </div>
            </Link>
            <div className="holderTitle">
                <h1>BERSERK SHOP .</h1>
            <div className="holderSearch">
<<<<<<< HEAD
                <div className="searchBox" id='searchFirstBox'>
                    <GiHamburgerMenu className="holderBurger" />
                    <p>Catégories</p>
                    <AiOutlineArrowDown />
                </div>
                <div className="searchBox">
                    <AiOutlineSearch />
                    <input id="inputSearch" type="text" name="text" class="search" placeholder="Recherchez ici!"/>
                </div>
=======
                <div className="searchBox"><GiHamburgerMenu className="holderBurger" />Catégories</div>  
                <div className="searchBox"><FcSearch/> <input className="holderZoom" type="text" name="text" class="search" placeholder="Recherchez ici!"/></div>
>>>>>>> d9ae4d36f20b0a1a967e3729c672e40e314013df
                <div id='searchButton'>Rechercher ()</div>
            </div>
            </div>
            
            <div className="firstButton">
             <Link to='/Poster'>
                <div className="firstButtonStyle">Poster son annonce</div>
             </Link>
                
            </div> 
                 
        </div>
    )
}

export default Header