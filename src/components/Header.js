import vikingsLogo from '../assets/vikingsLogo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FcSearch} from 'react-icons/fc';

import './Header.css'

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="holderLogo">
                <img className="logo" src={vikingsLogo} alt="Logo" />
            </div>
            <div className="holderTitle">
                <h1>BERSERK SHOP .</h1>
            <div className="holderSearch">
                  
                <div className="searchBox"><GiHamburgerMenu className="holderBurger" />Catégories</div>  
                <div className="searchBox"><FcSearch/> <input className="holderZoom" type="text" name="text" class="search" placeholder="Recherchez ici!"/></div>
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