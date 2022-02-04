import vikingsLogo from '../assets/vikingsLogo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FcSearch} from 'react-icons/fc';
import { Link } from "react-router-dom"
import './Header.css'

const Header = ({ data, handleSearch }) => {
   
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
                    <div className="searchBox" id='searchFirstBox'>
                        <GiHamburgerMenu className="holderBurger" />
                        <p>Catégories</p>
                        <AiOutlineArrowDown />
                    </div>
                    <div className="searchBox">
                        <AiOutlineSearch />
                        <input 
                        id="inputSearch" 
                        type="text" 
                        name="text" 
                        class="search" 
                        placeholder="Recherchez ici!" 
                        onChange={handleSearch}/>
                    </div>
                    <div id='searchButton'>
                        Rechercher ({data.length})
                    </div>
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