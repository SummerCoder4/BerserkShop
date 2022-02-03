import vikingsLogo from '../assets/vikingsLogo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';

import './Header.css'
import react from "react";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="holderLogo">
                <img className="logo" src={vikingsLogo} alt="Logo" />
            </div>
            <div className="holderTitle">
                <h1>BERSERK SHOP .</h1>
            <div className="holderSearch">
                <div className="searchBox" id='searchFirstBox'>
                    <GiHamburgerMenu className="holderBurger" />
                    <p>Catégories</p>
                    <AiOutlineArrowDown />
                </div>
                <div className="searchBox">
                    <AiOutlineSearch />
                    <input id="inputSearch" type="text" name="text" class="search" placeholder="Recherchez ici!"/>
                </div>
                <div id='searchButton'>Rechercher ()</div>
            </div>
            </div>
            <div className="firstButton">
                <div className="firstButtonStyle">Poster son annonce</div>
            </div> 
                 
        </div>
    )
}

export default Header